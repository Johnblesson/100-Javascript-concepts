/*
Async/Await: Async/await simplifies asynchronous code by making it look more like synchronous 
code
*/

// async function getData() {
//     try {
//         const response = await fetch('https://sierrachurches1.onrender.com/churches');
//         const data = await response.json();
//         console.log(data);
//     } catch {
//         console.error('Error fetching data:', error);
//     }
// }

// document.write('Hello world');

async function getData() {
    try {
        const response = await fetch('https://sierrachurches1.onrender.com/churches');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
