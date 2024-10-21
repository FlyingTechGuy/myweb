setTimeout(function() {
    document.querySelector("body").classList.add("show");
}, 500);

window.addEventListener('scroll', function() {
    // sticky navbar:
    document.getElementById('navCont').classList.toggle("sticky", window.scrollY > 0);
    
    // paralex home bg effect:
    const valueScroll = window.scrollY;
    document.getElementById('homeBg').style.top = valueScroll * 0.6 + 'px';
    if (window.innerWidth <= 880) {
        document.getElementById('homeTxtBox').style.top = valueScroll * 0.80 + 'px';
    } else {
        document.getElementById('homeTxtBox').style.top = valueScroll * 0.75 + 'px';
    }
})

function textTypingEffect(element, text, i = 0) {
    element.innerHTML += text[i];
    if (i === text.length-1) {return;}
    setTimeout(() => textTypingEffect(element, text, i+1), 100);
}
window.addEventListener('load', function() {
    setTimeout(function() {
        textTypingEffect(document.getElementById('homeTitle'), "Hello! I'm");
    }, 1000);
    setTimeout(function() {
        textTypingEffect(document.getElementById('homeMain'), "Guy Shemesh");
    }, 2500);
    setTimeout(function() {
        textTypingEffect(document.getElementById('homeSub1'), "Web Developer, Video Editor,");
    }, 4000);
    setTimeout(function() {
        textTypingEffect(document.getElementById('homeSub2'), "Drone Photographer");
    }, 7000);
})

function toggleMenu() {
    const hamburger = document.getElementById('hamburgerBar');
    const sideBar = document.getElementById('sideBar');
    hamburger.classList.toggle("active");
    sideBar.classList.toggle("active");
}

const textarea = document.getElementById('textarea');
textarea.addEventListener("input", function() {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight /*+ 2*/ + "px";
});