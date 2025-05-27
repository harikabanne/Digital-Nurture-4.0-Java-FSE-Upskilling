class InvalidAgeException extends Exception {
    public InvalidAgeException(String msg) {
        super(msg);
    }
}

public class AgeCheck {
    public static void main(String[] args) {
        int age = 16;
        try {
            if (age < 18)
                throw new InvalidAgeException("Age must be at least 18.");
            else
                System.out.println("Valid age.");
        } catch (InvalidAgeException e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }
    }
}
