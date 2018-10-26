function check(account){
  if(isNaN(account)){
    console.log(account + " is not a number");
    return false;
  }
  var sum = 0;
  var checkSum = account[account.length-1];
  for(var i = account.length-1; i >= 0; i--){

     if(i % 2 != 0){
        var multiply = account[i] * 2;
        if(multiply > 9){
          sum += multiply - 9;
        }
        else{
          sum += multiply;
        }
    }
    else{
      sum += parseInt(account[i]);
    }
  }
  console.log(sum % 10 === 0 ? account + " is a valid number" : account + " is not a valid number");
  return sum % 10 === 0 ;
}

module.exports = check;


// console.log(check('79927398713'));
// console.log(check('79927398705'));
// console.log(check('7a927398711'));
// console.log(check('79927398712'));
// console.log(check('79927398714'));
// console.log(check('79927398715'));
// console.log(check('79927398717'));
// console.log(check('79927398716'));
// console.log(check('79927398718'));
// console.log(check('79927398719'));