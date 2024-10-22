const fs = require('fs');

// Load the JSON data
const data = require('./publications.json'); // replace with the path to your input JSON file

// Function to remove 'book' and 'source' properties from each publication
const cleanPublications = (publications) => {
    return publications.map(pub => {
        const { book, source, ...rest } = pub; // Destructure to remove 'book' and 'source'
        return rest; // Return the remaining properties
    });
};

// Clean the publications in the dataset
const cleanedData = {
    publications: cleanPublications(data.publications)
};

// Save the cleaned data to a new JSON file
fs.writeFileSync('robotics_publications.json', JSON.stringify(cleanedData, null, 2), 'utf-8');

console.log('The cleaned dataset has been saved as robotics_publications.json');
