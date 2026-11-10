/**
 * 0-255 사이의 난수(Random Number)를 생성하여 무작위 RGB 색상 코드를 반환하는 함수
 * @returns {string} rgb(r, g, b) 형식의 색상 문자열
 */
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

document.addEventListener("DOMContentLoaded", () => {
    // 동적 타이틀 스팬 생성 및 색상 적용
    const title = ["a", "v", "a", "s", "c", "r", "i", "p", "t"];
    const targetTitle = document.querySelector("#javascript-title");

    if (targetTitle) {
        title.forEach(element => {
            let spantext = document.createElement("span");
            spantext.textContent = element;
            spantext.style.color = randomColor();
            spantext.style.fontSize = "100px";
            targetTitle.appendChild(spantext);
        });
    }

    // 네비게이션 드로어 제어 이벤트 리스너 바인딩
    const navDrawer = document.querySelector("#nav-drawer");
    const drawerBackdrop = document.querySelector("#drawer-backdrop");
    const openDrawerBtn = document.querySelector("#open-drawer-btn");
    const closeDrawerBtn = document.querySelector("#close-drawer-btn");

    function openDrawer() {
        navDrawer.classList.add("open");
        drawerBackdrop.classList.add("active");
        navDrawer.setAttribute("aria-hidden", "false");
        openDrawerBtn.setAttribute("aria-expanded", "true");
    }

    function closeDrawer() {
        navDrawer.classList.remove("open");
        drawerBackdrop.classList.remove("active");
        navDrawer.setAttribute("aria-hidden", "true");
        openDrawerBtn.setAttribute("aria-expanded", "false");
    }

    openDrawerBtn.addEventListener("click", openDrawer);
    closeDrawerBtn.addEventListener("click", closeDrawer);
    drawerBackdrop.addEventListener("click", closeDrawer);

    // 모달 제어 이벤트 리스너(Modal Control Event Listeners) 바인딩
    const clockModal = document.querySelector("#clock-modal");
    const openClockBtn = document.querySelector("#open-clock-btn");
    const closeClockBtn = document.querySelector("#close-clock-btn");

    /**
     * 모달 활성화 함수
     */
    function openModal() {
        clockModal.classList.add("active");
    }

    /**
     * 모달 비활성화 함수
     */
    function closeModal() {
        clockModal.classList.remove("active");
    }

    // '시계 보기' 버튼 클릭 이벤트 핸들러
    openClockBtn.addEventListener("click", openModal);

    // 상단 '닫기(X)' 버튼 클릭 이벤트 핸들러
    closeClockBtn.addEventListener("click", closeModal);

    // 오버레이 영역 클릭 시 창 닫기 이벤트 핸들러 (이벤트 버블링 필터링)
    clockModal.addEventListener("click", (event) => {
        if (event.target === clockModal) {
            closeModal();
        }
    });

    // ESC 키 입력 시 활성화된 모달 또는 드로어 닫기 이벤트 핸들러
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            if (clockModal.classList.contains("active")) {
                closeModal();
            }
            if (navDrawer.classList.contains("open")) {
                closeDrawer();
            }
        }
    });
});

