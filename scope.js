var globalVariable = 10;

function fun1 ()
{
var localVariable = 12;
}

function fun2()
{
    var output ="";

    if(typeof globalVariable != "undefined")
    {
        output = "global is "+ globalVariable;
        console.log (" the global variable if " + globalVariable);
    }
    if ( typeof localVariable != "undefined")
    {
        output= "this is a local vriable"
        console.log("this is not a global variable");
    }
    return output;
    
}

fun2();




function testValue (values)
{
    if (values ==12)
    {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testValue(12));


