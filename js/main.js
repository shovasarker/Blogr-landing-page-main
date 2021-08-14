
const header = document.querySelector('.header__hero');
const navbar = document.querySelector('#navbar');
const menuBtn = document.querySelectorAll('.menu-btn');
const linkExpand = document.querySelectorAll('.header__mobile-menu-expands');
const dLinkExpand = document.querySelectorAll('.header__desktop-menu-expands');


menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (navbar.classList.contains("open")) {
            navbar.classList.remove("open");
        } else {
            navbar.classList.add("open");
        }
        linkExpand.forEach(item => {
            if (item.classList.contains("links-open")) {
                item.classList.remove("links-open");
            }
        });
    });
});


linkExpand.forEach(link => {

    link.addEventListener("click", () => {
        if (link.classList.contains("links-open")) {
            link.classList.remove("links-open");
        } else {
            linkExpand.forEach(item => {
                if (item.classList.contains("links-open")) {
                    item.classList.remove("links-open");
                }
            });
            link.classList.add("links-open");
        } 
    });

});

dLinkExpand.forEach(link => {

    link.addEventListener("click", () => {
        if (link.classList.contains("d-links-open")) {
            link.classList.remove("d-links-open");
        } else {
            dLinkExpand.forEach(item => {
                if (item.classList.contains("d-links-open")) {
                    item.classList.remove("d-links-open");
                }
            });
            link.classList.add("d-links-open");
        } 
    });

});


header.addEventListener("click", () => {
    dLinkExpand.forEach(item => {
        if (item.classList.contains("d-links-open")) {
            item.classList.remove("d-links-open");
        }
    });
});
