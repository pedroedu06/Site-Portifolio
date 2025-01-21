//animacao do site

const element = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver ((entries) => {
entries.forEach((entry) =>{
    if (entry.isIntersecting === true){
        entry.target.classList.add('show')
    } else {
        entry.target.classList.remove('show')
    }
}) 
})

element.forEach((element) =>    
    observer.observe(element)
)

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