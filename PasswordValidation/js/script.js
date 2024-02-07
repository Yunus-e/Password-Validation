var inputBox = document.querySelector(".input-box input");
var eyeIcon = document.querySelector(".input-box i");
var list = document.querySelectorAll(".list li");

eyeIcon.addEventListener("click", () => {
    if (inputBox.type == "password") {
        inputBox.type = "text";
        eyeIcon.className = "fa-regular fa-eye";
    }
    else {
        inputBox.type = "password";
        eyeIcon.className = "fa-solid fa-eye-slash";
    }
})

const regex = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[0-9]/, index: 1 },
    { regex: /[a-z]/, index: 2 },
    { regex: /[^A-Za-z0-9]/, index: 3 },
    { regex: /[A-Z]/, index: 4 },
]

inputBox.addEventListener("keyup", (e) => {
    regex.forEach(item => {
        const invalid = item.regex.test(e.target.value);
        var requirementList = list[item.index];
        if (invalid) {
            requirementList.firstElementChild.className = "fa-solid fa-check";
            requirementList.classList.add("valid");
        }
        else {
            requirementList.firstElementChild.className = "fa-solid fa-circle";
            requirementList.classList.remove("valid");
        }
    })
});
