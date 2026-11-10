//h1태그에 시계표시
//1. 필요한 변수 선언

let handleID = 0; //0으로 초기화

// 버튼 작업 할 내용 변수로
const h1 = document.getElementById("time");
const go = document.getElementById("go");
const stop = document.getElementById("stop");


//2.기능
//현재 시간 읽어 오는 기능 함수로 

function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = `${hour}:${minutes}:${seconds}`;
    h1.textContent = time;

    // 아날로그 시계 및 두자리 포맷 동기화
    updateAnalogClock(date, hour, minutes, seconds);
}
getTime()





//3. go버튼 시간 - stop 시간 멈추게

go.onclick = function() {
    // stop 누른 후 go 누를 시: 게시판 황토색 복귀, 현 시간으로 즉시 복귀하고 시간 진행
    if (handleID === 0) {
        h1.classList.remove("paused"); // 시간 흐를 경우: 게시판 황토색 계열로 복귀
        getTime(); // 즉시 현재 시간으로 복귀
        handleID = setInterval(getTime, 1000); // 1초마다 진행
    }
}








//4. 이벤트 핸들러 작성
stop.onclick = function() {
    // stop 누를 시: 일시정지 및 짙은 빨강색으로 변경
    clearInterval(handleID);
    handleID = 0;
    h1.classList.add("paused"); // 멈출 경우: 짙은 빨강색으로 전환
}

// 5. 추가 구현 코드: 페이지 로드 시 자동 실행 & 아날로그 시계 제어
// 최초 로딩 시 현 시간에서 진행
handleID = setInterval(getTime, 1000);

// 아날로그 시계 바늘 각도 계산 및 회전 업데이트 함수
function updateAnalogClock(date, hour, minutes, seconds) {
    // 호이스팅 및 TDZ(Temporal Dead Zone) 방지를 위해 함수 내에서 바늘 요소 참조
    const hourHand = document.getElementById("hour-hand");
    const minHand = document.getElementById("min-hand");
    const secHand = document.getElementById("sec-hand");

    if (!date) date = new Date();
    if (hour === undefined) hour = date.getHours();
    if (minutes === undefined) minutes = date.getMinutes();
    if (seconds === undefined) seconds = date.getSeconds();

    // 디지털 시계 두 자리수 포맷 (00:00:00) 적용
    const pad = (n) => String(n).padStart(2, "0");
    h1.textContent = `${pad(hour)}:${pad(minutes)}:${pad(seconds)}`;

    // 각도 계산 (12시 방향 = 0deg)
    // 초침: 1초당 6도 (360도 / 60초)
    const secDeg = seconds * 6;
    // 분침: 1분당 6도 + 초에 따른 미세 회전 (초 / 60 * 6도)
    const minDeg = minutes * 6 + (seconds / 60) * 6;
    // 시침: 1시간당 30도 (360도 / 12시간) + 분에 따른 미세 회전 (분 / 60 * 30도)
    const hourDeg = (hour % 12) * 30 + (minutes / 60) * 30;

    // 59초 -> 0초 전환 시 반시계 방향 튐 방지
    if (secHand) {
        if (seconds === 0) {
            secHand.style.transition = "none";
        } else {
            secHand.style.transition = "transform 0.05s cubic-bezier(0.4, 2.08, 0.55, 0.44)";
        }
        secHand.style.transform = `rotate(${secDeg}deg)`;
    }

    if (minHand) minHand.style.transform = `rotate(${minDeg}deg)`;
    if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;
}



