package org.example.interfaceprac;

//고양이한테는 특정한 기능이 추가됨!
//고양이는 Grr하는 기능 추가! => 인터페이스
public class Cat extends Animal implements Grrable{


    public Cat(String name, int age) {
        super(name, age);
    }

    @Override
    void makeSound() {
        System.out.println("mew mew mew mew mew mew mew mew mew mew");
    }

    @Override
    public void grr() {
        System.out.println("Grr Grr Grr Grr Grr Grr");
    }
}
