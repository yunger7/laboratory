using System.Globalization;

// Empty DateTime
DateTime date = new DateTime();

// Create a DateTime from timestamp
DateTime birthday = new DateTime(2022, 2, 16);
Console.WriteLine("My birthday is " + birthday);
Console.WriteLine("My birthday is: " + birthday.Date);

// Create a DateTime from current timestamp
DateTime now = DateTime.Now;
Console.WriteLine("The current time is: " + now);

// Create a DateTime from a String
DateTime dateFromString = DateTime.Parse("1/31/2022", CultureInfo.InvariantCulture);
Console.WriteLine("The date from string is: " + dateFromString);

// Add additional time
Console.WriteLine("One hour from now will be: " + now.AddHours(1));

// Ticks from DateTime
Console.WriteLine("Time as a numeral: " + now.Ticks);

// Date only
DateOnly dateOnly = DateOnly.FromDateTime(now);
Console.WriteLine("DateOnly: " + dateOnly);

// Time only
TimeOnly timeOnly = TimeOnly.FromDateTime(now);
Console.WriteLine("TimeOnly: " + timeOnly);
