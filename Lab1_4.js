// == is a operator used for equal signs.
//and signs like >= ie greater than or equal,
//<= less than or equal to
//== sign checks only for value , but in 
// === sign it checks for value , data type also an example is given below
/*var age1 = 20;
var age2="20"
if( age1 === age2){
console.log("eligible");

}else{
    console.log("not elligible");
    
}*/

/*
Template literals => advance way of printing 
eg: 
var one=1;
var name="akash";
const size = false;
console.log(`name is ${ name} \n age is ${ one}`);
*/
/*var age = 20;
if( age >= 18){
    console.log("Eligible to vote");
    if( age >= 65){
        console.log("not Eligible to vote");
    }   
}else{
    console.log("Not Eligible to vote"); 
} */

    //switch cases => where we can test or show information based on 
    //multiple conditions.

    var month="feb"
    var wheather
    switch(month)
   {
        case "jan" : 
        wheather = "winter";
        break;
        case "feb":
        wheather = "winter";
        break;
        case "march":
            wheather = "winter";
            break;
        case "april":
            wheather = "summer";
            break;
        case "may":
            wheather = "summer";
            break;
        case "june":
            wheather = "summer";
            break;
         case "july":
             wheather = "monsoon";
            break;
        case "august":
             wheather = "monsoon";
            break;
        case "september":
             wheather = "monsoon";
               break;
        case "oct":
            wheather = "post monsoon";
            break;
        case "nov":
             wheather = "post monsoon";
            break;
        case "dec":
            wheather = "post monsson";
             break;
        default:
            wheather = "no data"

    } 
    console.log(wheather);
    