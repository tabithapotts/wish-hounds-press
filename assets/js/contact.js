// Contact form: sends the message to Web3Forms and shows a confirmation on the page.
// Without this file the form still works, but the visitor is taken to a Web3Forms page instead.

const form = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");
const submitButton = document.getElementById("contact-submit");

// Shows a message under the form. type is "success" or "error".
function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.classList.remove("d-none", "form-message-success", "form-message-error");
    messageBox.classList.add("form-message-" + type);
}

form.addEventListener("submit", async function (event) {
    // Stop the browser leaving the page, so that we can show the result here instead
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
        const response = await fetch(form.action, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: new FormData(form)
        });
        const result = await response.json();

        if (result.success) {
            showMessage("Thank you. Your message has been sent and we will reply as soon as we can.", "success");
            form.reset();
        } else {
            showMessage("Sorry, your message could not be sent. Please try again in a few minutes.", "error");
        }
    } catch (error) {
        showMessage("Sorry, something went wrong. Please check your connection and try again.", "error");
    }

    submitButton.disabled = false;
    submitButton.textContent = "Send message";
});
