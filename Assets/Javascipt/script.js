// Assignment Code
var generateBtn = document.querySelector("#generate");

// Various Arrays
var LC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var UC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Num = ['1','2','3','4','5','6','7','8','9','0'];
var Sym = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','.','<','>','/','|',];
var FinalParameter = []


function generatePassword() {
  var arrayresult = [];
  var passwordLength = 0;
  while (passwordLength < 8 ||passwordLength> 128|| isNaN(passwordLength)) {
  var passwordLength = prompt("Choose The Length of Your Password Type a number between 8 and 128")} 
  
  var specialcharacters = confirm ("Shall we include special characters?")
  if (specialcharacters) {
    arrayresult = arrayresult.concat(Sym);
        var randomLower = Sym[Math.floor(Math.random() * Sym.length)];
        FinalParameter.push(randomLower)
 }
 
  var lowercasecharacters = confirm ("Shall we include lowercase characters?")
  var uppercasecharacters = confirm ("Shall we include uppercase characters?")
  var numericcharacters = confirm ("Shall we include numeric characters?")
  

 
  if (lowercasecharacters) {
    arrayresult = arrayresult.concat(LC);
    var randomLower = LC[Math.floor(Math.random() * LC.length)];
    FinalParameter.push(randomLower)
  }
  if (uppercasecharacters) {
    arrayresult = arrayresult.concat(UC);
    var randomLower = UC[Math.floor(Math.random() * UC.length)];
    FinalParameter.push(randomLower)
  }
  if (numericcharacters) {
    arrayresult = arrayresult.concat(Num);
    var randomLower = Num[Math.floor(Math.random() * Num.length)];
    FinalParameter.push(randomLower)
  }
  if ( specialcharacters === false &&  lowercasecharacters === false && uppercasecharacters === false &&  numericcharacters === false) {
    alert('You must choose at least one parameter. Please try again.')
    location.reload();
  }

  var arrayresultRandom = ""
  var guaranteedParameters = FinalParameter.join("");
  for (var i = FinalParameter.length; i < passwordLength; i++) {
    arrayresultRandom = arrayresultRandom + arrayresult[Math.floor(Math.random() * arrayresult.length)];
 
  }
  arrayresultRandom += guaranteedParameters;
    return arrayresultRandom;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log (password)
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)