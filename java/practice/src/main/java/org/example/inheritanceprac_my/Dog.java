package org.example.inheritanceprac_my;

//- Animal 클래스를 상속받는 Dog 클래스를 작성하시오.
//        - 소리내기 기능을 오버라이딩 하시오.
//        - 품종 변수를 추가하시오.
public class Dog extends Animal{
    private String breed;

    public Dog(String name, String breed) {
        super(name);
        this.breed = breed;
    }

    public Dog(String name) {
        super(name);
    }

    @Override
    public void bark() {
        System.out.println("wal wal");
    }

    public void showName() {
        System.out.println();
    }

}
