document.getElementById('gameFileInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return; //user cancelled el pickle

    if (!isAllowedFile(file)) {
        alert ('Not .zip or .html, try again');
        e.target.value = ''; //reset input
        return;
    }

    
}); 