const videoPlayer = document.getElementById("video-player-container");
const video = document.getElementById("video-screen");
const playButton = document.getElementById("button");

playButton.addEventListener('click', (e) => {
    if(video.paused){
        video.play()
        e.target.textContent = 'II'
    }else{
        video.pause()
        e.target.textContent = '►'
    }
})
