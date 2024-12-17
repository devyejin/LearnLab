package org.example.interfaceprac;

//모델명, 속도, 연료량을 갖는 Vehicle 클래스를 구현하시오.
//- 속도 관련 기능을 구현하시오
//- 최대 연료량은 100입니다
public abstract class Vehicle {
    private String modelName;
    private int speed;
    private int currentFuel; // 연료
    private static final int FUEL_CAPACITY = 100; //연료량

    //추상 클래스는 인스턴스를 만들 수는 없지만 생성자는 가질 수 있다.
    public Vehicle(String modelName) {
        this.modelName = modelName;
        this.speed = 0;
        this.currentFuel = FUEL_CAPACITY;
    }

    //속도 관련 기능(공통)
    public void increaseSpeed(int amount) {
        speed += amount;
    }
    public void decreaseSpeed(int amount) {
        speed -= amount;
    }


}
