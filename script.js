// ТЕМЫЫ
const themeRadios = document.querySelectorAll('input[name="theme"]');
const savedTheme = localStorage.getItem('theme') || 'light';

function setTheme(theme) {
    const target = document.querySelector(`#t-${theme}`);
    if (target) {
        target.checked = true;
        localStorage.setItem('theme', theme);
    }
}
setTheme(savedTheme === 'dark' ? 'dark' : 'light');



// БУРГЕРР
const sidebar = document.querySelector('.sidebar');
const burger = document.querySelector('.burger');

function closeMenu() {
    sidebar?.classList.remove('sidebar--open');
}
burger?.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('sidebar--open');
});
