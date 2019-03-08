
let status = false;

let navbtn = document.getElementById("nav-btn");
let sidenav = document.getElementById("sidenav");

console.log(status);
const opensidebar = () => {
    console.log("Sidebar");

    if(status == false){
        sidenav.classList.add("show");
    navbtn.classList.add("show");
    setTimeout(() => {status = true;}, 1);
   
    }

    if(status == true){
        navbtn.classList.remove("show");
        sidenav.classList.remove("show");
        status = false;
    }
}


AOS.init({
    duration: 1300
});



