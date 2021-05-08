window.addEventListener('DOMContentLoaded', (event) => {
    getCounter();
});

const azureFunctionApi = "https://cloudresumeazure.azurewebsites.net/api/resumecounter";

const getCounter = async () => {
    try {
        const response = await fetch(azureFunctionApi);

        const data = await response.json();

        const element = document.getElementById('visitor-num');

        element.textContent = data.counter;
              
    } catch (error) {
        console.log(error);
    } 
} 

