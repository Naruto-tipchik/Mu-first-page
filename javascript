document.getElementById('reveal-button').addEventListener('click', function() {
    const email = document.getElementById('email');
    email.textContent = 'contact@mysite.com'; // Замените на ваш email
    this.style.display = 'none'; // Скрыть кнопку после клика
});
