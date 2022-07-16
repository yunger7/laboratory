public class Rectangle : Shape, IShape
{
    public double GetArea()
    {
        return Width * Height;
    }
}