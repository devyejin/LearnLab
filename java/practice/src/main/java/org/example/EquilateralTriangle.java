package org.example;

//정삼각형
public class EquilateralTriangle {

    private final double side;
    private  final double circumference; //둘레를 자주 사용한다면, 속성으로 갖고 있는것도 좋음

    public double caculateArea() {
        return (Math.sqrt(3) / 4) * side * side;
    }

    //둘레의 경우, 변하는 값이 아니니 속성으로 갖고 있어도 되고 메서드로 빼도 좋고
    //서비스 요구사항에 따라 달라진다.
    public double getRadius() {
        return this.side * 3;
    }

    public EquilateralTriangle(double side) {
        this.side = side;
        this.circumference = side * 3;
    }

    public double getCircumference() {
        return this.circumference;
    }
}
