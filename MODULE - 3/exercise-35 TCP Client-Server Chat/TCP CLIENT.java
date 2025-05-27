import java.net.*;
import java.io.*;

public class Client {
    public static void main(String[] args) throws IOException {
        Socket s = new Socket("localhost", 1234);
        PrintWriter pw = new PrintWriter(s.getOutputStream(), true);
        pw.println("Hello Server!");
        s.close();
    }
}
