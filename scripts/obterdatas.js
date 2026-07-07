// Obtém o ano atual para o copyright
const anoAtual = new Date().getFullYear();
document.getElementById('anoatual').textContent = anoAtual;

// Obtém a data da última modificação do documento
const dataModificacao = document.lastModified;
document.getElementById('ultimaModificacao').textContent = `Última modificação: ${dataModificacao}`;