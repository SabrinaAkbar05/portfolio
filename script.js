// Projects Data (unchanged)
const myProjects = [ /* ... your existing projects ... */ ];

// Load Projects
const loadProjects = () => {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;

    grid.innerHTML = '';
    myProjects.forEach(project => {
        const cardHTML = `
            <div class="project-card p-8 md:p-10 rounded-[2rem] flex flex-col justify-between h-full">
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
                       class="text-sm font-bold border-b-2 border-[#2d2d2d] pb-1 hover:text-[#d4a39a] hover:border-[#d4a39a]">
                        View Source Code →
                    </a>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
};

// Modal
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

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
};

// Mobile Menu
const initMobileMenu = () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.style.display = 'flex';
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initModal();
    initMobileMenu();
});
