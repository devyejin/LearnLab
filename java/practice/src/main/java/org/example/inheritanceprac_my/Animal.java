package org.example.inheritanceprac_my;

//- 이름, 나이, 소리내기 기능 갖는 Animal 클래스를 구현하시오.
public class Animal {
    protected String name; // private로 설정하면 자식 클래스에서 직접 접근이 불가, Cat에서 name 필드에 직접 접근하니까 name으로 접근
    private int age;

    public Animal(String name) {
        this.name = name;
    }

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Animal() {}

    public void bark() {
        System.out.println("Bark!!!!");
    }

    public int getAge() {
        return age;
    }

}
