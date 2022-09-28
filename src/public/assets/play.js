var a1 = document.getElementsByClassName("a1")
var video = document.getElementById('videoPlayer')
var loader = document.getElementById('ring')
var loading = document.getElementById('load')
var parent = loader.parentElement

var oos = document.getElementById("oos");
var allsubVideo = document.getElementById("allsubVideo");


video.addEventListener('waiting', (event) => {
    loader.style.setProperty('display', 'initial');
    loading.style.setProperty('display', 'initial');
});

video.addEventListener('timeupdate', (event) => {
    loader.style.display = "none"
    loading.style.display = "none"
});

</script>

<script type="text/javascript">

function play() {
    var videoPlayer = document.getElementById("videoPlayer");
    var btnPlay = document.getElementById("btnPlay");
    var videoTime = document.getElementById("videoTime");
    var videoDuration = document.getElementById("videoDuration");
    var range = document.getElementById("range");
    var playscr = document.getElementById("play2");
    if (videoPlayer.paused) {
        videoPlayer.play();
        btnPlay.innerHTML = '<img src="/icon/pauseButton2.svg">'
        playscr.innerHTML = ''
    } else {
        videoPlayer.pause();
        btnPlay.innerHTML = '<img src="/icon/playButton.svg">'
        playscr.innerHTML = '<img src="/icon/playic-screen.svg">'
    }
};

function play3() {
    var videoPlayer = document.getElementById("videoPlayer");
    var btnPlay = document.getElementById("btnPlay");
    var videoTime = document.getElementById("videoTime");
    var videoDuration = document.getElementById("videoDuration");
    var range = document.getElementById("range");
    var playscr = document.getElementById("play2");
    if (videoPlayer.paused) {
        videoPlayer.play();
        btnPlay.innerHTML = '<img src="/icon/pauseButton2.svg">'
        playscr.innerHTML = ''
    } else {
        videoPlayer.pause();
        btnPlay.innerHTML = '<img src="/icon/playButton.svg">'
        playscr.innerHTML = '<img src="/icon/playic-screen.svg">'
    }
};


 function play2() {
    var videoPlayer = document.getElementById("videoPlayer");
    var playscr = document.getElementById("playscr");
    var btnPlay = document.getElementById("btnPlay");
    if (videoPlayer.paused) {
        videoPlayer.play();
        btnPlay.innerHTML = '<img src="/icon/pauseButton2.svg">'
        playscr.innerHTML = ''
    }
}                       

volume.addEventListener("click",function(){
    let videoPlayer = document.getElementById("videoPlayer");
    if (videoPlayer.volume == 0) {
        videoPlayer.volume = 1
        volume.innerHTML = '<img src="/icon/unmute.svg">'

    } else {
        videoPlayer.volume = 0
        volume.innerHTML = '<img src="/icon/mute.svg">'
    }
})

/*Function to Reload video from Beginning*/
function reloadVideo() {
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.currentTime = 0;
}
/*Function to Forward & Rewind*/
function forwardRewind(param) {

    videoPlayer.currentTime += param;
}
range.addEventListener('input', function () {
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.currentTime = range.value;
    videoPlayer.play();
    btnPlay.innerHTML = '<img src="/icon/pauseButton2.svg">'
    playscr.style.display = "none"
    console.log (videoPlayer.readyState)
    range.max = Math.floor(videoPlayer.duration);

})
videoPlayer.addEventListener('timeupdate', function () {
    var time= Math.floor(videoPlayer.currentTime);
    videoTime.innerHTML = formatTime(time);
    range.value = videoPlayer.currentTime;
    range.max = Math.floor(videoPlayer.duration);
})
window.onload = function () {
    videoTime.innerHTML = videoPlayer.currentTime;
    videoDuration.innerHTML = Math.floor(videoPlayer.duration);

}
function formatTime(time) {
    let hours = Math.floor(time / 3600)
    let minutes = Math.floor((time - hours * 3600)/60)
    let seconds = Math.floor(time - hours * 3600 - minutes * 60)

    let minuteValue, secondValue


    minuteValue = minutes < 10 ? '0' + minutes : minutes
    secondValue = seconds < 10 ? '0' + seconds : seconds

    let mediaTime =  hours + ":" + minuteValue + ':' + secondValue

    return mediaTime
}
function toggleFullScreen() {
    let fs = document.getElementById("goFS");
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
        fs.innerHTML = '<img src="/icon/unfullsr.svg">'
        
    }
    else {
        cancelFullScreen.call(doc);
        fs.innerHTML = '<img src="/icon/fullsr.svg">'
    }
}
