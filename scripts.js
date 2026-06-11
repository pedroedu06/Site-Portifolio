// ===== i18n dictionary (pt-BR default, en-US toggle) =====
const I18N = {
  pt: {
    nav_home: "home",
    nav_projects: "projetos",
    nav_about: "sobre",
    nav_skills: "habilidades",
    nav_contact: "Contato",
    hero_tag: "FullStack Developer",
    hero_hello: "Olá, eu sou o",
    hero_typed: ["dev fullstack em formação", "estudante de Eng. de Software", "apaixonado por tecnologia", "sempre aprendendo algo novo"],
    scroll_hint: "↓ scroll",
    sec_projects: "projetos",
    sec_projects_comment: "// coisas que eu construí",
    sec_projects_sub: "Uma seleção dos meus projetos — de sites e apps a experimentos com novas tecnologias. Cada um me ensinou algo novo.",
    p1_desc: "Site para upload de arquivos em localhost. Estático por conta das limitações de ambiente — veja o GitHub para mais detalhes.",
    p2_desc: "Aplicação que consulta o clima de qualquer cidade em tempo real via APIs.",
    p3_desc: "Sistema em TypeScript para encurtar URLs de forma rápida e prática.",
    p4_desc: "App desktop para baixar vídeos do YouTube, usando yt-dlp e Redis.",
    p5_desc: "Aplicativo portátil para criar e compilar documentos em LaTeX.",
    p6_desc: "Machine Learning implementado do zero em C. Em produção — em breve no GitHub!",
    p6_title: "ml-em-c",
    btn_github: "GitHub",
    wip: "em breve",
    sec_about: "sobre mim",
    sec_about_comment: "// quem está por trás do código",
    about_bio_1: "Olá! Esse sou eu, o ",
    about_bio_2: "Pedro",
    about_bio_3: ". Futuro dev fullstack, movido por curiosidade — sempre buscando aprender mais, construir mais e ir além do tutorial.",
    fact_loc_k: "local:",
    fact_loc_v: "Brasília — DF",
    fact_edu_k: "formação:",
    fact_edu_v: "Cursando Engenharia de Software",
    fact_lang_k: "inglês:",
    fact_lang_v: "Avançado",
    fact_role_k: "função:",
    fact_role_v: "Desenvolvedor",
    btn_cv: "Download CV",
    sec_skills: "habilidades",
    sec_skills_comment: "// minha stack",
    sec_skills_sub: "Tecnologias que eu uso e estudo no dia a dia — sempre descobrindo ferramentas novas e expandindo a stack.",
    sk_js_lvl: "[████████░░]",
    sk_js: "Primeira linguagem que aprendi — base de tudo que eu construo na web.",
    sk_ts_lvl: "[███████░░░]",
    sk_ts: "JavaScript com tipagem — uso em projetos como o Encurtador de Links.",
    sk_go_lvl: "[██████░░░░]",
    sk_go: "Linguagem que venho estudando para construir backends rápidos e eficientes.",
    sk_react_lvl: "[██████░░░░]",
    sk_react: "Minha escolha para interfaces — uso em vários projetos pessoais.",
    sk_docker_lvl: "[██████░░░░]",
    sk_docker: "Containerizo meus projetos para ambientes de dev e deploy consistentes.",
    sk_pg_lvl: "[██████░░░░]",
    sk_pg: "Meu banco relacional preferido para persistência de dados.",
    sk_redis_lvl: "[█████░░░░░]",
    sk_redis: "Cache e filas — presente no meu app de download de vídeos.",
    sk_aws_lvl: "[█████░░░░░]",
    sk_aws: "Infraestrutura e deploy de aplicações na nuvem.",
    sec_contact: "contato",
    sec_contact_comment: "// vamos conversar",
    contact_label: "Contatos",
    contact_title: "Entre em contato comigo!",
    f_name: "nome:",
    f_name_ph: "Seu nome",
    f_email: "email:",
    f_email_ph: "seu@email.com",
    f_subject: "assunto:",
    f_subject_ph: "Sobre o que vamos falar?",
    f_message: "mensagem:",
    f_message_ph: "Escreva sua mensagem aqui...",
    f_send: "Enviar →",
    footer: "Feito com <span class=\"heart\">♥</span> por Pedro Eduardo · Brasília — DF",
    wip_alert: "Ainda em desenvolvimento!"
  },
  en: {
    nav_home: "home",
    nav_projects: "projects",
    nav_about: "about",
    nav_skills: "skills",
    nav_contact: "Contact",
    hero_tag: "FullStack Developer",
    hero_hello: "Hi, I'm",
    hero_typed: ["fullstack dev in training", "Software Engineering student", "passionate about technology", "always learning something new"],
    scroll_hint: "↓ scroll",
    sec_projects: "projects",
    sec_projects_comment: "// things I've built",
    sec_projects_sub: "A selection of my projects — from websites and apps to experiments with new technologies. Each one taught me something new.",
    p1_desc: "A site for uploading files on localhost. Static due to environment limitations — check GitHub for details.",
    p2_desc: "An app that checks real-time weather for any city via APIs.",
    p3_desc: "A TypeScript system to shorten URLs quickly and easily.",
    p4_desc: "A desktop app to download YouTube videos, built with yt-dlp and Redis.",
    p5_desc: "A portable app to create and compile LaTeX documents.",
    p6_desc: "Machine Learning implemented from scratch in C. In production — coming soon to GitHub!",
    p6_title: "ml-in-c",
    btn_github: "GitHub",
    wip: "coming soon",
    sec_about: "about me",
    sec_about_comment: "// the person behind the code",
    about_bio_1: "Hi! That's me, ",
    about_bio_2: "Pedro",
    about_bio_3: ". A future fullstack dev driven by curiosity — always looking to learn more, build more, and go beyond the tutorial.",
    fact_loc_k: "location:",
    fact_loc_v: "Brasília — DF, Brazil",
    fact_edu_k: "education:",
    fact_edu_v: "Software Engineering student",
    fact_lang_k: "english:",
    fact_lang_v: "Advanced",
    fact_role_k: "role:",
    fact_role_v: "Developer",
    btn_cv: "Download CV",
    sec_skills: "skills",
    sec_skills_comment: "// my stack",
    sec_skills_sub: "Technologies I use and study every day — always discovering new tools and growing the stack.",
    sk_js_lvl: "[████████░░]",
    sk_js: "The first language I learned — the foundation of everything I build on the web.",
    sk_ts_lvl: "[███████░░░]",
    sk_ts: "JavaScript with types — used in projects like my URL Shortener.",
    sk_go_lvl: "[██████░░░░]",
    sk_go: "The language I've been studying to build fast, efficient backends.",
    sk_react_lvl: "[██████░░░░]",
    sk_react: "My go-to for interfaces — used across several personal projects.",
    sk_docker_lvl: "[██████░░░░]",
    sk_docker: "I containerize my projects for consistent dev and deploy environments.",
    sk_pg_lvl: "[██████░░░░]",
    sk_pg: "My relational database of choice for data persistence.",
    sk_redis_lvl: "[█████░░░░░]",
    sk_redis: "Caching and queues — powering my video download app.",
    sk_aws_lvl: "[█████░░░░░]",
    sk_aws: "Cloud infrastructure and application deployment.",
    sec_contact: "contact",
    sec_contact_comment: "// let's talk",
    contact_label: "Contacts",
    contact_title: "Get in touch with me!",
    f_name: "name:",
    f_name_ph: "Your name",
    f_email: "email:",
    f_email_ph: "you@email.com",
    f_subject: "subject:",
    f_subject_ph: "What shall we talk about?",
    f_message: "message:",
    f_message_ph: "Write your message here...",
    f_send: "Send →",
    footer: "Made with <span class=\"heart\">♥</span> by Pedro Eduardo · Brasília — DF",
    wip_alert: "Still in development!"
  }
};

let currentLang = localStorage.getItem("pedro_portfolio_lang") || "pt";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("pedro_portfolio_lang", lang);
  document.documentElement.lang = lang === "pt" ? "pt-br" : "en";
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) { el.innerHTML = dict[key]; }
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] !== undefined) { el.placeholder = dict[key]; }
  });
  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  restartTyping();
}

// ===== typing effect =====
let typeTimer = null;
function restartTyping() {
  if (typeTimer) { clearTimeout(typeTimer); }
  const el = document.getElementById("typed-text");
  if (!el) { return; }
  const phrases = I18N[currentLang].hero_typed;
  let pi = 0, ci = 0, deleting = false;

  function tick() {
    const phrase = phrases[pi];
    if (!deleting) {
      ci++;
      el.textContent = phrase.slice(0, ci);
      if (ci === phrase.length) {
        deleting = true;
        typeTimer = setTimeout(tick, 2000);
        return;
      }
      typeTimer = setTimeout(tick, 55);
    } else {
      ci--;
      el.textContent = phrase.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        typeTimer = setTimeout(tick, 350);
        return;
      }
      typeTimer = setTimeout(tick, 28);
    }
  }
  el.textContent = "";
  tick();
}

// ===== scroll reveal =====
function initReveal() {
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visible"); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { obs.observe(el); });
}

// ===== confetti scatter =====
function initConfetti() {
  const host = document.querySelector(".confetti");
  if (!host) { return; }
  for (let i = 0; i < 26; i++) {
    const s = document.createElement("span");
    s.style.left = (Math.random() * 100) + "%";
    s.style.top = (8 + Math.random() * 84) + "%";
    s.style.animationDelay = (Math.random() * 7) + "s";
    s.style.animationDuration = (5 + Math.random() * 6) + "s";
    const sc = 0.5 + Math.random() * 1.1;
    s.style.width = (10 * sc) + "px";
    s.style.height = (10 * sc) + "px";
    s.style.opacity = 0.25 + Math.random() * 0.5;
    host.appendChild(s);
  }
}

// ===== carousel =====
function moveCarousel(dir) {
  const c = document.querySelector(".carousel");
  const card = c.querySelector(".term-card");
  const gap = 28;
  c.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
}

// ===== misc =====
function wipAlert() { alert(I18N[currentLang].wip_alert); }

function downloadCurriculo(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// nav smooth scroll with fixed-header offset
function initNav() {
  document.querySelectorAll(".js-link").forEach(function (link) {
    link.addEventListener("click", function (ev) {
      ev.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
  });
  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.dataset.lang); });
  });
}

function initTheme() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("light");
  btn.addEventListener("click", function () {
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initNav();
  initReveal();
  initConfetti();
  applyLang(currentLang);
  initTheme();
});
