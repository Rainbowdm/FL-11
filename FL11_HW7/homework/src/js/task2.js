let askUser;
let random;
let maxAttempts = 3;
let minAttempts;
let maxNumber = 8;
let minNumber = 0;
let firstPrize = 100;
let totalPrize = 0;
let start = confirm('Do you want to play a game?');
if (start === false) {
    alert('You did not become a billionaire, but can.');
} else if (start === true) {
    do {
        let prize;
        let pocketAdder = 4;
        let prizeMultiplier = 2;
        let fullPrize = 1;
        let halfPrize = 2;
        let quarterPrize = 4;
        do {
            random = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
            for (minAttempts = maxAttempts; minAttempts > 0; minAttempts--) {
                askUser = Number(window.prompt(
                    'Choose a roulette pocket number from ' + minNumber + ' to ' + maxNumber +
                    '\nAttempts left: ' + minAttempts + '\nTotal prize: ' + totalPrize + '$' +
                    '\nPossible prize on current attempt: ' + firstPrize + '$'));
                console.log(random);
                console.log(askUser);
                if (askUser === random) {
                    break;
                }
            }
            if (minAttempts === 0) {
                break;
            } else {
                if (minAttempts === maxAttempts) {
                    prize = fullPrize;
                } else if (minAttempts === halfPrize) {
                    prize = halfPrize;
                } else {
                    prize = quarterPrize;
                }
                totalPrize = totalPrize + firstPrize / prize;
            }
            if (!confirm('Congratulation, you won!\n' + 'Your prize is: ' + totalPrize + '$.\n' +
                    'Do you want to continue?')) {
                break;
            }
            maxNumber = maxNumber + pocketAdder;
            firstPrize = firstPrize * prizeMultiplier;
        } while (start === true);
        alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
    } while (confirm('Do you want to play again?'));
}