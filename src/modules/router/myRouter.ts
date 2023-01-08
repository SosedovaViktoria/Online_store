import JSONFiles from '../../assets/json/store.json';
import createPage from '../product/productPage'
import imgSlider from '../product/backgroundImg'

const routes = {};
const templates = {};

const app_div = document.getElementById('app');

//Прототип объекта с шаблонами страниц

const routing = [{
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
},
{
    'temlate': template('404', function(){
        pageTemplate('#/', 'Home', '<h1>404</h1>');
    }),
    'route': route('/404', '404')
} 
];

function parseJson() : void {
    JSONFiles.forEach((elem) => {
        const neewElem = {
            'temlate': template(elem.name, function(){
                pageTemplate('#/', 'Home', '<h1>' + elem.name +'</h1>', createPage(elem));
            }),
            'route': route('/'.concat(elem.url), elem.name)
        }
        routing.push(neewElem)
    })
}

parseJson();
//Функция генерирует контент из основных элементов

function pageTemplate(page : string, text : string, html : string, callback?  : HTMLElement) : void {
    const div = document.createElement('div');
    const link = document.createElement('a');
    link.href = page;
    link.innerText = text;

    div.innerHTML = html;
    div.appendChild(link);

    if(!callback )app_div!.innerHTML = div.outerHTML;
    if(callback) app_div!.prepend(callback);
}

//Функция связывает пути в шаблоном

function route (path : string, template : string) : void {
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

function template (name : string, templateFunction : object) {
    return templates[name] = templateFunction;
}

//Запуск отслеживания шаблонов и маршрутов

routing.forEach(elem => {
    elem.temlate;
    elem.route;
})

function resolveRoute(route : string) {
    try {
        return routes[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    }
}

function router() : void {
    const url = window.location.hash.slice(1) || '/';
    const error = '/404';
    const route = resolveRoute(url) || resolveRoute(error);
    route();
}

setTimeout(() => {
    const h1 = document.getElementById('h1')?.textContent;
    const imgCollection : string[] = []
    JSONFiles.forEach((elem) => {
        if(elem.name === h1) {
            imgCollection.push(elem.img[0].first)
            imgCollection.push(elem.img[0].second)
            imgCollection.push(elem.img[0].thirt)
            imgCollection.push(elem.img[0].fourt)
        }
    })
    imgSlider(imgCollection);
}, 100);

export default function() : void { window.addEventListener('load', router);
window.addEventListener('hashchange', router);}