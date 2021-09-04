let circle = document.querySelector('.circle');

window.onmousemove = (e) => {
    let x = e.clientX;
    console.log(x);
    circle.style.transform = `
        perspective(1000px) rotateY(${x / -2}deg) rotateX(15deg)
    `;
}