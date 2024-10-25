const gradientText = document.getElementById("gradient-text"),
    startColorInput = document.getElementById("start-color"),
    midColorInput = document.getElementById("mid-color"),
    thirdColorInput = document.getElementById("third-color"),
    boldCheckbox = document.getElementById("bold-checkbox"),
    italicCheckbox = document.getElementById("italic-checkbox"),
    subCheckbox = document.getElementById("sub-checkbox"),
    grandeCheckbox = document.getElementById("grande-checkbox"),
    copyButton = document.getElementById("copy-button"),
    clearButton = document.getElementById("clear-button"),
    rainbowButton = document.getElementById("rainbow-button"),
    bbcodeOutput = document.getElementById("bbcode-output"),
    solidButton = document.getElementById("solid-button"),
    twoColorButton = document.getElementById("two-color-button"),
    threeColorButton = document.getElementById("three-color-button"),
    outputText = document.getElementById("output-text");

let isRainbowActive = false;
let isTwoColorActive = false;
let isThreeColorActive = false;
let isSolidColorActive = true; // Cor sólida ativa por padrão

// Função para atualizar o texto de saída e BBCode
function updateOutputText() {
    const isBold = boldCheckbox.checked;
    const isItalic = italicCheckbox.checked;
    const isSub = subCheckbox.checked;
    const isGrande = grandeCheckbox.checked;
    const startColor = startColorInput.value;
    const midColor = midColorInput.value;
    const thirdColor = thirdColorInput.value;

    let textValue = gradientText.value.trim() || "Seu texto será exibido aqui.";

    let cssStyle = `font-family: sans-serif;`;
    if (isBold) cssStyle += "font-weight: bold;";
    if (isItalic) cssStyle += "font-style: italic;";
    if (isSub) cssStyle += "text-decoration: underline;";
    if (isGrande) cssStyle += "font-size: 1.5em;";

    let formattedText = "";
    for (let i = 0; i < textValue.length; i++) {
        const char = textValue[i];
        let color;
        if (char === " ") {
            formattedText += " "; // Mantém espaços sem formatação
            continue;
        }
        if (isRainbowActive) {
            const hue = (i / textValue.length) * 360;
            color = hslToHex(hue, 100, 50);
        } else if (isTwoColorActive) {
            color = interpolateColor(startColor, midColor, i / Math.max(textValue.length - 1, 1));
        } else if (isThreeColorActive) {
            color = interpolateThreeColor(startColor, midColor, thirdColor, i / Math.max(textValue.length - 1, 1));
        } else {
            color = startColor;
        }
        formattedText += `<span style="color: ${color}; ${cssStyle}">${char}</span>`;
    }

    outputText.innerHTML = formattedText;

    updateBBcodeOutput();
}

// Função para interpolar gradientes de três cores
function interpolateThreeColor(start, mid, end, factor) {
    if (factor < 0.5) {
        return interpolateColor(start, mid, factor * 2);
    } else {
        return interpolateColor(mid, end, (factor - 0.5) * 2);
    }
}

// Função para gerar o BBCode com base nas opções
function generateBBcode() {
    const isBold = boldCheckbox.checked;
    const isItalic = italicCheckbox.checked;
    const isSub = subCheckbox.checked;
    const isGrande = grandeCheckbox.checked;
    const textValue = gradientText.value;
    let bbcode = "";

    if (isGrande) bbcode += "[big]";
    if (isBold) bbcode += "[b]";
    if (isItalic) bbcode += "[i]";
    if (isSub) bbcode += "[u]";

    if (isRainbowActive) {
        for (let i = 0; i < textValue.length; i++) {
            const char = textValue[i];
            if (char === " ") {
                bbcode += " "; // Mantém espaços sem formatação
                continue;
            }
            const hue = (i / textValue.length) * 360;
            const color = hslToHex(hue, 100, 50);
            bbcode += `[corhtml=${color.slice(1)}]${char}[/corhtml]`;
        }
    } else if (isTwoColorActive) {
        for (let i = 0; i < textValue.length; i++) {
            const char = textValue[i];
            if (char === " ") {
                bbcode += " "; // Mantém espaços sem formatação
                continue;
            }
            const color = interpolateColor(startColorInput.value, midColorInput.value, i / Math.max(textValue.length - 1, 1));
            bbcode += `[corhtml=${color.slice(1)}]${char}[/corhtml]`;
        }
    } else if (isThreeColorActive) {
        for (let i = 0; i < textValue.length; i++) {
            const char = textValue[i];
            if (char === " ") {
                bbcode += " "; // Mantém espaços sem formatação
                continue;
            }
            const color = interpolateThreeColor(startColorInput.value, midColorInput.value, thirdColorInput.value, i / Math.max(textValue.length - 1, 1));
            bbcode += `[corhtml=${color.slice(1)}]${char}[/corhtml]`;
        }
    } else {
        bbcode += `[corhtml=${startColorInput.value.slice(1)}]${textValue}[/corhtml]`;
    }

    if (isSub) bbcode += "[/u]";
    if (isItalic) bbcode += "[/i]";
    if (isBold) bbcode += "[/b]";
    if (isGrande) bbcode += "[/big]";

    return bbcode;
}

// Função para atualizar o BBCode de saída
function updateBBcodeOutput() {
    bbcodeOutput.value = generateBBcode();
}

const rainbowGif = document.getElementById('rainbowGif');

// Função para ativar um botão e desativar os outros
function activateButton(activeButton) {
    const buttons = [solidButton, twoColorButton, threeColorButton, rainbowButton];

    buttons.forEach(button => {
        if (button === activeButton) {
            button.classList.add('active');
            button.classList.remove('inactive');

            // Especifica a ação para o botão arco-íris
            if (button === rainbowButton) {
                rainbowButton.classList.add("rainbow-active");
                rainbowGif.style.display = "block"; // Mostra o GIF
                startColorInput.style.display = "none"; // Oculta o campo de cor sólida
                midColorInput.style.display = "none"; // Oculta o campo de cor do meio
                thirdColorInput.style.display = "none"; // Oculta o terceiro campo de entrada
            } else {
                rainbowGif.style.display = "none"; // Oculta o GIF para outros botões

                // Exibe inputs de acordo com o botão ativo
                if (button === solidButton) {
                    startColorInput.style.display = "inline"; // Mostra apenas o input sólido
                    midColorInput.style.display = "none"; // Oculta o input do meio
                    thirdColorInput.style.display = "none"; // Oculta o input do terceiro
                } else if (button === twoColorButton) {
                    startColorInput.style.display = "inline"; // Oculta o input sólido
                    midColorInput.style.display = "inline"; // Mostra o input do meio
                    thirdColorInput.style.display = "none"; // Oculta o input do terceiro
                } else if (button === threeColorButton) {
                    startColorInput.style.display = "inline"; // Oculta o input sólido
                    midColorInput.style.display = "inline"; // Mostra o input do meio
                    thirdColorInput.style.display = "inline"; // Mostra o input do terceiro
                }
            }
        } else {
            button.classList.remove('active');
            button.classList.add('inactive');
        }
    });
}


// Função de inicialização
function initializeButtons() {
    // Ativa o botão de cor sólida ao carregar a página
    activateButton(solidButton);
    isSolidColorActive = true; // Define o estado do botão ativo como verdadeiro
    midColorInput.style.display = "none"; // Oculta os campos de entrada para cores adicionais
    thirdColorInput.style.display = "none"; // Oculta o terceiro campo de entrada
    updateOutputText(); // Atualiza a saída
}

window.onload = initializeButtons;

// Eventos de clique para alternar entre os tipos de cor
solidButton.addEventListener("click", () => {
    isRainbowActive = false;
    isTwoColorActive = false;
    isThreeColorActive = false;
    isSolidColorActive = true;
    midColorInput.style.display = "none";
    thirdColorInput.style.display = "none";
    activateButton(solidButton);
    updateOutputText();
});

twoColorButton.addEventListener("click", () => {
    isRainbowActive = false;
    isTwoColorActive = true;
    isThreeColorActive = false;
    isSolidColorActive = false;
    midColorInput.style.display = "inline";
    thirdColorInput.style.display = "none";
    activateButton(twoColorButton);
    updateOutputText();
});

threeColorButton.addEventListener("click", () => {
    isRainbowActive = false;
    isTwoColorActive = false;
    isThreeColorActive = true;
    isSolidColorActive = false;
    midColorInput.style.display = "inline";
    thirdColorInput.style.display = "inline";
    activateButton(threeColorButton);
    updateOutputText();
});

// Ativar o efeito arco-íris
rainbowButton.addEventListener("click", () => {
    isRainbowActive = true;
    isTwoColorActive = false;
    isThreeColorActive = false;
    isSolidColorActive = false;
    midColorInput.style.display = "none";
    thirdColorInput.style.display = "none";
    activateButton(rainbowButton);
    updateOutputText();
});

// Eventos para atualizar as opções selecionadas
startColorInput.addEventListener("input", updateOutputText);
midColorInput.addEventListener("input", updateOutputText);
thirdColorInput.addEventListener("input", updateOutputText);
gradientText.addEventListener("input", updateOutputText);
boldCheckbox.addEventListener("change", updateOutputText);
italicCheckbox.addEventListener("change", updateOutputText);
subCheckbox.addEventListener("change", updateOutputText);
grandeCheckbox.addEventListener("change", updateOutputText);
copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(bbcodeOutput.value);
    alert("Código copiado!");
});
clearButton.addEventListener("click", () => {
    gradientText.value = "";
    updateOutputText();
});

// Função para converter HSL para HEX
function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
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
    const rHex = Math.round((r + m) * 255).toString(16).padStart(2, '0');
    const gHex = Math.round((g + m) * 255).toString(16).padStart(2, '0');
    const bHex = Math.round((b + m) * 255).toString(16).padStart(2, '0');
    return `#${rHex}${gHex}${bHex}`;
}

// Função para interpolar cores
function interpolateColor(start, end, factor) {
    const startRGB = hexToRgb(start);
    const endRGB = hexToRgb(end);
    const result = startRGB.map((startVal, index) => Math.round(startVal + factor * (endRGB[index] - startVal)));
    return rgbToHex(result[0], result[1], result[2]);
}

// Função para converter HEX para RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

// Função para converter RGB para HEX
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// Inicializa a interface
updateOutputText();
