module.exports = function toReadable (a) {
    const rom = {
        'hundred': 100,
        'ninety': 90,
        'eighty': 80,
        'seventy': 70,
        'sixty': 60,
        'fifty': 50,
        'forty': 40,
        'thirty': 30,
        'twenty': 20,
        'nineteen': 19,
        'eighteen': 18,
        'seventeen': 17,
        'sixteen': 16,
        'fifteen': 15,
        'fourteen': 14,
        'thirteen': 13,
        'twelve': 12,
        'eleven': 11,
        'ten': 10,
        'nine': 9,
        'eight': 8,
        'seven': 7,
        'six': 6,
        'five': 5,
        'four': 4,
        'three': 3,
        'two': 2,
        'one': 1
      }
      let result = ''
      let b = parseInt(a / 100)
      if (a == 0) {
        result = 'zero'
      } else {
      for (let key in rom){
        while (rom[key] <= a) {
      if (a > 100) {
        result = result + key + ' '
          a = a - rom[key]*b
      } else {
        result = result + key + ' '
          a = a - rom[key]
      }
        }
      if (rom[key] == b) {
        result = key + " " + result
      }
      }
      }
      return result
}
