image = document.getElementById("dogImage");

function newImage(){
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => image.src = json.message);
}