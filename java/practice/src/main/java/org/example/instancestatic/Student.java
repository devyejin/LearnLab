package org.example.instancestatic;

public class Student extends Person {

    private String major;

    public Student(String name, int age) {
        super(name, age);
        major = "math";
    }

    @Override
    public void introduce() {
        super.introduce();
        System.out.println("제 전공은 " + this.major + "입니다잉");
    }

    //static method의 경우 오버라이드가 불가능!
    //자식 클래스에서 동일한 이름으로 static 메서드를 선언할 수 있지만, 재정의가 아닌 별개의 메서드!
    public static void sayHi() {
        System.out.println("student hi!");
    }
}
