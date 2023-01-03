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

const route1 = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes1 = {
    404: "/pages/404.html",
    "/": function(){
        pageTemplate('/about', 'About', '<a href="/about" onclick="router1()">Home<a>');
    },
    "/about": function(){
        pageTemplate('/', 'Home', '<a>About<a>');
    },
    "/lorem": "/pages/lorem.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes1[path] || routes1[404];
    route();
};

window.onpopstate = handleLocation;
window.route1 = route1;

handleLocation();