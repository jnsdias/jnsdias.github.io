const gradientText = document.getElementById("gradient-text"),
    startColorInput = document.getElementById("start-color"),
    endColorInput = document.getElementById("end-color"),
    paletteContainer = document.getElementById("palette"),
    boldCheckbox = document.getElementById("bold-checkbox"),
    italicCheckbox = document.getElementById("italic-checkbox"),
    grandeCheckbox = document.getElementById("grande-checkbox"),
    copyButton = document.getElementById("copy-button"),
    clearButton = document.getElementById("clear-button"),
    rainbowButton = document.getElementById("rainbow-button"),
    outputText = document.getElementById("output-text"),
    bbcodeOutput = document.getElementById("bbcode-output");

let isRainbowActive = false; // Inicializa o estado do efeito arco-íris

// Atualiza a paleta de cores com base nas entradas do usuário
function updatePalette() {
    const startColor = startColorInput.value;
    const endColor = endColorInput.value;
    const textValue = gradientText.value;
    const maxLength = Math.min(textValue.length, 6);

    paletteContainer.innerHTML = ""; // Limpa a paleta

    for (let i = 0; i < maxLength; i++) {
        const colorBox = document.createElement("div");
        colorBox.className = "palette-color";
        colorBox.style.backgroundColor = interpolateColor(startColor, endColor, i / Math.max(textValue.length - 1, 1));
        colorBox.addEventListener("click", () => setColorFromPalette(colorBox.style.backgroundColor, i));
        paletteContainer.appendChild(colorBox);
    }
    updateOutputText();
}

function updateOutputText() {
    const isBold = boldCheckbox.checked;
    const isItalic = italicCheckbox.checked;
    const isGrande = grandeCheckbox.checked;
    const startColor = startColorInput.value;
    const endColor = endColorInput.value;

    let textValue = gradientText.value.trim() || "Seu texto será exibido aqui.";

    // Configuração do estilo do texto
    let cssStyle = `font-family: sans-serif;`;
    if (isBold) cssStyle += "font-weight: bold;";
    if (isItalic) cssStyle += "font-style: italic;";
    if (isGrande) cssStyle += "font-size: 1.5em;";

    outputText.style = cssStyle;

    // Aplicação do efeito arco-íris ou gradiente
    outputText.innerHTML = textValue.split("").map((char, index) => {
        if (isRainbowActive) {
            const hue = (index / textValue.length) * 360; // Cálculo da matiz
            const color = hslToHex(hue, 100, 50); // Converte HSL para HEX
            return `<span style="color: ${color}">${char}</span>`;
        } else {
            const color = interpolateColor(startColor, endColor, index / Math.max(textValue.length - 1, 1));
            return `<span style="color: ${color}">${char}</span>`;
        }
    }).join("");

    // Atualiza o BBCode após a saída do texto
    updateBBcodeOutput(); // Chama para garantir que o BBCode seja atualizado
}


// Configura a cor a partir da paleta de cores
function setColorFromPalette(color, index) {
    gradientText.focus();
    document.execCommand("insertHTML", false, `<span style="color: ${color}">${gradientText.value[index]}</span>`);
    updatePalette();
    updateOutputText();
}

// Interpola entre duas cores
function interpolateColor(start, end, factor) {
    const startRgb = hexToRgb(start);
    const endRgb = hexToRgb(end);
    const result = {
        r: Math.round(startRgb.r + factor * (endRgb.r - startRgb.r)),
        g: Math.round(startRgb.g + factor * (endRgb.g - startRgb.g)),
        b: Math.round(startRgb.b + factor * (endRgb.b - startRgb.b))
    };
    return rgbToHex(result.r, result.g, result.b);
}

// Converte HEX para RGB
function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
    };
}

// Converte RGB para HEX
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// Converte HSL para HEX
function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s; // Chroma
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;

    let r, g, b;

    if (h < 60) {
        r = c; g = x; b = 0;
    } else if (h < 120) {
        r = x; g = c; b = 0;
    } else if (h < 180) {
        r = 0; g = c; b = x;
    } else if (h < 240) {
        r = 0; g = x; b = c;
    } else if (h < 300) {
        r = x; g = 0; b = c;
    } else {
        r = c; g = 0; b = x;
    }

    return rgbToHex(Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255));
}

// Gera o BBCode com base no texto e estilo atual
function generateBBcode() {
    const isGrande = grandeCheckbox.checked;
    const isBold = boldCheckbox.checked;
    const isItalic = italicCheckbox.checked;
    const textValue = gradientText.value;
    let bbcode = "";

    if (isGrande) bbcode += "[big]";
    if (isBold) bbcode += "[b]";
    if (isItalic) bbcode += "[i]";

    // Aplica o efeito arco-íris
    if (isRainbowActive) {
        for (let i = 0; i < textValue.length; i++) {
            const hue = (i / textValue.length) * 360;
            const color = hslToHex(hue, 100, 50);
            bbcode += `[corhtml=${color.slice(1)}]${textValue[i]}[/corhtml]`; // Remove o símbolo #
        }
    } else {
        const startColor = startColorInput.value;
        const endColor = endColorInput.value;

        for (let i = 0; i < textValue.length; i++) {
            let color = interpolateColor(startColor, endColor, i / Math.max(textValue.length - 1, 1));
            bbcode += `[corhtml=${color.slice(1)}]${textValue[i]}[/corhtml]`; // Remove o símbolo #
        }
    }

    if (isItalic) bbcode += "[/i]";
    if (isBold) bbcode += "[/b]";
    if (isGrande) bbcode += "[/big]";

    return bbcode;
}

// Atualiza a saída do BBCode
function updateBBcodeOutput() {
    bbcodeOutput.value = generateBBcode(); // Use 'value' para textarea
}

// Limpa o campo de entrada
function clearTextarea() {
    gradientText.value = ""; // Limpa o campo de entrada
    showMessage("Os campos foram limpos!"); // Exibe mensagem na div
    updateOutputText();
    updateBBcodeOutput();
}

// Exibe uma mensagem temporária
function showMessage(message) {
    const avisoButton = document.getElementById("aviso-button");
    avisoButton.textContent = message; // Define a mensagem
    avisoButton.classList.add("visible"); // Mostra a mensagem

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        avisoButton.classList.remove("visible"); // Oculta a mensagem
    }, 3000);
}

rainbowButton.addEventListener("click", () => {
    isRainbowActive = !isRainbowActive; // Alterna o estado do efeito arco-íris
    if (isRainbowActive) {
        rainbowButton.classList.add("rainbow-active"); // Adiciona classe de efeito arco-íris
    } else {
        rainbowButton.classList.remove("rainbow-active"); // Remove a classe se desativado
    }
    updateOutputText(); // Atualiza a saída do texto
    updateBBcodeOutput(); // Garante que o BBCode também seja atualizado
});



// Adiciona eventos aos elementos
startColorInput.addEventListener("input", updatePalette);
endColorInput.addEventListener("input", updatePalette);
gradientText.addEventListener("input", updatePalette);
boldCheckbox.addEventListener("change", updateOutputText);
italicCheckbox.addEventListener("change", updateOutputText);
grandeCheckbox.addEventListener("change", updateOutputText);
copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(bbcodeOutput.value);
    showMessage("Código copiado para a área de transferência!"); // Mensagem ao copiar
});
clearButton.addEventListener("click", clearTextarea);
