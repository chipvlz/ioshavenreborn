'use strict'
const fs = require('fs')
const path = require('path');

class __init__ {
  constructor(a) {
    this.__type__ = this.constructor.name
    this.__db__ = path.join(__dirname, '../db/', this.__type__ +'.json')
    this.__data__ = this.constructor.all()
  }


  set (item, value) {
    this.__data__[this.__key__][item] = value
  }

  public () {
    let e = Object.assign({}, this.get())
    Object.keys(e).forEach(k => {
      if (k[0] === '_') delete e[k]
    })
    return e
  }

  private () {
    let e = Object.assign({}, this.get())
    Object.keys(e).forEach(k => {
      if (k[0] !== '_') delete e[k]
    })
    return e
  }

  data () {
    let o1 = Object.assign({}, this)
    let o2 = Object.assign({}, this.get())
    let e = Object.assign(o1, o2)
    delete e['__data__']
    return e
  }

  get() {
    return this.__data__[this.__key__] || {}
  }

  drop() {
    delete this.__data__[this.__key__]
    return this.save()
  }

  static all() {
    let _db = path.join(__dirname, '../db/', this.name+'.json')
    let data
    try {
      data = require(_db)
    } catch (e) {
      data = {}
    }
    return data
  }

  save() {
    this.__data__[this.__key__] = this.get()
    return new Promise((resolve, reject) => {
      fs.writeFile(this.__db__, JSON.stringify(this.__data__, null, 2), (err) => {
          if(err) return reject()
          resolve(this.__data__)
      });
    });
  }

}


module.exports = __init__
