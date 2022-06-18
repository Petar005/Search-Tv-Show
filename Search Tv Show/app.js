const form = document.querySelector('#searchShow');
const search = document.querySelector('#search');
const ul = document.querySelector('ul');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const searchTerm = search.value;

    axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    .then(res => {
        ul.innerHTML = '';

        for (let i = 0; i < res.data.length; i++) {
            const li = document.createElement('li');
            const img = document.createElement('img');

            img.src = res.data[i].show.image.original;

            li.append(img);
            ul.append(li);

            img.addEventListener('click', function() {
                window.location.href = res.data[i].show.url;
            })
        }
    })

    search.value = '';
})