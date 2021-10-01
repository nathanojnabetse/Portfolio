//===================================== DARK THEME =========================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// PREVEIOSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

//We need to validate if the user has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //ADD or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("Theme setting works!")

//================================= MENU SHOW & HIDE ===========================================
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ================  MENU SHOW  =============
/*  Validate if the constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 

// ================  MENU HIDE  =============
/*  Validate if the constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} 

console.log("Menu and setting working!")
//================================= REMOVE MENU PROFILE ===========================================
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on nav__links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("Remove menu profile is working!")

//================================= Typeriter Effect ===========================================

new Typewriter('#typewriter', {
  strings: ['Jonathan Jaramillo', 'Electronic and IT Engineer',  'Software developer', 'BI & Data Analyst' ],
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("Typewritter is working!")

//================================= more info ===========================================

const targetDiv = document.getElementById("moreinfo");
const btn = document.getElementById("btninfo");

btn.onclick = function(){
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        btn.innerText="Show more...";
      } else {
        targetDiv.style.display = "block";
        btn.innerText="Show less"; 
      }
};