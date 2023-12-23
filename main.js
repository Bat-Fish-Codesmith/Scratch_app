import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './client/App.jsx';
import './css/styles.css';
//import * as bootstrap from 'bootstrap'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App tab="/"/>);



// const url = 'https://fish-species.p.rapidapi.com/fish_api/fishes';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4083563e4cmshfb0d615599ae144p1afaa8jsn9c0602b5c76e',
// 		'X-RapidAPI-Host': 'fish-species.p.rapidapi.com'
// 	}
// };

// const fish_api = async () => {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//         console.log(result[0]);
//     } catch (error) {
//         console.error(error);
//     }
// };
// console.log('test')

// fish_api();