package org.example.interfaceprac;

public class Main {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle();
        System.out.println(rectangle.calculateArea());

        Triangle triangle = new Triangle();
        System.out.println(triangle.calculateArea());

        System.out.println("***** Animal *******");
        //추상 클래스는 생성 불가
//        new Animal(); // 'Animal' is abstract; cannot be instantiated
        Dog star = new Dog("start", 10, "puddle");
        star.makeSound();

        Cat cat = new Cat("cat", 3);
        cat.makeSound();

        makeThemSound(star);
        makeThemSound(cat);

        cat.grr();

    }

    //강아지를 울게 시키는 기능
//    public static void makeThemSound(Dog dog) {
//        System.out.println("cry cry");
//        dog.makeSound();
//    }
//
//    //동물들을 울게 시키는 기능
//    //방법1. 오버로딩 (원하는 방법이 아님)
//    public static void makeThemSound(Cat cat) {
//        System.out.println("cry cry");
//        cat.makeSound();
//    }

    //방법2. 확장성을 갖도록! (다형성) 동물이면 누구나 울게 할 수 있음!
    public static void makeThemSound(Animal animal) {
        System.out.println("cry cry");
        animal.makeSound();
    }
}
