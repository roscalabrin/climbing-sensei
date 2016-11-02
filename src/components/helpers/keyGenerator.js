const crypto = require('crypto')

class KeyGenerator {
  get key() {
    return crypto.randomBytes(48)
  }

  get randomKey() {
    return this.key.toString('hex')
  }
}

export default KeyGenerator
