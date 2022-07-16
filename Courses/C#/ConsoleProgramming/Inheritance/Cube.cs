public class Cube : Shape, IShape
{
    public Cube(double width, double height, double length)
    {
        Width = width;
        Height = height;
        Length = length;
    }

    public double Length { get; set; }

    public double GetArea()
    {
        return Width * Height;
    }

    public double getVolume()
    {
        return Width * Height * Length;
    }
}