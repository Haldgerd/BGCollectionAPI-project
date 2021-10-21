const api_url = `https://api.jokes.one/`;


// api url

// const gamesContainer = document.querySelector(".games__container");

function get_joke(url) {
  fetch(url + 'jod?category=animal')
    .then(response => response.json()) // returns a promise
    .then(data => console.log(data.contents.jokes));
}

get_joke(api_url);