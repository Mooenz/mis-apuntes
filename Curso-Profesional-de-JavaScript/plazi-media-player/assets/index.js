function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  this.media.play;
}

MediaPlayer.prototype.pause = function () {
  this.media.pause;
}

MediaPlayer.prototype.togglePlay = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

const video = document.querySelector('video');
const boton = document.querySelector('button');

const player = new MediaPlayer({ el: video });

boton.onclick = () => player.togglePlay();
