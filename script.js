// Event Listener BTN 

const btn = document.getElementById('Go');
btn.addEventListener('click', handleButtonClick);

// Dynamic URL Creation && API 

function handleButtonClick() {
    const city = document.getElementById('cityInput').value;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=CRWTWDS7D9KMHB2ABSNAA4Y9W&contentType=json`

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw response;
        }
        return response.json();
    })
    .then(data => {
        console.log('Weather data:', data);
    })
    .catch(error => {
        error.text().then(errorMessage => {
            console.error('Error fetching data:', errorMessage);
        });
    });
}