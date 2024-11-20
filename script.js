// Hello
const ntc = document.getElementById('notch-container');
const nt = document.getElementById('notch');

nt.onmouseover = () => {
    nt.style.width = '85%';
    nt.style.height = "200%";
    nt.style.borderRadius = '80px';
}

nt.onmouseout = () => {
    nt.style.width = '85%';
    nt.style.height = '60%';
}