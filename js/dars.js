/* for (schetchik; shart true; schetchikniO'zgartirish) {
  amal
} */

/* var schetchik = 0;
while (schetchik <= 100) {
  console.log(`Raqam = ${schetchik}`);
  schetchik++;
}
 */

/* for (var i = 0; i <= 100; i++) {
  // console.log('Raqam = ' + i);

  if (i === 13) {
    // continue;
    break;
  }

  console.log(`Raqam = ${i}`);
} */

/*
Bu biji.
for (var i = 0; i > -1; i++) {
  console.log(i);
}
 */

/* for (;;) {
  console.log('Salom. Shox. Xursandman.');
} */


/* var talk = function () {
  console.log('bla bla');
};

talk();


var callSunnatillo = function () {
  console.log('Salom. Mening ismim Sunnatulloh.');
};

callSunnatillo();


var findSquare = function (number) {
  return number * number;
};
console.log(findSquare(5));


var multiply = function (a, b) {
  return a * b;
};
console.log(multiply(5, 10));


var greet = function (name) {
  console.log(`Assalomu alaykumm, ${name}`);
};

var username = prompt('Ismingiz nima edi?');

var makeUppercase = function (text) {
  return text.toUpperCase();
};

var reverseText = function (text) {
  return text.split('').reverse().join('');
};

var hurmatQil = function (name) {
  return `${name} oka`;
};

console.log(hurmatQil('Abdulloh'));

greet(reverseText(makeUppercase(hurmatQil(username)))); */

/*
ism
familiya
manzil
elektron pochta
uy teplon
mobil teplon
*/

var person = {
  name: 'Nurmuhammad',
  surname: 'Mahmudov',
  age: 20,
  favoriteColor: 'darkblue',
  favoriteMovie: {
    title: 'Osmondagi bolalar',
    year: 2000,
    director: 'Zulfiqor Musoqov',
    mainCharacters: [
      {
        name: 'Hamdam',
        info: 'Nonvoy, yaxshi bola'
      },
      {
        name: 'Baxtiyor',
        info: 'Boy bola, Maykl Jekson, dumaloq'
      },
      {
        name: 'Javohir',
        info: 'Karatist'
      },
      {
        name: 'Xurshid',
        info: 'Rejissorning o\'gli'
      }
    ]
  }
};

/* var users = ['Ali', 'Vali'];
for (var i = 0; i < users.length; i++) {
  console.log(users[i]);
} */

for (var i = 0; i < person.favoriteMovie.mainCharacters.length; i++) {
  console.log(person.favoriteMovie.mainCharacters[i].name + ': ' + person.favoriteMovie.mainCharacters[i].info);
}


var room = {
  title: 'Android xona',
  hasAC: true,
  seats: 13,
  equipments: ['Projector', 'Rozetka', 'Udlinitel', 'Doska', 'Jalyuzi'],
  size: '3x4',
  windows: 1,
  color: 'Colorful'
};

room.color = 'white';
room.hasAC = false;

var user = {
  name: 'Nurmuhammad',
  surname: 'Mahmudov',
  age: 20
};

var laptop = {
  model: 'HP',
  memory: '6GB',
  storage: [
    {
      type: 'SSD',
      size: '128GB'
    },
    {
      type: 'HDD',
      size: '1TB'
    }
  ],
  webcam: '2MP',
  cpu: 'Intel Core i3 7',
  screenSize: '15.6',
  gpu: false,
  touchpadKeys: true,
  os: [
    {
      type: 'Linux',
      title: 'Ubuntu',
      version: '20.04'
    }, {
      type: 'Windows',
      title: 'Windows 10 Pro',
      version: '10'
    }
  ],
  games: ['CS 1.6', 'Ice Tower']
};

var games = [];
