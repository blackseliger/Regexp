// TODO: write your code here
class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const valideName = this.name.match(/[a-z\d\-\_]/g);

    const valideNameNoFirstNumber = valideName.join('').match(/^[\d]/g);
    const valideNameNoNumbers = valideName.join('').match(/^[\d][\d][\d][\d]/g);
    const valideNameNoNumbersEnd = valideName.join('').match(/[\d]$/g);

    const valideNameNoDashBegin = valideName.join('').match(/^[-]/g);
    const validnameNoDashEnd = valideName.join('').match(/[-]$/g);

    const lowerHyphenBegin = valideName.join('').match(/^[_]/g);
    const lowerHyphenEnd = valideName.join('').match(/[_]$/g);
    try {
      if (valideName === null) throw new Error();
      try {
        if (valideNameNoFirstNumber || valideNameNoNumbers || valideNameNoNumbersEnd || valideNameNoDashBegin || validnameNoDashEnd || lowerHyphenBegin || lowerHyphenEnd) throw new Error();
        return valideName;
      } catch (e) {
        throw new Error('некорреткное имя');
      }
    } catch (e) {
      throw new Error('имя должно содержать лат.буквы, тире,подчеркивание,цифры');
    }
  }
}

const test1 = new Validator('33333k31');
test1.validateUsername();
