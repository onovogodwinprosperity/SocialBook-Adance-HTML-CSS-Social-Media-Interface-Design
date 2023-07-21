var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")== "light") {
    localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
} 

if(localStorage.getItem("theme")== "light"){
    darkBtn.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme")== "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}

else{
    localStorage.set
localStorage.setItem("theme", "dark");
}










// settingsmenu.addEventListener("onclick", settingsMenuToggle)

// var settingsmenu = document.querySelector(".settings-menu");
// var navUserIcon = document.querySelector(".nav-user-icon");

// function settingsMenuToggle() {
//   settingsmenu.classList.toggle("settings-menu-height");
// }

// navUserIcon.addEventListener("click", settingsMenuToggle);
