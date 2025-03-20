document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (token) {
        alert("You are already logged in !");
        return window.location.href = 'dashboard.html';
    }
});