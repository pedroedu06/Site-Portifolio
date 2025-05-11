function clickAlert(){
    alert("Ainda em desenvolvimento!")
}

// funcoes de click

function goPizza() {
    window.location.href = "https://github.com/pedroedu06/Pizza-Maker-"
}

function goPizzaDemo() {
    window.location.href = "https://pedroedu06.github.io/Pizza-Maker-/"
}

function goDropZone() {
    window.location.href = "https://github.com/pedroedu06/DropZone"
}

function goDropZoneDemo() {
    window.location.href = "https://drop-zone-tan.vercel.app"
}

function goWeather() {
    window.location.href = "https://github.com/pedroedu06/Weather-Check"
}

function goWeatherDemo() {
    window.location.href = "https://weather-check-topaz.vercel.app"
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

//donwloads 

function downloadCurriculo(url, filename) {

    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



