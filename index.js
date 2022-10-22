const addButton = document.getElementById('addMovie');
const movieList = [];
const liste = document.getElementById('liste');
addButton.addEventListener("click", () => {
    let film =  document.getElementById('film').value;
    if (movieList.includes(film)) {
        return alert('Film bereits enthalten!');
    }
    let item = document.createElement("li");
    let hidden = document.createElement("input");
    hidden.setAttribute("type", "hidden");
    hidden.setAttribute("name", "filme[]");
    hidden.setAttribute("value", film);
    liste.appendChild(hidden);
    item.innerText = film;
    liste.appendChild(item);
    movieList.push(film);
 });