package org.example.instancestatic;

public class Main {
    public static void main(String[] args) {
        Student yejin = new Student("yejin", 10);
        yejin.introduce();
        yejin.sayHi();

        System.out.println();
        Person yejin2 = new Student("yejin2", 10);
        yejin2.introduce();
        yejin2.sayHi();
    }
}
