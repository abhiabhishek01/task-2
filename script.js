// Project button
function showMessage(projectName) {

    alert(
        "You selected: " +
        projectName +
        "\nProject details coming soon!"
    );
}


// Contact form
document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );

        this.reset();
    });