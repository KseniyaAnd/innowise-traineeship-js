export default function loadComponent(target, url, cssUrl) {
    // fetch(url)
    //     .then(response => response.text())
    //     .then(html => {
    //         const element = document.querySelector(target);
    //         if (element) {
    //             element.innerHTML = html;
    //         } else {
    //             console.error(`Element with class ${target} not found`);
    //         }
    //     })
    //     .catch(error => console.error('Error loading component:', error));
    //
    const element = document.querySelector(target);
    element.innerHTML = url;


    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    document.head.appendChild(link);
}