// If statements (==, <, >, <=. >=, !=)
Console.WriteLine("Enter number of apples: ");
int numOfApples = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Enter number of oranges: ");
int numOfOranges = Convert.ToInt32(Console.ReadLine());

if (numOfApples > numOfOranges)
{
    Console.WriteLine("You have more apples");
}
else if (numOfApples < numOfOranges)
{
    Console.WriteLine("You have more oranges");
}
else
{
    Console.WriteLine("You have the same number of apples and oranges");
}

// Switch statements
Console.WriteLine("Enter your grade: ");
int grade= Convert.ToInt32(Console.ReadLine());

switch (grade)
{
    case 0:
    case 1:
        Console.WriteLine("Pretty sure you failed :/");
        break;
    case int n when n >= 2 && n <= 6:
        Console.WriteLine("Be careful... you might fail");
        break;
    case int n when n > 6 && n < 10:
        Console.WriteLine("You good bro");
        break;
    case 10:
        Console.WriteLine("Congratulations you got a 10!");
        break;
    default:
        Console.WriteLine("Invlaid value");
        break;
}

// Ternary operators
var message = numOfApples > numOfOranges ? "You have more Apples" : "You have more oranges";
Console.WriteLine(message);