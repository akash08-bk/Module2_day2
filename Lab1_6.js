//functions
function linefunction(){
    console.log("----------------------------------------------");
}
linefunction()
//we use return functiin when we are passing the return value
function add(){
    return 3
}
function add1(){
    var a=add()
    return a+3
}
function result(){
    var b =add1()
    console.log("result",b);
    }
result()
function addition(num1,num2){
    return num1+num2
}
addition(8,2)
function result(){
    var a= addition()
    console.log(a);
}
result()