Person person = new(); // Person person = new Person();

Console.Write("Enter first name: ");
person.FirstName = Console.ReadLine();

Console.Write("Enter middle name (optional): ");
string middleName = Console.ReadLine();

Console.Write("Enter last name: ");
person.LastName = Console.ReadLine();

Console.Write("Enter age: ");
person.Age = Convert.ToInt32(Console.ReadLine());

Console.Write("Enger salary: ");
double salary = Convert.ToDouble(Console.ReadLine());

person.setSalary(salary);

if (string.IsNullOrEmpty(middleName))
{
    Console.WriteLine("Full name is: " + person.getFullName());
}
else
{
    Console.WriteLine("Full name is: " + person.getFullName(middleName));
}

//Console.WriteLine("First name is: " + person.FirstName);
//Console.WriteLine("Last name is: " + person.LastName);
//Console.WriteLine("Full name is: " + person.getFullName());
Console.WriteLine("Age is: " + person.Age);
Console.WriteLine("Salary is: " + person.getSalary());
//Console.WriteLine("Your year of birth is: " + person.getYearOfBirth());
Console.WriteLine("Your year of birth is: " + DateUtil.YearOfBirth(person.Age));