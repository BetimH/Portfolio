function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu2").style.display = "block";
    document.getElementsByClassName("text")[0].style.display = "none";
   document.getElementsByClassName("main")[0].style.backgroundColor = "rgba(0,0,0,0.8)";


}
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu2").style.display = "none";
    document.getElementsByClassName("text")[0].style.display = "block";
    document.getElementsByClassName("main")[0].style.backgroundColor = "rgba(0,0,0,0.5)";
  
}





window.addEventListener('scroll', () => {
    const target = document.querySelector('.text');
     // Replace '.text' with the element you want to fade out
    if (window.scrollY > 100) { // Adjust scroll threshold as needed
        target.classList.add('scroll-fade-out');
    } else {
        target.classList.remove('scroll-fade-out');
    }
});

window.addEventListener('scroll', () => {
    const target = document.querySelector('.main');
     // Replace '.text' with the element you want to fade out
    if (window.scrollY > 100) { // Adjust scroll threshold as needed
        target.classList.add('scroll-fade-out');
    } else {
        target.classList.remove('scroll-fade-out');
    }
});



window.addEventListener('scroll', () => {
    const target = document.querySelector('.images');
     // Replace '.text' with the element you want to fade out
    if (window.scrollY > 200) { // Adjust scroll threshold as needed
        target.classList.add('slideUp');
    } else {
        target.classList.remove('slideUp');
    }
});

window.addEventListener('scroll', () => {
    const target = document.querySelector('.text2');
     // Replace '.text' with the element you want to fade out
    if (window.scrollY > 200) { // Adjust scroll threshold as needed
        target.classList.add('slideUp');
    } else {
        target.classList.remove('slideUp');
    }
});

window.addEventListener('scroll', () => {
    const target = document.querySelector('.text1');
     // Replace '.text' with the element you want to fade out
    if (window.scrollY > 200) { // Adjust scroll threshold as needed
        target.classList.add('slideUp');
    } else {
        target.classList.remove('slideUp');
    }
});


window.addEventListener('scroll', () => {
    const target = document.querySelector('.main3');
     // Replace '.text' with the element you want to fade out
    if (window.scrollY > 300) { // Adjust scroll threshold as needed
        target.classList.add('slideUp');
    } else {
        target.classList.remove('slideUp');
    }
});

window.addEventListener('scroll', () => {
    const target = document.querySelector('.main4');
     // Replace '.text' with the element you want to fade out
    if (window.scrollY > 500) { // Adjust scroll threshold as needed
        target.classList.add('fadeIn');
    } else {
        target.classList.remove('fadeIn');
    }
});
