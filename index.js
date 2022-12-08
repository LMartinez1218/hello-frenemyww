let form = document.getElementById("name-form");
let response = document.getElementById("computer-response");
let input = document.getElementById("user-input");
let enemyList = ["lex luthor", "voldemort", "palpatine", "thanos"];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let answer = input.value;
    if(enemyList.includes(answer)) {
        response.textContent = `go away!`
    } else {
        response.textContent = `welcome!`
    }
    form.reset();
})

