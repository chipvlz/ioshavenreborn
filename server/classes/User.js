'use strict'
const __init__ = require('./__init__')

class User extends __init__{
  constructor(name) {
    super()
    this.__key__  = name
  }
}

module.exports = User
