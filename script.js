
// SISTEMA PARA SALVAR NOTAS

document.addEventListener('DOMContentLoaded', function () {
    const noteTextarea = document.getElementById('note');
    
    // Recupera as notas do armazenamento local, se houver alguma
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
        noteTextarea.value = savedNote;
    }
    
    // Salva as notas no armazenamento local sempre que houver uma alteração
    noteTextarea.addEventListener('input', function () {
        const noteContent = noteTextarea.value;
        localStorage.setItem('note', noteContent);
    })
})




// SISTEMA DE LOGIN

const usuarios = [
    {
        login: 'andrezanelato',
        pass: '1597'
    },
    {
        login: 'maria',
        pass: '1234'
    },
    {
        login: 'admin',
        pass: 'localadmin'
    }
]

let botao = document.getElementById('loginBtn');

botao.addEventListener('click', function logar() {

    let pegaUsuario = document.getElementById('username').value;
    let pegaSenha = document.getElementById('password').value;
    let validaLogin = false;

    for (let i in usuarios) {

        if (pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass) {
            validaLogin = true;
            break;
        }
    }

    if (validaLogin == true) {
        // Redirecione para a página de notas se o login for bem-sucedido
        location.href = 'notes.html';
    } else {
        alert('Nome de usuário ou senha incorretos. Tente novamente.');
    }

})