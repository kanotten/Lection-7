// function expressions
//function assigned to a variable
const someFunction = function () {
  console.log("hello i am Hesh");
};

// normal function
function saySomethingFunction() {
  console.log("hello Truls");
}

saySomethingFunction();

// 2

// addEventListner

const button = document.querySelector(".btn");
console.log(button);

// way 1

const handleClickTwo = function () {
  console.log("you clicked me omg!");
};

button.addEventListener("click", function () {
  console.log("you clicked on me omg!");
});

button.addEventListener("click", handleClick);

function handleClick() {
  console.log("you clicked me omg!");
}

// way 2

button.onclick = function () {
  console.log("omg you clicked me using onclick :s");
};

button.onclick = function (event) {
  console.log(event.target.value);
  console.log(this.value);
};

// Q3 keypress funciton
// detect onkeydown // this event will trigger when you press on
// onKeyUp // triggers when key is released
//dont use onKeyDown, only keypress

const myFirstNameInput = document.querySelector("#firstName");
console.log("myFirstNameInput", myFirstNameInput);

const handleKeyPress = function () {
  console.log("a key is pressed");
  console.log(this.value);
  console.log(event.target.value);
};

myFirstNameInput.addEventListener("keydown", handleKeyPress);

document.addEventListener("keypress", function (event) {
  // Check if the pressed key is Enter
  if (event.key === "Enter") {
    // Your code to be executed when Enter is pressed
    console.log("Enter key is pressed");
  }
});

const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function (event) {
  console.log("event.target.dataset.animal: ", event.target.animal);
  event.target.style.background = "blue";
  // changes the backgroundcolor of "hover over me btn"
};

const handleMouseOut = function (event) {
  event.target.style.background = ""; // Resets the background color
};

theHoverBtn.addEventListener("mouseover", handleMouseOver);
theHoverBtn.addEventListener("mouseout", handleMouseOut);
