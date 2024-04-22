document.addEventListener("DOMContentLoaded", function() {
    var fullscreenBtns = document.querySelectorAll(".fullscreen-btn");
    
    fullscreenBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var parentDiv = this.parentElement;
            var img = parentDiv.querySelector("img");
            
            if (!document.fullscreenElement) {
                if (img.requestFullscreen) {
                    img.requestFullscreen();
                } else if (img.mozRequestFullScreen) { /* Firefox */
                    img.mozRequestFullScreen();
                } else if (img.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                    img.webkitRequestFullscreen();
                } else if (img.msRequestFullscreen) { /* IE/Edge */
                    img.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) { /* Firefox */
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE/Edge */
                    document.msExitFullscreen();
                }
            }
        });
    });
});