string fullName = string.Empty;
int age = 1;
double salary = 0.0;
char gender = char.MinValue;
bool working = false;

Console.Write("Please enter your name: ");
fullName = Console.ReadLine();

Console.Write("Please enter your age: ");
age = Convert.ToInt32(Console.ReadLine());

Console.Write("Please enter your salary: ");
salary = Convert.ToDouble(Console.ReadLine());

Console.Write("Please enter your gender (M or F): ");
gender = Convert.ToChar(Console.ReadLine());

Console.Write("Are you currently working? (true or false): ");
working = Convert.ToBoolean(Console.ReadLine());

Console.WriteLine("Hello " + fullName); // concatenation
Console.WriteLine("Your age is {0}", age); // args
Console.WriteLine($"Your salary is {salary}"); // interpolation
Console.WriteLine($"Your gender is {gender}");
Console.WriteLine($"You are employed: {working}");