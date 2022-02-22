// load photos from API
function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
}
loadPhotos();

// display photos on UI
function displayPhotos(photos){
    const photosContainer = document.getElementById('photo');
    for(const photo of photos){
        const div = document.createElement('div');
        div.classList.add('photos');
        div.innerHTML = `
        <h4>${photo.title}</h4>
        <img src= "${photo.url}">
        `
        photosContainer.appendChild(div);
    }
}