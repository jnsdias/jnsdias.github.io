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

function generateBBcode(processedText) {
    const isBold = boldCheckbox.checked, isItalic = italicCheckbox.checked, isSub = subCheckbox.checked, isGrande = grandeCheckbox.checked;
    let bbcode = "";

    if (isGrande) bbcode += "[big]";
    if (isBold) bbcode += "[b]";
    if (isItalic) bbcode += "[i]";
    if (isSub) bbcode += "[u]";

    if (isSolidColorActive) {
        bbcode += `[cor=${startColorInput.value.slice(1)}]${processedText}[/cor]`;
    } else {
        let coloredText = Array.from(processedText).map((char, index) => {
            if (char === " ") return " ";
            let color;
            if (isRainbowActive) {
                color = hslToHex(index / processedText.length * 360, 100, 50);
            } else if (isTwoColorActive) {
                color = interpolateColor(startColorInput.value, midColorInput.value, index / Math.max(processedText.length - 1, 1));
            } else if (isThreeColorActive) {
                color = interpolateThreeColor(startColorInput.value, midColorInput.value, thirdColorInput.value, index / Math.max(processedText.length - 1, 1));
            }
            return `[cor=${color.slice(1)}]${char}[/cor]`;
        }).join('');
        bbcode += coloredText;
    }

    if (isSub) bbcode += "[/u]";
    if (isItalic) bbcode += "[/i]";
    if (isBold) bbcode += "[/b]";
    if (isGrande) bbcode += "[/big]";

    return bbcode;
}

function updateUI() {
    const previewCharLimit = 100;
    const rawText = gradientText.value;
    const selectedStyleKey = fontStyleSelect.value;

    const processedText = convertToStyled(rawText, selectedStyleKey); // convertToStyled vem de font-mappings.js

    const previewText = processedText.length > previewCharLimit
        ? processedText.slice(0, previewCharLimit) + '...'
        : processedText;

    let formattedPreview = Array.from(previewText).map((char, index) => {
        if (char === " ") return " ";
        let color;
        if(isRainbowActive){ color = hslToHex(index/previewText.length * 360, 100, 50); }
        else if(isTwoColorActive){ color = interpolateColor(startColorInput.value, midColorInput.value, index / Math.max(previewText.length - 1, 1)); }
        else if(isThreeColorActive){ color = interpolateThreeColor(startColorInput.value, midColorInput.value, thirdColorInput.value, index / Math.max(previewText.length - 1, 1)); }
        else { color = startColorInput.value; }
        return `<span style="color: ${color};">${char}</span>`;
    }).join('');
    
    let cssStyle = "";
    if(boldCheckbox.checked) cssStyle += "font-weight: bold;";
    if(italicCheckbox.checked) cssStyle += "font-style: italic;";
    if(subCheckbox.checked) cssStyle += "text-decoration: underline;";
    if(grandeCheckbox.checked) cssStyle += "font-size: 1.5em;";
    
    outputText.style.cssText = cssStyle;
    outputText.innerHTML = formattedPreview;

    const finalBBCode = generateBBcode(processedText);
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
    { value: "elegante_cursive_1", text: "Elegante (Cursive 1)" }, 
    { value: "elegante_cursive_2", text: "Elegante (Cursive 2)" },
    { value: "old_english", text: "Old English" },
    { value: "medieval", text: "Medieval" },
    { value: "double_struck", text: "Double Struck" },
    { value: "italic", text: "Italic" },
    { value: "boldItalic", text: "Bold Italic" },
    { value: "monospace", text: "Mono Space" },
    { value: "lunitools_bubbles", text: "Lunitools Bubbles" },
    { value: "round_black_box_bubbles", text: "Round Black Box Bubbles" },
    { value: "dashbox_box", text: "Dashbox Box" },
    { value: "inverted_squares", text: "Inverted Squares" },
    { value: "fat_text", text: "Fat Text" },
    { value: "wide_text", text: "WideText" },
    { value: "bold", text: "Bold" },
    { value: "luni_tools_flip", text: "Luni Tools Flip" },
    { value: "reverse_mirror", text: "Reverse Mirror" },
    { value: "squares", text: "Squares" },
    { value: "luni_tools_mirror", text: "Luni Tools Mirror" }
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