package org.example.composition.ex1;
//- 색상, 쓰기 기능을 갖는 Pencil 클래스를 구현하시오
//- 이름, Pencile을 갖는 Person 클래스를 구현하시오
//    - write() 메소드를 통해 연필로 쓰기 기능 구현
public class Pencil {
    private String name;
    private String color;

    public Pencil(String name, String color) {
        this.name = name;
        this.color = color;
    }

    public void write() {
        System.out.println(color +  " 펜, 글 작성 작성");
    }

    public String getName() {
        return name;
    }
}
