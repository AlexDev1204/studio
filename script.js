const decstopNav = document.getElementById("desctop-nav");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const _open = document.getElementById("open");
const _close = document.getElementById("close");

let open = false;

burger.style.display = window.innerWidth < 650 ? "flex" : "none";
decstopNav.style.display = window.innerWidth < 650 ? "none" : "flex";

const checkScreen = () => {
  let width = window.innerWidth;
  if (width < 650) {
    decstopNav.style.display = "none";
    burger.style.display = "flex";
  } else {
    decstopNav.style.display = "flex";
    burger.style.display = "none";
    if (open) {
      open = !open;
      menu.style.height = 0;
    }
  }
};

function openMenu() {
  if (open) {
    _open.style.display = "inline";
    _close.style.display = "none";
    menu.style.height = 0;
  } else {
    menu.style.height = "200px";
    _open.style.display = "none";
    _close.style.display = "inline";
  }
  open = !open;
}

burger.addEventListener("click", openMenu);
window.addEventListener("resize", checkScreen);

const arr_up = document.querySelector(".button_arrow");
let _display = 600;

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
  if (getTop() > _display) {
    arr_up.classList.add("active_arrow");
  } else {
    arr_up.classList.remove("active_arrow");
  }
});

arr_up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

let _watch = document.querySelector(".start-but");
let _pause = document.getElementById("pause");
let _stop = document.getElementById("stop");
let speed_up = document.getElementById("speed-up");
let speed_down = document.getElementById("speed-down");
let speed_normal = document.getElementById("speed-normal");
let _volume = document.getElementById("volume_");
let prog = document.getElementById("progress");

let center = document.querySelector(".video-center");
let line_control = document.getElementById("line_control");
let video_control = document.getElementById("video-control");
let video = document.querySelector("#video-play");
video.ontimeupdate = progressUpDate;

function play() {
  video.play();
  center.style.display = "none";
  video_control.style.display = "block";
  line_control.style.display = "block";
}

function pause() {
  video.pause();
  center.style.display = "flex";
}

function stoP() {
  video.pause();
  video.currentTime = 0;
  center.style.display = "flex";
}

function speedUp() {
  video.play();
  video.playbackRate = 2;
}

function speedDown() {
  video.play();
  video.playbackRate = 0.5;
}

function speedNormal() {
  video.play();
  video.playbackRate = 1;
}

function volume() {
  let audio = this.value;
  video.volume = audio / 100;
}

function progressUpDate() {
  let dur = video.duration;
  let curr = video.currentTime;
  prog.value = (100 * curr) / dur;
}

function videoUpShow(event) {
  let widthProg = this.offsetWidth;
  let timeClick = event.clientX;
  let startPosProg = this.getBoundingClientRect().x;
  let clickPercents = ((timeClick - startPosProg) * 100) / widthProg;
  video.pause();
  video.currentTime = (video.duration / 100) * clickPercents;
  video.play();
}

_watch.addEventListener("click", play);
_pause.addEventListener("click", pause);
_stop.addEventListener("click", stoP);
speed_up.addEventListener("click", speedUp);
speed_down.addEventListener("click", speedDown);
speed_normal.addEventListener("click", speedNormal);
_volume.addEventListener("input", volume);
prog.addEventListener("click", videoUpShow);
