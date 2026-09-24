const pageList = document.querySelector('#page-list');

fetch('pages.json')
    .then(response => {
        if (!response.ok) throw new Error('Could not load pages.json');
        return response.json();
    })
    .then(pages => {
        pageList.replaceChildren();

        pages.forEach(page => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');

            link.href = page.path;
            link.textContent = page.name;
            listItem.appendChild(link);
            pageList.appendChild(listItem);
        });
    })
    .catch(error => {
        pageList.textContent = error.message;
    });
