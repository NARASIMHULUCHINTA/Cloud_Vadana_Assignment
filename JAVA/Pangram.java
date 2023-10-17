import java.util.*;

class Pangram {
	public static void Pangram(String str)
	{
		str = str.toLowerCase();
		boolean alphabets = true;
		for (char ch = 'a'; ch <= 'z'; ch++) {
			if (!str.contains(String.valueOf(ch))) {
				alphabets = false;
				break;
			}
		}
		if (alphabets)
			System.out.println("It is Pangram");
		else
			System.out.println("It is not a Pangram");
	}

	
	public static void main(String args[])
	{
		Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence to check it is a pangram or not : ");
		String str = sc.next();
		Pangram(str);
	}
}
