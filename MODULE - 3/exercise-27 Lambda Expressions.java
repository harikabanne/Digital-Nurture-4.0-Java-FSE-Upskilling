import java.util.*;

public class LambdaSort {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Banana", "Apple", "Mango");
        list.sort((s1, s2) -> s1.compareTo(s2));

        System.out.println("Sorted list:");
        list.forEach(System.out::println);
    }
}
