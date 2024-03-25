// Selecionando o botão "Criar Tarefa" e a modal de criar tarefa
var openCreateModalBtn = document.getElementById("openCreateModalBtn");
var createModal = document.getElementById("createModal");

// Selecionando os botões "Editar" e a modal de editar tarefa
var editButtons = document.querySelectorAll(".edit-button");
var editModal = document.getElementById("editModal");

// Obtendo o botão de fechar da modal de criar tarefa
var span_create = createModal.querySelector(".close");

// Obtendo o botão de fechar da modal de editar tarefa
var span_edit = editModal.querySelector(".close");

// Função para abrir a modal de criar tarefa quando o botão "Criar Tarefa" é clicado
openCreateModalBtn.onclick = function () {
    createModal.style.display = "block";
};

// Função para fechar a modal de criar tarefa quando o botão de fechar é clicado
span_create.onclick = function () {
    createModal.style.display = "none";
};

// Função para abrir a modal de editar tarefa quando um botão de edição é clicado
editButtons.forEach(function (button) {
    button.onclick = function () {
        editModal.style.display = "block";
    };
});

// Função para fechar a modal de editar tarefa quando o botão de fechar é clicado
span_edit.onclick = function () {
    editModal.style.display = "none";
};

// Função para fechar ambas as modais quando o usuário clica fora delas
window.onclick = function (event) {
    if (event.target == createModal || event.target == editModal) {
        createModal.style.display = "none";
        editModal.style.display = "none";
    }
}