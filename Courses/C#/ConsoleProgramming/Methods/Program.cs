/*
 * Prototype, Definition, Call
 * 
 * DRY - Don't Repeat Yourself
 * YAGNI - You Aren't Gonna Need It
 * KISS - Keep It Simple, Stupid
 */

// Void functions
void PrintName()
{
    Console.WriteLine("Shaolin");
}

PrintName();
PrintName();
PrintName();

void Addition(int n1, int n2)
{
    Console.WriteLine($"The sum of {n1} and {n2} is {n1 + n2}");
}

Addition(11, 31);
Addition(40, 2);

// Value returning functions
int LargestNumber(int n1, int n2, int n3)
{
    int largest = n1;

    if (largest < n2)
    {
        largest = n2;
    }

    if (largest < n3)
    {
        largest = n3;
    }

    return largest;
}

int largest1 = LargestNumber(1, 10, 3);
int largest2 = LargestNumber(11, 1, 2);

Console.WriteLine(largest1);
Console.WriteLine(largest2);
