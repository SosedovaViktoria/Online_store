let routes = {};
let templates = {};

let app_div = document.getElementById('app');

//Функция генерирует контент из основных элементов

function pageTemplate(page, text, html) {
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = page;
    link.innerText = text;

    div.innerHTML = html;
    div.appendChild(link);

    app_div.innerHTML = div.outerHTML;
}

//Функция связывает пути в шаблоном

function route (path, template) {
    if (typeof template === 'function') {
        return routes[path] = template;
    }
    else if (typeof template === 'string') {
        return routes[path] = templates[template];
    } else {
        return;
    }
}

//Функция - механизм шаблонов

function template (name, templateFunction) {
    return templates[name] = templateFunction;
}

//Прототип объекта с шаблонами страниц

const a = [{
    'temlate': template('home', function(){
        pageTemplate('#/about', 'About', '<h1>Home</h1>');
    }),
    'route': route('/', 'home')
},
{
    'temlate': template('about', function(){
        pageTemplate('#/', 'Home', '<h1>About</h1>');
    }),
    'route': route('/about', 'about')
}    
];

//Запуск отслеживания шаблонов и маршрутов

a.forEach(elem => {
    elem.temlate;
    elem.route;
})

function resolveRoute(route) {
    try {
        return routes[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    }
}

function router(evt) {
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);

    route();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);