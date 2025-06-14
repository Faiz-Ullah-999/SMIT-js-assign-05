// 🧩 Questions:
// 1. Select a paragraph with id "message" and change its text to "Welcome!".
function task1() {
  const message = document.querySelector("#message");
  message.innerHTML = "Welcome!";
}

// 2. Get the value from an input with id "nameInput" and display it inside a div with id "result".
function task2() {
  const input = document.querySelector("#nameInput").value;
  document.querySelector("#result").innerHTML = input;
}

// 3. When a button is clicked, change the background color of a section with id "container" to light blue.
function task3() {
  document.querySelector("#container").style.backgroundColor = "lightblue";
}

// 4. Select a heading (h1) with id "mainTitle" and change its color to red.
function task4() {
  document.querySelector("#mainTitle").style.color = "red";
}

// 5. Get the number from an input with id "num1" and show it inside a paragraph with id "output".
function task5() {
  const num = document.querySelector("#num1").value;
  document.querySelector("#output").innerHTML = num;
}

// 6. Select a button with class "submit-btn" and log "Button Clicked" to the console when it's clicked.
function task6() {
  console.log("Button Clicked");
}

// 7. Get values from two inputs with ids "first" and "second", add them (as numbers), and show the result in a span with id "sum".
function task7() {
  const first = parseFloat(document.querySelector("#first").value);
  const second = parseFloat(document.querySelector("#second").value);
  const sum = first + second;
  document.querySelector("#sum").innerHTML = isNaN(sum) ? "Invalid input" : sum;
}

// 8. Change the text of a paragraph with class "description" to "Updated successfully".
function task8() {
  const para = document.querySelector(".description");
  para.innerHTML = "Updated successfully";
}

// 9. Select a div with id "box" and set its width to 200px and background color to green.
function task9() {
  const box = document.querySelector("#box");
  box.style.width = "200px";
  box.style.backgroundColor = "green";
}

// 10. Get the email entered in an input with id "email" and print it in the console.
function task10() {
  const email = document.querySelector("#email").value;
  console.log(email);
}

// 11. Select a paragraph and update its font size to 24px.
function task11() {
  const para = document.querySelector("#fontPara");
  para.style.fontSize = "24px";
}

// 12. On button click, get a name from input "fullName" and set the text "Hello, [name]" inside a div "greeting".
function task12() {
  const name = document.querySelector("#fullName").value;
  document.querySelector("#greeting").innerHTML = `Hello, ${name}`;
}

// 13. Select an image with id "profilePic" and change its src to another image URL.
function task13() {
  const image = document.querySelector("#profilePic");
  image.src = "2.jpg";
}

// 14. Change the text color of all elements with class "highlight" to orange. (Hint: You’ll need querySelectorAll for multiple)
function task14() {
  const highlights = document.querySelectorAll(".highlight");
  highlights.forEach(el => {
    el.style.color = "orange";
  });
}

// 15. Select a checkbox with id "agree" and check whether it is checked or not, then display "Agreed" or "Not Agreed" in a paragraph.
function task15() {
  const agreed = document.querySelector("#agree").checked;
  document.querySelector("#checkStatus").innerHTML = agreed ? "Agreed" : "Not Agreed";
}

// 16. Get the selected value from a dropdown (select element) with id "options" and display it in "selectedValue" span.
function task16() {
  const value = document.querySelector("#options").value;
  document.querySelector("#selectedValue").innerHTML = value;
}

// 17. When a button is clicked, show the current date and time inside a paragraph with id "dateTime".
function task17() {
  const now = new Date();
  document.querySelector("#dateTime").innerHTML = now.toLocaleString();
}

// 18. Select a paragraph with id "togglePara" and hide it (set display: none).
function task18() {
  document.querySelector("#togglePara").style.display = "none";
}

// 19. Get a user’s age from an input with id "age" and display "Eligible" if age >= 18, else "Not Eligible" in a span.
function task19() {
  const age = parseInt(document.querySelector("#age").value);
  document.querySelector("#eligibility").innerHTML = age >= 18 ? "Eligible" : "Not Eligible";
}

// 20. When a button is clicked, clear the value of an input with id "searchBox".
function task20() {
  document.querySelector("#searchBox").value = "";
}
