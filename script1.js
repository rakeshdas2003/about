let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist');



menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration:2600,
    delay:450,
    reset:true
});
sr.reveal('.centered-text',{delay:2000,origin:'top'});
sr.reveal('centered img',{delay:450,origin:'top'});
