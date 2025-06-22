document.addEventListener('DOMContentLoaded', () => {
    console.log('Eve Kayser landing page cargado.');

    const teamMembersData = [
        {
            name: "Jorge Meneses",
            photo: "assets/img/team/hommie.webp", // Replace with actual image path
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
            photo: "assets/img/team/hommie.webp", // Replace with actual image path
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
            photo: "assets/img/team/hommie.webp", 
            skills: [
                { name: "JavaScript ,TypeScript and React", percentage: 90 },
                { name: "DATABASES -> PostgreSQL, SQL SERVER ", percentage: 88 },
                { name: "HTML, CSS ", percentage: 82 },
                { name: "Version Control (Git)", percentage: 93 }
            ]
        },
        {
            name: "Gregory Perozo",
            photo: "assets/img/team/hommie.webp", // Replace with actual image path
            skills: [
                { name: "Frontend Development (React, Vue)", percentage: 95 },
                { name: "JavaScript & TypeScript", percentage: 90 },
                { name: "API Integration", percentage: 88 },
                { name: "Performance Optimization", percentage: 82 },
                { name: "Version Control (Git)", percentage: 93 }
            ]
        },
        {
            name: "Ana Lopez",
            photo: "assets/img/team/hommie.webp", // Replace with actual image path
            skills: [
                { name: "Frontend Development (React, Vue)", percentage: 95 },
                { name: "JavaScript & TypeScript", percentage: 90 },
                { name: "API Integration", percentage: 88 },
                { name: "Performance Optimization", percentage: 82 },
                { name: "Version Control (Git)", percentage: 93 }
            ]
        },
        {
            name: "Juan Perez",
            photo: "assets/img/team/hommie.webp", // Replace with actual image path
            skills: [
                { name: "Backend Development (Node.js, Python)", percentage: 90 },
                { name: "Database Management (SQL, NoSQL)", percentage: 85 },
                { name: "Cloud Services (AWS, Azure)", percentage: 78 },
                { name: "RESTful APIs", percentage: 92 },
                { name: "Serverless Architectures", percentage: 80 }
            ]
        },
        {
            name: "Sofia Rodriguez",
            photo: "assets/img/team/hommie.webp", // Replace with actual image path
            skills: [
                { name: "Digital Marketing Strategy", percentage: 88 },
                { name: "Content Creation & SEO", percentage: 91 },
                { name: "Social Media Management", percentage: 85 },
                { name: "Email Marketing", percentage: 79 },
                { name: "Analytics & Reporting", percentage: 84 }
            ]
        },
        {
            name: "Ricardo Martinez",
            photo: "assets/img/team/hommie.webp", // Replace with actual image path
            skills: [
                { name: "Project Management", percentage: 94 },
                { name: "Agile & Scrum Methodologies", percentage: 89 },
                { name: "Client Relationship Management", percentage: 90 },
                { name: "Budget & Resource Allocation", percentage: 85 },
                { name: "Risk Assessment", percentage: 80 }
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