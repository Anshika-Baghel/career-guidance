// Function to show a specific section
function loadContent(page, sectionId) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            // Inject the content into the specified section
            const section = document.getElementById(sectionId);
            if (section) {
                section.innerHTML = html;
            } else {
                console.error('Section not found:', sectionId);
            }
        })
        .catch(error => {
            console.error('Error loading the page:', error);
        });
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Optionally, show a default section on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('career'); // Change this to the default section you want visible
});
