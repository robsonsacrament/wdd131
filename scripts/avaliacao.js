// ============================================
// DATAS DO RODAPÉ
// ============================================

document.getElementById('anoatual').textContent = new Date().getFullYear();

const dataModificacao = new Date(document.lastModified);
const dia = String(dataModificacao.getDate()).padStart(2, '0');
const mes = String(dataModificacao.getMonth() + 1).padStart(2, '0');
const ano = dataModificacao.getFullYear();
const horas = String(dataModificacao.getHours()).padStart(2, '0');
const minutos = String(dataModificacao.getMinutes()).padStart(2, '0');

const dataFormatada = dia + '/' + mes + '/' + ano + ' ' + horas + ':' + minutos;

document.getElementById('ultimaModificacao').textContent =
    'Última modificação: ' + dataFormatada;

// ============================================
// CONTADOR DE AVALIAÇÕES (localStorage)
// ============================================

const chaveContador = 'numAvaliacoes';

let contador = parseInt(localStorage.getItem(chaveContador)) || 0;
contador++;
localStorage.setItem(chaveContador, contador);

document.getElementById('contador-avaliacoes').textContent =
    'Total de avaliações enviadas: ' + contador;