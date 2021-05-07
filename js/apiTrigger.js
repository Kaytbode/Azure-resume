window.addEventListener('DOMContentLoaded', (event) => {
    getCounter();
});

const localApi = "http://localhost:7071/api/resumecounter";
const azureApi = "https://cloudresumeazure.azurewebsites.net/api/resumecounter";

const getCounter = async () => {
    try {
        const response = await fetch(azureApi);
        console.log(JSON.stringify(response));
        console.log(response);
        console.log('heyy')
    } catch (error) {
        console.log(error);
    } 
} 

