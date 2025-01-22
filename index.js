$(function() {

    $('#fullpage').fullpage({
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        navigation: true,
        navigationPosition: 'right',
        sectionsColor: ['#151414', '#151414', '#1c1b1b', '#151414', '#1c1b1b']
    });
});



// 글자 타이핑 효과
const $text = document.querySelector("[rel='text']");

// 글자 모음 - 개행문자(\n)로 줄바꿈
const letters = [
    "\" 개발자 오예은 입니다 \" "
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 줄바꿈을 위한 <br> 치환
const changeLineBreak = (letter) => {
    return letter.map(text => text === "\n" ? "<br>" : text);
}

// 타이핑 효과
const typing = async () => {
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));

    while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift();
    }

    // 잠시 대기
    await wait(800);

    // 지우는 효과
    remove();
}

// 글자 지우는 효과
const remove = async () => {
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));

    while (letter.length) {
        await wait(speed);

        letter.pop();
        $text.innerHTML = letter.join("");
    }

    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i+1] ? 0 : i + 1;
    typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);



// 이미지 슬라이드
let index = 0;   //이미지에 접근하는 인덱스
window.onload = function() {
    slideShow();
}

function slideShow() {
    let i;
    // const slide1 = document.getElementsByClassName("sl                                                                                                                                                                                                                                                                           ide1");  //slide1에 대한 dom 참조
    const slide2 = document.getElementsByClassName("slide2");
    const slide3 = document.getElementsByClassName("slide3");
    const slide4 = document.getElementsByClassName("slide4");

    for (i = 0; i < slide2.length; i++) {
        // slide1[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
        slide2[i].style.display = "none";
        slide3[i].style.display = "none";
        slide4[i].style.display = "none";
    }
    index++;

    if (index > slide2.length) {
        index = 1;  //인덱스가 초과되면 1로 변경
    }

    // slide1[index - 1].style.display = "block";  //해당 인덱스는 block으로
    slide2[index - 1].style.display = "block";
    slide3[index - 1].style.display = "block";
    slide4[index - 1].style.display = "block";

    setTimeout(slideShow, 3000);   //함수를 4초마다 호출
}


// 옆으로 넘어가는거
const outer = document.querySelector('.outer');
const innerList = document.querySelector('.inner-list');
const inners = document.querySelectorAll('.inner');
let currentIndex = 0; // 현재 슬라이드 화면 인덱스

inners.forEach((inner) => {
    inner.style.width = 450; // inner의 width를 모두 outer의 width로 만들기
})

innerList.style.width = `${450 * 5}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

/*
  버튼에 이벤트 등록하기
*/
const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

buttonLeft.addEventListener('click', () => {
    currentIndex--;
    currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
});

buttonRight.addEventListener('click', () => {
    currentIndex++;
    currentIndex = currentIndex >= inners.length ? inners.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
});


// 줄긋기
const ul = document.getElementById('ul');

ul.querySelector('[rel="select"]').forEach(select => {
    select.addEventListener('click', () => {
        ul.querySelectorAll('[rel="select"]').forEach(x => x.classList.remove('selected'));
        select.classList.add('selected');
    });
});

