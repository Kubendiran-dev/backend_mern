function getDay(num) {
  switch (num) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return "Invalid input";
  }
}


getDay(3); 
getDay(9); 


function getName(firstName, lastName, nickname) {
  if (firstName && lastName) {
    return firstName + " " + lastName;
  }

  if (firstName) {
    return firstName;
  }

  if (nickname) {
    return nickname;
  }

  return "Anonymous";
}


getName("Abi", "Raj");      
getName("Abi", "");         
getName("", "", "Rocky");   
getName("", "", "");        


function fixWithLet() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}


function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5); // 10
triple(5); // 15

