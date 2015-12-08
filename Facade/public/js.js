document.addEventListener("DOMContentLoaded", function(){
    var v1 = document.createElement("video");
    v1.src = "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_50mb.mp4";

    var v2 = document.createElement("video");
    v2.src = "http://techslides.com/demos/sample-videos/small.mp4";

    var lock = false;

    function playVideo(video, callback){
        var element = document.getElementsByTagName("video");
        for (index = element.length - 1; index >= 0; index--) {
            element[index].pause();
            element[index].parentNode.removeChild(element[index]);
        }

        document.body.appendChild(video);

        video.addEventListener('ended', callback);
        video.play();
    }

    function playV1(){
        lock = false;
        playVideo(v1, playV1);
    }

    function playV2(){
        lock = true;
        playVideo(v2, playV1);
    }

    var socket = io.connect('http://localhost:8000');
    socket.on('button', function(){
        if(!lock) playV2();
    });

    playV1();
});
