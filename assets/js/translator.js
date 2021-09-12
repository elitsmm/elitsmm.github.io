(function(){
    const PortuguêsInput = document.getElementById('PortuguêsInput');
    const cactobetoInput = document.getElementById('CactobetoInput');
    const input = document.getElementsByClassName('input');
    const output = document.getElementsByClassName('output');
    const translate = document.getElementById('translate');
    const revert = document.getElementById('revert');
    const alphabet = {
        'a': 'y', 'A': 'Y', 
        'b': 'p', 'B': 'P', 
        'c': 'l', 'C': 'L', 
        'd': 't', 'D': 'T', 
        'e': 'a', 'E': 'A', 
        'f': 'v', 'F': 'V', 
        'g': 'k', 'G': 'K', 
        'h': 'r', 'H': 'R', 
        'i': 'e', 'I': 'E', 
        'j': 'z', 'J': 'Z', 
        'k': 'g', 'K': 'G', 
        'l': 'm', 'L': 'M', 
        'm': 's', 'M': 'S', 
        'n': 'h', 'N': 'H', 
        'o': 'u', 'O': 'U', 
        'p': 'b', 'P': 'B', 
        'q': 'x', 'Q': 'X', 
        'r': 'n', 'R': 'N', 
        's': 'c', 'S': 'C', 
        't': 'd', 'T': 'D', 
        'u': 'i', 'U': 'I', 
        'v': 'j', 'V': 'J', 
        'x': 'q', 'X': 'Q', 
        'w': 'f', 'W': 'F', 
        'y': 'o', 'Y': 'O', 
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
        portuguêsInput.classList.toggle('input');
        CactobetoInput.classList.toggle('output');
        portuguêsInput.classList.toggle('output');
        CactobetoInput.classList.toggle('input');
        revert.classList.toggle('revert');

        e.preventDefault();
    });

    translate.addEventListener('click', function(e) {
        if(translate.className === 'translateToCactobeto') {
            console.log('>>>');
            const Português = input[0].value;
            const Cactobeto = Porutguês.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabet[m];
            });
            output[0].value = Cactobeto;
        } 
        else if(translate.className === 'translateToPortuguês') {
            console.log('<<<');
            const Cactobeto = input[0].value;
            const português = Cactobeto.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabetCactobeto[m];
            });
            output[0].value = português;
        }
        e.preventDefault();
    });

})();
