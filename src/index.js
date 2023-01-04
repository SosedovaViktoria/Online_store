const routes = {};
const templates = {};

let app_div = document.getElementById('app');

//Прототип объекта с шаблонами страниц

const routing = [{
    'temlate': template('home', function(){
        pageTemplate('#/about', 'About', '<h1>Home</h1>', undefined);
    }),
    'route': route('/', 'home')
},
{
    'temlate': template('about', function(){
        pageTemplate('#/', 'Home', '<h1>About</h1>');
    }),
    'route': route('/about', 'about')
},
{
    'temlate': template('404', function(){
        pageTemplate('#/', 'Home', '<h1>404</h1>');
    }),
    'route': route('/404', '404')
} 
];

async function parseJson() {
    const response = await fetch('../assets/json/store.json')
    const data = await response.json()
    data.forEach(elem => {
        const neewElem = {
            'temlate': template(elem.name, function(){
                pageTemplate('#/', 'Home', '<h1>' + elem.name +'</h1>');
            }),
            'route': route('/'.concat(elem.url), elem.name)
        }
        routing.push(neewElem)
    })
}

parseJson();
//Функция генерирует контент из основных элементов

function pageTemplate(page, text, html, callback) {
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = page;
    link.innerText = text;

    div.innerHTML = html;
    if(callback) div.appendChild(callback)
    div.appendChild(link);

    app_div.innerHTML = div.outerHTML;
}

//Функция связывает пути в шаблоном

function route (path, template) {
    if (typeof template === 'function') {
        console.log(template)
        return routes[path] = template;
    }
    else if (typeof template === 'string') {
        console.log(template)
        return routes[path] = templates[template];
    } else {
        return;
    }
}

//Функция - механизм шаблонов

function template (name, templateFunction) {
    return templates[name] = templateFunction;
}

//Запуск отслеживания шаблонов и маршрутов

routing.forEach(elem => {
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

function router() {
    let url = window.location.hash.slice(1) || '/';
    const error = '/404';
    let route = resolveRoute(url) || resolveRoute(error);

    route();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);