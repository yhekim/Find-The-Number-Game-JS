const container = document.querySelector('.container');
const form = document.getElementById("form");
const numberInput = document.getElementById('number');
const btn = document.getElementById('check-btn');
const tries = document.getElementById('tries');
const output = document.getElementById('output');


const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
var counter = 0;


const guessing = () => {
    var number = numberInput.value;
    var number = Number(number);
    var message = '';
    if (isNaN(number) || number > 100 || number < 0 || number == "") {
        message = `Girdiğiniz değer 0 ile 100 arasında bir değer olmalıdır!!! `;
    } else {
        counter++;
        tries.innerHTML = `Number of Attempts: ${counter}`;
        if (randomNumber === number) {
            output.innerHTML = `Congratulations !!! ${counter}. denemenizde buldunuz.Atanan değer: ${randomNumber}`;
            btn.style.display = "none";

            container.innerHTML += `<button class="again-btn" id="again-btn" style=padding:"5px";>Replay</button>`;
            const againBtn = document.getElementById('again-btn');


            againBtn.addEventListener("click", () => location.reload())

        } else if (number < randomNumber) {
            form.reset();
            message = "You are close to the value!! Increase your guess.";

        } else if (number > randomNumber) {
            form.reset();
            message = "You are close to the value!! Decrease your guess.";
        }

    }
    return output.innerHTML = `${message}`;

}
btn.addEventListener("click", (e) => {
    e.preventDefault();
    guessing()

})