// Calculate the n-th term of an arithmetic progression.

function arithmeticProgression(firstTerm, num, difference){
    let nthTerm = firstTerm + (num - 1) * difference;
    console.log(nthTerm);
}

arithmeticProgression(5,10,3);
arithmeticProgression(-4,15,6);