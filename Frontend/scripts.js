const allSuggestions = {
    "Apple": "index.html",
    "Banana": "banana.html",
    "Cherry": "cherry.html",
    "Date": "date.html",
    "Elderberry": "elderberry.html",
    "Fig": "fig.html",
    "Grape": "grape.html",
    "Honeydew": "honeydew.html"
};

function handleInputChange() {
    const query = document.getElementById('search').value.toLowerCase();
    const autocompleteList = document.getElementById('autocomplete-list');

    // Clear existing suggestions
    autocompleteList.innerHTML = '';

    if (query) {
        const filteredSuggestions = Object.keys(allSuggestions).filter(item =>
            item.toLowerCase().startsWith(query)
        );

        filteredSuggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.className = 'autocomplete-item';
            const link = document.createElement('a');
            link.href = allSuggestions[suggestion];
            link.textContent = suggestion;
            listItem.appendChild(link);
            autocompleteList.appendChild(listItem);
        });
    }
}

function handleSearch() {
    const query = document.getElementById('search').value;
    if (query && allSuggestions[query]) {
        window.location.href = allSuggestions[query];
    } else {
        alert('No matching page found');
    }
}

