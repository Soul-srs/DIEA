const ntc = document.getElementById('notch-container');
const nt = document.getElementById('notch');
const fib = document.getElementById('face-id-button');
const cb = document.getElementById('charge-button');

let isAnimating = false;

fib.addEventListener('click', () => {
    if (isAnimating) return;

    isAnimating = true;

    const originalStyles = {
        width: nt.style.width,
        height: nt.style.height,
        borderRadius: nt.style.borderRadius
    };

    nt.style.width = '45%';
    nt.style.height = '55%';
    nt.style.borderRadius = '80px';

    setTimeout(() => {
        nt.style.width = originalStyles.width;
        nt.style.height = originalStyles.height;

        isAnimating = false;
    }, 3000);
});

cb.addEventListener('click', () => {
    if (isAnimating) return;

    isAnimating = true;

    const originalWidth = nt.style.width;

    nt.style.width = originalWidth === '80%' ? '45%' : '80%';

    setTimeout(() => {
        nt.style.width = originalWidth;

        isAnimating = false;
    }, 3000);
});
