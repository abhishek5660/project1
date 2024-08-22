// JavaScript to handle button actions and voice search

document.addEventListener('DOMContentLoaded', () => {
    // Function to handle "Google Search" button click
    document.querySelector('.searchButtons button:first-of-type').addEventListener('click', () => {
        const query = document.querySelector('.searchBar input').value;
        if (query) {
            // Redirect to Google search results page with the query
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    });

    // Function to handle "I'm Feeling Lucky" button click
    document.querySelector('.searchButtons button:nth-of-type(2)').addEventListener('click', () => {
        const query = document.querySelector('.searchBar input').value;
        if (query) {
            // Redirect to Google "I'm Feeling Lucky" page with the query
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I`;
        }
    });

    // Function to handle voice search (dummy function for now)
    document.querySelector('.voiceIcon').addEventListener('click', () => {
        alert('Voice search feature is not implemented yet.');
    });

    // Function to handle sign-in button click
    document.querySelector('header .leftOptions input[type="button"]').addEventListener('click', () => {
        // Redirect to a sign-in page (dummy URL provided)
        window.location.href = 'https://accounts.google.com/signin';
    });
});
