const input = document.getElementById("video_input")
const video = document.getElementById("video")

const iframe_button = document.getElementById("copy_button")
const iframe_code = document.getElementById("iframecode")
iframe_button.addEventListener("click", () => {
    iframe_code.select();
    iframe_code.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(iframe_code.value);

    Swal.fire({
        icon: 'success',
        title: 'Başarılı',
        text: 'iFrame kodu başarıyla panoya kopyalandı.',
        confirmButtonText: 'Harika!'
    })
})

input.addEventListener("keyup", () => {
    video.style.display = "block";
    video.src = "https://www.youtube.com/embed/" + input.value;
    iframe_code.textContent = "<iframe src=\ https://www.youtube.com/embed/" + input.value  + "\" style=\"display: none\" id=\"video\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"

})

iframe_code.textContent = "Lütfen iframe kodunun gözükmesi için bir videonun bağlantısındaki ID değerini yukarıya yazın."
