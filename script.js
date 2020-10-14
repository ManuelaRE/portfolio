// typing effect //

const typeString = ['Hello!', 'Ola!', 'Salut!', 'Bonjour!'];
let  i = 0;
let count = 0
let selectedText = '';
let text = '';


(function type() {
    if (count == typeString.length) {
      count = 0;
    };
    selectedText = typeString[count];
    text = selectedText.slice(0, ++i);
    document.getElementById('greeting').innerHTML = text;
    if (text.length === selectedText.length) {
      count++;
      i = 0;
    }
    setTimeout(type, 600);
    sleep(300);
}());

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    }
    while (currentDate - date < milliseconds);
}


// Contact page - repeat with the interval of 2 seconds

const words = ['Clever', 'Interesting', 'Innovative', 'Diverse', 'Creative', 'Unique', 'Beautiful'];
const adjective = document.getElementById('clever');

const newWord = () => {
  const randomWord = Math.floor(Math.random() * words.length);
  adjective.innerHTML = words[randomWord];
}

let timerId = setInterval(newWord, 2000);


// hamburger menu


const burgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");

burgerMenu.addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("change");
});

navList.addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("change");
});



// navbar color change

const tagOne = document.querySelectorAll('.nav-list li a')[0];
const tagTwo = document.querySelectorAll('.nav-list li a')[1];
const tagThree = document.querySelectorAll('.nav-list li a')[2];

let windowHeight =window.innerHeight || (document.documentElement || document.body).clientHeight;

const runOnResize = () => {
  windowHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
}	

window.addEventListener("resize", runOnResize);

const runOnScroll = () => {
  if (document.body.scrollTop > windowHeight) {
    tagOne.style.color = "#0a464b";
    tagTwo.style.color = "#0a464b";
    tagThree.style.color = "#0a464b";
    } else {
      tagOne.style.color = "#f4f2ea";
      tagTwo.style.color = "#f4f2ea";
      tagThree.style.color = "#f4f2ea";
    }
}; 

window.addEventListener("scroll", runOnScroll);


// background color change on scroll



//get the height of the entire document
// function getDocHeight() {
//   const D = document;
//   return Math.max(
//       D.body.scrollHeight, D.documentElement.scrollHeight,
//       D.body.offsetHeight, D.documentElement.offsetHeight,
//       D.body.clientHeight, D.documentElement.clientHeight
//   )
// }

// const docheight = getDocHeight();
// console.log(docheight);

// const backgroundChange = () => {
//   if(document.body.scrollTop > docheight / 2) {
//     document.body.style.backgroundColor = "#ffca9f"  // last color
//   } else if (document.body.scrollTop > docheight / 3) {  
//     document.body.style.backgroundColor = "#fff2bf"
//   } else if (document.body.scrollTop > docheight / 4) {  
//     document.body.style.backgroundColor = "#fff2bf"
//   } else {
//     document.body.style.backgroundColor = "#0a464b" // first color
//   }
// }

// window.addEventListener("scroll", backgroundChange);