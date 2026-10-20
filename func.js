document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("greetForm");
    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const errorBox = document.getElementById("errorBox");
    const resultBox = document.getElementById("resultBox");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        errorBox.textContent = "";
        resultBox.hidden = true;
        resultBox.className = "result";
        resultBox.textContent = "";

        const name = nameInput.value;
        const ageRaw = ageInput.value;

        if (name.trim().length < 2) {
            errorBox.textContent = "Имя должно быть не менее 2 символов!";
            return;
        }
        if (ageRaw.trim() === "") {
            errorBox.textContent = "Введите возраст!";
            return;
        }
        const age = Number(ageRaw);
        if (isNaN(age)) {
            errorBox.textContent = "Возраст должен быть числом!";
            return;
        }
        if (age < 0) {
            errorBox.textContent = "Возраст не может быть отрицательным!";
            return;
        }
        if (!Number.isInteger(age)) {
            errorBox.textContent = "Возраст должен быть целым числом!";
            return;
        }

        const userName = name.trim();

        const currentHour = new Date().getHours();
        let greeting;
        if (currentHour >= 5 && currentHour < 12) {
            greeting = "Доброе утро";
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = "Добрый день";
        } else if (currentHour >= 18 && currentHour < 23) {
            greeting = "Добрый вечер";
        } else {
            greeting = "Доброй ночи";
        }

        let message = `${greeting}, ${userName}!`;

        if (age < 18) {
            const yearsL = 18 - age;
message += `\nК сожалению, вы не прошли по возрасту. Попробуйте снова через ${yearsL}`;
            resultBox.classList.add("fail");
        } else {
            message += `\nПоздравляем! Вы прошли по возрасту.`;
            resultBox.classList.add("success");
        }
        resultBox.textContent = message;
        resultBox.hidden = false;
    });
});