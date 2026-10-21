function dat() {
    setTimeout(() => {
        if (window.location.hash == "#self") {
            document.documentElement.style.filter = document.documentElement.style.filter === 'invert(1)' ? '' : 'invert(1)';
            document.querySelectorAll(".gallery img").forEach(e => {
                e.style.filter = e.style.filter === 'invert(1)' ? '' : 'invert(1)';
            });
        }
    }, 100);
}

const P = [
    "has weekly pizza parties.",
    "3D-prints its own trophies.",
    "demos at every single meeting.",
    "runs entirely on boba."
];

function initRollingText() {
    const el = document.getElementById("rolling-text");
    if (!el) return;
    
    let i = 0;
    setInterval(() => {
        el.style.opacity = 0;
        setTimeout(() => {
            i = (i + 1) % P.length;
            el.innerText = P[i];
            el.style.opacity = 1;
        }, 300);
    }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
    dat();
    initRollingText();
});
