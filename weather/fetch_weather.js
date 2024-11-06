const API_KEY = "5c23752fa22a9f42bb20028c962dab06";
const city = "Stockholm";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

async function getForecasts() {
    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error("HTTP" + response.status);
        }
        const data = await response.json();
        console.log(data)
        return data;

    } catch(error) {
        console.log(error);
    }
}

getForecasts()