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

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

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
            window.scrollY <
            sectionTop + sectionHeight
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


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀";

}


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


/* =========================================================
   PROJECT CASE STUDY
========================================================= */

const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalFooterClose = document.getElementById("modalFooterClose");
const modalOverlay = document.getElementById("modalOverlay");
const modalContainer = projectModal.querySelector(".case-study-container");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
let lastFocusedElement;


/*
    Temporary solution information.

    Later, we'll replace these with your
    actual projects and case studies.
*/

const projects = {

    "navigation-cards": {

        title: "Expandable Navigation Cards",

        type: "SHAREPOINT • SPFx",

        description:
            "A custom SharePoint Framework solution designed to improve page navigation by organizing related links into expandable navigation cards. The solution focuses on creating a cleaner page experience while allowing users to access related content without displaying every link at once.",

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
            "A configurable SharePoint web part that provides expandable and collapsible menu navigation. It allows related links to be grouped together while keeping the SharePoint page clean and easy to navigate.",

        technologies: [
            "SharePoint Online",
            "SPFx",
            "React",
            "TypeScript"
        ]

    },


    "power-apps": {

        title: "Business Applications",

        type: "POWER APPS",

        description:
            "Canvas and Model-Driven Power Apps designed around business requirements and integrated with Microsoft 365 and SharePoint.",

        technologies: [
            "Power Apps",
            "SharePoint",
            "Microsoft 365"
        ]

    },


    "automation": {

        title: "Workflow Automation",

        type: "POWER AUTOMATE",

        description:
            "Automated workflows for approvals, notifications and operational processes, helping teams reduce repetitive manual work.",

        technologies: [
            "Power Automate",
            "Cloud Flows",
            "Approvals"
        ]

    },


    "power-bi": {

        title: "Data & Reporting",

        type: "POWER BI",

        description:
            "Interactive dashboards and reports designed to provide stakeholders with actionable operational and compliance insights.",

        technologies: [
            "Power BI",
            "Data Analytics",
            "Microsoft 365"
        ]

    },


    "powershell": {

        title: "PowerShell Automation",

        type: "AUTOMATION",

        description:
            "PowerShell scripts developed to automate SharePoint administration tasks including provisioning, site creation and permission audits.",

        technologies: [
            "PowerShell",
            "SharePoint",
            "Automation"
        ]

    }

};

/* Open modal */

document.querySelectorAll(".solution-link").forEach(button => {

    button.addEventListener("click", () => {

        const projectId =
            button.getAttribute("data-project");

        const project =
            projects[projectId];

        if (!project) return;


        modalTitle.textContent =
            project.title;

        modalType.textContent =
            project.type;

        modalDescription.textContent =
            project.description;


        modalTech.innerHTML = "";


        project.technologies.forEach(technology => {

            const tag =
                document.createElement("span");

            tag.textContent =
                technology;

            modalTech.appendChild(tag);

        });


        lastFocusedElement = document.activeElement;
        projectModal.classList.add("active");
        projectModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        modalContainer.focus();

    });

});


/* Close modal */

function closeModal() {
    projectModal.classList.remove("active");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lastFocusedElement?.focus();
}


modalClose.addEventListener(
    "click",
    closeModal
);

modalFooterClose.addEventListener("click", closeModal);


modalOverlay.addEventListener(
    "click",
    closeModal
);


/* Escape key */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        projectModal.classList.contains("active")
    ) {

        closeModal();

    }

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById(
    "currentYear"
).textContent =
    new Date().getFullYear();
