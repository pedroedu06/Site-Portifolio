function clickAlert() {
    alert("Ainda em desenvolvimento!")
}

// funcoes de click

function goEncurtador() {
    window.location.href = "https://github.com/pedroedu06/Encurtador-de-url"
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


function goDownloadVideos() {
    window.location.href = "https://github.com/pedroedu06/DownloadVideos"
}

function goEncurtador() {
    window.location.href = "https://github.com/pedroedu06/Encurtador-de-url"
}

function goLatex() {
    window.location.href = "https://github.com/pedroedu06/app-de-compilar-latex"
}

//animacao do site
window.sr = ScrollReveal({ reset: true });

sr.reveal('.hidden', { duration: 2000 })


//rede sociais

function insta() {
    window.location.href = "https://www.instagram.com/pedro.0_4/";
}

function github() {
    window.location.href = "https://github.com/pedroedu06";
}

function linked() {
    window.location.href = "https://www.linkedin.com/in/pedro-eduardo-dev/"
}

//aba navbar

let links = document.querySelectorAll('.js-link');
let section = document.querySelectorAll('.section')



function scrollSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');

    const sections = document.querySelector(href)

    let topSection = sections.offsetTop - 50;

    window.scrollTo({
        top: topSection, behavior: "smooth"
    })
}


links.forEach(link => {
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

// Carrossel de Projetos (Movimento por Página/Seção)
function moveCarousel(direction) {
    const container = document.querySelector('.projetos');
    const firstCard = container.querySelector('.projectComponents');
    if (firstCard) {
        const style = window.getComputedStyle(container);
        const gap = parseInt(style.gap) || 0;
        const cardWidth = firstCard.offsetWidth;
        
        // Salto fixo de 1320px para alinhar as seções (3 blocos de uma vez)
        container.scrollBy({
            left: direction * 1320, 
            behavior: 'smooth'
        });
    }
}
