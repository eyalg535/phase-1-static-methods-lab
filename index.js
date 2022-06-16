class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-'' ]/g, '');
  }
  
  static titleize(string) {
    const nonCapWords = ["the", 'a', "an", "but", "of", "and", "for", "at", "by", "from"];
    const wordArray = string.split(' ');
    let newString = [];

    for (let i = 0; i < wordArray.length; i++) {

      if (i === 0 || !nonCapWords.includes(wordArray[i])) {
        newString.push(this.capitalize(wordArray[i]));
      } else {
        newString.push(wordArray[i]);
      }
    }
    return newString.join(' ');
  }
}