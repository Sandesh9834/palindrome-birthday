var birthDayInput = document.querySelector("#birth-date");
var btnCheck = document.querySelector("#btn-check");
var displayResult = document.querySelector("#output");

function clickHandler() {
  var bdayString = birthDayInput.value;

  if (bdayString !== "") {
    var date = bdayString.split("-");
    var yyyy = date[0];
    var mm = date[1];
    var dd = date[2];

    var date = {
      day: Number(dd),
      month: Number(mm),
      year: Number(yyyy),
    };

    var isPalindrome = false;
    var dateStr = getDateAsString(date);
    var list = checkPalindromeForAllDateFormats(dateStr);

    for (let i = 0; i < list.length; i++) {
      if (list[i]) {
        isPalindrome = true;
        break;
      }
    }

    if (!isPalindrome) 
    {
      displayResult.innerText = "Oops! Your birthday is not palindrome!";
    } 
    else 
    {
      displayResult.innerText = "Yay! Your birthday is palindrome!";
    }
  }
  else
  {
    displayResult.innerText = "Enter your birthdate to check palindrome"
  }
}

function reverseString(str) 
{
  var listOfChars = str.split("");
  var reversedListOfChar = listOfChars.reverse();
  var reversedString = reversedListOfChar.join("");
  return reversedString;
}

function isStringPalindrome(str) 
{
  var reversedString = reverseString(str);
  return str === reversedString;
}

function getDateAsString(date) 
{
  var dateInStr = { day: "", month: "", year: "" };

  if (date.day < 10) 
  {
    dateInStr.day = "0" + date.day;
  } else 
  {
    dateInStr.day = date.day.toString();
  }

  if (date.month < 10) 
  {
    dateInStr.month = "0" + date.month;
  } 
  else 
  {
    dateInStr.month = date.month.toString();
  }

  dateInStr.year = date.year.toString();
  return dateInStr;
}

function getDateInAllFormats(date) 
{
  var ddmmyyyy = date.day + date.month + date.year;
  var mmddyyyy = date.month + date.day + date.year;

  return [ddmmyyyy, mmddyyyy];
}

function checkPalindromeForAllDateFormats(date) 
{
  var dateFormatList = getDateInAllFormats(date);
  var palindromeList = [];

  for (var i = 0; i < dateFormatList.length; i++) 
  {
    var result = isStringPalindrome(dateFormatList[i]);
    palindromeList.push(result);
  }
  return palindromeList;
}

btnCheck.addEventListener("click", clickHandler);