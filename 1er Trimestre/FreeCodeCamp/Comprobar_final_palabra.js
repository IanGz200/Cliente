function confirmEnding(str, target) {
    let largoP = str.length
    let largoT = target.length
    let palabra  = str.split('')
    let numero = target.split('').reverse()
    let comp
    for (let i = largoP; i > largoP-largoT ; i--) {
        console.log(palabra[i-1],numero[largoP-i])
        comp = palabra[i - 1]===numero[largoP-i];
        if (!comp){
            return false;
        }
    }
    return comp;
}
console.log(confirmEnding('Bastian', 'ion'));