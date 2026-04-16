// 1. Your Real GitHub Projects Data
const myProjects = [
    {
        id: "01",
        category: "AI & NLP",
        title: "AI JobFit Chatbot",
        desc: "An intelligent chatbot system that utilizes NLP to analyze resumes and suggest career path optimizations based on skill matching.",
        tags: ["Python", "NLP", "AI"],
        link: "https://github.com/SabrinaAkbar05/AI-JOBFIT-CHATBOT"
    },
    {
        id: "02",
        category: "SECURITY",
        title: "Syntexhub Port Scanner",
        desc: "A network security utility designed to scan and identify open ports, helping assess potential entry points for security audits.",
        tags: ["Python", "Networking", "Cybersecurity"],
        link: "https://github.com/SabrinaAkbar05/Syntexhub_Port_Scanner"
    },
    {
        id: "03",
        category: "DATA SCIENCE",
        title: "Fake News Detector",
        desc: "A Machine Learning project focused on text classification to distinguish between factual reporting and misinformation.",
        tags: ["ML", "Python", "Data Science"],
        link: "https://github.com/SabrinaAkbar05/CodeAlpha_UnemploymentInIndia"
    },
    {
        id: "04",
        category: "SECURITY",
        title: "Password Manager",
        desc: "A secure digital vault for storing and managing login credentials using encryption techniques to ensure data privacy.",
        tags: ["Security", "Encryption", "Python"],
        link: "https://github.com/SabrinaAkbar05/Syntexhub_PasswordManager"
    }
];

// 2. Logic to display projects on the page
const loadProjects = () => {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;
    grid.innerHTML = '';

    myProjects.forEach(project => {
        const cardHTML = `
            <div class="project-card p-8 md:p-10 rounded-[2rem] flex flex-col justify-between">
                <div>
                    <span class="text-[10px] font-bold text-[#d4a39a] uppercase tracking-widest">
                        ${project.id}. ${project.category}
                    </span>
                    <h3 class="text-2xl md:text-3xl serif italic mt-4 mb-6">${project.title}</h3>
                    <p class="text-sm text-stone-500 leading-relaxed mb-8">${project.desc}</p>
                </div>
                <div>
                    <div class="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-6">
                        ${project.tags.join(' / ')}
                    </div>
                    <a href="${project.link}" target="_blank" 
                       class="text-sm font-bold border-b-2 border-[#2d2d2d] pb-1 hover:text-[#d4a39a] hover:border-[#d4a39a] transition-all">
                        View Source Code →
                    </a>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
};

// 3. Resume Modal Functionality
const initModal = () => {
    const modal = document.getElementById("resumeModal");
    const openBtns = [document.getElementById("openResume"), document.getElementById("openResumeMobile")];
    const closeBtn = document.querySelector(".close-btn");

    openBtns.forEach(btn => {
        if (btn) {
            btn.onclick = (e) => {
                e.preventDefault();
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            };
        }
    });

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }

    // Close modal if user clicks outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
};

// 4. Mobile Menu
const initMobileMenu = () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    if (hamburger && mobileMenu && closeMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.style.display = 'flex';
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    }
};

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initModal();
    initMobileMenu();
});
