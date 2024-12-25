export default function loadComponent(target, source, cssUrl) {
    if (target) {
        const element = document.querySelector(target);
        if (element && source) {
            element.innerHTML = source;
        }
    }

    if (cssUrl) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssUrl;
        document.head.appendChild(link);
    }
}
