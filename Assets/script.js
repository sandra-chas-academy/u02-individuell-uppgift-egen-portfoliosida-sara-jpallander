document.addEventListener('DOMContentLoaded', function() {

    let menuBtn = document.getElementById('menu-btn');
    const navList = document.getElementById('nav-list');
    const emailModule = document.getElementById('email-module');
    const emailLogo = document.getElementById('email-logo');

    let menuHidden = true;

    menuBtn.addEventListener('click', function() {

        if(menuHidden) {
            
            navList.style.display = "block";
            menuBtn.innerHTML = "▲";
            menuHidden = false;

        } else {
            navList.style.display = "none";
            menuBtn.innerHTML = "▼";
            menuHidden = true;
        }
        
  
        console.log("click!");
    });
    
    emailLogo.addEventListener('mouseenter', function () {
        emailModule.style.display = "block";
    });

    emailLogo.addEventListener('mouseleave', function () {
        emailModule.style.display = "none";
    });

});