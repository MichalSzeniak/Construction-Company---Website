import '../scss/main.scss';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


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

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navigation");

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__active');
    nav.classList.toggle('navigation__active');
  })


  //G-SAP

  // const about = document.querySelector(".about");
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
      gsap.fromTo(section.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
    trigger: section,
    start: 'top 80%',
  }})
  })


  // gsap.fromTo(about.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
  //   trigger: '.about',
  //   start: 'top 80%',
  //   markers: true,
  // }})