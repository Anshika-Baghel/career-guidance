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
document.addEventListener("DOMContentLoaded", () => {

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);
});


