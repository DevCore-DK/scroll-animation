/* window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false); */

const container = document.getElementById("container");
const wrapper = document.getElementById("wrapper");
const imgDoor = document.getElementById("img_door");
const imgWelcome = document.getElementById("img_welcome");
const textWrapper = document.getElementById("text-wrapper");

window.addEventListener('DOMContentLoaded', () => {
    console.log("scroll: " + window.scrollY)
    console.log("innerHeight: " + window.innerHeight)

    container.style.display = "block";
    Array.prototype.forEach.call(document.getElementsByClassName("spacer-container"), function(element) {
        element.style.display = "block";
    })

    window.addEventListener('scroll', () => {
        if (window.innerHeight - window.scrollY > 0) {
            imgWelcome.style.top = `${window.innerHeight - window.scrollY}px`;
            imgDoor.style.width = `${((window.scrollY - window.innerHeight) / 30) + 100}%`;
        } else {
            imgWelcome.style.top = "0px";
            imgDoor.style.width = "100%;"
            console.log(window.scrollY);
        }
    });
})