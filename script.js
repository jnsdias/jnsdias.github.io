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

// --- 2. ESTADO DA APLICAÇÃO ---
let isRainbowActive = false, isTwoColorActive = false, isThreeColorActive = false, isSolidColorActive = true;

// --- 3. FUNÇÕES DE CONVERSÃO DE CORES (mantidas aqui) ---
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

    if (isSolidColorActive) {
        bbcode += `[cor=${startColorInput.value.slice(1)}]${processedText}[/cor]`;
    } else {
        // Use Array.from(originalText) para iterar pelos caracteres originais
        // e obter os índices corretos para o gradiente.
        // Em seguida, use o caractere ESTILIZADO (do processedText) para a saída.
        let coloredText = Array.from(originalText).map((originalChar, index) => {
            const styledChar = Array.from(processedText)[index]; // Pegue o caractere já estilizado correspondente

            if (originalChar === " ") { // Ainda verifica o espaço no original
                return " ";
            }
            if (!styledChar) { // Fallback se processedText for mais curto por algum motivo
                 return originalChar;
            }

            let color;
            // *************** MUDANÇA AQUI PARA O CÁLCULO DA COR NO BBCODE ***************
            // O cálculo do fator de cor deve se basear no índice do caractere ORIGINAL
            // e no comprimento ORIGINAL do texto.
            const factor = index / Math.max(originalText.length - 1, 1);

            if (isRainbowActive) {
                color = hslToHex(factor * 360, 100, 50);
            } else if (isTwoColorActive) {
                color = interpolateColor(startColorInput.value, midColorInput.value, factor);
            } else if (isThreeColorActive) {
                color = interpolateThreeColor(startColorInput.value, midColorInput.value, thirdColorInput.value, factor);
            }
            // *****************************************************************************
            return `[cor=${color.slice(1)}]${styledChar}[/cor]`; // Use o caractere ESTILIZADO aqui
        }).join('');
        bbcode += coloredText;
    }

    if (isSub) bbcode += "[/u]";
    if (isItalic) bbcode += "[/i]";
    if (isBold) bbcode += "[/b]";
    if (isGrande) bbcode += "[/big]";

    return bbcode;
}

// script.js

function updateUI() {
    const previewCharLimit = 100;
    const rawText = gradientText.value;
    const selectedStyleKey = fontStyleSelect.value;

    const processedText = convertToStyled(rawText, selectedStyleKey);

    // *************** MUDANÇA AQUI: Calcule o índice de cor com base no texto COMPLETO ***************
    // A prévia será uma "janela" do gradiente total.
    let formattedPreview = '';

    // Iteramos sobre o processedText COMPLETO para aplicar as cores
    // e só então cortamos para o previewText
    const charactersForColoring = Array.from(processedText);
    const charactersForPreview = Array.from(processedText.slice(0, previewCharLimit)); // Caracteres reais da prévia


    charactersForPreview.forEach((char, indexInPreview) => {
        if (char === " ") {
            formattedPreview += " ";
            return;
        }

        let color;
        // O índice para o cálculo da cor deve ser o 'indexInPreview'
        // Mas a base do cálculo (o "100%" do gradiente) deve ser o comprimento total do texto, 'charactersForColoring.length'
        const colorFactor = indexInPreview / Math.max(charactersForColoring.length - 1, 1);

        if (isRainbowActive) {
            color = hslToHex(colorFactor * 360, 100, 50);
        } else if (isTwoColorActive) {
            color = interpolateColor(startColorInput.value, midColorInput.value, colorFactor);
        } else if (isThreeColorActive) {
            // Aqui usamos o terceiro input de cor se o modo for três cores
            // O fator de cor é o mesmo, mas agora interpolamos entre três cores
            color = interpolateThreeColor(startColorInput.value, midColorInput.value, thirdColorInput.value, colorFactor);
        } else {
            color = startColorInput.value;
        }

        formattedPreview += `<span style="color: ${color};">${char}</span>`;
    });
    
    let cssStyle = "";
    if (boldCheckbox.checked) cssStyle += "font-weight: bold;";
    if (italicCheckbox.checked) cssStyle += "font-style: italic;";
    if (subCheckbox.checked) cssStyle += "text-decoration: underline;";
    if (grandeCheckbox.checked) cssStyle += "font-size: 1.5em;";

    outputText.style.cssText = cssStyle;
    outputText.innerHTML = formattedPreview;

    const finalBBCode = generateBBcode(processedText, rawText);
    bbcodeOutput.value = finalBBCode;

    const charCount = finalBBCode.length;
    const wordCount = rawText.trim() === "" ? 0 : rawText.trim().split(/\s+/).length;
    document.getElementById('chars').textContent = charCount;
    document.getElementById('words').textContent = wordCount;
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
    activateButton(twoColorButton); // Ativa o botão de 2 cores por padrão
    isTwoColorActive = true;
    isSolidColorActive = false;
    updateUI(); // Atualiza a UI inicial
};