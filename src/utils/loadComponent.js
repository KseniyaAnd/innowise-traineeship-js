export default function loadComponent(target, source, cssUrl) {
    const element = document.querySelector(target);
    element.innerHTML = source;


    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    document.head.appendChild(link);
}