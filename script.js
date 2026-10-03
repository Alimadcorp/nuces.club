document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash == "#self") {
        document.documentElement.style.filter = document.documentElement.style.filter === 'invert(1)' ? '' : 'invert(1)';
    }
});