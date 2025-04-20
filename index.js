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
