function PublicationsCard() {
    fetch("https://raw.githubusercontent.com/nurgultekin/publications/refs/heads/main/publications.json")
    .then(response => response.json())
    .then(publications => {
        // Select all publication card elements
        const cardContainer = document.querySelectorAll('.publications-card');

        // Loop through the publication data and populate the cards
        publications.forEach((publication, index) => {
            if (index < cardContainer.length) {
                const card = cardContainer[index];

                // Populate title
                const titleElement = card.querySelector('.card-text .H3');
                if (titleElement) {
                    titleElement.textContent = publication.title;
                }

                // Populate date and author
                const dateAuthorElement = card.querySelector('.card-text .date-author. date .author');
                if (dateAuthorElement) {
                    const authors = publication.authors.join(', ');
                    dateAuthorElement.textContent = `${publication.year}, by ${authors}`;
                }

                // Set the link for the publication
                card.setAttribute('href', publication.link);
            }
        });
    })
    .catch(error => console.error('Error fetching publications:', error));
}

// Call the function to populate the cards
export default PublicationsCard();


