package org.example;

public class Dog {
    static int count;
    private String name;
    private String breed;

    public void seatDown() {
        System.out.printf("%s is sited", this.name);
    }

    public void bark() {
        System.out.printf("%s wal wal", this.name);
    }

    //생각을 하면서 만들어야 한다. (내가 이 기능을 왜 만드는지!)
    //input : void / output : 손을 출력할거야 / return : nothing
    public void hand() {
        System.out.println("here, hand");
    }

    public Dog(String name, String breed) {
        this.name = name;
        this.breed = breed;
        count ++; // Dog가 생성될 때 마다 개체수가 증가
    }
}
