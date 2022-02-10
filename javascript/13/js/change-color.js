var heading = document.querySelector("#heading");

// var heading - 변수 선언 (heading 이라는 단어를 변수로 쓸거다)
//   documen=html 문서를 말함, queryselector라는 함수 뒤에 소괄호 붙으면 실행한다는 의미 ()인풋,
// document.querySelector("#heading"); 이거 자체는 아웃풋 ()괄호만 인풋
// ===같다라는 뜻
//query Selector =html 태그 중에 heading이라는 태그를 선택한다

heading.onclick = function () {
  // heading에 onclick(함수)라는 속성을 쓴 것. "클릭할때" 라고 해석해도 될 듯.
  heading.style.color = "red";
  //heading에서 style에서 color를 red로 지정하겠다.red > blue로 하면 파란색으로 바뀜
  // heading.onclick에 function ()-input 이라는 함수를 넣으면  heading.style.color = "red"이게 실행 됨.
};
