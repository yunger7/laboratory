// Declare fixed size array
int[] grades = new int[3];

// Add values to fixed size array
grades[0] = 12;
grades[1] = 54;
grades[2] = 42;

// Print values in fixed size array
for (int i = 0; i < grades.Length; i++)
{
    Console.Write("Enter grade: ");
    grades[i] = Convert.ToInt32(Console.ReadLine());
}

Console.WriteLine("The grades you have entered are: ");
for (int i = 0; i < grades.Length; i++)
{
    Console.WriteLine(grades[i]);
}

// Declare variable size array
string[] studentNames = new string[] {"Student 1", "Student 2", "Student 3"};

