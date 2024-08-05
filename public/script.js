const clickedWrap = document.querySelector('.clicked-wrap');
const clicked = document.querySelector('.clicked');
const myVideo = document.querySelector('#myVideo');
const source = document.querySelector('#srca');
const grid = document.querySelector('.grid');
let video = document.getElementById('myVideo');
const elems = document.querySelectorAll('.list');
for (const elem of elems) {
  const text = elem.innerText;
  elem.innerHTML = `
          <div class="triangles"></div>
          <div>${text}</div>
          `;
}
const clickedevent = () => {
  video.playbackRate = 3;

  clickedWrap.classList.add('upped');
  source.setAttribute('src', 'video2.mp4');
  myVideo.setAttribute('style', 'filter:brightness(1.5)');
  myVideo.classList.add('upped-video');
  clicked.classList.add('reduce');

  setTimeout(() => {
    grid.setAttribute('style', 'display:none;');
  }, 1500);
  document.body.addEventListener('keydown', (e) => {
    if (e.keyCode === 40 || e.keyCode === 38) {
      const focused = document.querySelector('.list.active');
      let toChange =
        e.keyCode === 40
          ? focused.nextElementSibling
          : focused.previousElementSibling;

      if (toChange && toChange.classList.contains('list')) {
        focused.classList.remove('active');
        toChange.classList.add('active');
      }
    }
  });
  document.body.addEventListener('keydown', (e) => {
    const search = document.querySelector('.modal-wrap.active');
    if (!search || e.keyCode !== 27) return;
    search.classList.remove('active');
  });
  document.body.addEventListener('keydown', (e) => {
    const search = document.querySelector('#projects.active');
    if (!search || e.keyCode !== 27) return;
    back();
  });
  document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.keyCode !== 13) return;
    const search = document.querySelector('.list.active');
    search.onclick.apply(search);
  });
};

const info = () => {
  const search = document.querySelector('.modal-wrap');
  if (search.classList.contains('active')) return;
  search.classList.add('active');
};
const back = () => {
  document.querySelector('#main').classList.add('active');
  document.querySelector('#main .list').classList.add('active');
  document.querySelector('#projects').classList.remove('active');
  document.querySelector('#projects .list.active').classList.remove('active');
};
const projects = () => {
  document.querySelector('#main').classList.remove('active');
  document.querySelector('#main .list.active').classList.remove('active');
  document.querySelector('#projects').classList.add('active');
  document.querySelector('#projects .list').classList.add('active');
};
