// ==========================================================================
// 대항해시대 이미지 슬라이더 제어 스크립트 (Nautical Image Slider)
// ==========================================================================

// 1. 슬라이더 생성 및 제어 모듈 함수
function createSlider(config) {
    const {
        trackElement,    // 슬라이드 트랙 컨테이너 (.slider-track)
        counterElement,  // 슬라이드 번호 표시 (.slide-counter)
        prevBtn,         // 이전 버튼
        playBtn,         // 재생/정지 버튼
        nextBtn,         // 다음 버튼
        totalSlides = 6  // 총 슬라이드 수
    } = config;

    let currentIndex = 0;
    let timerID = null;

    // 슬라이드 이동 및 버튼 상태 갱신 함수 (부드러운 좌우 슬라이드)
    function updateView(animate = true) {
        if (trackElement) {
            if (!animate) {
                trackElement.style.transition = "none";
            } else {
                // 부드러운 가감속 슬라이딩 트랜지션
                trackElement.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
            }
            // 6장(600%) 트랙에서 1장씩 정확하게 이동 (1장 = 100% / 6 = 16.6666%)
            const movePercentage = (currentIndex / totalSlides) * 100;
            trackElement.style.transform = `translateX(-${movePercentage}%)`;
        }

        if (counterElement) {
            counterElement.textContent = `${currentIndex + 1} / ${totalSlides}`;
        }

        // [요구사항] 첫 사진에서 이전 버튼 못 누르도록
        if (prevBtn) {
            prevBtn.disabled = (currentIndex === 0);
        }

        // [요구사항] 마지막 사진에서 다음 버튼 못 누르도록
        if (nextBtn) {
            nextBtn.disabled = (currentIndex === totalSlides - 1);
        }
    }

    // 다음 사진으로 슬라이드 (성공 시 true, 마지막 사진이라 불가 시 false 반환)
    function goNext() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateView(true);
            return true;
        }
        return false;
    }

    // 이전 사진으로 슬라이드
    function goPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateView(true);
            return true;
        }
        return false;
    }

    // 자동 재생 멈춤 함수
    function stopAutoPlay() {
        if (timerID !== null) {
            clearInterval(timerID);
            timerID = null;
        }
        if (playBtn) {
            playBtn.textContent = "PLAY";
            playBtn.classList.remove("playing");
        }
    }

    // 자동 재생 시작 함수
    function startAutoPlay() {
        // [요구사항] 마지막 사진일 경우 누를 때 1번 사진으로 돌아가서 마지막 사진까지 재생
        if (currentIndex === totalSlides - 1) {
            currentIndex = 0;
            updateView(true); // 1번 사진으로 스무스하게 되돌아감
        }

        if (playBtn) {
            playBtn.textContent = "STOP";
            playBtn.classList.add("playing");
        }

        // [요구사항] 3초 간격으로 마지막 사진까지 슬라이드 이동
        timerID = setInterval(function() {
            const hasNext = goNext();

            // [요구사항] 마지막 사진일 경우 다시 재생 버튼으로 변경
            if (!hasNext || currentIndex === totalSlides - 1) {
                stopAutoPlay();
            }
        }, 3000);
    }

    // --- 이벤트 핸들러 바인딩 ---

    // 이전 버튼 클릭 시
    if (prevBtn) {
        prevBtn.onclick = function() {
            stopAutoPlay(); // 수동 이동 시 자동 재생 중단
            goPrev();
        };
    }

    // 다음 버튼 클릭 시
    if (nextBtn) {
        nextBtn.onclick = function() {
            stopAutoPlay(); // 수동 이동 시 자동 재생 중단
            goNext();
        };
    }

    // 재생 버튼 클릭 시
    if (playBtn) {
        playBtn.onclick = function() {
            if (timerID !== null) {
                // 재생 중인 상태에서 누르면 정지
                stopAutoPlay();
            } else {
                // 멈춰있는 상태에서 누르면 재생 시작
                startAutoPlay();
            }
        };
    }

    // 초기 상태 렌더링 (애니메이션 없이 0% 위치 즉시 고정)
    updateView(false);
}

// 2. 슬라이더 초기화 실행 함수 (어떤 브라우저 환경에서도 100% 실행 보장)
function initSliders() {
    // 1) 강아지 사진 슬라이더 (dog1.jpg ~ dog6.jpg)
    createSlider({
        trackElement: document.getElementById("dog-track"),
        counterElement: document.getElementById("dog-counter"),
        prevBtn: document.getElementById("dog-prev"),
        playBtn: document.getElementById("dog-play"),
        nextBtn: document.getElementById("dog-next"),
        totalSlides: 6
    });

    // 2) 바다 사진 슬라이더 (sea1.jpg ~ sea6.jpg)
    createSlider({
        trackElement: document.getElementById("sea-track"),
        counterElement: document.getElementById("sea-counter"),
        prevBtn: document.getElementById("sea-prev"),
        playBtn: document.getElementById("sea-play"),
        nextBtn: document.getElementById("sea-next"),
        totalSlides: 6
    });
}

// DOM 준비 상태에 따른 즉각 또는 대기 초기화
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSliders);
} else {
    initSliders();
}
