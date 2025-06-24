document.addEventListener('DOMContentLoaded', () => {
    console.log('Eve Kayser landing page cargado.');

    // --- Carrusel de Fondo ---
    const carouselImages = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;

    function showNextImage() {
        // Oculta la imagen actual
        carouselImages[currentImageIndex].classList.remove('active');

        // Calcula el índice de la siguiente imagen
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;

        // Muestra la siguiente imagen
        carouselImages[currentImageIndex].classList.add('active');
    }

    // Muestra la primera imagen al cargar
    if (carouselImages.length > 0) {
        carouselImages[currentImageIndex].classList.add('active');
        // Inicia el carrusel solo si hay imágenes
        setInterval(showNextImage, 5000); // Cambia cada 5 segundos
    }
    // --- Fin Carrusel de Fondo ---


    const teamMembersData = [
        {
            name: "Jorge Meneses",
            photo: "assets/img/team/jorgeimg.jpeg", // Replace with actual image path
            skills: [
                { name: "Java -> Springboot, JWT, Hibernate", percentage: 90 },
                { name: "Python-> flask, FastAPI", percentage: 90 },
                { name: "DOCKER, AWS", percentage: 70 },
                { name: "Version Control -> GIT , Bitbucket", percentage: 90 },
                { name: "Frontend -> HTML, CSS , JAVASCRIPT", percentage: 95 },
                { name: "Java Android and Kotlin whit XML-> Androidstudio , SDK, gradle and groove", percentage: 75 },
                { name: "Systems -> Windows, Linux", percentage: 85 },
                { name: "Responsive Design", percentage: 88 },
                { name: "DATABASES -> Relational -> SQLite, PostgreSQL, MySQL , NOT RELATIONAL - > Firebase and MongoDB", percentage: 75 }
            ]
        },
        {
            name: "Rodrigo Zabala",
            photo: "assets/img/team/Rodrigo.jpeg", // Replace with actual image path
            skills: [
                { name: "TypeScript", percentage: 92 },
                { name: "JavaScript", percentage: 80 },
                { name: "Next.js", percentage: 87 },
                { name: "DATABASES - > RELATIONAL -> PostgreSQL and MySQL , No relational -> Firebase(FireStore)", percentage: 70 },
                { name: "SEO Optimization", percentage: 85 }
            ]
        },
        {
            name: "Peter Osorio",
            photo: "assets/img/team/peter.jpeg", 
            skills: [
                { name: "JavaScript ,TypeScript and React", percentage: 90 },
                { name: "DATABASES -> PostgreSQL, SQL SERVER ", percentage: 88 },
                { name: "HTML, CSS ", percentage: 82 },
                { name: "Version Control (Git)", percentage: 93 }
            ]
        },
        {
            name: "Gregory Perozo",
            photo: "assets/img/team/gregory.jpeg", // Replace with actual image path
            skills: [
                { name: "Python -> Django", percentage: 95 },
                { name: "Ruby on Rails", percentage: 90 },
                { name: "API Integration", percentage: 88 },
                { name: "PostgreSQL", percentage: 70 }
            ]
        },
        {
            name: "Luis Miguel Cote",
            photo: "assets/img/team/luis.jpeg", // Replace with actual image path
            skills: [
                { name: "c, c++, c#, python, .net , Maui, flask and FastAPI", percentage: 95 },
                { name: "Databases NoSQL", percentage: 90 },
                { name: "Windows and Linux", percentage: 88 },
                { name: "dev in raspberry pi y de microcontroladores como esp32, esp8266, pic16f877A", percentage: 82 },
                { name: "Version Control (Git)", percentage: 93 }
            ]
        }
        
    ];

    const teamSection = document.querySelector('.team-section');
    const main = document.querySelector('main'); // Ensure main element exists

    // Only run this code if we are on the work.html page (i.e., .team-section exists)
    if (teamSection && main) {
        teamMembersData.forEach((member, index) => {
            // Create team member card
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('team-member');
            memberDiv.innerHTML = `
                <div class="member-photo">
                    <img src="${member.photo}" alt="${member.name} photo">
                </div>
                <h3 class="member-name">${member.name}</h3>
            `;
            memberDiv.addEventListener('click', () => openModal(index));
            teamSection.appendChild(memberDiv);

            // Create modal for each member
            const modalDiv = document.createElement('div');
            modalDiv.id = `memberModal${index}`;
            modalDiv.classList.add('modal');

            // Generar el HTML para las barras de habilidad
            const skillsHtml = member.skills.map(skill => `
                <div class="skill-item">
                    <span class="skill-name">${skill.name}</span>
                    <div class="skill-bar-container">
                        <div class="skill-bar" data-percentage="${skill.percentage}">
                            <span class="skill-percentage">${skill.percentage}%</span>
                        </div>
                    </div>
                </div>
            `).join('');

            modalDiv.innerHTML = `
                <div class="modal-content">
                    <span class="close-button" data-index="${index}">&times;</span>
                    <h2 class="modal-title">${member.name}'s Skills</h2>
                    <div class="skills-grid">
                        ${skillsHtml}
                    </div>
                </div>
            `;
            main.appendChild(modalDiv);
        });

        // Event delegation for closing modals
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('close-button')) {
                const index = event.target.dataset.index;
                closeModal(index);
            } else if (event.target.classList.contains('modal')) {
                // Clicked outside the modal content
                event.target.style.display = "none";
            }
        });
    }

    function openModal(index) {
        const modal = document.getElementById(`memberModal${index}`);
        if (modal) { // Check if modal exists before trying to display
            modal.style.display = "block";

            // Animar las barras de habilidad cuando el modal se abre
            const skillBars = modal.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const percentage = bar.dataset.percentage;
                // Pequeño retraso para asegurar que la transición se vea
                setTimeout(() => {
                    bar.style.width = percentage + '%';
                }, 50); // Puedes ajustar este valor si la animación no se inicia correctamente
            });
        }
    }

    function closeModal(index) {
        const modal = document.getElementById(`memberModal${index}`);
        if (modal) { // Check if modal exists before trying to hide
            // Reiniciar el ancho de las barras para la próxima vez que se abra el modal
            const skillBars = modal.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                bar.style.width = '0%'; // Resetear a 0 para la animación la próxima vez
            });
            modal.style.display = "none";
        }
    }
});