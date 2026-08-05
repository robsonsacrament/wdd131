// ============================================
// 1. DATAS DO RODAPÉ
// ============================================

const anoAtual = new Date().getFullYear();
document.getElementById('anoatual').textContent = anoAtual;
document.getElementById('ultimaModificacao').textContent =
    `Última modificação: ${document.lastModified}`;

// ============================================
// 2. MENU HAMBÚRGUER
// ============================================

const hambutton = document.getElementById('hambutton');
const navmenu = document.getElementById('navmenu');

if (hambutton && navmenu) {
    hambutton.addEventListener('click', (e) => {
        e.preventDefault();
        navmenu.classList.toggle('show');
        hambutton.textContent = navmenu.classList.contains('show') ? '✕' : '☰';
    });
}

// ============================================
// 3. FUNÇÃO PARA ATIVAR O FILTRO
// ============================================

function toggleActive(element) {
    document.querySelectorAll('#navmenu a').forEach(link => {
        link.classList.remove('active');
    });
    element.classList.add('active');
}

// ============================================
// 4. DADOS DOS TEMPLOS (CORRIGIDO)
// ============================================

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigéria",
        dedicated: "2005, Agosto, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, EUA",
        dedicated: "1888, Maio, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, EUA",
        dedicated: "2015, Junho, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, Maio, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, EUA",
        dedicated: "1974, Novembro, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedicated: "1986, Janeiro, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Cidade do Mexico",
        location: "Cidade do México, México",
        dedicated: "1983, Dezembro, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // ===== TEMPLOS ADICIONADOS =====
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, EUA",
        dedicated: "1893, Abril, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "São Paulo Brasil",
        location: "São Paulo, Brasil",
        dedicated: "1978, Outubro, 30",
        area: 59246,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-846197-wallpaper.jpg"
    },
    {
        templeName: "Roma Itália",
        location: "Roma, Itália",
        dedicated: "2019, Março, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-lds-993288-wallpaper.jpg"
    }
];

// ============================================
// 5. FUNÇÃO PARA CRIAR OS CARDS
// ============================================

function createTempleCard(templesArray) {
    const grid = document.querySelector('.res-grid');
    grid.innerHTML = '';

    if (templesArray.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px;">
            Nenhum templo encontrado para este filtro.
        </p>`;
        return;
    }

    templesArray.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">📍 Localização:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">📅 Dedicado:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">📐 Tamanho:</span> ${temple.area} pés²`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `Templo ${temple.templeName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        grid.appendChild(card);
    });
}

// ============================================
// 6. EVENTOS DE CLIQUE PARA FILTROS
// ============================================

// Função auxiliar para extrair o ano da dedicação
function getYear(dedicated) {
    const parts = dedicated.split(',');
    return parseInt(parts[0]);
}

document.querySelector('#all').addEventListener('click', () => {
    toggleActive(document.querySelector('#all'));
    document.querySelector('main h2').textContent = 'Início';
    createTempleCard(temples);
});

document.querySelector('#old').addEventListener('click', () => {
    toggleActive(document.querySelector('#old'));
    document.querySelector('main h2').textContent = 'Antigos (antes de 1900)';
    const filtered = temples.filter(t => getYear(t.dedicated) < 1900);
    createTempleCard(filtered);
});

document.querySelector('#new').addEventListener('click', () => {
    toggleActive(document.querySelector('#new'));
    document.querySelector('main h2').textContent = 'Novos (depois de 2000)';
    const filtered = temples.filter(t => getYear(t.dedicated) > 2000);
    createTempleCard(filtered);
});

document.querySelector('#large').addEventListener('click', () => {
    toggleActive(document.querySelector('#large'));
    document.querySelector('main h2').textContent = 'Grandes (> 90.000 pés²)';
    const filtered = temples.filter(t => t.area > 90000);
    createTempleCard(filtered);
});

document.querySelector('#small').addEventListener('click', () => {
    toggleActive(document.querySelector('#small'));
    document.querySelector('main h2').textContent = 'Pequenos (< 10.000 pés²)';
    const filtered = temples.filter(t => t.area < 10000);
    createTempleCard(filtered);
});

// ============================================
// 7. RENDERIZAÇÃO INICIAL
// ============================================

createTempleCard(temples);