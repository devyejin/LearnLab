package org.example;

public class Rectangle {

    //모든 사각형은 각 4개를 갖음, static member로 class가 소유
    static int angelCount = 4;
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