var elFizzBuzzForm = document.querySelector('.js-fizzbuzz-form');
var elFizzBuzzFormInput = elFizzBuzzForm.querySelector('.js-fizzbuzz-form-input');

var elResults = document.querySelector('.js-results');
var elFizzResult = elResults.querySelector('.js-fizz-result');
var elFizzNumbers = elResults.querySelector('.js-fizz-numbers');
var elBuzzResult = elResults.querySelector('.js-buzz-result');
var elBuzzNumbers = elResults.querySelector('.js-buzz-numbers');
var elFizzBuzzResult = elResults.querySelector('.js-fizzbuzz-result');
var elFizzBuzzNumbers = elResults.querySelector('.js-fizzbuzz-numbers');


// Form submit bo'lganda
if (elFizzBuzzForm) {
  elFizzBuzzForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    // Inputdan ma'lumotni olamiz Numberda
    var userNumber = Number(elFizzBuzzFormInput.value);

    // Arraylarni ochamiz (fizzlar, buzzlar, fizzbuzzlar)
    var fizzNumbers = [];
    var buzzNumbers = [];
    var fizzBuzzNumbers = [];

    // Kiritilgan son (inclusive)gacha foor loopda aylanib chiqiladi
    for (var i = 1; i <= userNumber; i++ ) {
      if (i % 15 === 0) {
        fizzBuzzNumbers.push(i);
      } else if (i % 3 === 0) {
        fizzNumbers.push(i);
      } else if (i % 5 === 0) {
        buzzNumbers.push(i);
      }
    }

    // Har bir arrayda nechta qiymat borligini ko'rsatamiz
    elFizzResult.textContent = fizzNumbers.length;
    elBuzzResult.textContent = buzzNumbers.length;
    elFizzBuzzResult.textContent = fizzBuzzNumbers.length;

    // Har bir natija arrayini matnda ko'rsatamiz
    elFizzNumbers.textContent = fizzNumbers.join(', ');
    elBuzzNumbers.textContent = buzzNumbers.join(', ');
    elFizzBuzzNumbers.textContent = fizzBuzzNumbers.join(', ');
  });
}