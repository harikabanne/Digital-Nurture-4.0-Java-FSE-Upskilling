import java.util.Scanner;

public class PalindromeChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();

        String cleaned = input.replaceAll("[^A-Za-z0-9]", "").toLowerCase();
        String reversed = new StringBuilder(cleaned).reverse().toString();

        if (cleaned.equals(reversed)) {
            System.out.println("Palindrome");
        } else {
            System.out.println("Not a palindrome");
        }

        scanner.close();
    }
}
