/* =========================================================
   NAVIGATION
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

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


/* Close mobile menu after clicking a link */

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


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeToggle) {

        themeToggle.textContent = "☀";

    }

}


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
   PROJECT CASE STUDY
========================================================= */


/*
    IMPORTANT

    The complete case-study information for each project
    is stored here.

    Project 01 and Project 02 have DIFFERENT content.

    Projects 03-06 do not have modal buttons because they
    are Coming Soon.
*/


const projects = {


    /* =====================================================
       PROJECT 01
       EXPANDABLE NAVIGATION CARDS
    ====================================================== */

    "navigation-cards": {

        title: "Expandable Navigation Cards",

        type: "SHAREPOINT • SPFx",

        icon: "◫",

        description:
            "A custom SharePoint Framework (SPFx) web part designed to provide a modern, organized and user-friendly navigation experience using expandable navigation cards.",


        technologies: [

            "SharePoint Online",
            "SPFx",
            "React",
            "TypeScript",
            "Fluent UI"

        ],


        previewTitle:
    "Expandable Navigation Cards",

previewText:
    "A look at the navigation experience, card configuration and SharePoint authoring interface.",

previewImage:
    "ENC1.png",

screenshots: [
    {
        afterSection: "03",
        image: "ENC1.png",
        title: "Expandable Navigation Cards",
        description:
            "Main navigation experience showing business areas organized into expandable cards."
    },

    {
        afterSection: "04",
        image: "ENC2.png",
        title: "Card Management",
        description:
            "Card management interface for creating, editing, duplicating and deleting navigation cards."
    },

    {
        afterSection: "04",
        image: "ENC4.png",
        title: "Edit Card Configuration",
        description:
            "Card configuration interface for defining the card title, description and navigation links."
    },

    {
        afterSection: "05",
        image: "ENC3.png",
        title: "Icon Selection & Styling",
        description:
            "Icon selection interface with predefined icons and customizable icon colors and backgrounds."
    },

    {
        afterSection: "06",
        image: "ENC5.png",
        title: "Expanded Navigation Experience",
        description:
            "Final user experience showing expandable navigation cards and their related links."
    }
],

sections: [

            /* ---------------------------------------------
               SECTION 01
            ---------------------------------------------- */

            {

                number: "01",

                eyebrow: "PROJECT OVERVIEW",

                title:
                    "A cleaner way to organize SharePoint navigation.",

                content: `

                    <div>

                        <p>
                            The <strong>Expandable Navigation Card</strong>
                            is a custom SharePoint Framework (SPFx)
                            web part designed to provide an organized,
                            user-friendly navigation experience in
                            SharePoint Online.
                        </p>

                        <p>
                            It groups resources into card-based
                            sections that users can expand when
                            needed, making forms, policies,
                            templates and business applications
                            easier to find without overcrowding
                            the page.
                        </p>

                    </div>


                    <aside class="impact-box">

                        <span>THE GOAL</span>

                        <strong>
                            Make important SharePoint resources
                            easier to discover without cluttering
                            the page.
                        </strong>

                    </aside>

                `

            },


            /* ---------------------------------------------
               SECTION 02
            ---------------------------------------------- */

            {

                number: "02",

                eyebrow: "THE PROBLEM",

                title:
                    "Too many resources. Too much page clutter.",

                content: `

                    <div class="problem-grid">

                        <div class="problem-card">

                            <span>01</span>

                            <h3>
                                Cluttered navigation
                            </h3>

                            <p>
                                Large SharePoint portals can
                                contain a significant number
                                of resources spread across
                                different pages and libraries.
                            </p>

                        </div>


                        <div class="problem-card">

                            <span>02</span>

                            <h3>
                                Difficult discovery
                            </h3>

                            <p>
                                Users can struggle to locate
                                important documents, forms and
                                frequently used resources.
                            </p>

                        </div>


                        <div class="problem-card">

                            <span>03</span>

                            <h3>
                                Poor organization
                            </h3>

                            <p>
                                Traditional link lists do not
                                clearly separate different
                                business functions.
                            </p>

                        </div>


                        <div class="problem-card">

                            <span>04</span>

                            <h3>
                                Time wasted searching
                            </h3>

                            <p>
                                Employees can spend unnecessary
                                time looking for resources that
                                should be easily accessible.
                            </p>

                        </div>

                    </div>

                `

            },


            /* ---------------------------------------------
               SECTION 03
            ---------------------------------------------- */

            {

                number: "03",

                eyebrow: "THE SOLUTION",

                title:
                    "Organize. Expand. Navigate.",

                content: `

                    <p class="large-text">

                        The solution presents navigation in a
                        clear card-based layout. Each card
                        represents a business area and can
                        expand to reveal related links and
                        resources.

                    </p>


                    <div class="solution-flow">


                        <div class="flow-item">

                            <span>01</span>

                            <strong>
                                Categorize
                            </strong>

                            <p>
                                Group related resources into
                                meaningful business categories.
                            </p>

                        </div>


                        <div class="flow-item">

                            <span>02</span>

                            <strong>
                                Expand
                            </strong>

                            <p>
                                Reveal additional navigation
                                only when it is needed.
                            </p>

                        </div>


                        <div class="flow-item">

                            <span>03</span>

                            <strong>
                                Navigate
                            </strong>

                            <p>
                                Give users quick access to
                                the resource they need.
                            </p>

                        </div>


                    </div>

                `

            },


            /* ---------------------------------------------
               SECTION 04
            ---------------------------------------------- */

            {

                number: "04",

                eyebrow: "CARD CONFIGURATION",

                title:
                    "Navigation cards designed around content.",

                content: `

                    <div class="feature-grid">


                        <div class="feature-item">

                            <span>01</span>

                            <h3>
                                Card-based navigation
                            </h3>

                            <p>
                                Each business area can be
                                represented as an individual
                                navigation card.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>02</span>

                            <h3>
                                Custom titles
                            </h3>

                            <p>
                                Card titles can represent
                                departments, services,
                                resources or business areas.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>03</span>

                            <h3>
                                Descriptions
                            </h3>

                            <p>
                                Supporting descriptions help
                                users understand the purpose
                                of each navigation category.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>04</span>

                            <h3>
                                Visual organization
                            </h3>

                            <p>
                                Icons and visual indicators
                                make navigation easier to
                                understand at a glance.
                            </p>

                        </div>


                    </div>

                `

            },


            /* ---------------------------------------------
               SECTION 05
            ---------------------------------------------- */

            {

                number: "05",

                eyebrow: "ICON & NAVIGATION MANAGEMENT",

                title:
                    "Make navigation easier to recognize.",

                content: `

                    <div class="feature-grid">


                        <div class="feature-item">

                            <span>01</span>

                            <h3>
                                Icon selection
                            </h3>

                            <p>
                                Cards can use predefined
                                icons to visually represent
                                different categories.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>02</span>

                            <h3>
                                Custom icon colors
                            </h3>

                            <p>
                                Visual styling can be used
                                to differentiate navigation
                                categories.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>03</span>

                            <h3>
                                Multiple navigation links
                            </h3>

                            <p>
                                Related resources can be
                                grouped within a single card.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>04</span>

                            <h3>
                                External navigation
                            </h3>

                            <p>
                                Links can direct users to
                                relevant SharePoint pages,
                                documents and business
                                applications.
                            </p>

                        </div>


                    </div>

                `

            },


            /* ---------------------------------------------
               SECTION 06
            ---------------------------------------------- */

            {

                number: "06",

                eyebrow: "TECHNICAL ARCHITECTURE",

                title:
                    "Built as a reusable SharePoint component.",

                content: `

                    <div class="case-study-two-column">

                        <div>

                            <p>
                                The solution is implemented as
                                a client-side SharePoint Framework
                                web part using React and TypeScript.
                            </p>

                            <p>
                                The card architecture is designed
                                around reusable components so that
                                navigation categories and links
                                can be rendered dynamically.
                            </p>

                        </div>


                        <aside class="impact-box">

                            <span>TECHNOLOGY</span>

                            <strong>
                                SPFx + React + TypeScript +
                                Fluent UI + SharePoint Online
                            </strong>

                        </aside>

                    </div>

                `

            },


            /* ---------------------------------------------
               SECTION 07
            ---------------------------------------------- */

            {

                number: "07",

                eyebrow: "KEY ACHIEVEMENTS",

                title:
                    "Improving SharePoint navigation and discoverability.",

                content: `

                    <div class="feature-grid">


                        <div class="feature-item">

                            <span>01</span>

                            <h3>
                                Reduced page clutter
                            </h3>

                            <p>
                                Related links can be grouped
                                together instead of occupying
                                large amounts of page space.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>02</span>

                            <h3>
                                Better discoverability
                            </h3>

                            <p>
                                Users can identify resources
                                through meaningful categories.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>03</span>

                            <h3>
                                Reusable solution
                            </h3>

                            <p>
                                The component can be reused
                                across SharePoint sites and
                                page layouts.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>04</span>

                            <h3>
                                Modern user experience
                            </h3>

                            <p>
                                Provides a cleaner alternative
                                to large collections of static
                                links.
                            </p>

                        </div>


                    </div>

                `

            }


        ]

    },


    /* =====================================================
       PROJECT 02
       EXPANDABLE MENU
    ====================================================== */

    "expandable-menu": {

        title: "Expandable Menu",

        type: "SHAREPOINT • SPFx",

        icon: "≡",

        description:
            "A configurable SharePoint Framework (SPFx) web part that provides expandable and collapsible menu navigation, allowing content authors to organize related links under a single heading.",


        technologies: [

            "SharePoint Online",
            "SPFx",
            "React",
            "TypeScript",
            "Fluent UI"

        ],


        previewTitle:
    "Expandable Menu",

previewText:
    "A look at the SharePoint web part, menu configuration and authoring experience.",

previewImage:
    "EM1.png",

screenshots: [
    {
        afterSection: "03",
        image: "EM1.png",
        title: "Expandable Menu",
        description:
            "Expandable Menu displayed on a SharePoint page with grouped navigation links."
    },

    {
        afterSection: "04",
        image: "EM2.png",
        title: "Menu Heading Settings",
        description:
            "Configuration experience showing the menu heading and available heading-size options."
    },

    {
        afterSection: "07",
        image: "EM3.png",
        title: "Expandable Menu Configuration",
        description:
            "SharePoint property pane used to configure the menu heading, formatting and navigation links."
    },

    {
        afterSection: "01",
        image: "EM4.png",
        title: "SharePoint Web Part",
        description:
            "Expandable Menu available as a reusable web part within the SharePoint page authoring experience."
    }
],

sections: [


            /* ---------------------------------------------
               SECTION 01
            ---------------------------------------------- */

            {

                number: "01",

                eyebrow: "PROJECT OVERVIEW",

                title:
                    "A simple expandable menu for SharePoint pages.",

                content: `

                    <div>

                        <p>
                            The <strong>Expandable Menu</strong>
                            is a custom SharePoint Framework
                            (SPFx) web part developed to enhance
                            navigation and content organization
                            within SharePoint Online.
                        </p>

                        <p>
                            The component allows content authors
                            to create a menu heading and configure
                            related navigation links underneath it.
                            Users can expand or collapse the menu
                            when they need to access those links.
                        </p>

                    </div>


                    <aside class="impact-box">

                        <span>THE GOAL</span>

                        <strong>
                            Provide a compact navigation component
                            that keeps related links organized
                            without taking unnecessary page space.
                        </strong>

                    </aside>

                `

            },


            /* ---------------------------------------------
               SECTION 02
            ---------------------------------------------- */

            {

                number: "02",

                eyebrow: "THE PROBLEM",

                title:
                    "Static link lists can make SharePoint pages feel crowded.",

                content: `

                    <div class="problem-grid">


                        <div class="problem-card">

                            <span>01</span>

                            <h3>
                                Too many visible links
                            </h3>

                            <p>
                                Displaying every navigation link
                                at once can consume valuable
                                SharePoint page space.
                            </p>

                        </div>


                        <div class="problem-card">

                            <span>02</span>

                            <h3>
                                Limited organization
                            </h3>

                            <p>
                                Related resources may need to
                                be grouped under a common
                                heading.
                            </p>

                        </div>


                        <div class="problem-card">

                            <span>03</span>

                            <h3>
                                Inconsistent page layouts
                            </h3>

                            <p>
                                Large collections of links can
                                make otherwise clean pages
                                difficult to scan.
                            </p>

                        </div>


                        <div class="problem-card">

                            <span>04</span>

                            <h3>
                                Limited customization
                            </h3>

                            <p>
                                Standard navigation components
                                may not provide the desired
                                heading and typography controls.
                            </p>

                        </div>


                    </div>

                `

            },


            /* ---------------------------------------------
               SECTION 03
            ---------------------------------------------- */

            {

                number: "03",

                eyebrow: "EXPAND & COLLAPSE",

                title:
                    "Show navigation when users need it.",

                content: `

                    <p class="large-text">

                        The Expandable Menu keeps the navigation
                        compact by allowing users to control
                        whether the related links are visible.

                    </p>


                    <div class="solution-flow">


                        <div class="flow-item">

                            <span>01</span>

                            <strong>
                                Closed state
                            </strong>

                            <p>
                                The menu remains compact when
                                the page is initially loaded.
                            </p>

                        </div>


                        <div class="flow-item">

                            <span>02</span>

                            <strong>
                                Expand
                            </strong>

                            <p>
                                Users click the menu heading
                                to reveal the configured links.
                            </p>

                        </div>


                        <div class="flow-item">

                            <span>03</span>

                            <strong>
                                Navigate
                            </strong>

                            <p>
                                Users select the required
                                navigation link.
                            </p>

                        </div>


                    </div>

                `

            },


            /* ---------------------------------------------
               SECTION 04
            ---------------------------------------------- */

            {

                number: "04",

                eyebrow: "CONFIGURABLE HEADING",

                title:
                    "Give content authors control over the menu heading.",

                content: `

                    <div class="feature-grid">


                        <div class="feature-item">

                            <span>01</span>

                            <h3>
                                Custom heading
                            </h3>

                            <p>
                                Content authors can define
                                the heading displayed by the
                                menu.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>02</span>

                            <h3>
                                Small, medium and large
                            </h3>

                            <p>
                                Predefined heading sizes make
                                it easier to match the page
                                design.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>03</span>

                            <h3>
                                Custom font size
                            </h3>

                            <p>
                                A custom size option provides
                                additional control when a
                                specific font size is required.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>04</span>

                            <h3>
                                Flexible placement
                            </h3>

                            <p>
                                The component can be used
                                within different SharePoint
                                page layouts and sections.
                            </p>

                        </div>


                    </div>

                `

            },


            /* ---------------------------------------------
               SECTION 05
            ---------------------------------------------- */

            {

                number: "05",

                eyebrow: "TEXT FORMATTING",

                title:
                    "Match the menu heading to the page design.",

                content: `

                    <div class="feature-grid">


                        <div class="feature-item">

                            <span>01</span>

                            <h3>
                                Bold
                            </h3>

                            <p>
                                Highlight the menu heading
                                when stronger visual emphasis
                                is required.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>02</span>

                            <h3>
                                Italic
                            </h3>

                            <p>
                                Apply italic styling to create
                                a different visual treatment.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>03</span>

                            <h3>
                                Underline
                            </h3>

                            <p>
                                Add underline formatting where
                                it fits the page design.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>04</span>

                            <h3>
                                Combined formatting
                            </h3>

                            <p>
                                Formatting controls can be
                                configured to achieve the
                                desired heading appearance.
                            </p>

                        </div>


                    </div>

                `

            },


            /* ---------------------------------------------
               SECTION 06
            ---------------------------------------------- */

            {

                number: "06",

                eyebrow: "SUB-LINK MANAGEMENT",

                title:
                    "Keep related navigation together.",

                content: `

                    <div class="feature-grid">


                        <div class="feature-item">

                            <span>01</span>

                            <h3>
                                Multiple links
                            </h3>

                            <p>
                                The menu supports up to
                                10 navigation links.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>02</span>

                            <h3>
                                Link names
                            </h3>

                            <p>
                                Each navigation item can
                                have its own display name.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>03</span>

                            <h3>
                                Destination URLs
                            </h3>

                            <p>
                                Each link can be configured
                                with its destination URL.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>04</span>

                            <h3>
                                New-tab navigation
                            </h3>

                            <p>
                                Configured links can open
                                in a new browser tab.
                            </p>

                        </div>


                    </div>

                `

            },


            /* ---------------------------------------------
               SECTION 07
            ---------------------------------------------- */

            {

                number: "07",

                eyebrow: "AUTHORING EXPERIENCE",

                title:
                    "Configure the component without changing code.",

                content: `

                    <div class="case-study-two-column">

                        <div>

                            <p>
                                Configuration is managed through
                                the SharePoint web part property
                                pane.
                            </p>

                            <p>
                                This allows site owners and page
                                authors to customize the menu
                                heading, typography and navigation
                                links without modifying the
                                underlying solution.
                            </p>

                        </div>


                        <aside class="impact-box">

                            <span>AUTHORING</span>

                            <strong>
                                Configure the web part directly
                                from the SharePoint page editing
                                experience.
                            </strong>

                        </aside>

                    </div>

                `

            },


            /* ---------------------------------------------
               SECTION 08
            ---------------------------------------------- */

            {

                number: "08",

                eyebrow: "TECHNICAL ARCHITECTURE",

                title:
                    "A reusable SPFx navigation component.",

                content: `

                    <div class="case-study-two-column">

                        <div>

                            <p>
                                The Expandable Menu is implemented
                                as a client-side SharePoint
                                Framework web part using React
                                and TypeScript.
                            </p>

                            <p>
                                React state controls the
                                expand/collapse behavior while
                                configuration values from the
                                property pane determine the
                                displayed heading and navigation
                                links.
                            </p>

                        </div>


                        <aside class="impact-box">

                            <span>TECHNOLOGY</span>

                            <strong>
                                SPFx + React + TypeScript +
                                Fluent UI + SharePoint Online
                            </strong>

                        </aside>

                    </div>

                `

            },


            /* ---------------------------------------------
               SECTION 09
            ---------------------------------------------- */

            {

                number: "09",

                eyebrow: "BUSINESS IMPACT",

                title:
                    "A simpler way to organize SharePoint navigation.",

                content: `

                    <div class="feature-grid">


                        <div class="feature-item">

                            <span>01</span>

                            <h3>
                                Reduced page clutter
                            </h3>

                            <p>
                                Navigation links remain hidden
                                until users need them.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>02</span>

                            <h3>
                                Improved usability
                            </h3>

                            <p>
                                Users can quickly expand the
                                menu and locate related resources.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>03</span>

                            <h3>
                                Easy configuration
                            </h3>

                            <p>
                                Page authors can manage the
                                component through SharePoint
                                configuration.
                            </p>

                        </div>


                        <div class="feature-item">

                            <span>04</span>

                            <h3>
                                Reusable across pages
                            </h3>

                            <p>
                                The web part can be deployed
                                and reused across SharePoint
                                environments.
                            </p>

                        </div>


                    </div>

                `

            }


        ]

    }

};


/* =========================================================
   MODAL ELEMENTS
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

const modalPreviewIcon =
    document.getElementById("modalPreviewIcon");

const modalPreviewTitle =
    document.getElementById("modalPreviewTitle");

const modalPreviewText =
    document.getElementById("modalPreviewText");

const caseStudyContent =
    document.getElementById("caseStudyContent");

const modalPreviewImage =
    document.getElementById("modalPreviewImage");


let lastFocusedElement = null;


/* =========================================================
   BUILD CASE STUDY CONTENT
========================================================= */

/* =========================================================
   BUILD CASE STUDY CONTENT
========================================================= */

function renderCaseStudy(project) {

    if (!caseStudyContent) return;

    caseStudyContent.innerHTML = "";

    project.sections.forEach(section => {

        /* ---------------------------------------------
           CREATE CASE STUDY SECTION
        ---------------------------------------------- */

        const sectionElement =
            document.createElement("section");

        sectionElement.className =
            "case-study-section";

        /*
            Alternate every second section.
        */

        if (
            parseInt(section.number, 10) % 2 === 0
        ) {

            sectionElement.classList.add(
                "alternate"
            );

        }

        sectionElement.innerHTML = `

            <div class="case-study-section-heading">

                <span class="case-study-number">
                    ${section.number}
                </span>

                <div>

                    <p class="eyebrow">
                        ${section.eyebrow}
                    </p>

                    <h2>
                        ${section.title}
                    </h2>

                </div>

            </div>

            <div class="case-study-section-body">

                ${section.content}

            </div>

        `;

        caseStudyContent.appendChild(
            sectionElement
        );


        /* ---------------------------------------------
           ADD SCREENSHOTS AFTER RELEVANT SECTION
        ---------------------------------------------- */

        if (project.screenshots) {

            const screenshotsForSection =
                project.screenshots.filter(
                    screenshot =>
                        screenshot.afterSection ===
                        section.number
                );

            screenshotsForSection.forEach(
                screenshot => {

                    const screenshotSection =
                        document.createElement(
                            "section"
                        );

                    screenshotSection.className =
                        "case-study-screenshot-section";

                    screenshotSection.innerHTML = `

                        <div class="case-study-screenshot-header">

                            <p class="eyebrow">
                                PROJECT SCREENSHOT
                            </p>

                            <h3>
                                ${screenshot.title}
                            </h3>

                            <p>
                                ${screenshot.description}
                            </p>

                        </div>

                        <figure
                            class="case-study-screenshot"
                        >

                            <div
                                class="case-study-screenshot-frame"
                            >

                                <img
                                    src="${screenshot.image}"
                                    alt="${screenshot.title}"
                                    loading="lazy"
                                >

                            </div>

                        </figure>

                    `;

                    caseStudyContent.appendChild(
                        screenshotSection
                    );

                }
            );

        }

    });

}


/* =========================================================
   OPEN PROJECT MODAL
========================================================= */

document
    .querySelectorAll(
        '.solution-link[data-project]'
    )
    .forEach(button => {


        button.addEventListener(
            "click",
            () => {


                const projectId =
                    button.getAttribute(
                        "data-project"
                    );


                const project =
                    projects[projectId];


                /*
                    Safety check
                */

                if (!project) {

                    return;

                }


                /*
                    Update HERO
                */

                modalTitle.textContent =
                    project.title;


                modalType.textContent =
                    project.type;


                modalDescription.textContent =
                    project.description;


                /*
                    Update ICON
                */

                if (modalPreviewIcon) {

                    modalPreviewIcon.textContent =
                        project.icon;

                }


                /*
                    Update PREVIEW
                */

                if (modalPreviewTitle) {

    modalPreviewTitle.textContent =
        project.previewTitle;

}


if (modalPreviewText) {

    modalPreviewText.textContent =
        project.previewText;

}


if (modalPreviewImage) {

    modalPreviewImage.src =
        project.previewImage;

    modalPreviewImage.alt =
        project.previewTitle;

}


                /*
                    Update TECHNOLOGY TAGS
                */

                modalTech.innerHTML = "";


                project.technologies.forEach(
                    technology => {


                        const tag =
                            document.createElement(
                                "span"
                            );


                        tag.textContent =
                            technology;


                        modalTech.appendChild(
                            tag
                        );

                    }
                );


                /*
                    IMPORTANT:

                    Render the COMPLETE case study.

                    This is the part that fixes the
                    problem you were having.
                */

                renderCaseStudy(project);


                /*
                    Remember what the user clicked
                */

                lastFocusedElement =
                    document.activeElement;


                /*
                    Open modal
                */

                projectModal.classList.add(
                    "active"
                );


                projectModal.setAttribute(
                    "aria-hidden",
                    "false"
                );


                /*
                    Prevent background page scrolling
                */

                document.body.style.overflow =
                    "hidden";


                /*
                    Put keyboard focus inside modal
                */

                if (modalContainer) {

                    modalContainer.focus();

                }

            }
        );

    });


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    if (!projectModal) return;


    projectModal.classList.remove(
        "active"
    );


    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow = "";


    /*
        Return focus to the button that opened
        the modal.
    */

    if (
        lastFocusedElement &&
        typeof lastFocusedElement.focus === "function"
    ) {

        lastFocusedElement.focus();

    }

}


/* =========================================================
   CLOSE BUTTON
========================================================= */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


/* =========================================================
   FOOTER CLOSE BUTTON
========================================================= */

if (modalFooterClose) {

    modalFooterClose.addEventListener(
        "click",
        closeModal
    );

}


/* =========================================================
   CLICK OVERLAY TO CLOSE
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

document.addEventListener(
    "keydown",
    event => {


        if (
            event.key === "Escape" &&
            projectModal &&
            projectModal.classList.contains(
                "active"
            )
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById(
        "currentYear"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}
