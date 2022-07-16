// Declare strings
List<string> names = new List<string>();
string name = string.Empty;

// Add values
// names[0] = "Holo";
names.Add("Holo");
names.Remove("Holo");

while (!name.Equals("-1"))
{
    Console.Write("Enter name: ");
    name = Console.ReadLine();
    
    if (!string.IsNullOrEmpty(name) && !name.Equals("-1"))
    {
        names.Add(name);
        Console.WriteLine($"{name} was added successfully");
    }
}

Console.WriteLine("You have inserted the following names");

//for (int i = 0; i < names.Count; i++)
//{
//    Console.WriteLine(names[i]);
//}

foreach (string item in names)
{
    Console.WriteLine(item);
}
