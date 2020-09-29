import '../scss/main.scss';


console.log('HELLO 🚀')

//---

const usersAge = [20, 21, 23, 43];

usersAge.forEach(age => {
    return console.log(`w przyszłym roku użytkownik bedzie miał ${age + 1} lat`)
});

//---

// .map tworzy nową tablice 


const age = usersAge.map(age => age * 2);

console.log(age);

//---

const users = ["Michał", "Wiktor", "Łukasz"];

const newUser = "Wiesław";

const allUsers = users.concat(newUser);
console.log(allUsers);

//--- spread \/

const animals = ["rat", "cow"];

const newAnimal = "mouse";

const allAnimals = [...animals, newAnimal, "monkey"];

console.log(allAnimals);


const navigation = document.querySelector(".navigation");

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      navigation.classList.add("navigation__scroll")
    }
    else if (window.pageYOffset < 50) {
      navigation.classList.remove("navigation__scroll")
    }
  })