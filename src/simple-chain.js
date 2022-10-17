const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    if (position <= 0 || position >= this.chain.length || !Number.isInteger(position)) {
      this.chain = []  //обнуляем перед ошибкой
      throw new Error(`You can't remove incorrect link!`)
    }
    this.chain.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },

  finishChain() {
    let result = ''
    if (this.chain.length > 0) result = this.chain.join('~~')  //собираем цепь
    this.chain = []   //обнуляем
    return result
  },

}

module.exports = {
  chainMaker
};
