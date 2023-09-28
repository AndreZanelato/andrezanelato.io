document, addEventListener('DOMContentLoaded', function () {
    const noteTextarea = this.document.getElementById('note');

    // Recupera as notas do armazenamento local se houver algum
    const savedNote = this.localStorage.getItem('note');

    if (savedNote) {
        noteTextarea.value = savedNote;
    }

    // Salva as notas no armazenamento local sempre que houver uma alteração
    noteTextarea.addEventListener('input', function () {
        const noteContent = noteTextarea.value;
        localStorage.setItem('note', noteContent);
    })
})