package org.example;

public class Circle {
//    final private int radius; // private의 경우 같은 클래스 내에서 접근 가능
    int radius; // default는 같은 패키지 내

    public double calclateArea() {
        return 3.14 * Math.pow(radius, 2);
    }

    public Circle(int radius) {
        this.radius = radius;
    }

    public Circle() {
        this.radius = 3;
    }
}
