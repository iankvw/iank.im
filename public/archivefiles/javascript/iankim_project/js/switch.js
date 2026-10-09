/**
 * @file if_else.js (switch문 적용 버전)
 * @description 사용자 입력 점수를 기반으로 switch 다중 분기문을 수행하여 학점을 산출하고 DOM에 렌더링하는 스크립트
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DOM Element 참조 취득
  const scoreInput = document.getElementById('score-input');
  const calcButton = document.getElementById('calc-button');
  const resultDisplay = document.getElementById('result-display');

  /**
   * 점수 유효성 검증 및 switch문을 통한 등급 산출 함수
   */
  const calculateGrade = () => {
    // 입력값 취득 및 부동소수점 수치형 변환
    const rawValue = scoreInput.value.trim();
    const score = parseFloat(rawValue);

    // 예외 처리: 미입력 또는 NaN 검증
    if (rawValue === '' || Number.isNaN(score)) {
      resultDisplay.textContent = '점수를 올바르게 입력해 주세요.';
      return;
    }

    // 예외 처리: 점수 유효 범위(0 ~ 100) 검증
    if (score < 0 || score > 100) {
      resultDisplay.textContent = '0점에서 100점 사이의 숫자를 입력해 주세요.';
      return;
    }

    let grade = '';

    // 10단위 정수값 계산 (예: 95 -> 9, 82 -> 8, 100 -> 10)
    const scoreSegment = Math.floor(score / 10);

    // switch 조건 분기문
    switch (scoreSegment) {
      case 10:
      case 9:
        // 90점 이상 ~ 100점 이하 (case 10은 break 없이 통과)
        grade = 'A';
        break;
      case 8:
        // 80점 이상 ~ 89.x점
        grade = 'B';
        break;
      case 7:
        // 70점 이상 ~ 79.x점
        grade = 'C';
        break;
      case 6:
        // 60점 이상 ~ 69.x점
        grade = 'D';
        break;
      default:
        // 60점 미만 (0점 ~ 59.x점)
        grade = 'F';
        break;
    }

    // 콘솔 출력 및 DOM 텍스트 노드 갱신
    console.log(`등급은 ${grade}`);
    resultDisplay.textContent = `입력 점수: ${score}점 / 최종 등급: ${grade}`;
  };

  // 2. 이벤트 리스너 등록
  // 확인 버튼 클릭 시 등급 계산 실행
  calcButton.addEventListener('click', calculateGrade);

  // 입력 필드에서 Enter 키 입력 시에도 즉시 계산 실행
  scoreInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      calculateGrade();
    }
  });
});