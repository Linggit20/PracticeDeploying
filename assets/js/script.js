//  Navbar add and remove "active" class
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((a) => {
    a.addEventListener("click", (e) => {
        //  removing the class "active"
        navLink.forEach((a) => {
            a.classList.remove("active")
        })
        // adding the class "active"
        a.classList.add("active")
    })

})

const body = document.querySelector("body");
const navbarNav = document.querySelector("#navbarNav");

body.addEventListener("click", (e) => {
    let clickElm = e.target

    if (!clickElm.classList.contains("show")) {
         navbarNav.classList.remove("show")
    }
})



//  toggle "tab-links" to show "tab-content"
const tabLink = document.querySelectorAll(".tab-link");
const tabContent = document.querySelectorAll("tab-content");

tabLink.forEach((button)  => {
    button.addEventListener("click", () => {
        //  removoing class "active-link"
        tabLink.forEach((button) => {
            button.classList.remove("active-link");
        });
        //  adding  class "active-link"
        button.classList.add("active-link");  

        // removing class "active-content" from all tab contents
        const tabContent = document.querySelectorAll(".tab-content");
        tabContent.forEach((tabContent) => {
            tabContent.classList.remove("active-content")
        });

        // adding class "active-content" to the corresponding tab content
        const dataTarget = button.getAttribute("data-target")
        const getId = document.querySelector("#"  + dataTarget)
        getId.classList.add("active-content")
    })
});