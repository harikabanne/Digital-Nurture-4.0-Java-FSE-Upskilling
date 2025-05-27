// com.utils/module-info.java
module com.utils {
    exports com.utils;
}

// com.utils/Utils.java
package com.utils;
public class Utils {
    public static String greet() {
        return "Hello from Utils";
    }
}

// com.greetings/module-info.java
module com.greetings {
    requires com.utils;
}

// com.greetings/Main.java
package com.greetings;
import com.utils.Utils;
public class Main {
    public static void main(String[] args) {
        System.out.println(Utils.greet());
    }
}
