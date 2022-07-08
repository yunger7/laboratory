// For (Counter control)
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}

Console.WriteLine("For loop finished");
Console.WriteLine();

// While (Condition control, Pre check)
int n = 0;
while (n != 42)
{
    Console.WriteLine("What is the meaning of life? (numbers only) ");
    n = Convert.ToInt32(Console.ReadLine());
}

Console.WriteLine("For loop finished");
Console.WriteLine();

// Do while (Condition control, post check)
int x = 0;
do
{
    Console.WriteLine("Type a number: ");
    x = Convert.ToInt32(Console.ReadLine());
} while (x < 10);
