//엄격모드 선언
"use strict";

//checklist.js
// 1. 배열 만들기
let itemList = [];
let itemIds = [];
let checkedIds = new Set();
let nextId = 1;
let lastAddedIndex = -1;

let form = document.querySelector("form");
let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList); // addBtn.onclick = addList; 라고 해도 됨

// 입력창에서 Enter 키를 눌렀을 때도 페이지 새로고침 없이 항목 추가
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        addList();
    });
}

// 2. 챙길물건 배열에 추가하기
function addList() {
    let inputEl = document.querySelector("#item");
    let item = inputEl.value.trim(); // 텍스트 필드 내용 가져옴

    if (item !== "") {
        itemList.push(item); // itemList 배열의 끝에 item 변수 값 추가
        itemIds.push(nextId++);
        lastAddedIndex = itemList.length - 1;
        inputEl.value = ""; // id="item"인 요소의 값을 지움
        inputEl.focus(); // 텍스트 필드에 focus( ) 메서드 적용
        showList();
    } else {
        inputEl.classList.remove("input-shake");
        void inputEl.offsetWidth;
        inputEl.classList.add("input-shake");
        inputEl.focus();
    }
}

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// 3. 추가한 내용 화면에 표시하기
function showList(useViewTransition) {
    const render = function () {
        let list = "<ul>"; // 목록을 시작하는 <ul> 태그 저장
        for (let i = 0; i < itemList.length; i++) { // 배열 요소마다 반복
            let classes = [];
            if (i === lastAddedIndex) {
                classes.push("new-item");
            }
            let isChecked = checkedIds.has(itemIds[i]);
            if (isChecked) {
                classes.push("checked");
            }
            let classAttr = classes.length > 0 ? " class='" + classes.join(" ") + "'" : "";
            let vtStyle = " style='view-transition-name: checklist-item-" + itemIds[i] + ";'";
            list += "<li" + classAttr + vtStyle + ">"
                + "<span class='item-text'>" + escapeHtml(itemList[i]) + "</span>"
                + "<span class='actions'>"
                + "<span class='check' data-uid='" + itemIds[i] + "' role='button' tabindex='0' aria-pressed='" + (isChecked ? "true" : "false") + "' aria-label='완료 표시'>✓</span>"
                + "<span class='close' id='" + i + "' data-uid='" + itemIds[i] + "' role='button' tabindex='0' aria-label='삭제'>X</span>"
                + "</span>"
                + "</li>";
            // 요소와 완료/삭제 버튼을 <li>~</li>로 묶음
        }
        list += "</ul>"; // 목록을 끝내는 </ul> 태그 저장

        document.querySelector("#itemList").innerHTML = list; // list 내용 표시
        lastAddedIndex = -1;

        let checks = document.querySelectorAll(".check");
        for (let i = 0; i < checks.length; i++) {
            checks[i].addEventListener("click", toggleCheck);
            checks[i].addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCheck.call(this);
                }
            });
        }

        let remove = document.querySelectorAll(".close"); // 삭제 버튼을 변수로 저장. 배열 형태가 됨
        for (let i = 0; i < remove.length; i++) { // remove 배열의 요소 모두를 확인
            remove[i].addEventListener("click", removeList); // 요소를 클릭하면 removeList() 실행
            remove[i].addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    removeList.call(this);
                }
            });
        }
    };

    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (useViewTransition && document.startViewTransition && !reduceMotion) {
        document.startViewTransition(render);
    } else {
        render();
    }
}

// 완료(v) 버튼 클릭 시 옅은 색 및 취소선 토글
function toggleCheck() {
    let uid = Number(this.getAttribute("data-uid"));
    let li = this.closest("li");
    if (!li || li.classList.contains("removing")) {
        return;
    }

    let nowChecked;
    if (checkedIds.has(uid)) {
        checkedIds.delete(uid);
        nowChecked = false;
    } else {
        checkedIds.add(uid);
        nowChecked = true;
    }

    li.classList.toggle("checked", nowChecked);
    this.setAttribute("aria-pressed", nowChecked ? "true" : "false");
}

// 4. 챙길물건 목록에서 삭제하기
function removeList() {
    let id = Number(this.getAttribute("id")); // this(클릭한 삭제 버튼)의 id 값 가져와 id 변수에 저장
    let uid = Number(this.getAttribute("data-uid"));
    let li = this.closest("li");

    if (!li || li.classList.contains("removing")) {
        return;
    }

    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
        let targetIndex = itemIds.indexOf(uid);
        let removeIdx = targetIndex !== -1 ? targetIndex : id;
        checkedIds.delete(uid);
        itemList.splice(removeIdx, 1); // itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
        itemIds.splice(removeIdx, 1);
        showList(false); // 변경된 itemList 배열을 다시 화면에 표시
        return;
    }

    li.classList.add("removing");
    let finished = false;
    const finishRemove = function () {
        if (finished) return;
        finished = true;
        let targetIndex = itemIds.indexOf(uid);
        let removeIdx = targetIndex !== -1 ? targetIndex : id;
        checkedIds.delete(uid);
        itemList.splice(removeIdx, 1); // itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
        itemIds.splice(removeIdx, 1);
        showList(true); // 변경된 itemList 배열을 다시 화면에 표시
    };

    li.addEventListener("animationend", finishRemove, { once: true });
    setTimeout(finishRemove, 280);
}

// 초기 목록 상태 표시
showList(false);


// 초기 목록 상태 표시
showList(false);