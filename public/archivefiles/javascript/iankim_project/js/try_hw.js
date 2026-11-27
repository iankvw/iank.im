// 엄격모드 선언
"use strict";

// 11week_hw/js/checklist.js 구조를 참고하되 try / catch / finally 예외처리를 적용한 체크리스트
let itemList = [];
let itemIds = [];
let checkedIds = new Set();
let nextId = 1;
let lastAddedIndex = -1;

/**
 * XSS 방지를 위한 HTML 이스케이프 함수
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/**
 * 상태/에러 메시지를 #message 요소에 표시하는 함수
 * @param {string} text
 * @param {"success"|"error"|"info"} type
 */
function showMessage(text, type) {
    const msgEl = document.querySelector("#message");
    if (!msgEl) return;
    msgEl.textContent = text;
    msgEl.className = "";
    if (text) {
        msgEl.classList.add(`msg-${type}`);
    }
}

/**
 * 입력창 흔들림(Shake) 시각 피드백
 */
function shakeInput(inputEl) {
    if (!inputEl) return;
    inputEl.classList.remove("input-shake");
    void inputEl.offsetWidth;
    inputEl.classList.add("input-shake");
}

/**
 * 현재 배열(#array)과 상단 준비물 개수 배지(#item-count-pill) 동기화
 */
function renderArray() {
    const arrayEl = document.querySelector("#array");
    const countPill = document.querySelector("#item-count-pill");
    if (arrayEl) {
        arrayEl.textContent = JSON.stringify(itemList);
    }
    if (countPill) {
        countPill.textContent = `🎒 준비물: ${itemList.length}개`;
    }
}

/**
 * 챙길 물건 목록(#list)을 화면에 렌더링
 */
function renderList() {
    const listEl = document.querySelector("#list");
    if (!listEl) return;

    if (itemList.length === 0) {
        listEl.innerHTML = `<li class="empty-list-hint">🎒 아직 등록된 준비물이 없습니다. 위 입력창에 여권, 보조배터리 등을 입력해 보세요!</li>`;
        return;
    }

    let html = "";
    for (let i = 0; i < itemList.length; i++) {
        const uid = itemIds[i];
        const isChecked = checkedIds.has(uid);
        const classes = ["checklist-item"];
        if (i === lastAddedIndex) classes.push("new-item");
        if (isChecked) classes.push("checked");

        html += `
            <li class="${classes.join(" ")}" data-uid="${uid}">
                <div class="item-left">
                    <span class="item-num">${String(i + 1).padStart(2, "0")}</span>
                    <span class="item-text">${escapeHtml(itemList[i])}</span>
                </div>
                <span class="actions">
                    <span class="check" data-uid="${uid}" role="button" tabindex="0" aria-pressed="${isChecked ? "true" : "false"}" aria-label="완료 표시">✓</span>
                    <span class="close" data-uid="${uid}" role="button" tabindex="0" aria-label="삭제">X</span>
                </span>
            </li>
        `;
    }

    listEl.innerHTML = html;
    lastAddedIndex = -1;

    listEl.querySelectorAll(".check").forEach((btn) => {
        btn.addEventListener("click", () => toggleCheck(Number(btn.dataset.uid), btn));
        btn.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCheck(Number(btn.dataset.uid), btn);
            }
        });
    });

    listEl.querySelectorAll(".close").forEach((btn) => {
        btn.addEventListener("click", () => removeItem(Number(btn.dataset.uid), btn));
        btn.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                removeItem(Number(btn.dataset.uid), btn);
            }
        });
    });
}

/**
 * try / catch / finally 문을 사용해 준비물을 검증하고 목록에 추가하는 함수
 * (try_hw.html의 button onclick="addItem()" 및 Enter 키에서 호출)
 */
function addItem() {
    const inputEl = document.querySelector("#item");
    const addBtn = document.querySelector("#add-btn");

    try {
        if (!inputEl) {
            throw new Error("준비물 입력창(#item)을 찾을 수 없습니다.");
        }

        const value = inputEl.value.trim();

        if (value === "") {
            throw new Error("준비물을 입력해 주세요! 빈 칸은 목록에 추가할 수 없습니다.");
        }
        if (value.length > 30) {
            throw new Error("준비물 이름은 30자 이하로 입력해 주세요!");
        }
        if (itemList.includes(value)) {
            throw new Error(`"${value}"은(는) 이미 목록에 등록된 준비물입니다!`);
        }

        itemList.push(value);
        itemIds.push(nextId++);
        lastAddedIndex = itemList.length - 1;
        inputEl.value = "";

        renderList();
        showMessage(`✅ "${value}"이(가) 황금 여행 가방에 추가되었습니다! (총 ${itemList.length}개)`, "success");

        const rect = (addBtn || inputEl).getBoundingClientRect();
        spawnJackpotBurst(rect.left + rect.width / 2, rect.top, 42);
    } catch (error) {
        showMessage(`⚠️ [예외 감지 · catch] ${error.message}`, "error");
        shakeInput(inputEl);
    } finally {
        renderArray();
        if (inputEl) {
            inputEl.focus();
        }
    }
}

/**
 * 준비물 완료(✓) 상태를 토글하는 함수 (try / catch 적용)
 */
function toggleCheck(uid, triggerEl) {
    try {
        const idx = itemIds.indexOf(uid);
        if (idx === -1) {
            throw new Error("상태를 변경할 준비물을 목록에서 찾을 수 없습니다.");
        }

        const itemName = itemList[idx];
        let nowChecked;
        if (checkedIds.has(uid)) {
            checkedIds.delete(uid);
            nowChecked = false;
            showMessage(`🔄 "${itemName}" 완료 표시를 해제했습니다.`, "info");
        } else {
            checkedIds.add(uid);
            nowChecked = true;
            showMessage(`✨ "${itemName}" 챙기기 완료!!`, "success");
            if (triggerEl) {
                const rect = triggerEl.getBoundingClientRect();
                spawnJackpotBurst(rect.left + rect.width / 2, rect.top, 24);
            }
        }

        renderList();
    } catch (error) {
        showMessage(`⚠️ [예외 감지 · catch] ${error.message}`, "error");
    }
}

/**
 * 목록에서 준비물을 삭제하는 함수 (try / catch 적용)
 */
function removeItem(uid, triggerEl) {
    try {
        const idx = itemIds.indexOf(uid);
        if (idx === -1) {
            throw new Error("삭제하려는 준비물이 이미 목록에 없습니다.");
        }

        const li = triggerEl ? triggerEl.closest("li") : null;
        if (li && li.classList.contains("removing")) {
            return;
        }

        const removedName = itemList[idx];
        const finalizeDelete = () => {
            const curIdx = itemIds.indexOf(uid);
            if (curIdx === -1) return;
            checkedIds.delete(uid);
            itemList.splice(curIdx, 1);
            itemIds.splice(curIdx, 1);
            renderList();
            renderArray();
            showMessage(`🗑️ "${removedName}"을(를) 목록에서 삭제했습니다.`, "info");
        };

        if (triggerEl) {
            const rect = triggerEl.getBoundingClientRect();
            spawnJackpotBurst(rect.left + rect.width / 2, rect.top, 20);
        }

        const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!li || reduceMotion) {
            finalizeDelete();
            return;
        }

        li.classList.add("removing");
        let done = false;
        const once = () => {
            if (done) return;
            done = true;
            finalizeDelete();
        };
        li.addEventListener("transitionend", once, { once: true });
        setTimeout(once, 250);
    } catch (error) {
        showMessage(`⚠️ [예외 감지 · catch] ${error.message}`, "error");
    }
}

/**
 * 전체 목록 비우기 (try / catch / finally 적용)
 */
function clearAllItems() {
    const inputEl = document.querySelector("#item");
    const clearBtn = document.querySelector("#clear-all-btn");

    try {
        if (itemList.length === 0) {
            throw new Error("비울 준비물이 없습니다! 먼저 준비물을 추가해 주세요.");
        }

        const prevCount = itemList.length;
        itemList = [];
        itemIds = [];
        checkedIds.clear();
        renderList();
        showMessage(`🧹 등록되어 있던 준비물 ${prevCount}개를 모두 비웠습니다.`, "info");

        if (clearBtn) {
            const rect = clearBtn.getBoundingClientRect();
            spawnJackpotBurst(rect.left + rect.width / 2, rect.bottom, 34);
        }
    } catch (error) {
        showMessage(`⚠️ [예외 감지 · catch] ${error.message}`, "error");
        shakeInput(inputEl);
    } finally {
        renderArray();
        if (inputEl) {
            inputEl.focus();
        }
    }
}

// 인라인 onclick="addItem()" 호출 지원
window.addItem = addItem;

// ==========================================================================
// 배경 별가루 캔버스 + 최상단(z-index: 1200) 폭발 버스트 캔버스 + 패럴랙스
// ==========================================================================
const bursts = [];
const shockwaves = [];

function spawnJackpotBurst(x, y, count = 36) {
    const fxCanvas = document.querySelector("#fx-burst-canvas");
    if (!fxCanvas) return;

    const colors = ["#ffd700", "#fff4a3", "#ff2bd6", "#00f2ff", "#39ff14", "#ff5500"];
    shockwaves.push({
        x,
        y,
        radius: 10,
        maxRadius: 165,
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)]
    });

    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 7.5 + 2.4;
        bursts.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 3.6,
            size: Math.random() * 7.5 + 4,
            life: 1,
            decay: Math.random() * 0.016 + 0.013,
            color: colors[i % colors.length],
            kind: i % 3
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderList();
    renderArray();

    const inputEl = document.querySelector("#item");
    if (inputEl) {
        inputEl.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                addItem();
            }
        });
    }

    const clearBtn = document.querySelector("#clear-all-btn");
    if (clearBtn) {
        clearBtn.addEventListener("click", clearAllItems);
    }

    const bgCanvas = document.querySelector("#bg-particles");
    const bgCtx = bgCanvas ? bgCanvas.getContext("2d") : null;
    const fxCanvas = document.querySelector("#fx-burst-canvas");
    const fxCtx = fxCanvas ? fxCanvas.getContext("2d") : null;
    const ambientStars = [];

    function resizeCanvases() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        if (bgCanvas) {
            bgCanvas.width = w;
            bgCanvas.height = h;
        }
        if (fxCanvas) {
            fxCanvas.width = w;
            fxCanvas.height = h;
        }
    }

    function initAmbientStars() {
        if (!bgCanvas) return;
        ambientStars.length = 0;
        const count = Math.min(48, Math.max(20, Math.floor(window.innerWidth / 30)));
        for (let i = 0; i < count; i++) {
            ambientStars.push({
                x: Math.random() * bgCanvas.width,
                y: Math.random() * bgCanvas.height,
                r: Math.random() * 2.4 + 1.1,
                speedY: -(Math.random() * 0.45 + 0.18),
                phase: Math.random() * Math.PI * 2,
                hue: i % 3 === 0 ? "#ffd700" : i % 3 === 1 ? "#00f2ff" : "#ff66d9"
            });
        }
    }

    function renderAllParticles() {
        if (bgCtx && bgCanvas) {
            bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
            for (const s of ambientStars) {
                s.y += s.speedY;
                s.phase += 0.05;
                if (s.y < -10) {
                    s.y = bgCanvas.height + 10;
                    s.x = Math.random() * bgCanvas.width;
                }
                bgCtx.globalAlpha = 0.35 + 0.55 * Math.abs(Math.sin(s.phase));
                bgCtx.fillStyle = s.hue;
                bgCtx.beginPath();
                bgCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                bgCtx.fill();
            }
            bgCtx.globalAlpha = 1;
        }

        if (fxCtx && fxCanvas) {
            fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);

            for (let i = shockwaves.length - 1; i >= 0; i--) {
                const sw = shockwaves[i];
                sw.radius += (sw.maxRadius - sw.radius) * 0.14;
                sw.life -= 0.04;
                if (sw.life <= 0) {
                    shockwaves.splice(i, 1);
                    continue;
                }
                fxCtx.globalAlpha = sw.life * 0.85;
                fxCtx.strokeStyle = sw.color;
                fxCtx.lineWidth = 4 * sw.life;
                fxCtx.beginPath();
                fxCtx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
                fxCtx.stroke();
            }

            for (let i = bursts.length - 1; i >= 0; i--) {
                const p = bursts[i];
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.24;
                p.life -= p.decay;
                if (p.life <= 0) {
                    bursts.splice(i, 1);
                    continue;
                }
                fxCtx.globalAlpha = Math.min(1, p.life * 1.2);
                fxCtx.fillStyle = p.color;
                if (p.kind === 0) {
                    fxCtx.beginPath();
                    fxCtx.ellipse(p.x, p.y, p.size, p.size * 0.72, p.life * 7, 0, Math.PI * 2);
                    fxCtx.fill();
                    fxCtx.strokeStyle = "#ffffff";
                    fxCtx.lineWidth = 1.4;
                    fxCtx.stroke();
                } else if (p.kind === 1) {
                    const r = p.size * 1.15;
                    fxCtx.beginPath();
                    fxCtx.moveTo(p.x, p.y - r);
                    fxCtx.lineTo(p.x + r * 0.3, p.y - r * 0.3);
                    fxCtx.lineTo(p.x + r, p.y);
                    fxCtx.lineTo(p.x + r * 0.3, p.y + r * 0.3);
                    fxCtx.lineTo(p.x, p.y + r);
                    fxCtx.lineTo(p.x - r * 0.3, p.y + r * 0.3);
                    fxCtx.lineTo(p.x - r, p.y);
                    fxCtx.lineTo(p.x - r * 0.3, p.y - r * 0.3);
                    fxCtx.closePath();
                    fxCtx.fill();
                } else {
                    fxCtx.save();
                    fxCtx.translate(p.x, p.y);
                    fxCtx.rotate(p.life * 10);
                    fxCtx.fillRect(-p.size * 0.65, -p.size * 0.35, p.size * 1.3, p.size * 0.7);
                    fxCtx.restore();
                }
            }
            fxCtx.globalAlpha = 1;
        }
        requestAnimationFrame(renderAllParticles);
    }

    resizeCanvases();
    initAmbientStars();
    window.addEventListener("resize", () => {
        resizeCanvases();
        initAmbientStars();
    });
    requestAnimationFrame(renderAllParticles);

    const parallaxEls = document.querySelectorAll("[data-parallax]");
    if (parallaxEls.length > 0 && window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener("pointermove", (event) => {
            const cx = (event.clientX / window.innerWidth - 0.5) * 2;
            const cy = (event.clientY / window.innerHeight - 0.5) * 2;
            parallaxEls.forEach((el) => {
                const factor = parseFloat(el.dataset.parallax || "0") * 220;
                el.style.translate = `${(cx * factor).toFixed(1)}px ${(cy * factor).toFixed(1)}px`;
            });
        }, { passive: true });
    }
});
