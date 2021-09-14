(function(){
    const englishInput = document.getElementById('englishInput');
    const cactobetoInput = document.getElementById('CactobetoInput');
    const input = document.getElementsByClassName('input');
    const output = document.getElementsByClassName('output');
    const translate = document.getElementById('translate');
    const revert = document.getElementById('revert');
    const alphabet = {
        'a': '♪', 'A': '♪', 
        'b': 'p', 'B': 'P', 
        'c': 'l', 'C': 'L', 
        'd': 't', 'D': 'T', 
        'e': 'a', 'E': 'A', 
        'f': 'v', 'F': 'V', 
        'g': 'k', 'G': 'K', 
        'h': 'r', 'H': 'R', 
        'i': 'e', 'I': 'E', 
        'j': '✌', 'J': '✌', 
        'k': '❣', 'K': '❣', 
        'l': 'm', 'L': 'M', 
        'm': 's', 'M': 'S', 
        'n': 'h', 'N': 'H', 
        'o': '⁂', 'O': '⁂', 
        'p': '☆', 'P': '☆', 
        'q': '♘', 'Q': '♘', 
        'r': 'n', 'R': 'N', 
        's': '☾', 'S': '☾', 
        't': 'd', 'T': 'D', 
        'u': '$', 'U': '$', 
        'v': 'æ', 'V': 'æ', 
        'x': 'q', 'X': 'Q', 
        'w': 'f', 'W': 'F', 
        'y': 'β', 'Y': 'β', 
        'z': 'w', 'Z': 'W', 
    }
    const alphabetCactobeto = new Object;
    for (var letter in alphabet) {
        alphabetCactobeto[alphabet[letter]] = letter;
    };

    console.log(alphabetCactobeto);

    revert.addEventListener('click', function(e) {
        translate.classList.toggle('translateToCactobeto');
        translate.classList.toggle('translateToEnglish');
        englishInput.classList.toggle('input');
        CactobetoInput.classList.toggle('output');
        englishInput.classList.toggle('output');
        CactobetoInput.classList.toggle('input');
        revert.classList.toggle('revert');

        e.preventDefault();
    });

    translate.addEventListener('click', function(e) {
        if(translate.className === 'translateToCactobeto') {
            console.log('>>>');
            const english = input[0].value;
            const Cactobeto = english.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabet[m];
            });
            output[0].value = Cactobeto;
        } 
        else if(translate.className === 'translateToEnglish') {
            console.log('<<<');
            const Cactobeto = input[0].value;
            const english = Cactobeto.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabetCactobeto[m];
            });
            output[0].value = english;
        }
        e.preventDefault();
    });

})();
