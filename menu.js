let count = 1;
document.getElementById("radio1").checked = true

setInterval(function(){
    nextImage();
}, 3500)

function nextImage(){
    count ++;
    
    if(count>4){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}


window.addEventListener("scroll", function() {
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 400)
})

const hamburguer = document.querySelector(".hamburguer");

const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));
