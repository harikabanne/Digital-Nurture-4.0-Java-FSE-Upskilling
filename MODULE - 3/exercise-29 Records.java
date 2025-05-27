import java.util.*;
import java.util.stream.Collectors;

record Person(String name, int age) {}

public class RecordDemo {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Alice", 22),
            new Person("Bob", 30),
            new Person("Carol", 17)
        );

        List<Person> adults = people.stream()
            .filter(p -> p.age() >= 18)
            .collect(Collectors.toList());

        adults.forEach(System.out::println);
    }
}
