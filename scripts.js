function clickAlert(){
    alert("Ainda em desenvolvimento!")
}


function goPizza() {
    window.location.href = "https://github.com/pedroedu06/Pizza-Maker-"
}


//animacao do site
window.sr = ScrollReveal({reset: true});

sr.reveal('.hidden', {duration: 2000})


//rede sociais

function insta() {
    window.location.href = "https://www.instagram.com/pedro.0_4/";
} 

function github(){
    window.location.href = "https://github.com/pedroedu06";
} 

function linked() {
    window.location.href = "https://www.linkedin.com/in/pedro-eduardo-dev/"
}

//aba navbar

let links = document.querySelectorAll('.js-link');
let section = document.querySelectorAll('.section')



function scrollSection(event){
    event.preventDefault();
    
    const href = event.currentTarget.getAttribute('href');

    const sections = document.querySelector(href)

    let topSection = sections.offsetTop - 50;

    window.scrollTo({
        top: topSection, behavior: "smooth"
    })
}


links.forEach(link =>{
    link.addEventListener('click', scrollSection)
    console.log(link)
    
})

//aba de demo e git




//aba de precos