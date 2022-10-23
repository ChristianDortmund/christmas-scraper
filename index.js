import {readFilesync} from 'fs';
import {join} from 'path';

const addButton = document.getElementById('addMovie');
const movieList = [];
const liste = document.getElementById('liste');

addButton.addEventListener("click", () => {
    const filmlistJson = readFilesync(join(__dirname, 'filmlist.json'));
    console.log(typeof filmlistJson);
    let film =  document.getElementById('film');
    if (movieList.includes(film.value)) {
        return alert('Film bereits enthalten!');
    }
    let item = document.createElement("li");
    let hidden = document.createElement("input");
    hidden.setAttribute("type", "hidden");
    hidden.setAttribute("name", "filme[]");
    hidden.setAttribute("value", film.value);
    liste.appendChild(hidden);
    item.innerText = film.value;
    liste.appendChild(item);
    movieList.push(film.value);
    film.value = '';
 });