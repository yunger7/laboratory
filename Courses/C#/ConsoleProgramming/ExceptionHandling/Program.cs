Console.WriteLine("Enter the first number: ");
int num1 = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Enter the second number: ");
int num2 = Convert.ToInt32(Console.ReadLine());

try
{
    int quotient = num1 / num2;
    Console.WriteLine("The result is " + quotient);
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"Illegal operation: {ex.Message}");
}
catch (Exception ex)
{
    throw ex;
}
finally
{
    Console.WriteLine("Program ended");
}