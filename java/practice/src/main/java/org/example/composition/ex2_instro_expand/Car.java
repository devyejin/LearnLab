package org.example.composition.ex2_instro_expand;

//Car는 속도를 가지고 있음
public class Car implements Tool {
    private String model;
    private Engine engine; // 컴포지션
    public int speed;

    public Car() {}

    public Car(String model, Engine engine) {
        this.model = model;
        this.engine = engine;
        this.speed = 0;
    }

    public void speedUp() {
        int amount = engine.horsePower; // Car의 speed는 Engine의 horsepower에 의존
        speed += amount;
        System.out.println("현재 속도는! : " + speed);
    }

    @Override
    public void use() {
        speedUp();
    }
}
