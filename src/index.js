// Implement function check(str, bracketsConfig), that for given brackets sequence will return true if it is correct and false otherwise

// In the second param there is bracketsConfig - the array of pairs open-closed brackets. Each subarray includes only 2 elements - opening and closing bracketmodule.exports = function check(str, bracketsConfig) {
//   // your solution
// }
//------------- содержится ли символ в конфиге ? -------------------
// function checkBrackets(symbol, config) {
//   let arrayWithSymbol = [];
//      config.forEach(element => {
//         for (key in element) {
//               if (element[key] === symbol) {
//                 arrayWithSymbol = [...arrayWithSymbol, ...element]
//               }
//         }
//     })
//   return arrayWithSymbol
// }
// const config2 = [['(', ')'], ['[', ']']];
// console.log(checkBrackets('(', config2))
// //['(', ')']

// console.log(checkBrackets(']', config2))
// //['[', ']']

// // console.log(checkBrackets('{', config2))
// // //[]



// // ['(', ')'] ['[', ']'] null
// // вернуть массив, коьорый содержит твой ситвол


// function check(str, bracketsConfig) {
//   for (letter of str) {

//     let arrayWithSymbol = checkBrackets(letter, bracketsConfig)
//       if (arrayWithSymbol[0] === letter) {
//         return arrayWithSymbol[0]
//       }
//   }


// return trueOrFalse = ''
// }


//--------------------заново пишу----------------------------
module.exports = function check(str, bracketsConfig) {
// function check(str, bracketsConfig) {
  console.log('str-', str)
  const openBracketsArray = bracketsConfig.map((element) => { //    [    '(',  '|'     ]
    return element[0]
  })
  console.log('openBracketsArray-', openBracketsArray)

  const bracketsPair = {}; //{   ')': '(',     '|': '|'    }
  bracketsConfig.forEach(element => {
    bracketsPair[element[1]] = element[0];
  })
  console.log('bracketsPair-', bracketsPair)



    let stack = [];
    for (i = 0; i < str.length; i++) {
        let currentSymbol = str[i];

        if(openBracketsArray.includes(currentSymbol) && currentSymbol === bracketsPair[currentSymbol]) {
          let topElement = stack[stack.length - 1];
          if(topElement === currentSymbol) {
            stack.pop()
          }
          else {
            stack.push(currentSymbol)
          }
          continue
        }

        if (openBracketsArray.includes(currentSymbol)) {
          stack.push(currentSymbol)
          console.log('stack', stack)

        } else {
          if (stack.length === 0) {
            return false;
          }
          console.log('stack.push-', stack)

          let topElement = stack[stack.length - 1];
          console.log('bracketsPair[currentSymbol]-', bracketsPair[currentSymbol])
          console.log('currentSymbol-', currentSymbol)
          if (bracketsPair[currentSymbol] === topElement) {
              stack.pop();
              console.log('stack.pop- ',stack)
          } else {
            return false
          }
        }
  }
  return stack.length === 0;

  }

// console.log(check('||', [['(', ')'], ['|', '|']]))
// true