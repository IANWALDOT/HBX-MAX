function reproducirVideo() {
  const video = document.createElement('video');
  video.src = 'mipobreangelito.mp4';
  video.style.position = 'fixed';
  video.style.top = 0;
  video.style.left = 0;
  video.style.width = '100vw';
  video.style.height = '100vh';
  video.style.objectFit = 'cover';
  video.style.zIndex = 9999;
  video.autoplay = true;
  video.controls = true;

  // Eliminar el video al terminar
  video.onended = () => {
    document.body.removeChild(video);
  };

  document.body.appendChild(video);

  // Intentar pantalla completa
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}
