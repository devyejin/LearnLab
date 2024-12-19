package org.example.instancestatic;

public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void introduce() {
        System.out.println("안녕하세요. " + this.name + "입니다.");
        System.out.println("나이는 " + this.age + "살 입니다.");
    }

    public static void sayHi() {
        System.out.println("hi!");
    }
}
