document.getElementById('gameFileInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return; //user cancelled el pickle

    if (!isAllowedFile(file)) {
        alert ('Not .zip or .html, try again');
        e.target.value = ''; //reset input
        return;
    }


});

async function getGameDir() {
    const root = await navigator.storage.getDirectory(); // /, obviously
    const gameDir = await root.getDirectoryHandle('games', { create: true });
    return gameDir;
}

async function saveToOPFS(file) {
    const gameDir = await getGameDir();
    const fileHandle = await gameDir.getFileHandle(file.name, { create:true });
    const writable = await fileHandle.createWritable();
    await writable.write(file); //copies the shit in a kettle
    await writable.close();
}