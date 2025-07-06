document.addEventListener("DOMContentLoaded", function () {
    const modeToggleButton = document.getElementById("modeToggle");
    const sunIcon = modeToggleButton.querySelector(".fa-sun");
    const moonIcon = modeToggleButton.querySelector(".fa-moon");
    
    // Función para cargar particles.js con un color de partículas dinámico
    function loadParticles(color) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 100, // Número de partículas
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": color // Color de las partículas, cambia según el modo
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": color,
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    document.getElementById('menuToggle').addEventListener('click', function () {
        const menu = document.getElementById('menu');
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        const menu = document.getElementById('menu');
        const menuToggle = document.getElementById('menuToggle');
    
        // Verifica si el clic fue fuera del menú y del botón de alternar
        if (menu.style.display === 'block' && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.style.display = 'none';
        }
    });

    document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(button => {
        button.addEventListener('mouseup', () => {
            button.blur(); // Quita el foco visual cuando se suelta el clic
        });
    });

    // Función para cambiar las imagenes en base al modo
    function updateImagesForTheme() {
        const isDarkMode = document.body.classList.contains("dark-mode");
    
        document.getElementById("htmlImg").src = isDarkMode ? "images/Html5_(White).png" : "images/Html5.png";
        document.getElementById("cssImg").src  = isDarkMode ? "images/Css3_(White).png" : "images/Css3.png";
        document.getElementById("jsImg").src   = isDarkMode ? "images/Javascript_(White).png" : "images/Javascript.png";
    }

    function updateBioImage() {
    const bioImage = document.getElementById("bioImage");
    if (document.body.classList.contains("dark-mode")) {
        bioImage.src = "images/Logo oscuro.png";
    } else {
        bioImage.src = "images/Logo claro.png";
    }
    }

    document.getElementById('languageButton').addEventListener('click', () => {
        const languageSelect = document.getElementById('languageSelect');
    
        // Alternar visibilidad
        if (languageSelect.classList.contains('show')) {
            languageSelect.classList.remove('show');
        } else {
            languageSelect.classList.add('show');
        }
    });
    
    // Ocultar el selector y cambiar el idioma cuando el usuario seleccione uno
    document.getElementById('languageSelect').addEventListener('change', function() {
        const selectedLanguage = this.value;
        const button = document.getElementById("languageButton"); // Obtener el botón
        const languageSelect = document.getElementById("languageSelect"); // Obtener el select
    
        // ✅ Aplicar el margen según el idioma
        applyLanguageMargin(selectedLanguage);

        // Llamar a la función que cambia el idioma (asegúrate de que esta función existe)
        changeLanguage(selectedLanguage);
    
        // Ocultar el selector después de la selección
        setTimeout(() => {
            languageSelect.style.display = "none";
        }, 150);
    });

    // ✅ Función para aplicar margen según el idioma
    function applyLanguageMargin(language) {
    const button = document.getElementById("languageButton");
    const languageSelect = document.getElementById("languageSelect");

    let marginValue;
    let leftValue;

    switch (language) {
        case "es":
            marginValue = "25px";
            leftValue = "80px";
            break;
        case "en":
            marginValue = "15px";
            leftValue = "70px";
            break;
        case "fr":
            marginValue = "30px";
            leftValue = "85px";
            break;
        default:
            marginValue = "25px";
            leftValue = "80px";
            break;
        }
        // Margen del botón
        button.style.marginLeft = marginValue;

        // Posición del selector
        languageSelect.style.left = leftValue;

        // Guardar en localStorage
        localStorage.setItem("selectedLanguage", language);
    }
    
    const translations = {
        es: {
            "greeting": "Bienvenido/a",
            "description": "Descubre mis proyectos y habilidades como desarrollador de software.",
            "biography": "Biografía",
            "programing languages": "Lenguajes de Programación",
            "biography (text.1)" : "Soy Miguel Alejandro Vásquez Lara, un apasionado desarrollador de software con experiencia en múltiples lenguajes y tecnologías. Me especializo en la creación de aplicaciones web y soluciones digitales que impactan positivamente a las empresas y usuarios. Mi enfoque es siempre mejorar la calidad del software a través de metodologías ágiles y buenas prácticas de desarrollo.",
            "biography (text.2)" : "A lo largo de mi carrera he trabajado con tecnologías como Java, Python, C#, y SQL, entre otras. Mi pasión por la programación y la innovación me ha llevado a participar en diversos proyectos, desde soluciones para la automatización de procesos hasta aplicaciones móviles para mejorar la experiencia del usuario. Siempre busco aprender y aplicar nuevas herramientas que me permitan mejorar como profesional.",
            "repositories": "Repositorios",
            "certificates": "Certificados",
            "contact": "Contactos",
            "language": "Idioma",
            "scrollToTop": "Volver Arriba",
            "inventory system": "Sistema de Inventario",
            "inventory system description": "Gestión de inventario con ASP.NET Core y SQL Server.",
            "view on GitHub": "Ver en GitHub",
            "user management": "Gestión de Usuarios",
            "user management description": "API REST para la gestión de usuarios con Swagger y SQL Server.",
            "finance system": "Sistema de Finanzas",
            "finance system description": "Web service para intercambio de información de nómina.",
            "ci cd project": "Proyecto de CI CD",
            "ci cd project description": "Proyecto ASP.Net para el manejo de CI CD por commits",
            "ssds project": "Proyecto SSDS",
            "ssds project description": "Sistema de intercambio de archivos entre una empresa (Ferretería Americana) y la TSS (Tesorería de la Seguridad Social)",
            "python course": "Python desde Cero",
            "python course description": "Curso de programación en Python desde los fundamentos.",
            "web js course": "Programación Web en JavaScript",
            "web js course description": "Curso sobre el desarrollo web con JavaScript.",
            "angular course": "Desarrollo Web Front-End con Angular",
            "angular course description": "Curso de Angular para el desarrollo Front-End.",
            "ci cd project": "Proyecto de CI CD",
            "ci cd project description": "Proyecto ASP.Net para el manejo de CI CD por commits",
            "ssds project": "Proyecto SSDS",
            "ssds project description": "Sistema de intercambio de archivos entre una empresa (Ferretería Americana) y la TSS (Tesorería de la Seguridad Social)",
            "view certificate": "Ver Certificado"
        },
        en: {
            "greeting": "Welcome",
            "description": "Discover my projects and skills as a software developer.",
            "biography": "Biography",
            "programing languages": "Programming Languages",
            "biography (text.1)" : "I'm Miguel Alejandro Vásquez Lara, a passionate software developer with experience in multiple languages and technologies. I specialize in creating web applications and digital solutions that positively impact businesses and users. My focus is always on improving software quality through agile methodologies and best development practices.",
            "biography (text.2)" : "Throughout my career, I've worked with technologies such as Java, Python, C#, and SQL, among others. My passion for programming and innovation has led me to participate in a variety of projects, from process automation solutions to mobile applications that improve user experience. I'm always looking to learn and apply new tools that allow me to improve as a professional.",
            "repositories": "Repositories",
            "certificates": "Certificates",
            "contact": "Contacts",
            "language": "Language",
            "scrollToTop": "Scroll to Top",
            "inventory system": "Inventory System",
            "inventory system description": "Inventory management with ASP.NET Core and SQL Server.",
            "view on GitHub": "View on GitHub",
            "user management": "User Management",
            "user management description": "REST API for user management with Swagger and SQL Server.",
            "finance system": "Finance System",
            "finance system description": "Web service for payroll information exchange.",
            "ci cd project": "CI CD Project",
            "ci cd project description": "ASP.Net project for managing CI CD through commits",
            "ssds project": "SSDS Project",
            "ssds project description": "File exchange system between a company (Ferretería Americana) and the TSS (Social Security Treasury)",
            "python course": "Python from Scratch",
            "python course description": "Programming course in Python from the fundamentals.",
            "web js course": "Web Programming in JavaScript",
            "web js course description": "Course on web development with JavaScript.",
            "angular course": "Front-End Web Development with Angular",
            "angular course description": "Angular course for Front-End development.",
            "ci cd project": "CI CD Project",
            "ci cd project description": "ASP.Net project for managing CI CD through commits",
            "ssds project": "SSDS Project",
            "ssds project description": "File exchange system between a company (Ferretería Americana) and the TSS (Social Security Treasury)",
            "view certificate": "View Certificate"
        },
        fr: {
            "greeting": "Bienvenue",
            "description": "Découvrez mes projets et compétences en tant que développeur de logiciels.",
            "biography": "Biographie",
            "programing languages": "Langages de Programmation",
            "biography (text.1)" : "Je suis Miguel Alejandro Vásquez Lara, un développeur de logiciels passionné avec une expérience dans plusieurs langages et technologies. Je me spécialise dans la création d'applications web et de solutions numériques qui ont un impact positif sur les entreprises et les utilisateurs. Mon objectif est toujours d'améliorer la qualité des logiciels grâce à des méthodologies agiles et de bonnes pratiques de développement.",
            "biography (text.2)" : "Tout au long de ma carrière, j'ai travaillé avec des technologies telles que Java, Python, C# et SQL, entre autres. Ma passion pour la programmation et l'innovation m'a amené à participer à divers projets, allant des solutions d'automatisation des processus aux applications mobiles pour améliorer l'expérience utilisateur. Je cherche toujours à apprendre et à appliquer de nouveaux outils qui me permettent de m'améliorer en tant que professionnel.",
            "repositories": "Dépôts",
            "certificates": "Certificats",
            "contact": "Contacts",
            "language": "Langue",
            "scrollToTop": "Retour en haut",
            "inventory system": "Système d'Inventaire",
            "inventory system description": "Gestion des stocks avec ASP.NET Core et SQL Server.",
            "view on GitHub": "Voir sur GitHub",
            "user management": "Gestion des Utilisateurs",
            "user management description": "API REST pour la gestion des utilisateurs avec Swagger et SQL Server.",
            "finance system": "Système Financier",
            "finance system description": "Service web pour l'échange d'informations sur la paie.",
            "ci cd project": "Projet CI CD",
            "ci cd project description": "Projet ASP.Net pour gérer l'intégration et le déploiement continus via des commits",
            "ssds project": "Projet SSDS",
            "ssds project description": "Système d'échange de fichiers entre une entreprise (Ferretería Americana) et la TSS (Trésorerie de la Sécurité Sociale)",
            "python course": "Python depuis Zéro",
            "python course description": "Cours de programmation en Python depuis les bases.",
            "web js course": "Programmation Web en JavaScript",
            "web js course description": "Cours sur le développement web avec JavaScript.",
            "angular course": "Développement Web Front-End avec Angular",
            "angular course description": "Cours Angular pour le développement Front-End.",
            "ci cd project": "Projet CI CD",
            "ci cd project description": "Projet ASP.Net pour gérer l'intégration et le déploiement continus via des commits",
            "ssds project": "Projet SSDS",
            "ssds project description": "Système d'échange de fichiers entre une entreprise (Ferretería Americana) et la TSS (Trésorerie de la Sécurité Sociale)",
            "view certificate": "Voir le Certificat"
        }
    };
    
    // Función para cambiar el idioma de la página
    function changeLanguage(language) {
        // Guardar el idioma seleccionado en el almacenamiento local
        localStorage.setItem('selectedLanguage', language);
        
        const elements = document.querySelectorAll("[data-translate]");
        
        elements.forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }
    
    // Función para cargar el idioma guardado al cargar la página
    function changeLanguage(language) {
        // Guardar el idioma seleccionado en el almacenamiento local
        localStorage.setItem('selectedLanguage', language);
        
        const elements = document.querySelectorAll("[data-translate]");
        
        elements.forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }
    
    // Función para cargar el idioma guardado al cargar la página
    function loadSavedLanguage() {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        
        // Si hay un idioma guardado, se usa; si no, se establece el idioma predeterminado
        if (savedLanguage) {
            changeLanguage(savedLanguage);
            document.getElementById('languageSelect').value = savedLanguage; // Actualiza el valor del selector de idioma
            applyLanguageMargin(savedLanguage);
        } else {
            changeLanguage('es'); // Idioma predeterminado, en este caso español
        }
    }
    
    // Asegurarse de que la página cargue el idioma guardado
    window.addEventListener('DOMContentLoaded', (event) => {
        loadSavedLanguage();
    });
    
    // Función para cambiar el idioma al seleccionar uno desde el selector
    document.getElementById('languageSelect').addEventListener('change', (event) => {
        const language = event.target.value;
        changeLanguage(language);
    });
    
    // Función para mostrar/ocultar el selector de idioma al hacer clic en el botón
    document.getElementById('languageButton').addEventListener('click', () => {
        const languageSelect = document.getElementById('languageSelect');
        // Si el selector está visible, lo ocultamos; si está oculto, lo mostramos
        languageSelect.style.display = (languageSelect.style.display === 'none' || languageSelect.style.display === '') ? 'block' : 'none';
    });
    
    let mybutton = document.getElementById("scrollTopBtn");

    // Mostrar el botón cuando el usuario haga scroll hacia abajo
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };
    
    // Cuando el usuario haga clic en el botón, volver al principio de la página
    mybutton.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Modo oscuro con almacenamiento en localStorage
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        sunIcon.style.display = "inline-block"; // ✅ Mostrar sol en modo oscuro
        moonIcon.style.display = "none";
        loadParticles("#ffffff"); // Partículas blancas en modo oscuro
    } else {
        document.body.classList.remove("dark-mode");
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline-block"; // ✅ Mostrar luna en modo claro
        loadParticles("#000000"); // Partículas negras en modo claro
    }

    updateImagesForTheme(); // Asegura que las imágenes se actualizan
    updateBioImage();

    modeToggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "true");
            sunIcon.style.display = "inline-block"; // ✅ Mostrar sol
            moonIcon.style.display = "none";
            loadParticles("#ffffff");
            
        } else {
            localStorage.setItem("darkMode", "false");
            sunIcon.style.display = "none";
            moonIcon.style.display = "inline-block"; // ✅ Mostrar luna
            loadParticles("#000000");
            
        }
        updateBioImage();
        updateImagesForTheme();
    });
    

    // 🎭 Animaciones de fade-in bidireccionales (scroll hacia abajo y arriba)
    function revealOnScroll() {
        document.querySelectorAll(".fade-in").forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            // Si el elemento entra en pantalla por arriba o por abajo, se activa
            if (elementTop < windowHeight - 100 && elementBottom > 100) {
                element.classList.add("visible");
            } else {
                element.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Ejecutar en carga inicial
});