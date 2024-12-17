package org.example.interfaceprac;

// 추상 클래스야, 즉 너를 상속받는 다른 클래스들에게 네가 가지고 있는 것들을 구현하도록 강제할거야 => abstract 키워드
public abstract class Shape {
    public int width;
    public int height;

    //추상 메서드, 자식 클래스는 추상 메서드 calculateArea 를 반드시 구현해야 한다.
    public abstract int calculateArea();

    //자식에서 일반 메서드, 필드는 상속받아 사용 가능
    public void printTest() {
        System.out.println("test");
    }
}
