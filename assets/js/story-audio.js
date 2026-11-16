// Story audio samples: stops the sound when a story pop-up is closed.
// Without this, the audio would keep playing after the visitor closes the pop-up.

// Find every story pop-up on the page
const storyModals = document.querySelectorAll(".story-modal");

storyModals.forEach(function (modal) {
    // Bootstrap sends a "hide.bs.modal" event just before it closes a pop-up
    modal.addEventListener("hide.bs.modal", function () {
        // Pause any audio player inside this pop-up
        modal.querySelectorAll("audio").forEach(function (audio) {
            audio.pause();
        });
    });
});
