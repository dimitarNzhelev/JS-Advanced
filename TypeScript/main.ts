import axios from 'axios';
const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const url = ''
type GoogleAPI = {
    results: {geometry: {location: {lat: number; lng: number} } } [];
    status: 'OK' | 'ZERO RESULTS';
}
const API_Key = 'ASDghgerfnadswAfsdaAW' //this is not valid API key
function searchAddressHandler(event:Event){
    event.preventDefault();
    const enteredAddress = addressInput.value;
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${API_Key}`)
    .then(response => {
        if(response.data.status != 'OK'){
            throw new Error('Could not fetch location!');
        }
        const coordinates = response.data.result[0].geometry.location;
    })
    .catch(err => console.log(err));
}

form.addEventListener('submit', searchAddressHandler);

//not finished yet