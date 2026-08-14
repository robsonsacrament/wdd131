// ============================================
// 1. DATAS DO RODAPÉ - FORMATO BRASILEIRO
// ============================================

const anoAtual = new Date().getFullYear();
document.getElementById('anoatual').textContent = anoAtual;

const dataModificacao = new Date(document.lastModified);

const dia = String(dataModificacao.getDate()).padStart(2, '0');
const mes = String(dataModificacao.getMonth() + 1).padStart(2, '0');
const ano = dataModificacao.getFullYear();

const horas = String(dataModificacao.getHours()).padStart(2, '0');
const minutos = String(dataModificacao.getMinutes()).padStart(2, '0');

document.getElementById('ultimaModificacao').textContent =
    `Última modificação: ${dia}/${mes}/${ano} ${horas}:${minutos}`;

// ============================================
// 2. MENU HAMBÚRGUER
// ============================================

const hamburger = document.getElementById('menu-hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        hamburger.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });
}