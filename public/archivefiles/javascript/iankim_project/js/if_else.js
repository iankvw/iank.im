/**
 * @file if_else.js
 * @description 사용자 입력 점수를 기반으로 조건 분기(if-else)를 수행하여 학점을 산출하고 DOM에 렌더링하는 스크립트
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DOM Element 참조 취득
  const scoreInput = document.getElementById('score-input');
  const calcButton = document.getElementById('calc-button');
  const resultDisplay = document.getElementById('result-display');

  /**
   * 점수 유효성 검증 및 등급 산출 함수
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

    // 성적 평가 조건 분기문 (제시된 기본 로직 기반)
    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80) {
      grade = 'B';
    } else if (score >= 70) {
      grade = 'C';
    } else if (score >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
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