package org.example.interfaceprac;

public class Rectangle extends Shape {
    public int width = 10;
    public int height = 20;

    //추상 클래스의 추상 메서드를 구현(도형마다 Area를 구하는 공식은 다르니까)
    @Override
    public int calculateArea() {
        return width * height;
    }
}
