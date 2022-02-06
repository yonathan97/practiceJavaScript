// Grade calculator

function gradeCalculator (Grade)
{

    if (Grade<50)
    {
        return "F"
    }
    else if( Grade <60)
    {
        return "D"
    }
    else if (Grade<70)
    {
        return "C"
    }
    else if(Grade <80)
    {
        return "B"
    }
    else{
        return "A"
    }

}
var answer = "";
function swithGrade (Grade)
{
    switch(Grade){
        case 20 :
            answer = "you dumb";
            break;
        case 30 :
            answer = "kinda dumb";
            break;
        case 80:
            answer = "you did good";
            break;

        default :
            answer =" we dont got that kind of grade";
            break;
    }
    return answer
}

console.log(gradeCalculator(79));
console.log(swithGrade("estf"));
