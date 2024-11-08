document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.getElementById("myVideo");

    // Redirect to wish.html when the video ends
    videoElement.addEventListener("ended", function() {
        window.location.href = "wish.html"; // Navigate to wish.html
    });

    // Set a timeout of 6 seconds to redirect if video is playing
    setTimeout(function() {
        // Pause the video after 6 seconds and navigate to wish.html
        videoElement.pause();
        window.location.href = "wish.html"; // Navigate to wish.html
    }, 6000); // 6000ms = 6 seconds
});
