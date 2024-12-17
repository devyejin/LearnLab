package org.example.interfaceprac;

public abstract class Animal {
    protected String name;
    protected int age;

    //추상클래스는 생성자를 가질 수 있다(인스턴스를 만들 수 없을 뿐!)
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    abstract void makeSound();
}
