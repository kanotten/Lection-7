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
