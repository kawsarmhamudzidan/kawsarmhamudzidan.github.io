/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("active");

    mobileMenu.classList.toggle("open");

});


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menuButton.classList.remove("active");

        mobileMenu.classList.remove("open");

    });

});



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================================
   SECTION ANIMATIONS
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".project-card, " +
        ".achievement-card, " +
        ".academic-main, " +
        ".academic-interests, " +
        ".about-text"
    );


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    sectionObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(
    (element, index) => {

        element.style.transitionDelay =
            `${index * 0.08}s`;

        sectionObserver.observe(element);

    }
);



/* =========================================================
   ACHIEVEMENT COUNTERS
========================================================= */

const achievementNumbers =
    document.querySelectorAll(
        ".achievement-number"
    );


function animateNumber(element) {

    const target =
        parseInt(
            element.dataset.target
        );

    const duration = 1600;

    const start =
        performance.now();


    function update(time) {

        const progress =
            Math.min(
                (time - start) /
                duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const value =
            Math.floor(
                target * eased
            );


        if (target >= 1000) {

            element.textContent =
                value;

        } else {

            element.textContent =
                value
                    .toString()
                    .padStart(2, "0");

        }


        if (progress < 1) {

            requestAnimationFrame(
                update
            );

        }

    }


    requestAnimationFrame(
        update
    );

}


const numberObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    animateNumber(
                        entry.target
                    );

                    numberObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.5
        }
    );


achievementNumbers.forEach(
    (number) => {

        numberObserver.observe(
            number
        );

    }
);



/* =========================================================
   MOUSE GLOW
========================================================= */

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


document.addEventListener(
    "mousemove",
    (event) => {

        if (
            window.innerWidth <= 650
        ) {
            return;
        }


        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);



/* =========================================================
   PROJECT CARD 3D TILT
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            if (
                window.innerWidth <= 1000
            ) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) / 100;


            const rotateY =
                (centerX - x) / 100;


            card.style.transform =
                `
                perspective(1200px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-6px)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});



/* =========================================================
   HERO PHOTO PARALLAX
========================================================= */

const photoFrame =
    document.querySelector(
        ".photo-frame"
    );


document.addEventListener(
    "mousemove",
    (event) => {

        if (
            window.innerWidth <= 1000
        ) {
            return;
        }


        const x =
            event.clientX /
            window.innerWidth -
            0.5;


        const y =
            event.clientY /
            window.innerHeight -
            0.5;


        photoFrame.style.setProperty(
            "--mouse-x",
            `${x * 10}px`
        );

        photoFrame.style.setProperty(
            "--mouse-y",
            `${y * 10}px`
        );

    }
);



/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

const buttons =
    document.querySelectorAll(
        ".button"
    );


buttons.forEach((button) => {

    button.addEventListener(
        "mousemove",
        (event) => {

            if (
                window.innerWidth <= 800
            ) {
                return;
            }


            const rect =
                button.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `
                translate(
                    ${x * 0.15}px,
                    ${y * 0.15}px
                )
                `;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "";

        }
    );

});



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );


const navObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    navLinks.forEach(
                        (link) => {

                            link.classList.remove(
                                "active"
                            );


                            if (
                                link.getAttribute(
                                    "href"
                                ) ===
                                `#${entry.target.id}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        }
                    );

                }

            });

        },
        {
            threshold: 0.4
        }
    );


sections.forEach(
    (section) => {

        navObserver.observe(
            section
        );

    }
);



/* =========================================================
   HERO NAME INTERACTION
========================================================= */

const heroName =
    document.querySelector(
        ".hero-name"
    );


if (heroName) {

    heroName.addEventListener(
        "mousemove",
        (event) => {

            if (
                window.innerWidth <= 1000
            ) {
                return;
            }


            const rect =
                heroName.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const moveX =
                (x / rect.width - 0.5)
                * 12;


            const moveY =
                (y / rect.height - 0.5)
                * 6;


            heroName.style.transform =
                `
                translate(
                    ${moveX}px,
                    ${moveY}px
                )
                `;

        }
    );


    heroName.addEventListener(
        "mouseleave",
        () => {

            heroName.style.transform =
                "";

        }
    );

}



/* =========================================================
   SCROLL PROGRESS BAR
========================================================= */

const progressBar =
    document.createElement(
        "div"
    );


progressBar.style.position =
    "fixed";

progressBar.style.top =
    "0";

progressBar.style.left =
    "0";

progressBar.style.height =
    "2px";

progressBar.style.width =
    "0%";

progressBar.style.background =
    "#164d73";

progressBar.style.zIndex =
    "1000";

progressBar.style.pointerEvents =
    "none";


document.body.appendChild(
    progressBar
);


window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement
                .scrollHeight -
            window.innerHeight;


        const progress =
            (scrollTop /
                documentHeight) *
            100;


        progressBar.style.width =
            `${progress}%`;

    }
);



/* =========================================================
   TEXT SCRAMBLE EFFECT
========================================================= */

/* const scrambleElements =
    document.querySelectorAll(
        ".project-info h3"
    );


const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function scrambleText(element) {

    const original =
        element.dataset.text ||
        element.innerText;


    element.dataset.text =
        original;


    let iteration = 0;


    const interval =
        setInterval(() => {

            element.innerText =
                original
                    .split("")
                    .map(
                        (letter, index) => {

                            if (
                                index < iteration
                            ) {

                                return original[
                                    index
                                ];

                            }

                            if (
                                letter === " "
                            ) {

                                return " ";

                            }

                            return characters[
                                Math.floor(
                                    Math.random() *
                                    characters.length
                                )
                            ];

                        }
                    )
                    .join("");


            iteration += 0.6;


            if (
                iteration >=
                original.length
            ) {

                clearInterval(
                    interval
                );

                element.innerText =
                    original;

            }

        }, 25);

}


scrambleElements.forEach(
    (element) => {

        element.addEventListener(
            "mouseenter",
            () => {

                scrambleText(
                    element
                );

            }
        );

    }
); */

/* =========================================================
   RECOGNITION PAGE TRANSITION
========================================================= */

const recognitionLinks =
    document.querySelectorAll(
        ".recognition-card"
    );

recognitionLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const destination =
                link.getAttribute("href");

            if (!destination) return;

            event.preventDefault();

            document.body.classList.add(
                "page-exit"
            );

            setTimeout(() => {

                window.location.href =
                    destination;

            }, 350);

        }
    );

});