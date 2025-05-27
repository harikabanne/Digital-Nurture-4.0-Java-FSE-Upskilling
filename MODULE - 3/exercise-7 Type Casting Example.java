public class TypeCastingExample {
    public static void main(String[] args) {
        double myDouble = 9.78;
        int myInt = (int) myDouble;  // Explicit casting

        int num = 100;
        double converted = num;  // Implicit casting

        System.out.println("Original double: " + myDouble);
        System.out.println("Converted to int: " + myInt);
        System.out.println("Original int: " + num);
        System.out.println("Converted to double: " + converted);
    }
}
