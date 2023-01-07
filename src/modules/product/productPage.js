export default function createPage(elem) {
  const nav = document.createElement('nav');
  const ol = document.createElement('ol');
  const li = document.createElement('li');
  const div = document.createElement('div');
  const link = document.createElement('a');
  const p = document.createElement('p');
  const span = document.createElement('span');
  const section = document.createElement('section');
  const breadcrumb = ['Main', elem.type, elem.brand, elem.name];
  const image = [elem.img.first, elem.img.second, elem.img.thirt, elem.img.fourt];
  const price = elem.price + ' руб';
  const rating = elem.rating;

  const sectionFirst = `<div class="row g-8">
  <div class="col-md-4">
    <div class="carousel slide" data-bs-ride="carousel" id="carouselExampleCaptions">
      <div class="carousel-inner">
        <div class="carousel-item active bg-1">
        </div>
        <div class="carousel-item bg-2">
        </div>
        <div class="carousel-item bg-3">
        </div>
        <div class="carousel-item bg-4">
        </div>
      </div><button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleCaptions" type="button"><span aria-hidden="true" class="carousel-control-prev-icon"></span> <span class="visually-hidden">Previous</span></button> <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleCaptions" type="button"><span aria-hidden="true" class="carousel-control-next-icon"></span> <span class="visually-hidden">Next</span></button>
      <div class="carousel-indicators">
        <button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleCaptions" type="button"><img class="img-fluid" src=${image[0]}></button>
        <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleCaptions" type="button"><img class="img-fluid" src=${image[1]}></button>
        <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleCaptions" type="button"><img class="img-fluid" src=${image[2]}></button>
        <button aria-label="Slide 4" data-bs-slide-to="3" data-bs-target="#carouselExampleCaptions" type="button"><img class="img-fluid" src=${image[3]}></button>
      </div>
    </div>
  </div>
  <div class="col-md-7 flex-column d-flex justify-content-center">
    <h1 class="h3 pe-5">${breadcrumb[3]}</h1>
    <div class="flex-column d-flex align-content-between col-md-8 mt-5">
      <div class="flex-row d-flex justify-content-between align-items-center">
        <div class="star-rating">
          <div class="star-rating__wrap">
            <input class="star-rating__input" id="star-rating-5" type="radio" name="rating" value="5">
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-5" title="5 out of 5 stars"></label>
            <input class="star-rating__input" id="star-rating-4" type="radio" name="rating" value="4">
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-4" title="4 out of 5 stars"></label>
            <input class="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3">
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-3" title="3 out of 5 stars"></label>
            <input class="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2">
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-2" title="2 out of 5 stars"></label>
            <input class="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1">
            <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-1" title="1 out of 5 stars"></label>
          </div>
          <span>${rating}</span>
        </div>  
        <div class="d-flex">
          <div class="heart"><img src="../assets/ico/HeartActive.svg" alt=""><img src="../assets/ico/Heart.svg" alt=""></div>
          <div class="heart ms-3">
            <img src="../assets/ico/CompareActive.svg" alt=""><img src="../assets/ico/Compare.svg" alt=""></div>
        </div>
      </div>
      <div class="flex-row d-flex align-items-center justify-content-between mt-5 ">
        <div class="h4">${price}</div>
        <button type="button" class="btn btn-primary btn-lg bg-dark text-light">В корзину</button>
      </div>
    </div>
  </div>
</div>`;

const sectionSecond = `<nav class="bg-dark rounded">
<div class="nav nav-pills" id="nav-tab" role="tablist">
  <button class="text-light nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Описание</button>
  <button class="text-light nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Характеристики</button>
</div>
</nav>
<div class="tab-content h-100 mt-3" id="nav-tabContent">
<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
</div>
<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
  <h2>Main</h2>
</div>
</div>`;

  nav.classList.add('nav');
  nav.setAttribute('aria-label', 'breadcrumb');
  ol.classList.add('breadcrumb');
  nav.appendChild(ol);

  for (let i = 0; i < breadcrumb.length; i++) {
    li.classList.add('breadcrumb-item');
    if(i === 3) {
      li.classList.add('active');
      li.setAttribute('aria-current', 'page');
    }
    link.href = i === 'Main' ? '/' : breadcrumb[i].charAt(0) + breadcrumb[i].slice(1);
    if (i !== 3) li.appendChild(link);
    ol.appendChild(li);
  }

  section.className = 'top-block mb-3';
  section.innerHTML = sectionFirst;
  nav.append(section);

  /*for(let i = 0; i < image.length; i++) {
    const background = section.querySelector(`bg-${i + 1}`);
    background.style.backgroundImage = `url(${image[i]})`;
  }*/

  section.className = 'h-100';
  section.innerHTML = sectionSecond;
  nav.append(section);

  /*elem.description.article.forEach(item => {
    const parent = document.getElementById('nav-home');
    p.innerText(item);
    parent.appendChild(p);
  })*/

  const items = elem.description[0].section.desc;
  /*const parent = document.getElementsByTag('h2');

  for(let i = 0; i < items.length; i+=2 ) {
    const first = span.textContent(items[i]);
    const second = typeof (items[i+1]) === 'undefined' ? span.textContent(items[i+1]) : '';
    first.append(second);
    div.appendChild(first);
    parent.appendChild(div)
  }*/
  return nav;
}