// Function to show a specific section
function loadContent(pageUrl, contentId) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', pageUrl, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(contentId).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}


// function showSection(sectionId) {
//     // Hide all sections
//     const sections = document.querySelectorAll('.content');
//     sections.forEach(section => {
//         section.style.display = 'none';
//     });

//     // Show the selected section
//     const sectionToShow = document.getElementById(sectionId);
//     if (sectionToShow) {
//         sectionToShow.style.display = 'block';
//     }
// }

// Optionally, show a default section on page load
// document.addEventListener('DOMContentLoaded', () => {
//     showSection('index'); // Change this to the default section you want visible
// });
// document.addEventListener('DOMContentLoaded', () => {
//     showSection('education'); // Change this to the default section you want visible
// });
// document.addEventListener('DOMContentLoaded', () => {
//     showSection('mentorship'); // Change this to the default section you want visible
// });

