const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(reverse = true) {
    this.reverse = reverse
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`)

    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const ABC_LENGTH = ABC.length
    key = key.toUpperCase()
    message = message.toUpperCase()

    let result = ''

    while (key.length <= message.length) key += key

    for (let i = 0; i < message.length; i++) {

      if (message[i].match(/[A-Z]/g)) {
        let indx = ((ABC_LENGTH + ABC.search(message[i]) + ABC.search(key[i])) % ABC_LENGTH)
        result += ABC[indx % ABC_LENGTH]
      } else {
        result += message[i]
        key = key.slice(0, i) + message[i] + key.slice(i)
      }

    }
    return this.reverse ? result : result.split('').reverse().join('')
  }

  decrypt(message, key) {

    if (!message || !key) throw new Error(`Incorrect arguments!`)

    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const ABC_LENGTH = ABC.length
    key = key.toUpperCase()
    message = message.toUpperCase()

    let result = ''

    while (key.length <= message.length) key += key

    for (let i = 0; i < message.length; i++) {

      if (message[i].match(/[A-Z]/g)) {
        let indx = ((ABC_LENGTH + ABC.search(message[i]) - ABC.search(key[i])) % ABC_LENGTH)
        result += ABC[indx % ABC_LENGTH]
      } else {
        result += message[i]
        key = key.slice(0, i) + message[i] + key.slice(i);
      }

    }
    return this.reverse ? result : result.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
