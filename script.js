document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-task-button';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteButton);
        document.getElementById('to-do-list').appendChild(li);
        taskInput.value = '';
    }
});

const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" }
];

function getRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-text').textContent = quote.text;
    document.getElementById('quote-author').textContent = `- ${quote.author}`;
}

document.getElementById('new-quote-button').addEventListener('click', getRandomQuote);

const currencyOptions = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'];
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');

currencyOptions.forEach(currency => {
    const optionFrom = document.createElement('option');
    optionFrom.value = currency;
    optionFrom.textContent = currency;
    fromCurrencySelect.appendChild(optionFrom);

    const optionTo = document.createElement('option');
    optionTo.value = currency;
    optionTo.textContent = currency;
    toCurrencySelect.appendChild(optionTo);
});

document.getElementById('convert-button').addEventListener('click', function() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }
    
    const conversionRates = {
        'USD': { 'EUR': 0.85, 'GBP': 0.75, 'JPY': 110.0, 'AUD': 1.34, 'CAD': 1.25 },
        'EUR': { 'USD': 1.18, 'GBP': 0.88, 'JPY': 129.0, 'AUD': 1.58, 'CAD': 1.47 },
        'GBP': { 'USD': 1.33, 'EUR': 1.14, 'JPY': 146.0, 'AUD': 1.80, 'CAD': 1.64 },
        'JPY': { 'USD': 0.0091, 'EUR': 0.0078, 'GBP': 0.0068, 'AUD': 0.012, 'CAD': 0.011 },
        'AUD': { 'USD': 0.75, 'EUR': 0.63, 'GBP': 0.56, 'JPY': 82.0, 'CAD': 0.93 },
        'CAD': { 'USD': 0.80, 'EUR': 0.68, 'GBP': 0.61, 'JPY': 87.0, 'AUD': 1.08 }
    };

    const rate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById('conversion-result').textContent = `Converted Amount: ${convertedAmount} ${toCurrency}`;
});

const display = document.getElementById('display');
const buttons = document.querySelectorAll('#calculator .button');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        display.value += this.dataset.value;
    });
});

equalsButton.addEventListener('click', function() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
});

clearButton.addEventListener('click', function() {
    display.value = '';
});

const weatherLocation = document.getElementById('weather-location');
const weatherDescription = document.getElementById('weather-description');
const weatherTemperature = document.getElementById('weather-temperature');
const fetchWeatherButton = document.getElementById('fetch-weather-button');
const refreshWeatherButton = document.getElementById('refresh-weather');

const apiKey = '444b04107ede1fa3a66aac35fc5945b7';

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        weatherLocation.textContent = `Location: ${data.name}`;
        weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
        weatherTemperature.textContent = `Temperature: ${data.main.temp} °C`;
    } catch (error) {
        weatherLocation.textContent = 'Location: Error';
        weatherDescription.textContent = 'Weather: Error';
        weatherTemperature.textContent = 'Temperature: Error';
    }
}

fetchWeatherButton.addEventListener('click', function() {
    const city = document.getElementById('city-input').value.trim();
    if (city) {
        fetchWeather(city);
    }
});

refreshWeatherButton.addEventListener('click', function() {
    const city = document.getElementById('city-input').value.trim();
    if (city) {
        fetchWeather(city);
    }
});
