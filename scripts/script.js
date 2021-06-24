const mainButton = document.querySelector('#main-btn');
const mobileButton = document.querySelector('#mobile-btn');
const overlay = document.querySelector('#video-overlay');
const exitButton = document.querySelector('.exit-btn');

let player;
const onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

mainButton.addEventListener('click', () => {
    if(overlay.classList.contains('overlay-container-off')) {
        overlay.classList.remove('overlay-container-off');
        overlay.classList.add('overlay-container-on');
    }
});

mobileButton.addEventListener('click', () => {
    if(overlay.classList.contains('overlay-container-off')) {
        overlay.classList.remove('overlay-container-off');
        overlay.classList.add('overlay-container-on');
    }
})

exitButton.addEventListener('click', () => {
    if(overlay.classList.contains('overlay-container-on')) {
        overlay.classList.remove('overlay-container-on');
        overlay.classList.add('overlay-container-off');
    }
})