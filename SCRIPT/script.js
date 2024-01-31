const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped(){
        cursor.style.display = "none"
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () =>{
    cursor.style.display = "none";

});

document.addEventListener("click", (e) =>{
    createRipple(e.pageX, e.pageY);
});

function createRipple(x, y) {
    const ripple = document.createElement("div");
    ripple.classList.add("ripple-effect");
    ripple.style.top = (y - 15)  + "px";
    ripple.style.left = (x - 37) + "px";
    document.body.appendChild(ripple);

    setTimeout(() => {
        
        ripple.style.opacity = 0;
        ripple.style.transition = "opacity 2s ease-out";

        
        setTimeout(() => {
            ripple.remove();
        }, 2000);
    }, 15000);

    ripple.offsetHeight;
    ripple.style.opacity = 1;
}

