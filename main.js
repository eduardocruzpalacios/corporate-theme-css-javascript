// Texto que se escribe solo
var i = 0;
var txt = 'Let us show you how we unleash knowledge unlimited power';
var speed = 100;

function typing() {
    if (i < txt.length) {
        document.getElementById("hero").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}

/* LLUVIA ICONOS */

// do a function (what happens when called)
function createIcon() {
    // constant box = to create img element
    const box = document.createElement("img");
    // make img have src="shield.svg" attribute
    box.setAttribute("src", "star.svg");

    box.style.position = "absolute";

    // (for img element) left= ; attribute has 0-98vh as value
    box.style.left = Math.random() * 98 + "%";

    // (for img element) animationDuration attribute has 3-4s as value
    box.style.animationDuration = Math.random() * 2 + 3 + "s";

    // make img be in #lluvia element
    document.getElementById("lluvia").appendChild(box);
    // now, in the body we have an img

    // time for each img to disapper
    setTimeout(() => {
        box.remove();
    }, 2000);
}
// set time for our function to be executed
setInterval(createIcon, 70);

// nav menu

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}