const grayPanel = document.querySelector("#jsPanel");

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.classList.add("quote-text");
redParagraph.textContent = "Hey, I'm red!";

const blueH3 = document.createElement("h3");
blueH3.classList.add("title");
blueH3.setAttribute("style", "color: blue;");
blueH3.textContent = "I'm a blue h3!";

const pinkContainer = document.createElement("div");
pinkContainer.classList.add("container");
pinkContainer.setAttribute(
  "style",
  "background: pink; border-radius: 5px; border: solid black;"
);

const pinkContainerH1 = document.createElement("h1");
pinkContainerH1.classList.add("title");
pinkContainerH1.textContent = "I'm a div!";

const pinkContainerParagraph = document.createElement("p");
pinkContainerParagraph.classList.add("title-caption");
pinkContainerParagraph.textContent = "ME TOO!";

const signUpButtons = document.querySelectorAll(".sign-up-button");
signUpButtons.forEach((signUpButton) => {
  signUpButton.addEventListener("click", function (e) {
    e.target.classList.add("sign-up-button-clicked");
  });
  signUpButton.addEventListener("click", () => {
    alert("you clicked the sign-up botton, so thank you.");
  });
});

//pinkContainer.children.setAttribute("style", "color: black;")

grayPanel.appendChild(redParagraph);
grayPanel.appendChild(blueH3);
pinkContainer.appendChild(pinkContainerH1);
pinkContainer.appendChild(pinkContainerParagraph);
grayPanel.appendChild(pinkContainer);
/*

  1  a <p> with red text that says “Hey I’m red!”
  2  an <h3> with blue text that says “I’m a blue h3!”
  3  a <div> with a black border and pink background color with the following elements inside of it:
    1    another <h1> that says “I’m in a div”
    2    a <p> that says “ME TOO!”
    3    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

*/
