// ============================================
// 1. DATAS DO RODAPÉ
// ============================================

const anoAtual = new Date().getFullYear();
document.getElementById('anoatual').textContent = anoAtual;

document.getElementById('ultimaModificacao').textContent =
    `Última modificação: ${document.lastModified}`;

// ============================================
// 2. CÁLCULO DA SENSAÇÃO TÉRMICA
// ============================================

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    // Condições para cálculo viável: T <= 10°C e vento > 4.8 km/h
    if (temperatura > 10 || velocidadeVento <= 4.8) {
        return null;
    }

    const sensacao = 13.12 +
        0.6215 * temperatura -
        11.37 * Math.pow(velocidadeVento, 0.16) +
        0.3965 * temperatura * Math.pow(velocidadeVento, 0.16);

    return Math.round(sensacao * 10) / 10;
}

// ============================================
// 3. DADOS ESTÁTICOS DO CLIMA
// ============================================

const temperatura = 18; // °C
const velocidadeVento = 12; // km/h

// ============================================
// 4. EXIBIÇÃO DA SENSAÇÃO TÉRMICA
// ============================================

const sensacao = calcularSensacaoTermica(temperatura, velocidadeVento);
const sensacaoElement = document.getElementById('sensacao-termica');

if (sensacao !== null) {
    sensacaoElement.textContent = `${sensacao}°C`;
} else {
    sensacaoElement.textContent = 'N/A';
}