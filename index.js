let rightPrice = Math.floor(Math.random() * 100) + 1;

const submitButton = document.querySelector("button[type=submit]");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const input = document.querySelector("input");

  if (input.value !== "") {
    const inputValueAsInt = parseInt(input.value);

    input.value = "";

    const p = document.querySelector("p");

    p.prepend(document.createElement("br"));

    if (inputValueAsInt === rightPrice) {
      p.prepend(inputValueAsInt + " : bien joué 🎉");
    } else if (inputValueAsInt < rightPrice) {
      p.prepend(inputValueAsInt + " : c'est plus !!!");
    } else if (inputValueAsInt > rightPrice) {
      p.prepend(inputValueAsInt + " : c'est moins !!!");
    }
  }
});

const resetButton = document.querySelector("button[type=reset]");

resetButton.addEventListener("click", function (event) {
  event.preventDefault();

  document.querySelector("p").replaceChildren();
  document.querySelector("input").value = "";

  rightPrice = Math.floor(Math.random() * 100) + 1;
});
