function random() {
  return Math.floor(Math.random() * 3);
}

function test() {
  let number = 0;
  number = random();
  switch (number) {
    case 0:
      document.getElementById("image1").style.display = "inline";
      document.getElementById("image2").style.display = "none";
      document.getElementById("image3").style.display = "none";
      break;
    case 1:
      document.getElementById("image2").style.display = "inline";
      document.getElementById("image1").style.display = "none";
      document.getElementById("image3").style.display = "none";
      break;
    case 2:
      document.getElementById("image3").style.display = "inline";
      document.getElementById("image2").style.display = "none";
      document.getElementById("image1").style.display = "none";
      break;
  }
  console.log(random());
}

function test2() {
  let numbers = 0;
  numbers = random();
  switch (numbers) {
    case 0:
      document.getElementById("image4").style.display = "inline";
      document.getElementById("image5").style.display = "none";
      document.getElementById("image6").style.display = "none";
      break;
    case 1:
      document.getElementById("image5").style.display = "inline";
      document.getElementById("image6").style.display = "none";
      document.getElementById("image4").style.display = "none";
      break;
    case 2:
      document.getElementById("image6").style.display = "inline";
      document.getElementById("image4").style.display = "none";
      document.getElementById("image6").style.display = "none";
      break;
  }
  console.log(random());
}

document.getElementById("button").addEventListener("click", () => {
  test();
  test2();
});
