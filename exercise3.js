function sumOfnums(int1,int2){
    if (int1 !=0 && int2!=0){
        if(int1===int2) {
            tripledVal=3 * (int1+int2);
            console.log(tripledVal)
        }
        else{
            sum=int1+int2;
            console.log(sum)

        }
        
    }
    else{
        console.log("enter a number greater than Zero")
    }
}

sumOfnums(2,3)
sumOfnums(3,3)

//Exercise 2

function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const Guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (Guess === randomNumber) {
      alert("Good Work!");
    } else {
      alert("Not matched!");
    }
}
guessNumber()

//Exercise 3

function numchecker(int1, int2) {
    return (int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99);
}
const result = numchecker(20, 40);
console.log(result);

//Exercise 4

function closestNum(int1,int2){
    if (int1!= int2){
        difference1= 100-int1;
        difference2= 100-int2;
        if ( difference1 < difference2 ){
            console.log(int1 + " " + "is closer to 100");
        }
        else{
            console.log(int2 +" " +"is closer to 100");
        }
    }

}
closestNum(40,20);