document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const toDoList = document.getElementById('to-do-list');

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
            // Dummy conversion rate for demonstration purposes
            // In a real-world application, you would fetch conversion rates from an API
            const conversionRates = {
                USD: 1.0,
                EUR: 0.85,
                GBP: 0.75,
                JPY: 110.0,
                AUD: 1.35,
                CAD: 1.25,
                CHF: 0.92,
                CNY: 6.45,
                SEK: 8.65,
                NZD: 1.4,
                INR: 74.0,
                SGD: 1.35,
                HKD: 7.8,
                KRW: 1150.0,
                BRL: 5.2,
                ZAR: 14.5,
                RUB: 73.0,
                MXN: 20.0,
                MYR: 4.15,
                THB: 32.0
            };

            const result = (amount / conversionRates[from] * conversionRates[to]).toFixed(2);
            conversionResult.textContent = `${amount} ${from} = ${result} ${to}`;
        } else {
            conversionResult.textContent = 'Please enter a valid amount';
        }
    });
});
