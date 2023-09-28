const user = 'andrezanelato';
const pass = '1597'

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aqui você pode adicionar lógica de autenticação
        // Verifique se o nome de usuário e senha correspondem
        if (username === user && password === pass) {
            // Redirecione para a página de notas se o login for bem-sucedido
            window.location.href = 'andrezanelato.github.io/notes.html';
        } else {
            // Exiba uma mensagem de erro se o login falhar
            alert('Nome de usuário ou senha incorretos. Tente novamente.');
        }
    })
})

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
