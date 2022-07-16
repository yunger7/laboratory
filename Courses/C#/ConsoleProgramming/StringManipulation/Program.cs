Console.Write("Type your first name: ");
string firstName = Console.ReadLine();

Console.Write("Type your last name: ");
string lastName = Console.ReadLine();

// Concatenation
Console.WriteLine(firstName + " " + lastName);
Console.WriteLine($"Your full name is {lastName}, {firstName}");
Console.WriteLine("Your full name is {0}, {1}", lastName, firstName);

// String length
int length = firstName.Length + lastName.Length;
Console.WriteLine($"Your name has {length} letters");

// Replace string parts
string newName = firstName.Replace('a', 'o');
Console.WriteLine("Your new name is ", newName);

// Split string
string[] splitName = firstName.Split('o');
for (int i = 0; i < splitName.Length; i++)
{
    Console.WriteLine(splitName[i]);
}

// Compare strings
string nullString = null;
string emptyString = ""; // string.Empty
string whitespaceString = " ";

if (string.IsNullOrEmpty(emptyString))
{
    Console.WriteLine("Null or empty");
}

if (firstName == lastName)
{
    Console.WriteLine("Names are equal");
}

// Convert to string
string convertedString = string.Empty;
int number = 123456;

convertedString = number.ToString();
convertedString = 789.ToString();
