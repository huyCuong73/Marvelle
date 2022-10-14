{/* <script type="text/javascript">

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

</script>
        <script>
        var searchbox = document.getElementById('search')
        searchbox.addEventListener("keyup", function(event){
            let sub = document.getElementsByClassName("script")
            let line = document.querySelectorAll(".line")
            let vs = document.getElementsByClassName("vietsubVideo")

            var search = document.getElementById("search").value.toUpperCase();
            for (var i = 0; i<line.length; i++){
                var match = line[i].getElementsByTagName('p')[0]
                if (match){
                    var textvalue = match.textContent || match.innerHTML
                    var index = textvalue.toUpperCase().indexOf(search)

                    if ( index > -1){
                        sub[i].style.display="";
                        var innerHTML = match.innerText


                    }else{
                        var sv1 = document.getElementById('engsubVideo')
                        var br = sv1.getElementsByTagName("br")


                        sub[i].style.display="none"

                        console.log(vs)
                    }
                }
            }
        })

    </script>

    <script>

        window.onload = function () {

            var video = document.getElementsByTagName("video")[0];
            var btnPlay = document.getElementById("btnPlay");
            var transcript = document.getElementById("transcriptContainer");
            var trans_text = document.getElementById("transcriptText");
            var speaking = document.getElementById("speaking");
            var dialogueTimings = [];
            var current = -1;
            var playscr = document.getElementById("play2");
            // register events for the clicks on the text

            var subboxes = document.getElementsByClassName("subbox");
            for (i = 0; i < subboxes.length; i++) {
                subboxes[i].addEventListener("click", function (evt) {
                    var start = this.getAttribute("data-time");
                    var a = start.split(':'); 
                    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
                    video.currentTime = seconds;
                    video.play(); 
                    playscr.innerHTML =' '
                }, false);
            }


            var cues = document.getElementsByClassName("subbox");
            console.log(cues.length)
            video.addEventListener("timeupdate", function (evt) {
                if (video.paused || video.ended) {
                    return;
                }
                // scroll to currently playing time offset
                for (i = 0; i < cues.length; i++) {     
                    var cue = cues[i].getAttribute("data-time");
                    var a = cue.split(':'); 
                    var cueTime = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 

                    if (cues[i].className.indexOf("current") == -1 &&
                        video.currentTime >= cueTime &&
                        video.currentTime < cueTime) {
                        trans_text.scrollTop =
                            cues[i].offsetTop - trans_text.offsetTop;
                        if (current >= 0) {
                            cues[current].classList.remove("current");
                        }
                        cues[i].className += " current";
                        current = i;
                        if (cues[i].getAttribute("aria-live") == "rude") {
                            speaking.innerHTML = cues[i].innerHTML;
                        }
                    }
                }
            },
                false);
        };
    </script>
    <script>
        var dialogueTimings2 = [];

        var cues2 = document.getElementsByClassName("subbox");
        for (i = 0; i < cues2.length; i++) {
            var cue2 = cues2[i].getAttribute("data-time");
            var a = cue2.split(':');
            var cueTime2 = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
            dialogueTimings2.push(parseFloat(cueTime2))
        }
        console.log(dialogueTimings2);
        dialogues = document.querySelectorAll('#box'),
            transcriptWrapper = document.querySelector('#transcriptWrapper'),
            audio = document.querySelector('#videoPlayer');
        previousDialogueTime = -1;

        function playTranscript() {

            var currentDialogueTime = Math.max.apply(Math, dialogueTimings2.filter(function (v) { return v <= audio.currentTime }));

            if (previousDialogueTime !== currentDialogueTime) {
                previousDialogueTime = currentDialogueTime;
                var currentDialogue = dialogues[dialogueTimings2.indexOf(currentDialogueTime)];

                transcriptWrapper.scrollTop = currentDialogue.offsetTop - 150;
                var previousDialogue = document.getElementsByClassName('highlight')[0];
                if (previousDialogue !== undefined)
                    previousDialogue.className = previousDialogue.className.replace('highlight', '');
                currentDialogue.className += ' highlight';
        btnPlay.innerHTML = '<img src="/icon/pauseButton2.svg">'
            }

        var subvideo = document.getElementsByClassName("engsubVideo")[0]
        var vietsubvideo = document.getElementsByClassName("vietsubVideo")[0]
        var only = document.getElementsByClassName("only")[0]
        var time = document.getElementsByClassName('subbox')
        var line = document.getElementsByClassName("line")

        var approxTime = 0
            var currentTime = audio.currentTime;
            if (currentTime !== approxTime) {
                approxTime = currentTime;
                for (let i = 0; i < time.length; i++) {
                        var text = time[i].getElementsByClassName("engsub")[0].innerText.split("\n")
                        var viettext = time[i].getElementsByClassName("vietsub")[0].innerText.split("\n")
                        var hms = time[i].getAttribute("data-time");
                        var hmse = time[i].getAttribute("end-time");
                        var a = hms.split(':');
                        var b = hmse.split(':');
                        var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
                        var secondse = (+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2]);

                    if (approxTime >= seconds && approxTime <= secondse) {
                        subvideo.innerHTML = ""
                        vietsubvideo.innerHTML = ""

                        for (let i = 0; i < text.length; i++) {

                            subvideo.append(text[i]);
                            subvideo.innerHTML += "<br>"
                            vietsubvideo.append(viettext[i]);
                            vietsubvideo.innerHTML += "<br>"

                        }
                    }
                    if(approxTime <time[i].seconds && approxTime > secondse){
                            subvideo.style.display = "none"
                            vietsubvideo.innerHTML = ""
                            console.log("a")
                    }
                }
            }
        };

    </script>


<script>
document.querySelectorAll('.moresub-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('moresub-button--active');

        if (button.classList.contains('moresub-button--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            setTimeout(accordionContent.style.maxHeight = 0, 3000 );
            accordionContent.style.maxHeight = 0;
        }
    })
});
</script>
<script>
var v = document.getElementById("v");
var playscr = document.getElementById("play2");
window.addEventListener('keydown',function(event){
    if (event.keyCode === 39 ){
        event.preventDefault();
        videoPlayer.currentTime += 5;

    }
    if (event.keyCode === 32 ){
       event.preventDefault();
        btnPlay.style.border= "none"
        
        if (videoPlayer.paused) {
            videoPlayer.play();
            btnPlay.innerHTML = '<img src="/icon/pauseButton2.svg">';
            playscr.innerHTML = '';
        } else {
            videoPlayer.pause();
            btnPlay.innerHTML = '<img src="/icon/playButton.svg">';
            playscr.innerHTML = '<img src="/icon/playic-screen.svg">';
        }            
    }
    if (event.keyCode === 37 ){
        event.preventDefault();
        videoPlayer.currentTime -= 5;
    }
})
</script>



    <!-- <video id="audio" ontimeupdate="playTranscript()"   height="100%" width="50%"  controls loop autoplay>
<source src="/video/s.mp4" type="video/mp4">
Your browser does not support the audio element.
</source>
</video> -->

    <!-- <script>


var dialogueTimings = [];

var cues = document.getElementsByClassName("cue");
for (i=0; i<cues.length; i++) {
    var cueTime = cues[i].getAttribute("data-time");
    dialogueTimings.push( parseFloat(cueTime) )
}
console.log(dialogueTimings);
dialogues = document.querySelectorAll('#transcript>li'),
transcriptWrapper = document.querySelector('#transcriptWrapper'),
audio = document.querySelector('#audio');
previousDialogueTime = -1;

function playTranscript() {

var currentDialogueTime = Math.max.apply(Math, dialogueTimings.filter(function(v){return v <= audio.currentTime}));

if(previousDialogueTime !== currentDialogueTime) {
    previousDialogueTime = currentDialogueTime;
    var currentDialogue = dialogues[dialogueTimings.indexOf(currentDialogueTime)];
    transcriptWrapper.scrollTop  = currentDialogue.offsetTop - 50;
    var previousDialogue = document.getElementsByClassName('speaking')[0];
    if(previousDialogue !== undefined)
        previousDialogue.className = previousDialogue.className.replace('speaking','');
    currentDialogue.className +=' speaking';
}
}
;

</script> */}