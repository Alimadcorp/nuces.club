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

document.addEventListener("DOMContentLoaded", dat);