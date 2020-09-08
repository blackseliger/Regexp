/* eslint-disable no-useless-escape */

export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const valiedateW = /^[\w\-]+$/g.test(this.name);
    const validateBeginEnd = !/^[\d+|\-|\_]|[\d+|\-|\_]$/.test(this.name);
    const validenumbers = !/\d{4}/.test(this.name);
    if (valiedateW && validateBeginEnd && validenumbers) {
      return this.name;
    }
    return null;
  }
}

