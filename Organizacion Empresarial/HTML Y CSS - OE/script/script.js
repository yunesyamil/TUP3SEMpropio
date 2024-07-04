document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    var formData = new FormData(this);

    fetch("/", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Formulario enviado con éxito!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un error al enviar el formulario.");
    });
});



