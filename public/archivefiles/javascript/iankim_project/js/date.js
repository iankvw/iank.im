//엄격모드 선언
'use strict';

/*
let now = new Date(); // 오늘 날짜 정보를 Date 객체의 인스턴스 now 객체로 만듭니다.
let firstDay = new Date("2018-03-23"); // 처음 만난 날의 날짜 정보를 firstDay 객체로 만듭니다.
let toNow = now.getTime(); // 오늘 날짜를 밀리초로 바꿉니다.
let toFirst = firstDay.getTime(); // 처음 만난 날을 밀리초로 바꿉니다.
let passedTime = toNow - toFirst; // 처음 만난 날과 오늘 사이의 차이 (밀리초)
let passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000)); // 밀리초를 일로 변환 후 반올림합니다.
document.querySelector('#accent').innerText = passedDay + "일"; // #accent 영역에 표시합니다.

calcDate(100); // 100일 기념일을 계산해서 표시합니다.
calcDate(200); // 200일 기념일을 계산해서 표시합니다.
calcDate(365); // 1년 기념일을 계산해서 표시합니다.
calcDate(500); // 500일 기념일을 계산해서 표시합니다.

function calcDate(days) {
	let future = toFirst + days * (1000 * 60 * 60 * 24); // 처음 만난 날에 밀리초로 바꾼 100일을 더합니다.
	let someday = new Date(future); // future 값을 사용해 Date 객체의 인스턴스를 만듭니다.
	let year = someday.getFullYear(); // '연도'를 가져와 year 변수에 저장합니다.
	let month = someday.getMonth() + 1; // '월'을 가져와 month 변수에 저장합니다.
	let date = someday.getDate(); // '일'을 가져와 date 변수에 저장합니다.
	document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
}
*/

// 기념일 메모 객체: 기본 기념일(2022년 3월 2일)과 제목("입학한지") 관리
const anniversaryMemo = {
	title: '입학한지',
	firstDay: new Date(2022, 2, 2), // 월(month)은 0부터 시작하므로 2는 3월
	milestones: [
		{ days: 100, elementId: 'date100' },
		{ days: 200, elementId: 'date200' },
		{ days: 365, elementId: 'date365' },
		{ days: 500, elementId: 'date500' }
	],

	// Date 객체에서 연/월/일 정보를 가져와 한국어 날짜 문자열 반환
	formatKoreanDate: function (dateObj) {
		const year = dateObj.getFullYear();
		const month = dateObj.getMonth() + 1; // 0~11을 1~12월로 변환
		const date = dateObj.getDate();
		return `${year}년 ${month}월 ${date}일`;
	},

	// <input type="date">의 값(YYYY-MM-DD) 형식으로 변환
	formatInputDate: function (dateObj) {
		const year = dateObj.getFullYear();
		const month = String(dateObj.getMonth() + 1).padStart(2, '0');
		const date = String(dateObj.getDate()).padStart(2, '0');
		return `${year}-${month}-${date}`;
	},

	// YYYY-MM-DD 문자열을 로컬 기준 Date 객체로 변환
	parseInputDate: function (dateString) {
		const parts = dateString.split('-');
		if (parts.length !== 3) {
			return null;
		}
		const year = Number(parts[0]);
		const month = Number(parts[1]) - 1;
		const day = Number(parts[2]);
		const parsed = new Date(year, month, day);

		if (
			Number.isNaN(parsed.getTime()) ||
			parsed.getFullYear() !== year ||
			parsed.getMonth() !== month ||
			parsed.getDate() !== day
		) {
			return null;
		}
		return parsed;
	},

	// 오늘까지 지난 일수 계산 및 화면 표시
	renderPassedDays: function () {
		const now = new Date();
		const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		const toNow = today.getTime();
		const toFirst = this.firstDay.getTime();
		const passedTime = toNow - toFirst;
		const passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

		const accentEl = document.querySelector('#accent');
		if (passedDay >= 0) {
			accentEl.innerText = `${passedDay}일`;
		} else {
			accentEl.innerText = `D-${Math.abs(passedDay)}`;
		}
	},

	// 지정한 일수만큼 지난 기념일 날짜 계산 (getTime, setTime 활용)
	calcDate: function (days, elementId) {
		const toFirst = this.firstDay.getTime();
		const future = toFirst + days * (1000 * 60 * 60 * 24);
		const someday = new Date();
		someday.setTime(future);

		document.querySelector(`#${elementId}`).innerText = this.formatKoreanDate(someday);
	},

	// 현재 제목이나 날짜를 수정 중인지 확인
	isEditing: function () {
		const titleInput = document.querySelector('#titleInput');
		const dateInput = document.querySelector('#dateInput');
		return !titleInput.hidden || !dateInput.hidden;
	},

	// 제목, 시작 날짜, 경과 일수, 기념일 리스트 전체 갱신
	render: function () {
		document.querySelector('#memoTitle').innerText = this.title;
		document.querySelector('#startDateText').innerText = this.formatKoreanDate(this.firstDay);
		this.renderPassedDays();

		for (let i = 0; i < this.milestones.length; i++) {
			const item = this.milestones[i];
			this.calcDate(item.days, item.elementId);
		}
	}
};

// 제목 클릭 시 인라인 텍스트 입력창으로 변경
function setupTitleEditor() {
	const titleEl = document.querySelector('#memoTitle');
	const titleInput = document.querySelector('#titleInput');

	function openEditor() {
		titleInput.value = anniversaryMemo.title;
		titleEl.hidden = true;
		titleInput.hidden = false;
		titleInput.focus();
		titleInput.select();
	}

	function closeEditor(save) {
		if (titleInput.hidden) {
			return;
		}
		if (save) {
			const nextTitle = titleInput.value.trim();
			if (nextTitle !== '') {
				anniversaryMemo.title = nextTitle;
			}
		}
		titleInput.hidden = true;
		titleEl.hidden = false;
		anniversaryMemo.render();
	}

	titleEl.addEventListener('click', openEditor);
	titleEl.addEventListener('keydown', function (event) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			openEditor();
		}
	});

	titleInput.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			closeEditor(true);
		} else if (event.key === 'Escape') {
			closeEditor(false);
		}
	});
	titleInput.addEventListener('blur', function () {
		closeEditor(true);
	});
}

// 날짜 클릭 시 인라인 날짜 선택창으로 변경
function setupDateEditor() {
	const dateTextEl = document.querySelector('#startDateText');
	const dateInput = document.querySelector('#dateInput');

	function openEditor() {
		dateInput.value = anniversaryMemo.formatInputDate(anniversaryMemo.firstDay);
		dateTextEl.hidden = true;
		dateInput.hidden = false;
		dateInput.focus();
		if (typeof dateInput.showPicker === 'function') {
			try {
				dateInput.showPicker();
			} catch (err) {
				// 브라우저 정책상 showPicker 호출이 제한될 경우 기본 focus만 유지
			}
		}
	}

	function closeEditor(save) {
		if (dateInput.hidden) {
			return;
		}
		if (save && dateInput.value) {
			const parsed = anniversaryMemo.parseInputDate(dateInput.value);
			if (parsed !== null) {
				anniversaryMemo.firstDay = parsed;
			}
		}
		dateInput.hidden = true;
		dateTextEl.hidden = false;
		anniversaryMemo.render();
	}

	dateTextEl.addEventListener('click', openEditor);
	dateTextEl.addEventListener('keydown', function (event) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			openEditor();
		}
	});

	dateInput.addEventListener('change', function () {
		const parsed = anniversaryMemo.parseInputDate(dateInput.value);
		if (parsed !== null) {
			anniversaryMemo.firstDay = parsed;
			anniversaryMemo.render();
		}
	});
	dateInput.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			closeEditor(true);
		} else if (event.key === 'Escape') {
			closeEditor(false);
		}
	});
	dateInput.addEventListener('blur', function () {
		closeEditor(true);
	});
}

// 배경 위 마우스를 0.1초마다 수집해 부드럽게 따라가는 포스트잇 객체
const postItFollower = {
	postItEl: null,
	currentX: 0,
	currentY: 0,
	velX: 0,
	velY: 0,
	targetX: 0,
	targetY: 0,
	angle: -1.2,
	mouseX: 0,
	mouseY: 0,
	hasMouse: false,
	isMouseInWindow: false,
	isHoveringPostIt: false,
	sampleIntervalMs: 100,
	lastTime: 0,

	// 포스트잇 영역 안에 특정 좌표가 들어와 있는지 확인
	isPointInside: function (x, y, inset) {
		const rect = this.postItEl.getBoundingClientRect();
		return (
			x >= rect.left + inset &&
			x <= rect.right - inset &&
			y >= rect.top + inset &&
			y <= rect.bottom - inset
		);
	},

	// 포스트잇이 화면 밖으로 나가지 않도록 목표 이동량 제한
	clampOffset: function (x, y) {
		const maxOffsetX = Math.max(0, (window.innerWidth - this.postItEl.offsetWidth) / 2 - 20);
		const maxOffsetY = Math.max(0, (window.innerHeight - this.postItEl.offsetHeight) / 2 - 20);
		return {
			x: Math.max(-maxOffsetX, Math.min(maxOffsetX, x)),
			y: Math.max(-maxOffsetY, Math.min(maxOffsetY, y))
		};
	},

	// 1초마다 마우스가 포스트잇 바깥(책상 배경)에 있을 때만 목표 위치 갱신
	sampleMousePosition: function () {
		if (!this.hasMouse || !this.isMouseInWindow || anniversaryMemo.isEditing()) {
			return;
		}
		if (this.isHoveringPostIt || this.isPointInside(this.mouseX, this.mouseY, 0)) {
			return;
		}

		const rawX = this.mouseX - window.innerWidth / 2;
		const rawY = this.mouseY - window.innerHeight / 2;
		const clamped = this.clampOffset(rawX, rawY);
		this.targetX = clamped.x;
		this.targetY = clamped.y;
	},

	// 스프링 감쇠 물리를 이용해 경로를 부드럽게 곡선 형태로 보간
	animate: function (timestamp) {
		if (!this.lastTime) {
			this.lastTime = timestamp;
		}
		const dt = Math.min((timestamp - this.lastTime) / 1000, 0.05);
		this.lastTime = timestamp;

		const editing = anniversaryMemo.isEditing();
		const arrivedUnderCursor = this.hasMouse && this.isPointInside(this.mouseX, this.mouseY, 24);

		if (editing || this.isHoveringPostIt || arrivedUnderCursor) {
			this.targetX = this.currentX;
			this.targetY = this.currentY;
			const stopFactor = Math.exp(-10 * dt);
			this.velX *= stopFactor;
			this.velY *= stopFactor;
		}

		const stiffness = 8.0;
		const friction = 5.8;
		const accX = (this.targetX - this.currentX) * stiffness - this.velX * friction;
		const accY = (this.targetY - this.currentY) * stiffness - this.velY * friction;

		this.velX += accX * dt;
		this.velY += accY * dt;
		this.currentX += this.velX * dt;
		this.currentY += this.velY * dt;

		const baseAngle = editing ? 0 : -1.2;
		const sway = Math.max(-4, Math.min(4, this.velX * 0.012));
		const desiredAngle = baseAngle + sway;
		this.angle += (desiredAngle - this.angle) * Math.min(1, 8 * dt);

		this.postItEl.style.transform =
			`translate3d(${this.currentX.toFixed(2)}px, ${this.currentY.toFixed(2)}px, 0) ` +
			`rotate(${this.angle.toFixed(2)}deg)`;

		window.requestAnimationFrame(this.animate.bind(this));
	},

	init: function () {
		this.postItEl = document.querySelector('.post-it');
		if (!this.postItEl) {
			return;
		}

		document.addEventListener('mousemove', (event) => {
			this.mouseX = event.clientX;
			this.mouseY = event.clientY;
			this.hasMouse = true;
			this.isMouseInWindow = true;
		});

		document.addEventListener('mouseleave', () => {
			this.isMouseInWindow = false;
		});

		this.postItEl.addEventListener('mouseenter', () => {
			this.isHoveringPostIt = true;
		});

		this.postItEl.addEventListener('mouseleave', () => {
			this.isHoveringPostIt = false;
		});

		window.addEventListener('resize', () => {
			const clampedTarget = this.clampOffset(this.targetX, this.targetY);
			const clampedCurrent = this.clampOffset(this.currentX, this.currentY);
			this.targetX = clampedTarget.x;
			this.targetY = clampedTarget.y;
			this.currentX = clampedCurrent.x;
			this.currentY = clampedCurrent.y;
		});

		window.setInterval(this.sampleMousePosition.bind(this), this.sampleIntervalMs);
		window.requestAnimationFrame(this.animate.bind(this));
	}
};

anniversaryMemo.render();
setupTitleEditor();
setupDateEditor();
postItFollower.init();
