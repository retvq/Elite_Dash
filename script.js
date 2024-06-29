document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const toDoList = document.getElementById('to-do-list');
    const newQuoteButton = document.getElementById('new-quote-button');
    const quoteText = document.getElementById('quote-text');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-task-button';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        toDoList.appendChild(listItem);
    }

    // Currency Converter functionality
    const currencyWidget = document.getElementById('currency-widget');
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const amountInput = document.getElementById('amount');
    const convertButton = document.getElementById('convert-button');
    const conversionResult = document.getElementById('conversion-result');

    const currencies = [
        'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 'INR', 
        'SGD', 'HKD', 'KRW', 'BRL', 'ZAR', 'RUB', 'MXN', 'MYR', 'THB'
    ];

    currencies.forEach(currency => {
        const optionFrom = document.createElement('option');
        optionFrom.value = currency;
        optionFrom.textContent = currency;
        fromCurrency.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = currency;
        optionTo.textContent = currency;
        toCurrency.appendChild(optionTo);
    });

    convertButton.addEventListener('click', () => {
        const from = fromCurrency.value;
        const to = toCurrency.value;
        const amount = amountInput.value;

        if (amount && !isNaN(amount)) {
            const conversionRates = {
                USD: 1.0,
                EUR: 0.85,
                GBP: 0.75,
                JPY: 110.0,
                AUD: 1.35,
                CAD: 1.36,
                CHF: 0.92,
                CNY: 7.15,
                SEK: 9.17,
                NZD: 1.45,
                INR: 83.35,
                SGD: 1.36,
                HKD: 7.85,
                KRW: 1332.00,
                BRL: 5.21,
                ZAR: 18.42,
                RUB: 73.50,
                MXN: 17.53,
                MYR: 4.64,
                THB: 33.55
            };

            const result = (amount * conversionRates[to] / conversionRates[from]).toFixed(2);
            conversionResult.textContent = `${amount} ${from} = ${result} ${to}`;
        } else {
            conversionResult.textContent = 'Please enter a valid amount.';
        }
    });

    // Random Quotes functionality
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
        "The purpose of our lives is to be happy. – Dalai Lama",
        "Life is what happens when you're busy making other plans. – John Lennon",
        "Get busy living or get busy dying. – Stephen King",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
        "In three words I can sum up everything I've learned about life: it goes on. – Robert Frost"
    ];

    newQuoteButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
    });
});
