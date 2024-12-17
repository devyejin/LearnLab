package org.example.interfaceprac;

//추상 클래스를 extends(상속) 받으면 반드시 추상 메서드를 반드시 구현해줘야 한다.(일반 클래스와 유일하게 다른점이면서 가장 중요함)
//또는 추상 클래스를 또 다시 추상 클래스로 extends(상속) 받을 수도 있다.
public class Dog extends Animal{
    private String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }

    @Override
    void makeSound() {
        System.out.println("wal wal wal wal");
    }
}
