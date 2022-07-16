Console.Write("Enter width: ");
double width = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter height: ");
double height = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter length: ");
double length= Convert.ToDouble(Console.ReadLine());

//var cube = new Cube() { Width = width, Height = height, Length = length };
var cube = new Cube(width, height, length);
var triangle = new Triangle() { Width = width, Height = height, Hypotenuse = 10 };
var rectangle = new Rectangle() { Width = width, Height = height };

Console.WriteLine();

Console.WriteLine("Cube area: " + cube.GetArea());
Console.WriteLine("Cube volume: " + cube.getVolume());

Console.WriteLine("Triangle area: " + triangle.GetArea());

Console.WriteLine("Rectangle area: " + rectangle.GetArea());
