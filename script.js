function abrirmenu(){
    let Barramenuaberto = document.getElementById('barra-menu');
    
    if (Barramenuaberto.style.width == "0px"){
        Barramenuaberto.style.width = "180px";
    }else{
        Barramenuaberto.style.width = "0px";
    }
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav [href*=' + id + ']').classList.add('active');
            });
        };
    });
};

function sobre(){
   window.location.href = "index.html#sobremim";
}

function projetos(){
    window.location.href = "index.html#projetos";
}

function servicos(){
    window.location.href = "index.html#servicos";
}

let darkmodeicon = document.querySelector('#darkmodeicon');

darkmodeicon.onclick = () => {
    darkmodeicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}