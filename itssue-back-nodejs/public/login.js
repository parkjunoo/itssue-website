const idInput = document.querySelector(".id");
const passwordInput = document.querySelector(".password");
const loginButton = document.querySelector("button");

loginButton.addEventListener("click", login);

function login() {
    const req = {
        id: idInput.value,
        password: passwordInput.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    }).then((res) => res.json()).then((res) => console.log(res)) ;
}
