const init = () => {
  const form = document.querySelector('#myForm');
  const input = document.querySelector('#searchByID');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let id = input.value;
    fetch(`http://localhost:3000/movies/${id}`)
      .then(res => res.json())
      .then(json => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        title.textContent = json.title;
        summary.textContent = json.summary;
      })
  })
}

document.addEventListener('DOMContentLoaded', init);