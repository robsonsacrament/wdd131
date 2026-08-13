// ============================================
// DATAS DO RODAPÉ
// ============================================

document.getElementById('anoatual').textContent = new Date().getFullYear();
document.getElementById('ultimaModificacao').textContent =
    'Última modificação: ' + document.lastModified;

// ============================================
// ARRAY DE PRODUTOS
// ============================================

const produtos = [
    { id: 'p1', nome: 'Smartphone X Pro' },
    { id: 'p2', nome: 'Notebook Ultra Slim' },
    { id: 'p3', nome: 'Fone de Ouvido Bluetooth' },
    { id: 'p4', nome: 'Tablet 10" Premium' },
    { id: 'p5', nome: 'Smartwatch Fitness' },
    { id: 'p6', nome: 'Caixa de Som Portátil' }
];

// ============================================
// PREENCHER O SELECT DE PRODUTOS
// ============================================

const selectProduto = document.getElementById('produto');

// Mantém a opção placeholder "Selecione um Produto..."
produtos.forEach(prod => {
    const option = document.createElement('option');
    option.value = prod.id;
    option.textContent = prod.nome;
    selectProduto.appendChild(option);
});