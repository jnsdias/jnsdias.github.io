// font-mappings.js

// --- Mapeamentos de Caracteres ---

const scriptifyMap = { // Exemplo para "Scriptify" e "Elegante (Cursive 1)"
    'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸', 'F': '𝐹', 'G': '𝒢', 'H': '𝐻', 'I': '𝐼', 'J': '𝒥', 'K': '𝒦', 'L': '𝐿', 'M': '𝑀',
    'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
    'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂',
    'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9' // Números geralmente não são estilizados nessa fonte
};

const eleganteCursive2Map = { // Exemplo para "Elegante (Cursive 2)"
    'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜',
    'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣', 'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩',
    'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶',
    'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9' // Números geralmente não são estilizados nessa fonte
};

const oldEnglishMap = {
    'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐',
    'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ',
    'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪',
    'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9' // Números geralmente não são estilizados nessa fonte
};

const medievalMap = {
    'A': '𝕬', 'B': '𝕭', 'C': '𝕮', 'D': '𝕯', 'E': '𝕰', 'F': '𝕱', 'G': '𝕲', 'H': '𝕳', 'I': '𝕴', 'J': '𝕵', 'K': '𝕶', 'L': '𝕷', 'M': '𝕸',
    'N': '𝕹', 'O': '𝕺', 'P': '𝕻', 'Q': '𝕼', 'R': '𝕽', 'S': '𝕾', 'T': '𝕿', 'U': '𝖀', 'V': '𝖁', 'W': '𝖂', 'X': '𝖃', 'Y': '𝖄', 'Z': '𝖅',
    'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌', 'h': '𝖍', 'i': '𝖎', 'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒',
    'n': '𝖓', 'o': '𝖔', 'p': '𝖕', 'q': '𝖖', 'r': '𝖗', 's': '𝖘', 't': '𝖙', 'u': '𝖚', 'v': '𝖛', 'w': '𝖜', 'x': '𝖝', 'y': '𝖞', 'z': '𝖟',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
};

const doubleStruckMap = {
    '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡',
    'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄',
    'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
    'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞',
    'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫'
};

const italicMap = {
    '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿',
    'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀',
    'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍',
    'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚',
    'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧'
};

const boldItalicMap = {
    '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗',
    'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴',
    'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁',
    'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎',
    'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛'
};

const monospaceMap = {
    '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿',
    'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼',
    'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
    'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖',
    'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣'
};

const lunitoolsBubblesMap = {
    'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ',
    'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
    'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ',
    'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
    '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
};

const roundBlackBoxBubblesMap = {
    'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔', 'F': '🅕', 'G': '🅖', 'H': '🅗', 'I': '🅘', 'J': '🅙', 'K': '🅚', 'L': '🅛', 'M': '🅜',
    'N': '🅝', 'O': '🅞', 'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣', 'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨', 'Z': '🅩',
    'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔', 'f': '🅕', 'g': '🅖', 'h': '🅗', 'i': '🅘', 'j': '🅙', 'k': '🅚', 'l': '🅛', 'm': '🅜',
    'n': '🅝', 'o': '🅞', 'p': '🅟', 'q': '🅠', 'r': '🅡', 's': '🅢', 't': '🅣', 'u': '🅤', 'v': '🅥', 'w': '🅦', 'x': '🅧', 'y': '🅨', 'z': '🅩',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9' // Adicionei números como fallback se não houver um estilo específico
};

const dashboxBoxMap = {
    'A': '🇦', 'B': '🇧', 'C': '🇨', 'D': '🇩', 'E': '🇪', 'F': '🇫', 'G': '🇬', 'H': '🇭', 'I': '🇮', 'J': '🇯', 'K': '🇰', 'L': '🇱', 'M': '🇲',
    'N': '🇳', 'O': '🇴', 'P': '🇵', 'Q': '🇶', 'R': '🇷', 'S': '🇸', 'T': '🇹', 'U': '🇺', 'V': '🇻', 'W': '🇼', 'X': '🇽', 'Y': '🇾', 'Z': '🇿',
    'a': '🇦', 'b': '🇧', 'c': '🇨', 'd': '🇩', 'e': '🇪', 'f': '🇫', 'g': '🇬', 'h': '🇭', 'i': '🇮', 'j': '🇯', 'k': '🇰', 'l': '🇱', 'm': '🇲',
    'n': '🇳', 'o': '🇴', 'p': '🇵', 'q': '🇶', 'r': '🇷', 's': '🇸', 't': '🇹', 'u': '🇺', 'v': '🇻', 'w': '🇼', 'x': '🇽', 'y': '🇾', 'z': '🇿',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9' // Adicionei números como fallback
};

const invertedSquaresMap = {
    'q': '🆀', 'w': '🆆', 'e': '🅴', 'r': '🆁', 't': '🆃', 'y': '🆈', 'u': '🆄', 'i': '🅸', 'o': '🅾', 'p': '🅿',
    'a': '🅰', 's': '🆂', 'd': '🅳', 'f': '🅵', 'g': '🅶', 'h': '🅷', 'j': '🅹', 'k': '🅺', 'l': '🅻',
    'z': '🆉', 'x': '🆇', 'c': '🅲', 'v': '🆅', 'b': '🅱', 'n': '🅽', 'm': '🅼',
    'Q': '🆀', 'W': '🆆', 'E': '🅴', 'R': '🆁', 'T': '🆃', 'Y': '🆈', 'U': '🆄', 'I': '🅸', 'O': '🅾', 'P': '🅿',
    'A': '🅰', 'S': '🆂', 'D': '🅳', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'J': '🅹', 'K': '🅺', 'L': '🅻',
    'Z': '🆉', 'X': '🆇', 'C': '🅲', 'V': '🆅', 'B': '🅱', 'N': '🅽', 'M': '🅼',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9' // Adicionei números como fallback
};

const fatTextMap = {
    'A': 'ᗩ', 'B': 'ᗷ', 'C': 'ᑢ', 'D': 'ᕲ', 'E': 'ᘿ', 'F': 'ᖴ', 'G': 'ᘜ', 'H': 'ᕼ', 'I': 'ᓰ', 'J': 'ᒚ', 'K': 'ᖽᐸ', 'L': 'ᒪ', 'M': 'ᘻ',
    'N': 'ᘉ', 'O': 'ᓍ', 'P': 'ᕵ', 'Q': 'ᕴ', 'R': 'ᖇ', 'S': 'ᔕ', 'T': 'ᖶ', 'U': 'ᑘ', 'V': 'ᐺ', 'W': 'ᘺ', 'X': '᙭', 'Y': 'ᖻ', 'Z': 'ᗱ',
    'a': 'ᗩ', 'b': 'ᗷ', 'c': 'ᑢ', 'd': 'ᕲ', 'e': 'ᘿ', 'f': 'ᖴ', 'g': 'ᘜ', 'h': 'ᕼ', 'i': 'ᓰ', 'j': 'ᒚ', 'k': 'ᖽᐸ', 'l': 'ᒪ', 'm': 'ᘻ',
    'n': 'ᘉ', 'o': 'ᓍ', 'p': 'ᕵ', 'q': 'ᕴ', 'r': 'ᖇ', 's': 'ᔕ', 't': 'ᖶ', 'u': 'ᑘ', 'v': 'ᐺ', 'w': 'ᘺ', 'x': '᙭', 'y': 'ᖻ', 'z': 'ᗱ',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
};

const wideTextMap = {
    '`': '`', '1': '１', '2': '２', '3': '３', '4': '４', '5': '５', '6': '６', '7': '７', '8': '８', '9': '９', '0': '０', '-': '－', '=': '＝', '~': '～',
    '!': '！', '@': '＠', '#': '＃', '$': '＄', '%': '％', '^': '＾', '&': '＆', '*': '＊', '(': '（', ')': '）', '_': '＿', '+': '＋',
    'q': 'ｑ', 'w': 'ｗ', 'e': 'ｅ', 'r': 'ｒ', 't': 'ｔ', 'y': 'ｙ', 'u': 'ｕ', 'i': 'ｉ', 'o': 'ｏ', 'p': 'ｐ', '[': '［', ']': '］', '\\': '＼',
    'Q': 'Ｑ', 'W': 'Ｗ', 'E': 'Ｅ', 'R': 'Ｒ', 'T': 'Ｔ', 'Y': 'Ｙ', 'U': 'Ｕ', 'I': 'Ｉ', 'O': 'Ｏ', 'P': 'Ｐ', '{': '｛', '}': '｝', '|': '｜',
    'a': 'ａ', 's': 'ｓ', 'd': 'ｄ', 'f': 'ｆ', 'g': 'ｇ', 'h': 'ｈ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', ';': '；', '\'': '＇',
    'A': 'Ａ', 'S': 'Ｓ', 'D': 'Ｄ', 'F': 'Ｆ', 'G': 'Ｇ', 'H': 'Ｈ', 'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', ':': '：', '"': '＂',
    'z': 'ｚ', 'x': 'ｘ', 'c': 'ｃ', 'v': 'ｖ', 'b': 'ｂ', 'n': 'ｎ', 'm': 'ｍ', ',': '，', '.': '．', '/': '／',
    'Z': 'Ｚ', 'X': 'Ｘ', 'C': 'Ｃ', 'V': 'Ｖ', 'B': 'Ｂ', 'N': 'Ｎ', 'M': 'Ｍ', '<': '＜', '>': '＞', '?': '？'
};

const boldMap = {
    '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗',
    'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌',
    'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
    'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦',
    'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳'
};

const smallcapsMap = {
    'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ꜰ','g':'ɢ','h':'ʜ','i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ','q':'ǫ','r':'ʀ','s':'s','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'x','y':'ʏ','z':'ᴢ',
    'A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ꜰ','G':'ɢ','H':'ʜ','I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴘ','Q':'ǫ','R':'ʀ','S':'s','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'x','Y':'ʏ','Z':'ᴢ',
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9' // Adicionei números como fallback
};

const squaresMap = {
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
    'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵', 'G': '🄶', 'H': '🄷', 'I': '🄸', 'J': '🄹', 'K': '🄺', 'L': '🄻', 'M': '🄼',
    'N': '🄽', 'O': '🄾', 'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄', 'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈', 'Z': '🅉',
    'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷', 'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼',
    'n': '🄽', 'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉'
};

const luniToolsFlipConfig = {
    _init: function() {
        for (let i in this.map) {
            this.mapInverse[this.map[i]] = i;
        }
    },
    convert: function(a) {
        let converted = '';
        for (let i = 0; i < a.length; i++) {
            let char = a.charAt(i);
            if (i > 0 && (char == '̤' || char == '̗' || char == '̖' || char == '̮')) {
                converted = converted.slice(0, -1);
                char = this.map[a.charAt(i - 1) + char];
            } else {
                char = this.map[char];
                if (typeof char == 'undefined') {
                    char = a.charAt(i);
                }
            }
            converted += char;
        }
        return converted;
    },
    map: {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ɓ', 'h': 'ɥ', 'i': 'ı', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ',
        'n': 'u', 'r': 'ɹ', 't': 'ʇ', 'v': 'ʌ', 'w': 'ʍ', 'y': 'ʎ',
        'A': '∀', 'B': 'ᙠ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'J': 'ſ', 'K': '⋊', 'L': '˥', 'M': 'W', 'P': 'Ԁ', 'Q': 'Ό',
        'R': 'ᴚ', 'T': '⊥', 'U': '∩', 'V': 'Λ', 'Y': '⅄',
        '1': '⇂', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ގ', '6': '9', '7': 'ㄥ',
        '&': '⅋', '.': '˙', '"': '„', ';': '؛', '[': ']', '(': ')', '{': '}', '?': '¿', '!': '¡', '\'': ',', '<': '>',
        '‾': '‾', '¯': '¯', '‿': '⁀', '⁅': '⁆', '∴': '∵', '‚': '`',
        'ß': 'ᙠ', '̈': '̤', 'ä': 'ɐ' + '̤', 'ö': 'o' + '̤', 'ü': 'n' + '̤',
        'Ä': '∀' + '̤', 'Ö': 'O' + '̤', 'Ü': '∩' + '̤',
        '´': '̗', 'é': 'ǝ' + '̗', 'á': 'ɐ' + '̗', 'ó': 'o' + '̗', 'ú': 'n' + '̗',
        'É': 'Ǝ' + '̗', 'Á': '∀' + '̗', 'Ó': 'O' + '̗', 'Ú': '∩' + '̗',
        '`': '̖', 'è': 'ǝ' + '̖', 'à': 'ɐ' + '̖', 'ò': 'o' + '̖', 'ù': 'n' + '̖',
        'È': 'Ǝ' + '̖', 'À': '∀' + '̖', 'Ò': 'O' + '̖', 'Ù': '∩' + '̖',
        '^': '̮', 'ê': 'ǝ' + '̮', 'â': 'ɐ' + '̮', 'ô': 'o' + '̮', 'û': 'n' + '̮',
        'Ê': 'Ǝ' + '̮', 'Â': '∀' + '̮', 'Ô': 'O' + '̮', 'Û': '∩' + '̮',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9' // Adicionei números como fallback
    },
    mapInverse: {}
};
luniToolsFlipConfig._init();

const reverseMirrorConfig = {
    _init: function() {
        for (let i in this.map) {
            this.mapInverse[this.map[i]] = i;
        }
    },
    convert: function(a) {
        let converted = '',
            char;
        for (let i = 0; i < a.length; i++) {
            char = a.charAt(i);
            if (i > 0 && (char == '̈' || char == '̀' || char == '́' || char == '̂')) {
                converted = converted.slice(0, -1);
                char = this.map[a.charAt(i - 1) + char];
            } else {
                char = this.map[char];
                if (typeof char == 'undefined') {
                    char = a.charAt(i);
                }
            }
            if (char == '\n') {
                converted += '\n';
            } else {
                converted += char;
            }
        }
        return converted;
    },
    map: {
        'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'e': 'ɘ', 'f': 'Ꮈ', 'g': 'ǫ', 'h': 'ʜ', 'j': 'ꞁ', 'k': 'ʞ', 'l': '|', 'n': 'ᴎ', 'p': 'q', 'r': 'ɿ',
        's': 'ꙅ', 't': 'ƚ', 'y': 'ʏ', 'z': 'ƹ',
        'B': 'ᙠ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ꟻ', 'G': 'Ꭾ', 'J': 'Ⴑ', 'K': '⋊', 'L': '⅃', 'N': 'Ͷ', 'P': 'ꟼ', 'Q': 'Ọ',
        'R': 'Я', 'S': 'Ꙅ', 'Z': 'Ƹ',
        '1': '', '2': '', '3': '', '4': '', '5': '', '6': '', '7': '',
        '&': '', ';': '', '[': ']', '(': ')', '{': '}', '?': '⸮', '<': '>',
        'ä': 'ɒ' + '̈', 'ß': 'ᙠ',
        '´': '`', 'é': 'ɘ' + '̀', 'á': 'ɒ' + '̀', 'ó': 'ò', 'ú': 'ù',
        'É': 'Ǝ' + '̀', 'Á': 'À', 'Ó': 'Ò', 'Ú': 'Ù',
        '`': '´', 'è': 'ɘ' + '́', 'à': 'ɒ' + '́',
        'È': 'Ǝ' + '́',
        'ê': 'ɘ' + '̂', 'â': 'ɒ' + '̂',
        'Ê': 'Ǝ' + '̂',
        'Ø': 'ᴓ', 'ø': 'ᴓ',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9' // Adicionei números como fallback
    },
    mapInverse: {}
};
reverseMirrorConfig._init();

// --- Função auxiliar para aplicar mapeamentos gerais ---
function applyMapping(text, mapping, addSpace = false) {
    if (!text || typeof text !== 'string' || !mapping) {
        return text;
    }
    let convertedText = '';
    
    Array.from(text).forEach(char => {
        let finalCharToAdd = char; // Default to the original character

        // Tenta o caractere original
        if (mapping[char]) {
            finalCharToAdd = mapping[char];
        }
        // Se não encontrado, tenta sua versão minúscula (se diferente)
        else if (char.toLowerCase() !== char && mapping[char.toLowerCase()]) {
            finalCharToAdd = mapping[char.toLowerCase()];
        }
        // Se ainda não encontrado, tenta sua versão maiúscula (se diferente)
        else if (char.toUpperCase() !== char && mapping[char.toUpperCase()]) {
            finalCharToAdd = mapping[char.toUpperCase()];
        }
        
        convertedText += finalCharToAdd; // Adiciona o caractere determinado

        // Adiciona um espaço APENAS se 'addSpace' for true,
        // o caractere original não for um espaço,
        // E o caractere adicionado foi de fato diferente do original (ou seja, foi mapeado)
        if (addSpace && char !== ' ' && finalCharToAdd !== char) { // This is the crucial change
            convertedText += ' ';
        }
    });

    // Remove trailing space if addSpace is true and the text is not empty or ends with original space
    if (addSpace && convertedText.endsWith(' ') && text.trim().length > 0) {
        // If the original text ended with a space, we want to preserve that final space.
        // So, only trim if the original text did NOT end with a space.
        if (!text.endsWith(' ')) {
            convertedText = convertedText.trim();
        }
    } else if (addSpace && convertedText.endsWith(' ') && text.length === 0) {
        // Handle case where input was empty, and a space might have been added by mistake
        convertedText = '';
    }
    
    return convertedText;
}

// --- FUNÇÃO CENTRALIZADA DE CONVERSÃO ---
function convertToStyled(text, styleType) {
    if (!styleType || styleType === 'none') return text;

    switch (styleType) {
        // Mapeamentos do seu unicodeMap original
        case 'bold': return applyMapping(text, boldMap);
        case 'italic': return applyMapping(text, italicMap);
        case 'boldItalic': return applyMapping(text, boldItalicMap);
        case 'script': return applyMapping(text, scriptifyMap);
        case 'monospace': return applyMapping(text, monospaceMap);
        case 'smallcaps': return applyMapping(text, smallcapsMap);
        case 'double': return applyMapping(text, doubleStruckMap);
        case 'circled': return applyMapping(text, lunitoolsBubblesMap);
        case 'squared': // squared é um caso especial que geralmente capitaliza
            const squaredMap = {'A':'🄰','B':'🄱','C':'🄲','D':'🄳','E':'🄴','F':'🄵','G':'🄶','H':'🄷','I':'🄸','J':'🄹','K':'🄺','L':'🄻','M':'🄼','N':'🄽','O':'🄾','P':'🄿','Q':'🅀','R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄', 'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈', 'Z': '🅉',
                                'a':'🄰','b':'🄱','c':'🄲','d':'🄳','e':'🄴','f':'🄵','g':'🄶','h':'🄷','i':'🄸','j':'🄹','k':'🄺','l':'🄻','m':'🄼','n':'🄽','o':'🄾','p':'🄿','q':'🅀','r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
                                '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'};
            // A nova applyMapping já trata de tentar capitalizar se o mapeamento não for encontrado
            return applyMapping(text, squaredMap);
        // Novas fontes solicitadas
        case 'elegante_cursive_1': return applyMapping(text, scriptifyMap);
        case 'elegante_cursive_2': return applyMapping(text, eleganteCursive2Map);
        case 'old_english': return applyMapping(text, oldEnglishMap);
        case 'medieval': return applyMapping(text, medievalMap);
        case 'double_struck': return applyMapping(text, doubleStruckMap);
        case 'lunitools_bubbles': return applyMapping(text, lunitoolsBubblesMap);
        case 'round_black_box_bubbles': return applyMapping(text, roundBlackBoxBubblesMap);
        case 'dashbox_box': return applyMapping(text, dashboxBoxMap, true);
        case 'inverted_squares': return applyMapping(text, invertedSquaresMap);
        case 'fat_text': return applyMapping(text, fatTextMap);
        case 'wide_text': return applyMapping(text, wideTextMap);
        case 'luni_tools_flip': return luniToolsFlipConfig.convert(text);
        case 'reverse_mirror': return reverseMirrorConfig.convert(text);
        case 'squares': return applyMapping(text, squaresMap);
        case 'luni_tools_mirror': return reverseMirrorConfig.convert(text);

        default: return text;
    }
}