import java.util.*;

public class RomanNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Roman Number : ");
        String romanNumeral = sc.next(); 
        int num = romanToInt(romanNumeral);
        System.out.println("The integer for - " + romanNumeral + " = " + num);
    }

    public static int romanToInt(String s) {
        int num = 0;
        int prev = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char c = s.charAt(i);
            int n = 0;

            switch (c) {
                case 'I':
                    n = 1;
                    break;
                case 'V':
                    n = 5;
                    break;
                case 'X':
                    n = 10;
                    break;
                case 'L':
                    n = 50;
                    break;
                case 'C':
                    n = 100;
                    break;
                case 'D':
                    n = 500;
                    break;
                case 'M':
                    n = 1000;
                    break;
            }

            if (n < prev) {
                num -= n;
            } else {
                num += n;
            }

            prev = n;
        }

        return num;
    }
}
