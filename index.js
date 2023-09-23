let root = document.getElementById('root');
let element = document.createElement('div');
let ghostElement = document.createElement('div');

element.classList.add('element');
element.textContent = "Focus me";

ghostElement.classList.add('ghost');
ghostElement.textContent = "Ghost";

root.append(element);

element.addEventListener('mouseenter', function () {
    root.append(ghostElement);
});

element.addEventListener('mouseleave', function () {
    root.removeChild(ghostElement);
});