// 주차별 과제 목록 데이터
const assignments = [
    { name: "3주차_과제", url: "https://iank.im/archivefiles/javascript/0918/bargain.html" },
    { name: "4주차_tr", url: "./4week_tr.html" },
    { name: "5주차_If문과제", url: "./5week_if.html" },
    { name: "5주차_switch문과제", url: "./5week_switch.html" },
    { name: "6주차_for문과제", url: "https://iank.im/archivefiles/javascript/1016/6week_for_hw.html" },
    { name: "7주차_alert", url: "./7week_alert.html" },
    { name: "7주차_menu", url: "./7week_menu.html" },
    { name: "9주차_clock", url: "https://iank.im/archivefiles/javascript/9week_hw_st/clock.html" },
    { name: "9주차_slider", url: "https://iank.im/archivefiles/javascript/9week_hw_st/slider.html" },
    { name: "10주차_기념일계산", url: "./date_hw.html" },
    { name: "11주차_array", url: "https://iank.im/archivefiles/javascript/11week_hw/array_hw.html" },
    { name: "11주차_교재", url: "https://iank.im/archivefiles/javascript/11week_st/book6.html" },
    { name: "12주차_try_catch", url: "./try_hw.html" }
];

// 과제 개수 및 주차 문구 통합 설정 (과제 추가 시 여기만 수정하거나 null로 두면 자동 반영)
// - topCount: null이면 assignments 배열 개수를 자동 반영 (숫자 입력 시 해당 숫자로 고정)
// - weekRange: null이면 assignments의 최대 주차를 자동 계산해 "1~N주차" 생성 (문자열 입력 시 그대로 표시)
const ASSIGNMENT_CONFIG = {
    topCount: null,
    weekRange: null,
    startWeek: 1
};

/**
 * ASSIGNMENT_CONFIG 및 assignments 배열에서 TOP 개수와 주차 범위 문구를 계산합니다.
 * @returns {{ topCount: number, weekRange: string }}
 */
function resolveAssignmentMeta() {
    const topCount = typeof ASSIGNMENT_CONFIG.topCount === "number"
        ? ASSIGNMENT_CONFIG.topCount
        : assignments.length;

    let weekRange = typeof ASSIGNMENT_CONFIG.weekRange === "string" && ASSIGNMENT_CONFIG.weekRange.trim()
        ? ASSIGNMENT_CONFIG.weekRange.trim()
        : "";

    if (!weekRange) {
        let maxWeek = ASSIGNMENT_CONFIG.startWeek;
        assignments.forEach((item) => {
            const match = item.name.match(/(\d+)\s*주차/);
            if (match) {
                const wk = parseInt(match[1], 10);
                if (wk > maxWeek) maxWeek = wk;
            }
        });
        weekRange = `${ASSIGNMENT_CONFIG.startWeek}~${maxWeek}주차`;
    }

    return { topCount, weekRange };
}

const HOT_TAGS = ["HOT!", "A+!", "대박!", "필수!", "강추!", "NEW!", "인기!", "초강력!", "잭팟!", "777!", "완벽!", "최고!"];

/**
 * 0-255 사이의 난수(Random Number)를 생성하여 선명한 무작위 RGB 색상 코드를 반환하는 함수
 * @returns {string} rgb(r, g, b) 형식의 색상 문자열
 */
function randomColor() {
    let r = Math.floor(Math.random() * 176) + 80;
    let g = Math.floor(Math.random() * 176) + 80;
    let b = Math.floor(Math.random() * 176) + 80;
    return `rgb(${r},${g},${b})`;
}

document.addEventListener("DOMContentLoaded", () => {
    // 0. 과제 개수 및 주차 범위 문구 자동 바인딩
    const { topCount, weekRange } = resolveAssignmentMeta();
    const bindMap = {
        "top-banner": `★ 핵심 과제 하이라이트 TOP ${topCount} ★`,
        "week-free": `${weekRange} 전 과정 100% 무료 열람!`,
        "week-hype": `${weekRange} 체감 크기 역대급!!`,
        "top-card": `TOP ${topCount} 과제`
    };
    document.querySelectorAll("[data-assignment-bind]").forEach((el) => {
        const key = el.dataset.assignmentBind;
        if (bindMap[key]) {
            el.textContent = bindMap[key];
        }
    });

    // 1. 좌측 역동적 셰브론 웨이브 과제 목록 렌더링 (<template> 복제)
    const drawerList = document.querySelector(".drawer-list");
    const itemTemplate = document.querySelector("#drawer-item-template");

    if (drawerList && itemTemplate) {
        assignments.forEach((item, index) => {
            const clone = itemTemplate.content.cloneNode(true);
            const li = clone.querySelector("li");
            const link = clone.querySelector("a");
            const rankBadge = clone.querySelector(".rank-badge");
            const label = clone.querySelector(".assignment-name") || clone.querySelector("span:last-of-type");
            const hotTag = clone.querySelector(".hot-tag");

            link.href = item.url;
            if (label) label.textContent = item.name;
            if (rankBadge) rankBadge.textContent = String(index + 1).padStart(2, "0");
            if (hotTag) hotTag.textContent = HOT_TAGS[index % HOT_TAGS.length];

            const waveX = Math.round(Math.sin(index * 0.95) * 9);
            const tilt = (index % 2 === 0 ? -1.8 : 1.8);
            li.style.setProperty("--item-index", index);
            li.style.setProperty("--wave-x", `${waveX}px`);
            li.style.setProperty("--wave-tilt", `${tilt}deg`);

            drawerList.appendChild(clone);
        });
    }

    // 2. 동적 타이틀 스팬 생성 및 웨이브/네온 색상 적용
    const title = ["a", "v", "a", "s", "c", "r", "i", "p", "t"];
    const targetTitle = document.querySelector("#javascript-title");

    if (targetTitle) {
        const firstSpan = targetTitle.querySelector("span");
        if (firstSpan) {
            firstSpan.style.setProperty("--char-index", 0);
        }
        title.forEach((element, idx) => {
            let spantext = document.createElement("span");
            spantext.textContent = element;
            spantext.style.color = randomColor();
            spantext.style.fontSize = "100px";
            spantext.style.setProperty("--char-index", idx + 1);
            targetTitle.appendChild(spantext);
        });
    }

    // 3. 토스트 알림 유틸리티
    const toastEl = document.querySelector("#pachinko-toast");
    let toastTimer = null;
    function showToast(msg) {
        if (!toastEl) return;
        toastEl.textContent = msg;
        toastEl.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toastEl.classList.remove("show");
        }, 2600);
    }

    // 4. 네비게이션 드로어 제어 (PC: 항상 확장 + 햄버거 숨김 / 모바일: 슬라이드 드로어)
    const navDrawer = document.querySelector("#nav-drawer");
    const drawerBackdrop = document.querySelector("#drawer-backdrop");
    const openDrawerBtn = document.querySelector("#open-drawer-btn");
    const closeDrawerBtn = document.querySelector("#close-drawer-btn");

    function isDesktopLayout() {
        return window.innerWidth >= 720;
    }

    function syncDrawerAria() {
        if (!navDrawer) return;
        if (isDesktopLayout()) {
            navDrawer.classList.remove("open");
            drawerBackdrop.classList.remove("active");
            navDrawer.setAttribute("aria-hidden", "false");
            if (openDrawerBtn) openDrawerBtn.setAttribute("aria-expanded", "true");
        } else if (!navDrawer.classList.contains("open")) {
            navDrawer.setAttribute("aria-hidden", "true");
            if (openDrawerBtn) openDrawerBtn.setAttribute("aria-expanded", "false");
        }
    }

    function openDrawer() {
        if (isDesktopLayout()) return;
        navDrawer.classList.add("open");
        drawerBackdrop.classList.add("active");
        navDrawer.setAttribute("aria-hidden", "false");
        if (openDrawerBtn) openDrawerBtn.setAttribute("aria-expanded", "true");
    }

    function closeDrawer() {
        navDrawer.classList.remove("open");
        drawerBackdrop.classList.remove("active");
        if (!isDesktopLayout()) {
            navDrawer.setAttribute("aria-hidden", "true");
            if (openDrawerBtn) openDrawerBtn.setAttribute("aria-expanded", "false");
        }
    }

    syncDrawerAria();
    window.addEventListener("resize", syncDrawerAria);
    if (openDrawerBtn) openDrawerBtn.addEventListener("click", openDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

    // 5. 시계 모달 제어 이벤트 리스너 바인딩
    const clockModal = document.querySelector("#clock-modal");
    const openClockBtn = document.querySelector("#open-clock-btn");
    const closeClockBtn = document.querySelector("#close-clock-btn");
    const clockCardTriggers = document.querySelectorAll('[data-action="clock"]');

    function openModal() {
        if (clockModal) clockModal.classList.add("active");
    }

    function closeModal() {
        if (clockModal) clockModal.classList.remove("active");
    }

    if (openClockBtn) openClockBtn.addEventListener("click", openModal);
    clockCardTriggers.forEach((btn) => btn.addEventListener("click", openModal));
    if (closeClockBtn) closeClockBtn.addEventListener("click", closeModal);

    if (clockModal) {
        clockModal.addEventListener("click", (event) => {
            if (event.target === clockModal) {
                closeModal();
            }
        });
    }

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            if (clockModal && clockModal.classList.contains("active")) {
                closeModal();
            }
            if (navDrawer && navDrawer.classList.contains("open")) {
                closeDrawer();
            }
        }
    });

    // 6. 배경 별가루 캔버스 + 최상단(z-index: 1200) 폭발 버스트 캔버스
    const bgCanvas = document.querySelector("#pachinko-particles");
    const bgCtx = bgCanvas ? bgCanvas.getContext("2d") : null;
    const fxCanvas = document.querySelector("#fx-burst-canvas");
    const fxCtx = fxCanvas ? fxCanvas.getContext("2d") : null;

    const ambientStars = [];
    const bursts = [];
    const shockwaves = [];

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
        const count = Math.min(54, Math.max(24, Math.floor(window.innerWidth / 28)));
        for (let i = 0; i < count; i++) {
            ambientStars.push({
                x: Math.random() * bgCanvas.width,
                y: Math.random() * bgCanvas.height,
                r: Math.random() * 2.5 + 1.1,
                speedY: -(Math.random() * 0.48 + 0.2),
                phase: Math.random() * Math.PI * 2,
                hue: i % 3 === 0 ? "#ffd700" : i % 3 === 1 ? "#00f2ff" : "#ff66d9"
            });
        }
    }

    function spawnJackpotBurst(x, y, count = 44) {
        if (!fxCanvas) return;
        const colors = ["#ffd700", "#fff4a3", "#ff2bd6", "#00f2ff", "#39ff14", "#ff5500"];
        shockwaves.push({
            x,
            y,
            radius: 10,
            maxRadius: 190,
            life: 1,
            color: colors[Math.floor(Math.random() * colors.length)]
        });

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 8.5 + 2.8;
            bursts.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 4.2,
                size: Math.random() * 8 + 4.5,
                life: 1,
                decay: Math.random() * 0.015 + 0.012,
                color: colors[i % colors.length],
                kind: i % 3 // 0: coin, 1: 4-point star, 2: confetti
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

            // 확장 황금 충격파 링
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

            // 최상단 잭팟 금화·별·컨페티 폭발
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

    // 7. 검색창 실행 & 최상단 황금 코인 버스트
    const searchInput = document.querySelector("#search");
    const searchSubmitBtn = document.querySelector("#search-submit-btn");

    function executeSearch(originEl) {
        if (!searchInput) return;
        const rect = (originEl || searchInput).getBoundingClientRect();
        spawnJackpotBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 48);

        const raw = searchInput.value.trim();
        if (!raw) {
            searchInput.focus();
            showToast("🪙 검색어를 입력하면 황금 고블린이 빛의 속도로 찾아드립니다!!");
            return;
        }

        let targetUrl = "";
        if (/^https?:\/\//i.test(raw)) {
            targetUrl = raw;
        } else if (/^[\w-]+(\.[\w-]+)+(\/.*)?$/.test(raw)) {
            targetUrl = `https://${raw}`;
        } else {
            targetUrl = `https://www.google.com/search?q=${encodeURIComponent(raw)}`;
        }
        window.open(targetUrl, "_blank", "noopener");
    }

    if (searchInput) {
        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                executeSearch(searchInput);
            }
        });
    }

    if (searchSubmitBtn) {
        searchSubmitBtn.addEventListener("click", () => executeSearch(searchSubmitBtn));
    }

    // 8. 황금 고블린 & 로열 대박 피버 버튼 (다양한 멘트 로테이션)
    const feverBtn = document.querySelector("#fever-jackpot-btn");
    const feverBtnText = document.querySelector("#fever-btn-text");
    const FEVER_MESSAGES = [
        "🎰 황금 고블린 FEVER x{N} 폭발!! A+ 행운 +777%!! 🪙",
        "⚡ 로열 골드 FEVER x{N}!! 마우스 클릭 정상 인식 보너스!! 🔥",
        "👑 FEVER x{N} 대박!! 새로고침(F5) 전까지 영원히 유지됩니다!! ✨",
        "💎 FEVER x{N} 달성!! 인터넷 연결 시 100% 작동하는 초혁신!! 🚀"
    ];
    let feverCombo = 0;

    if (feverBtn) {
        feverBtn.addEventListener("click", () => {
            feverCombo += 1;
            const rect = feverBtn.getBoundingClientRect();
            spawnJackpotBurst(rect.left + rect.width / 2, rect.top, 64);
            spawnJackpotBurst(window.innerWidth * 0.25, window.innerHeight * 0.35, 30);
            spawnJackpotBurst(window.innerWidth * 0.75, window.innerHeight * 0.35, 30);
            if (feverBtnText) {
                feverBtnText.textContent = `황금 고블린 FEVER x${feverCombo}!! 대박 진행 중!!`;
            }
            const msgTemplate = FEVER_MESSAGES[(feverCombo - 1) % FEVER_MESSAGES.length];
            showToast(msgTemplate.replace("{N}", String(feverCombo)));
        });
    }

    // 9. 인터랙티브 미니 슬롯머신 (황금 고블린 + 다양한 유쾌 멘트)
    const reel1 = document.querySelector("#slot-reel-1");
    const reel2 = document.querySelector("#slot-reel-2");
    const reel3 = document.querySelector("#slot-reel-3");
    const slotResult = document.querySelector("#slot-result");
    const spinSlotBtn = document.querySelector("#spin-slot-btn");
    const SLOT_SYMBOLS = ["A+", "7", "🪙", "👑", "💎", "⚡"];
    const JACKPOT_OUTCOMES = [
        { reels: ["A+", "A+", "A+"], msg: "🎉 트리플 A+!! 학점 A+ 대확정!!" },
        { reels: ["🪙", "👑", "🪙"], msg: "👑 황금 고블린 대박 강림!! 행운 777%!!" },
        { reels: ["7", "7", "7"], msg: "🔥 777 잭팟!! 교수님 극찬 예약!!" },
        { reels: ["⚡", "A+", "⚡"], msg: "⚡ F5 누르면 새로고침되는 초혁신 대박!!" },
        { reels: ["💎", "👑", "💎"], msg: "💎 마우스 클릭 완벽 인식 보너스 당첨!!" }
    ];
    let slotBusy = false;

    if (spinSlotBtn && reel1 && reel2 && reel3 && slotResult) {
        spinSlotBtn.addEventListener("click", () => {
            if (slotBusy) return;
            slotBusy = true;
            spinSlotBtn.disabled = true;
            slotResult.textContent = "황금 릴 고속 회전 중...!!";
            [reel1, reel2, reel3].forEach((r) => r.classList.add("spinning"));

            const spinInterval = setInterval(() => {
                reel1.textContent = SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)];
                reel2.textContent = SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)];
                reel3.textContent = SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)];
            }, 75);

            setTimeout(() => {
                clearInterval(spinInterval);
                [reel1, reel2, reel3].forEach((r) => r.classList.remove("spinning"));
                const pick = JACKPOT_OUTCOMES[Math.floor(Math.random() * JACKPOT_OUTCOMES.length)];
                reel1.textContent = pick.reels[0];
                reel2.textContent = pick.reels[1];
                reel3.textContent = pick.reels[2];
                slotResult.textContent = pick.msg;

                const rect = spinSlotBtn.getBoundingClientRect();
                spawnJackpotBurst(rect.left + rect.width / 2, rect.top, 48);
                showToast(pick.msg);
                slotBusy = false;
                spinSlotBtn.disabled = false;
            }, 900);
        });
    }

    // 10. 데스크톱 마우스 패럴랙스 (미세한 입체감)
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
