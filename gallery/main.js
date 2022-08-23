// 1. Nasluchujemy na zdarzenie klikniecia w obrazki przez uzytkownika
// 2. Pobieramy aktualny URL do kliknietego obrazka
// 3. Zmieniamy URL na docelowy (wieksza rozdzielczosc)
// 4. Renderujemy  duzy obrazek pod lista minaturek

const images = document.querySelectorAll("img");
console.log(images);

const bigPhotoContainer = document.querySelector("#big-photo")

function renderPhoto(photo) {
    //usuniecie pierwszego elementu
    bigPhotoContainer?.firstElementChild?.remove();
    //renderowanie obrazka'photo' w elemencie'bigphotoContainer'
    bigPhotoContainer?.append(photo);
}

function handleClickOnImage() {
    //pobranie atrybutu src z elementu img
    const currentUrl = this.src;
    
    const bigPhotoUrl = currentUrl
                .replace("300", "900")
                .replace("200", "600");
    console.log(bigPhotoUrl);
    
    const photo = document.createElement("img");
    photo.src = bigPhotoUrl;
    renderPhoto(photo);
}

images.forEach(function (image) {
//    console.log('to jest image z petli forEach', image);
image.addEventListener("click", handleClickOnImage);
});

//images[0].addEventListener("click", handleClickOnImage)
//images[1].addEventListener("click", handleClickOnImage)
//images[2].addEventListener("click", handleClickOnImage)