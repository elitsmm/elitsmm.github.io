(function(){
    const englishInput = document.getElementById('englishInput');
    const cactobetoInput = document.getElementById('CactobetoInput');
    const input = document.getElementsByClassName('input');
    const output = document.getElementsByClassName('output');
    const translate = document.getElementById('translate');
    const revert = document.getElementById('revert');
    const alphabet = {
        'a': 'q', 'A': 'Q', 
        'b': 'w', 'B': 'W', 
        'c': 'ee', 'C': 'EE', 
        'd': 'r', 'D': 'R', 
        'e': '#', 'E': '#', 
        'f': 't', 'F': 'T', 
        'g': 'y', 'G': 'Y', 
        'h': '%', 'H': '%', 
        'i': 'l', 'I': 'L', 
        'j': 'k', 'J': 'K', 
        'k': 'h', 'K': 'H', 
        'l': 'm', 'L': 'M', 
        'm': 'v', 'M': 'V', 
        'n': 'a', 'N': 'A', 
        'o': 'b', 'O': 'B', 
        'p': 'c', 'P': 'C', 
        'q': 'd', 'Q': 'D', 
        'r': '&', 'R': '&', 
        's': '*', 'S': '*', 
        't': 'e', 'T': 'E', 
        'u': 'f', 'U': 'F', 
        'v': 'æ', 'V': 'æ', 
        'x': 'i', 'X': 'I', 
        'w': 'j', 'W': 'J', 
        'y': 'z', 'Y': 'Z', 
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
