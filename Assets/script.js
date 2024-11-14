document.addEventListener('DOMContentLoaded', function() {

    let menuBtn = document.getElementById('menu-btn');
    const navList = document.getElementById('nav-list');
    const emailModule = document.getElementById('email-module');
    const emailLogo = document.getElementById('email-logo');

    const workSection = document.getElementById('experience-work');
    const educationSection = document.getElementById('experience-education');

    const hireMeBtn = document.getElementById('hire-me-btn');
    const hireMeModule = document.getElementById('hire-me-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    let menuHidden = true;
    let modalHidden = true;

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
    
    emailLogo.addEventListener('click', function () {
        emailModule.style.display = "block";

        setTimeout(() => {
            emailModule.style.display = "none";
        }, 5000);
    });

    /* emailLogo.addEventListener('mouseleave', function () {
        emailModule.style.display = "none";
    }); */

    const getCV = async (exURL) => {

        try {

            const response = await fetch(exURL);

            if(!response.ok) {

                throw new Error(response.status);
            };

            const data = await response.json();

            return data;

        } catch (error) {
            
            console.log(error)
        };

    };

    const showCV = async () => {

        const data = await getCV(url);

        const workExp = data.work;
        const educationExp = data.education;
        console.log(workExp);
        console.log(educationExp);

        //console.log(workExp.company);

        workExp.forEach((item) => {

            const company = item.company;
            const title = item.title;
            const duration = item.duration;
            const tempo = item.tempo;

            // console.log(company, title, duration, tempo)

            const container = document.createElement('div');
            container.classList.add('work-container');
            const section = document.createElement('section');
            section.classList.add('left');

            const titleElement = document.createElement('h3');
            titleElement.innerHTML = title;
            const companyElement = document.createElement('p');
            companyElement.classList.add('cv-detail');
            companyElement.innerHTML = company;
            
            section.appendChild(titleElement);
            section.appendChild(companyElement);
            container.appendChild(section);
            //workSection.appendChild(section);

            const div2 = document.createElement('div');
            div2.classList.add('right');

            const tempoElement = document.createElement('p');
            tempoElement.classList.add('tempo');
            tempoElement.innerHTML = tempo;
            const durationElement = document.createElement('p');
            durationElement.classList.add('cv-detail');
            durationElement.innerHTML = duration;

            const hr = document.createElement('hr');

            div2.appendChild(tempoElement);
            div2.appendChild(durationElement);
            container.appendChild(div2);
            workSection.appendChild(container);
            workSection.appendChild(hr);
        }); 

        educationExp.forEach((item) => {

            const school = item.school;
            const major = item.major;
            const duration = item.duration;
            const tempo = item.tempo;

            // console.log(school, major, duration, tempo)

            const container = document.createElement('div');
            container.classList.add('education-container');
            const section = document.createElement('section');
            section.classList.add('left');

            const majorElement = document.createElement('h3');
            majorElement.innerHTML = major;
            const schoolElement = document.createElement('p');
            schoolElement.classList.add('cv-detail');
            schoolElement.innerHTML = school;
            
            section.appendChild(majorElement);
            section.appendChild(schoolElement);
            container.appendChild(section);

            const div2 = document.createElement('div');
            div2.classList.add('right');

            const tempoElement = document.createElement('p');
            tempoElement.classList.add('tempo');
            tempoElement.innerHTML = tempo;
            const durationElement = document.createElement('p');
            durationElement.classList.add('cv-detail');
            durationElement.innerHTML = duration;

            const hr = document.createElement('hr');

            div2.appendChild(tempoElement);
            div2.appendChild(durationElement);
            container.appendChild(div2);
            educationSection.appendChild(container);
            educationSection.appendChild(hr);

        }); 

    };

    showCV();

    hireMeBtn.addEventListener('click', function() {

        if(modalHidden) {

            hireMeModule.style.display = "block";
            modalHidden = false;
        };

        modalCloseBtn.addEventListener('click', function() {
            if (modalHidden === false) {
                hireMeModule.style.display = "none";
                modalHidden = true;
            }
        });
    });
});