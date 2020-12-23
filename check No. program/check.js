function testing(a,b)
{
    if (a===50 || b===50 || a+b===50) 
    {
        return true;
    } 
    else 
    {
        return false;
    }
} 
var a=+prompt('Enter 1 number');
var b=+prompt('Enter 2 number ');
document.write(testing(a,b));