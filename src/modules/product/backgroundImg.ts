

export default function imgSlider(elem : string[]) : void {
  for(let i = 0; i < elem.length; i++) {
    const background = document.getElementById(`bg-${i + 1}`);
    background!.style.backgroundImage = `url(${elem[i]})`;
  }
}