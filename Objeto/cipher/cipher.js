Array.prototype.rotate = function(n) {
    return this.slice(n, this.length).concat(this.slice(0, n));
}

class Cipher {

  complent(rotate){
    let complent = {}
    let inputChars = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let outputChars = inputChars.rotate(rotate)

    inputChars.forEach((char, index) => {
      complent[char.toLowerCase()] = outputChars[index].toLowerCase()
      complent[char.toUpperCase()] = outputChars[index].toUpperCase()
    })

    return complent
  }

  rot(str, rotate=13) {

    let substitution = this.complent(rotate)

    return str
      .split('')
      .map(char => substitution[char] || char)
      .join('')
 }

 allRots(str) {
  //TO DO
 }

}
let message = 'Dhny é n áeiber cersrevqn qr hz nqzvavfgenqbe qr erqrf? Vcê.'
cipher = new Cipher()

module.exports = Cipher
