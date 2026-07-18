const btnMensagem = document.getElementById("btnGravar")
const btnTrocarCor = document.getElementById("btnTrocarCor")

const nome = document.getElementById("txtNome")


function mostrarMensagem() {
    alert(`Ola ${nome.value}`)
    alert(`Ola data ${nome.dataset.ti}`)
}

function trocarCor() {
    const cor = document.getElementById("txtCor")
    const corpoPrincipal = document.getElementById("corpoPrincipal");
    document.documentElement.style.setProperty('--cor-bg',cor.value)
    // corpoPrincipal.classList = cor.value;
    // corpoPrincipal.classList.add(cor.value);
}

btnMensagem.addEventListener("click",mostrarMensagem)

btnTrocarCor.addEventListener("click",trocarCor)











