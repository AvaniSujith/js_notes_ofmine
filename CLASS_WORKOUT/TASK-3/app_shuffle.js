function shuffledCipher(msg){
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    const shuffledLowerCaseLetters = 'qazwsxcedrfvbgtyhnujiokmpl';
    const shuffledUpperCaseLetters = 'QAZWSXCDERFVBGTHYNUJIOKMLP';


    for(let i = 0; i < msg.length; i++){
        let char = msg[i];
        let newCharacter = char;

        if(lowerCaseLetters.includes(char)){
            let index = lowerCaseLetters.indexOf(char);
            newCharacter = shuffledLowerCaseLetters[index];
        }

        else if(upperCaseLetters.includes(char)){
            let index = upperCaseLetters.indexOf(char);
            newCharacter = shuffledUpperCaseLetters[index];
        }

        result += newCharacter;
    }

    return result
}

let msg = 'Hello'
console.log(shuffledCipher(msg))