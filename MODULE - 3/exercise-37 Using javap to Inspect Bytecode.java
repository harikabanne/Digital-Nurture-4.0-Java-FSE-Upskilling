public class Sample {
    public int square(int x) {
        return x * x;
    }

    public static void main(String[] args) {
        Sample obj = new Sample();
        System.out.println(obj.square(5));
    }
}
