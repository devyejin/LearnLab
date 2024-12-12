package org.example;

import java.util.Arrays;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        int value = 3;
        Rectangle[] rectangles = new Rectangle[value];

        Rectangle rectangle1 = new Rectangle(100, 200);
        Rectangle rectangle2 = new Rectangle(5, 10);

        //참조형은 null로 초기화
        System.out.println(Arrays.toString(rectangles)); // [null, null, null]


        rectangles[0] = rectangle1;

        System.out.println(Arrays.toString(rectangles)); // [org.example.Rectangle@2ff4acd0, null, null]
        System.out.println(rectangles[0].calculateArea()); // 20000

        Circle c1 = new Circle(5); //같은 패키지내 클래스는 import 가 필요 없음
        System.out.println(c1.radius);

        //삼각형
        EquilateralTriangle triangle = new EquilateralTriangle(5);
        System.out.println(triangle.caculateArea());
        System.out.println(triangle.getCircumference());

        System.out.println();
        //소수점 자르기 스킬 2자리를 자르고 싶다면 100을 곱하기
        double area = triangle.caculateArea(); // 10.825317547305481
        double trimArea = Math.floor(area * 100) / 100;
        System.out.println(trimArea); // 10.82

        //Car
        System.out.println("********************************************");
        Car avante = new Car("Avante");
        avante.speedUp(3);
        avante.speedDown();
        avante.showInfo();
        avante.sppedUp();
        avante.showInfo();
        avante.speedUpByAmount(100);
        avante.showInfo();


        System.out.println("********************************************");

        MP3Player ipod = new MP3Player("iPod");

        ipod.volumeUp(3);
        ipod.volumeDown();
        ipod.getInfo();

    }
}

class Rectangle {
    int width;
    int height;

    Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    int calculateArea() {
        return width * height;
    }
}