package org.example.inheritanceprac_my;

//- Animal 클래스를 상속받는  Cat 클래스를 작성하시오.
//        - 소리내기 기능을 오버라이딩하시오.
//    - 골골대는 기능을 추가하시오.
public class Cat extends Animal{


    public Cat(String name) {
        super(name);
    }

    @Override
    public void bark() {
        System.out.printf("%s : Meow Meow", name);
    }

    public void golgolsong() {
        System.out.println("gol gol song~~~~~  ");
    }
}
