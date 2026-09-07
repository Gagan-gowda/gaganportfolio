/* =========================================================
   NAVIGATION
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/* Close mobile menu after clicking a navigation link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {

            navMenu.classList.remove("active");

        }

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const themeToggle =
    document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("portfolio-theme");


/* Restore previously selected theme */

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeToggle) {

        themeToggle.textContent = "☀";

    }

} else {

    if (themeToggle) {

        themeToggle.textContent = "☾";

    }

}


/* Toggle theme */

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");


        const isDark =
            document.body.classList.contains("dark");


        if (isDark) {

            themeToggle.textContent = "☀";

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        } else {

            themeToggle.textContent = "☾";

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

        }

    });

}


/* =========================================================
   PROJECT CASE STUDY MODAL
========================================================= */

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalFooterClose =
    document.getElementById("modalFooterClose");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalContainer =
    projectModal
        ? projectModal.querySelector(".case-study-container")
        : null;

const modalTitle =
    document.getElementById("modalTitle");

const modalType =
    document.getElementById("modalType");

const modalDescription =
    document.getElementById("modalDescription");

const modalTech =
    document.getElementById("modalTech");


let lastFocusedElement = null;


/* =========================================================
   ACTIVE PROJECTS
=========================================================

   Only these two projects have case studies.

   Projects 03–06 are intentionally NOT included here
   because they are "Coming soon".
========================================================= */

const projects = {

    "navigation-cards": {

        title: "Expandable Navigation Cards",

        type: "SHAREPOINT • SPFx",

        description:
            "A custom SharePoint Framework solution designed to improve page navigation by organizing related links into expandable navigation cards. The solution provides a cleaner page experience while allowing users to access related content without displaying every link at once.",

        technologies: [
            "SharePoint Online",
            "SPFx",
            "React",
            "TypeScript"
        ]

    },


    "expandable-menu": {

        title: "Expandable Menu",

        type: "SHAREPOINT • SPFx",

        description:
            "A configurable SharePoint Framework web part that provides expandable and collapsible menu navigation. It allows related links to be grouped under a single heading while keeping the SharePoint page clean, organized and easy to navigate.",

        technologies: [
            "SharePoint Online",
            "SPFx",
            "React",
            "TypeScript"
        ]

    }

};


/* =========================================================
   OPEN PROJECT MODAL
=========================================================

   IMPORTANT:
   Only elements with:
       class="solution-link"
   AND
       data-project="..."

   will open the modal.

   Therefore "Coming soon" projects will not open anything.
========================================================= */

document
    .querySelectorAll(".solution-link[data-project]")
    .forEach(button => {

        button.addEventListener("click", () => {

            const projectId =
                button.getAttribute("data-project");


            const project =
                projects[projectId];


            /* Safety check */

            if (!project) {

                return;

            }


            /* Update modal title */

            if (modalTitle) {

                modalTitle.textContent =
                    project.title;

            }


            /* Update project type */

            if (modalType) {

                modalType.textContent =
                    project.type;

            }


            /* Update project description */

            if (modalDescription) {

                modalDescription.textContent =
                    project.description;

            }


            /* Clear existing technology tags */

            if (modalTech) {

                modalTech.innerHTML = "";


                /* Add technology tags */

                project.technologies.forEach(
                    technology => {

                        const tag =
                            document.createElement("span");

                        tag.textContent =
                            technology;

                        modalTech.appendChild(tag);

                    }
                );

            }


            /* Remember the element that opened the modal */

            lastFocusedElement =
                document.activeElement;


            /* Open modal */

            if (projectModal) {

                projectModal.classList.add("active");

                projectModal.setAttribute(
                    "aria-hidden",
                    "false"
                );

                document.body.style.overflow =
                    "hidden";

            }


            /* Move keyboard focus into modal */

            if (modalContainer) {

                modalContainer.focus();

            }

        });

    });


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    if (!projectModal) {

        return;

    }


    projectModal.classList.remove("active");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow = "";


    /* Return focus to the original button */

    if (
        lastFocusedElement &&
        typeof lastFocusedElement.focus === "function"
    ) {

        lastFocusedElement.focus();

    }


    lastFocusedElement = null;

}


/* =========================================================
   MODAL CLOSE BUTTON
========================================================= */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


/* =========================================================
   MODAL FOOTER CLOSE BUTTON
========================================================= */

if (modalFooterClose) {

    modalFooterClose.addEventListener(
        "click",
        closeModal
    );

}


/* =========================================================
   MODAL OVERLAY CLOSE
========================================================= */

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeModal
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        projectModal &&
        projectModal.classList.contains("active")
    ) {

        closeModal();

    }

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}
