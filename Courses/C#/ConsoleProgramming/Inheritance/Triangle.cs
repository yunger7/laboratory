public class Triangle : Shape, IShape
{
    public double Hypotenuse { get; set; }

    public double GetArea()
    {
        return .5 * Width * Height;
    }
}