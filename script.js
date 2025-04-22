function playSong(file) {
    const audio = document.getElementById("audio");
    audio.src = file;
    audio.play();
  }
  
  function toggleAlbum(albumDiv) {
    albumDiv.classList.toggle("open");
  }

  
  const audio = document.getElementById("audio");
  const trackTitle = document.getElementById("track-title");
  const progressBar = document.getElementById("progress-bar");
  const playBtn = document.getElementById("play-btn");
  
  function playSong(file, title = "Musique") {
    audio.src = file;
    trackTitle.textContent = title;
    audio.play();
    playBtn.textContent = "⏸";
  }
  
  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸";
    } else {
      audio.pause();
      playBtn.textContent = "⏵";
    }
  }
  
  // Met à jour la barre de progression
  audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    progressBar.max = Math.floor(audio.duration);
  });
  
  // Permet de cliquer sur la barre de progression
  progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
  });

// Sélectionner le slider et l'élément audio
const slider = document.querySelector('.level');

// Mettre à jour le volume de l'audio lorsque le slider change
slider.addEventListener('input', function() {
  audio.volume = slider.value;
});  
  