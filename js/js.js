let typing = document.querySelector("#typing");

function randomText() {
  let textArr = [
    "방문해주셔서 감사합니다 ",
    "Welcom! 박건욱의 포트폴리오 입니다 ",
  ];
  let selectElement = textArr[Math.floor(Math.random() * textArr.length)];
  let selectArr = selectElement.split("");

  return selectArr;
}

function resetType() {
  typing.textContent = "";
  type(randomText());
}

function type(randomArr) {
  if (randomArr.length > 0) {
    typing.textContent += randomArr.shift();
    setTimeout(() => {
      type(randomArr);
    }, 100);
  } else {
    setTimeout(resetType, 10000);
  }
}

type(randomText());

function blink() {
  typing.classList.toggle("active");
}
setInterval(blink, 700);
