// script.js

// --- 1. ELEMENTOS DO DOM ---
const gradientText = document.getElementById("gradient-text"),
    startColorInput = document.getElementById("start-color"),
    midColorInput = document.getElementById("mid-color"),
    thirdColorInput = document.getElementById("third-color"),
    boldCheckbox = document.getElementById("bold-checkbox"),
    italicCheckbox = document.getElementById("italic-checkbox"),
    subCheckbox = document.getElementById("sub-checkbox"),
    grandeCheckbox = document.getElementById("grande-checkbox"),
    fontStyleSelect = document.getElementById("font-style-select"),
    copyButton = document.getElementById("copy-button"),
    clearButton = document.getElementById("clear-button"),
    rainbowButton = document.getElementById("rainbow-button"),
    bbcodeOutput = document.getElementById("bbcode-output"),
    solidButton = document.getElementById("solid-button"),
    twoColorButton = document.getElementById("two-color-button"),
    threeColorButton = document.getElementById("three-color-button"),
    outputText = document.getElementById("output-text");

    // --- Novos elementos para o Contorno ---
    const contornoButton = document.getElementById("contorno-button");
    const contornoModalOverlay = document.getElementById("contorno-modal-overlay");
    const contornoModalPalette = document.getElementById("contorno-color-palette-modal");
    const closeContornoModalButton = document.getElementById("close-contorno-modal");
    const selectedContornoColorNameInput = document.getElementById("selected-contorno-color-name");


// --- 2. ESTADO DA APLICAÇÃO ---
let isRainbowActive = false, isTwoColorActive = false, isThreeColorActive = false, isSolidColorActive = true;

// --- 3. FUNÇÕES DE CONVERSÃO DE CORES (mantidas aqui) ---

// Mapeamento de HEX para nomes de cores CSS (Exemplo, mova para font-mappings.js se quiser)
const hexToColorName = {
    '#FF0000': 'red', '#008000': 'green', '#0000FF': 'blue', '#FFFF00': 'yellow', '#FFA500': 'orange',
    '#800080': 'purple', '#FFFFFF': 'white', '#000000': 'black', '#C0C0C0': 'silver', '#808080': 'gray',
    '#F0F8FF': 'aliceblue', '#FAEBD7': 'antiquewhite', '#00FFFF': 'aqua', '#7FFFD4': 'aquamarine',
    '#F0FFFF': 'azure', '#F5F5DC': 'beige', '#FFE4C4': 'bisque', '#FFEBCD': 'blanchedalmond',
    '#8A2BE2': 'blueviolet', '#A52A2A': 'brown', '#DEB887': 'burlywood', '#5F9EA0': 'cadetblue',
    '#7FFF00': 'chartreuse', '#D2691E': 'chocolate', '#FF7F50': 'coral', '#6495ED': 'cornflowerblue',
    '#FFF8DC': 'cornsilk', '#DC143C': 'crimson', '#00008B': 'darkblue', '#008B8B': 'darkcyan',
    '#B8860B': 'darkgoldenrod', '#A9A9A9': 'darkgray', '#006400': 'darkgreen', '#BDB76B': 'darkkhaki',
    '#8B008B': 'darkmagenta', '#556B2F': 'darkolivegreen', '#FF8C00': 'darkorange', '#9932CC': 'darkorchid',
    '#8B0000': 'darkred', '#E9967A': 'darksalmon', '#8FBC8F': 'darkseagreen', '#483D8B': 'darkslateblue',
    '#2F4F4F': 'darkslategray', '#00CED1': 'darkturquoise', '#9400D3': 'darkviolet', '#FF1493': 'deeppink',
    '#00BFFF': 'deepskyblue', '#696969': 'dimgray', '#1E90FF': 'dodgerblue', '#B22222': 'firebrick',
    '#FFFAF0': 'floralwhite', '#228B22': 'forestgreen', '#FF00FF': 'fuchsia', '#DCDCDC': 'gainsboro',
    '#F8F8FF': 'ghostwhite', '#FFD700': 'gold', '#DAA520': 'goldenrod', '#ADFF2F': 'greenyellow',
    '#F0FFF0': 'honeydew', '#FF69B4': 'hotpink', '#CD5C5C': 'indianred', '#4B0082': 'indigo',
    '#FFFFF0': 'ivory', '#F0E68C': 'khaki', '#E6E6FA': 'lavender', '#FFF0F5': 'lavenderblush',
    '#7CFC00': 'lawngreen', '#FFFACD': 'lemonchiffon', '#ADD8E6': 'lightblue', '#F08080': 'lightcoral',
    '#E0FFFF': 'lightcyan', '#FAFAD2': 'lightgoldenrodyellow', '#90EE90': 'lightgreen', '#D3D3D3': 'lightgray',
    '#FFB6C1': 'lightpink', '#FFA07A': 'lightsalmon', '#20B2AA': 'lightseagreen', '#87CEFA': 'lightskyblue',
    '#778899': 'lightslategray', '#B0C4DE': 'lightsteelblue', '#D8BFD8': 'thistle', '#9ACD32': 'yellowgreen',
    '#BA55D3': 'mediumorchid', '#9370DB': 'mediumpurple', '#3CB371': 'mediumseagreen', '#7B68EE': 'mediumslateblue',
    '#00FA9A': 'mediumspringgreen', '#48D1CC': 'mediumturquoise', '#C71585': 'mediumvioletred',
    '#191970': 'midnightblue', '#F5FFFA': 'mintcream', '#FFE4E1': 'mistyrose', '#FFE4B5': 'moccasin',
    '#FFDEAD': 'navajowhite', '#000080': 'navy', '#FDF5E6': 'oldlace', '#808000': 'olive', '#6B8E23': 'olivedrab',
    '#FF4500': 'orangered', '#DA70D6': 'orchid', '#EEE8AA': 'palegoldenrod', '#98FB98': 'palegreen',
    '#AFEEEE': 'paleturquoise', '#DB7093': 'palevioletred', '#FFEFD5': 'papayawhip', '#FFDAB9': 'peachpuff',
    '#CD853F': 'peru', '#FFC0CB': 'pink', '#DDA0DD': 'plum', '#B0E0E6': 'powderblue',
    '#663399': 'rebeccapurple', '#BC8F8F': 'rosybrown', '#4169E1': 'royalblue', '#8B4513': 'saddlebrown',
    '#FA8072': 'salmon', '#F4A460': 'sandybrown', '#2E8B57': 'seagreen', '#FFF5EE': 'seashell', '#A0522D': 'sienna',
    '#87CEEB': 'skyblue', '#6A5ACD': 'slateblue', '#708090': 'slategray', '#FFFAFA': 'snow', '#00FF7F': 'springgreen',
    '#4682B4': 'steelblue', '#D2B48C': 'tan', '#008080': 'teal', '#FF6347': 'tomato', '#40E0D0': 'turquoise',
    '#EE82EE': 'violet', '#F5DEB3': 'wheat', '#F5F5F5': 'whitesmoke'
};

function getColorNameFromHex(hex) {
    const normalizedHex = hex.toUpperCase();
    if (hexToColorName[normalizedHex]) {
        return hexToColorName[normalizedHex];
    }
    return 'white'; // Fallback
}

function interpolateColor(start, end, factor) { const startRGB = hexToRgb(start), endRGB = hexToRgb(end); const result = startRGB.map((val, i) => Math.round(val + factor * (endRGB[i] - val))); return rgbToHex(result[0], result[1], result[2]); }
function interpolateThreeColor(start, mid, end, factor) { return factor < 0.5 ? interpolateColor(start, mid, factor * 2) : interpolateColor(mid, end, (factor - 0.5) * 2); }
function hexToRgb(hex) { const bigint = parseInt(hex.slice(1), 16); return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255]; }
function rgbToHex(r, g, b) { return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`; }
function hslToHex(h, s, l) { s /= 100, l /= 100; const c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(h / 60 % 2 - 1)), m = l - c / 2; let r, g, b; if (h < 60) { r = c; g = x; b = 0 } else if (h < 120) { r = x; g = c; b = 0 } else if (h < 180) { r = 0; g = c; b = x } else if (h < 240) { r = 0; g = x; b = c } else if (h < 300) { r = x; g = 0; b = c } else { r = c; g = 0; b = x } const rHex = Math.round((r + m) * 255).toString(16).padStart(2, "0"), gHex = Math.round((g + m) * 255).toString(16).padStart(2, "0"), bHex = Math.round((b + m) * 255).toString(16).padStart(2, "0"); return `#${rHex}${gHex}${bHex}` }

// --- 4. FUNÇÕES PRINCIPAIS DE GERAÇÃO ---

function generateBBcode(processedText, originalText) {
    const isBold = boldCheckbox.checked, isItalic = italicCheckbox.checked, isSub = subCheckbox.checked, isGrande = grandeCheckbox.checked;
    let bbcode = "";

    if (isGrande) bbcode += "[big]";
    if (isBold) bbcode += "[b]";
    if (isItalic) bbcode += "[i]";
    if (isSub) bbcode += "[u]";

    if (isContornoActive) {
        const contornoColorName = selectedContornoColorNameInput.value;
        bbcode += `[contorno=${contornoColorName}]`;
    }

    if (isSolidColorActive) {
        bbcode += `[cor=${startColorInput.value.slice(1)}]${processedText}[/cor]`;
    } else {
        
        let coloredText = Array.from(originalText).map((originalChar, index) => {
            const styledChar = Array.from(processedText)[index]; 

            if (originalChar === " ") { 
                return " ";
            }
            if (!styledChar) {
                 return originalChar;
            }

            let color;
            
            const factor = index / Math.max(originalText.length - 1, 1);

            if (isRainbowActive) {
                color = hslToHex(factor * 360, 100, 50);
            } else if (isTwoColorActive) {
                color = interpolateColor(startColorInput.value, midColorInput.value, factor);
            } else if (isThreeColorActive) {
                color = interpolateThreeColor(startColorInput.value, midColorInput.value, thirdColorInput.value, factor);
            }
            return `[cor=${color.slice(1)}]${styledChar}[/cor]`; // Use o caractere ESTILIZADO aqui
        }).join('');
        bbcode += coloredText;
    }

    if (isContornoActive) bbcode += "[/contorno]";
    if (isSub) bbcode += "[/u]";
    if (isItalic) bbcode += "[/i]";
    if (isBold) bbcode += "[/b]";
    if (isGrande) bbcode += "[/big]";

    return bbcode;
}

// script.js (dentro da função updateUI)

function updateUI() {
    const previewCharLimit = 100;
    const rawText = gradientText.value;
    const selectedStyleKey = fontStyleSelect.value;

    const processedText = convertToStyled(rawText, selectedStyleKey);

    let formattedPreview = '';

    const charactersForColoring = Array.from(processedText);
    const charactersForPreview = Array.from(processedText.slice(0, previewCharLimit)); // Caracteres reais da prévia


    charactersForPreview.forEach((char, indexInPreview) => {
        if (char === " ") {
            formattedPreview += " ";
            return;
        }

        let color;
        const colorFactor = indexInPreview / Math.max(charactersForColoring.length - 1, 1);

        if (isRainbowActive) {
            color = hslToHex(colorFactor * 360, 100, 50);
        } else if (isTwoColorActive) {
            color = interpolateColor(startColorInput.value, midColorInput.value, colorFactor);
        } else if (isThreeColorActive) {
            color = interpolateThreeColor(startColorInput.value, midColorInput.value, thirdColorInput.value, colorFactor);
        } else {
            color = startColorInput.value;
        }

        // --- CORREÇÃO AQUI para aplicar o estilo de contorno a cada <span> individualmente ---
        let spanStyle = `color: ${color};`; // Estilo base para o <span> individual
        if (isContornoActive) {
            const contornoColorName = selectedContornoColorNameInput.value;
            spanStyle += `background-color: ${contornoColorName}; padding: 0 1px;`;
        }
        formattedPreview += `<span style="${spanStyle}">${char}</span>`;
        // --- FIM DA CORREÇÃO ---
    });
    
    let cssStyle = ""; 
    if (boldCheckbox.checked) cssStyle += "font-weight: bold;";
    if (italicCheckbox.checked) cssStyle += "font-style: italic;";
    if (subCheckbox.checked) cssStyle += "text-decoration: underline;";
    if (grandeCheckbox.checked) cssStyle += "font-size: 1.5em;";

    outputText.style.cssText = cssStyle; // Aplica apenas os estilos globais ao container
    outputText.innerHTML = formattedPreview; // O innerHTML já contém os spans com background-color

    const finalBBCode = generateBBcode(processedText, rawText);
    bbcodeOutput.value = finalBBCode;

    const charCount = finalBBCode.length;
    const wordCount = rawText.trim() === "" ? 0 : rawText.trim().split(/\s+/).length;
    document.getElementById('chars').textContent = charCount;
    document.getElementById('words').textContent = wordCount;
}

// --- Funções para o Modal de Contorno ---
function openContornoModal() {
    contornoModalOverlay.classList.add('visible');
}

function closeContornoModal() {
    contornoModalOverlay.classList.remove('visible');
}

function selectContornoColor(hexValue) {
    const colorName = getColorNameFromHex(hexValue);
    selectedContornoColorNameInput.value = colorName;
    isContornoActive = true; // Ativa o contorno quando uma cor é selecionada
    contornoButton.classList.add('active'); // Ativa o botão
    contornoButton.style.backgroundColor = hexValue; // Muda a cor de fundo do botão
    contornoButton.style.color = getContrastColor(hexValue); // Garante contraste do texto
    
    // Remove seleção de todos os quadrinhos e adiciona ao selecionado
    document.querySelectorAll('.modal-color-box').forEach(box => {
        box.classList.remove('selected');
        if (box.style.backgroundColor.toUpperCase() === hexValue.toUpperCase()) {
            box.classList.add('selected');
        }
    });

    closeContornoModal();
    updateUI(); // Atualiza a UI com o contorno
}

// Função para obter cor de contraste para o texto do botão (preto ou branco)
function getContrastColor(hexcolor) {
    // Se precisar de getColorNameFromHex aqui, ela já está definida acima.
    // Converte HEX para RGB
    const r = parseInt(hexcolor.slice(1, 3), 16);
    const g = parseInt(hexcolor.slice(3, 5), 16);
    const b = parseInt(hexcolor.slice(5, 7), 16);

    // Calcula a luminância (Y = 0.299 R + 0.587 G + 0.114 B)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Retorna branco para cores escuras e preto para cores claras
    return luminance > 0.5 ? 'black' : 'white';
}


function populateContornoModalPalette() {
    contornoModalPalette.innerHTML = '';
    
    // Converte o objeto hexToColorName para um array de HEXs para iterar
    const colors = Object.keys(hexToColorName); 

    colors.forEach(hexValue => {
        const colorBox = document.createElement('div');
        colorBox.classList.add('modal-color-box');
        colorBox.style.backgroundColor = hexValue;

        colorBox.addEventListener('click', () => selectContornoColor(hexValue));
        contornoModalPalette.appendChild(colorBox);
    });

    // Seleciona uma cor padrão ao carregar o modal/paleta
    const defaultColorHex = '#000000'; // Cor padrão inicial do contorno (preto)
    selectContornoColor(defaultColorHex); // Define a cor inicial e ativa o botão
}

// --- 5. LÓGICA DE CONTROLE E EVENTOS ---

function activateButton(activeButton) {
    [solidButton, twoColorButton, threeColorButton, rainbowButton].forEach(button => {
        button.classList.toggle('active', button === activeButton);
        button.classList.toggle('inactive', button !== activeButton);
    });
    const isRainbow = activeButton === rainbowButton;
    rainbowButton.classList.toggle("rainbow-active", isRainbow);
    rainbowGif.style.display = isRainbow ? "block" : "none";
    startColorInput.style.display = isRainbow ? "none" : "inline";
    midColorInput.style.display = activeButton === twoColorButton || activeButton === threeColorButton ? "inline" : "none";
    thirdColorInput.style.display = activeButton === threeColorButton ? "inline" : "none";
}

solidButton.addEventListener("click", () => { isRainbowActive = false; isTwoColorActive = false; isThreeColorActive = false; isSolidColorActive = true; activateButton(solidButton); updateUI(); });
twoColorButton.addEventListener("click", () => { isRainbowActive = false; isTwoColorActive = true; isThreeColorActive = false; isSolidColorActive = false; activateButton(twoColorButton); updateUI(); });
threeColorButton.addEventListener("click", () => { isRainbowActive = false; isTwoColorActive = false; isThreeColorActive = true; isSolidColorActive = false; activateButton(threeColorButton); updateUI(); });
rainbowButton.addEventListener("click", () => { isRainbowActive = true; isTwoColorActive = false; isThreeColorActive = false; isSolidColorActive = false; activateButton(rainbowButton); updateUI(); });

function showMessage(message) { const aviso = document.getElementById("aviso-button"); aviso.textContent = message; aviso.classList.add("visible"); setTimeout(() => aviso.classList.remove("visible"), 2000); }
copyButton.addEventListener("click", () => { navigator.clipboard.writeText(bbcodeOutput.value); showMessage("Código copiado para a área de transferência!"); });
clearButton.addEventListener("click", () => { gradientText.value = ""; updateUI(); showMessage("Campo limpo!"); });

// Eventos que disparam a atualização da UI
[gradientText, startColorInput, midColorInput, thirdColorInput, fontStyleSelect, boldCheckbox, italicCheckbox, subCheckbox, grandeCheckbox].forEach(el => {
    el.addEventListener(el.type === 'checkbox' || el.tagName === 'SELECT' ? 'change' : 'input', updateUI);
});

// Eventos para o botão e modal de Contorno
contornoButton.addEventListener('click', () => {
    if (isContornoActive) {
        // Se já está ativo, clicar no botão desativa
        isContornoActive = false;
        contornoButton.classList.remove('active');
        contornoButton.style.backgroundColor = ''; // Volta à cor padrão do CSS
        contornoButton.style.color = '#d3d3d3'; // Volta à cor padrão do texto
        updateUI();
    } else {
        // Se não está ativo, abrir o modal para seleção
        openContornoModal();
    }
});
closeContornoModalButton.addEventListener('click', closeContornoModal);
// Fechar modal clicando fora (no overlay)
contornoModalOverlay.addEventListener('click', (event) => {
    if (event.target === contornoModalOverlay) {
        closeContornoModal();
    }
});

// --- LÓGICA PARA PREENCHER O SELECT DE FONTES ---
const fontOptions = [
    { value: "none", text: "Fonte Normal" },
    { value: "bold", text: "Bold" },
    { value: "italic", text: "Italic" },
    { value: "boldItalic", text: "Bold Italic" },
    { value: "smallcaps", text: "Small Caps" },
    { value: "monospace", text: "Mono Space" },
    { value: "wide_text", text: "WideText" },
    { value: "old_english", text: "Old English" },
    { value: "medieval", text: "Medieval" },
    { value: "elegante_cursive_1", text: "Elegante (Cursive 1)" }, 
    { value: "elegante_cursive_2", text: "Elegante (Cursive 2)" },
    { value: "double_struck", text: "Double Struck" },
    { value: "lunitools_bubbles", text: "Lunitools Bubbles" },
    { value: "round_black_box_bubbles", text: "Round Black Box Bubbles" },
    { value: "fat_text", text: "Fat Text" },
    { value: "inverted_squares", text: "Inverted Squares" },
    { value: "squares", text: "Squares" },
    { value: "dashbox_box", text: "Dashbox" },
    { value: "reverse_mirror", text: "Reverse Mirror" },
    { value: "luni_tools_mirror", text: "Luni Tools Mirror" },
    { value: "luni_tools_flip", text: "Luni Tools Flip" },
];

function populateFontStyleSelect() {
    fontStyleSelect.innerHTML = ''; // Limpa opções existentes

    let defaultSelectOption = document.createElement('option');
    defaultSelectOption.value = "";
    defaultSelectOption.textContent = "Selecione uma fonte...";
    fontStyleSelect.appendChild(defaultSelectOption);

    fontOptions.forEach(optionData => {
        let option = document.createElement('option');
        option.value = optionData.value;
        
        // **MUDANÇA AQUI:** Use o próprio nome da fonte como texto para estilizar.
        // Se for "Fonte Normal", não tente estilizar.
        let textToStyle = optionData.text; 
        
        try {
            // A função `convertToStyled` é quem faz a mágica de aplicar o estilo Unicode.
            // Ela deve ser acessível globalmente (do seu `font-mappings.js`).
            if (optionData.value === "none") {
                option.textContent = textToStyle; // Para "Fonte Normal", apenas o texto literal
            } else {
                option.textContent = convertToStyled(textToStyle, optionData.value); // Estiliza o próprio nome da fonte
            }
        } catch (e) {
            console.error(`Erro ao estilizar o nome da fonte "${optionData.text}" com a chave "${optionData.value}":`, e);
            option.textContent = optionData.text; // Fallback se houver erro
        }
        
        fontStyleSelect.appendChild(option);
    });
}

// --- Inicialização da página ---
window.onload = () => {
    populateFontStyleSelect(); // Preenche o select de fontes
    populateContornoModalPalette(); // Preenche a paleta de cores do contorno
    activateButton(twoColorButton); // Ativa o botão de 2 cores por padrão
    isTwoColorActive = true;
    isSolidColorActive = false;
    updateUI(); // Atualiza a UI inicial
};