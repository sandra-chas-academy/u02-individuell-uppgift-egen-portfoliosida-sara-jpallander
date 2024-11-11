document.addEventListener('DOMContentLoaded', function() {

    let menuBtn = document.getElementById('menu-btn');
    const navList = document.getElementById('nav-list');
    const emailModule = document.getElementById('email-module');
    const emailLogo = document.getElementById('email-logo');

    let menuHidden = true;

    const url = "./Assets/cv.json";

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

    async function getCV() {

        try {

            const response = await fetch(url);

            if(!response.ok) {

                throw new Error(response.status);
            };

            const data = await response.json();

            console.log(data.work);
            console.log(data.education);

        } catch (error) {
            
            console.log(error)
        };

    };

    getCV();

});