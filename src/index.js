import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing-emoji-svgrepo-com.svg';
//no loaders are configured to process this file
const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;
const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
console.log(generateJoke());
// Uncaught SyntaxError: Cannot use import statement outside a module when there is no webpack installed
