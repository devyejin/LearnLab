package org.example;

public class Person {
    private String name;
    private int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // 오버라이딩
    // 생성자의 경우, 인스턴스가 생성되기 전에 실행되기 때문에 가리킬 필요가 존재한다.
    public Person() {
        this.name = "김나나";
        this.age = 10;
    }

    //인스턴스 메서드의 경우, 인스턴스가 생성된 후 실행되기 때문에 this(인스턴스 자기 자신)을 명시할 필요가 없다.
    public void showPersonInfo() {
        System.out.printf("name : %s\n age : %d\n", name, age);
    }

}
