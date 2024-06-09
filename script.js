document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    changeBackgroundColor();
    showMessage();

    function createFloatingHearts() {
        const heartContainer = document.createElement('div');
        heartContainer.className = 'floating-heart-container';
        document.body.appendChild(heartContainer);

        setInterval(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heartContainer.appendChild(heart);
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 500);
    }

    function changeBackgroundColor() {
        const colors = ['#ffecd1', '#ffe4e1', '#ffd1dc', '#ffc1e3'];
        let index = 0;
        setInterval(() => {
            document.body.style.backgroundColor = colors[index];
            index = (index + 1) % colors.length;
        }, 3000);
    }

    function showMessage() {
        const message = document.createElement('div');
        message.className = 'popup-message';
        message.innerHTML = '<p>te amo gorda y ya quiero ver tu regalo 🥰</p>';
        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 5000);
    }
});

