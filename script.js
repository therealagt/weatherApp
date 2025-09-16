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
    const cityName = data.address;
    const conditions = data.currentConditions.conditions;
    const temp = data.currentConditions.temp;
    const day1 = data.days[1].temp; 
    const day2 = data.days[2].temp; 
    const day3 = data.days[3].temp; 
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>${cityName}</h2>
        <p>${conditions}</p>
        <p>${temp}°C</p>
        <h4>Temperature the next 3 Days</h4>
        <p>${day1}°C</p>
        <p>${day2}°C</p>
        <p>${day3}°C</p>
    `;
})
    .catch(error => {
        alert('Error fetching data:', error);
        });
}