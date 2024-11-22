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

    const reposList = document.getElementById('repos-list');
    const expandBtn = document.getElementById('expand-btn');

    let menuHidden = true;
    let modalHidden = true;
    let listHidden = true;

    const url = "./Assets/cv.json";

    const gitAPI = "https://api.github.com/users/sara-jpallander/repos";


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
        const techStack = data.techstack;

        workExp.forEach((item) => {

            const company = item.company;
            const title = item.title;
            const duration = item.duration;
            const tempo = item.tempo;

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

        techStack.forEach((item) => {

            const language = item.language;

            const container = document.getElementById('tech-stack-container');

            const element = document.createElement('p');
            element.classList.add('item');
            element.innerHTML = language;
            container.appendChild(element);
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

    const getGitAPI = async (exURL) => {

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

    const showGitAPI = async () => {

        const data = await getGitAPI(gitAPI);

        let avatarUrl = "";

        data.forEach((item) => {

            let name = item.name.toUpperCase();
            let repoUrl = item.html_url;
            avatarUrl = item.owner.avatar_url;
        
            const a = document.createElement('a');
            const href = document.createAttribute('href');
            const target = document.createAttribute('target');
            const li = document.createElement('li');
            a.innerHTML = name;
            href.value = repoUrl;
            target.value = "_blank";
            a.setAttributeNode(href);
            a.setAttributeNode(target);
            li.appendChild(a);
            reposList.appendChild(li);

        });

        const placeholderImg = document.getElementById('placeholder-img');
        const avatar = document.createElement('img');
        const src = document.createAttribute('src');
        src.value = avatarUrl;
        avatar.setAttributeNode(src);
        avatar.classList.add("avatar");
        placeholderImg.replaceWith(avatar);
    };

    showGitAPI();

    expandBtn.addEventListener('click', function() {

        if(listHidden === true) {
            reposList.style.height = "fit-content";
            expandBtn.innerHTML = "Minimize";
            listHidden = false;
        } else if (listHidden === false) {
            reposList.style.height = "4rem";
            expandBtn.innerHTML = "Expand";
            listHidden = true;
        };
        
    });
});