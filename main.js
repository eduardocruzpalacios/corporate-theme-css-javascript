// Texto que se escribe solo
var i = 0;
var txt = 'Let us show you how we unleash knowledge unlimited power';
var speed = 100;

function typing()
{
    if (i < txt.length)
    {
        document.getElementById("hero").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
};