{
  "use strict";
  const capify = str => [str.charAt(0).toUpperCase(), str.substring(1)].join("");
  const processWords = (fn, str) => str.split(" ").map(fn).join(" ");
  const getValue = () => {
    let something = prompt("Give me something to capitalize");
    alert(processWords(capify, something));
  }
  document.getElementById("main_button").addEventListener("click", getValue);
}
