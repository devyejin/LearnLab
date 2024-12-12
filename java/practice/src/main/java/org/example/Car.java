package org.example;

public class Car {
    private final String model;
    private int velocity;

    public Car(String model) {
        this.model = model;
        this.velocity = 0;
    }

    //올라간 속도값을 return할지, 안할지는 기획사항의 믄제!
    public int sppedUp() {

        this.velocity += 10;
        return this.velocity;
    }

    public int speedUp(int speedDan) {
        this.velocity += 10 * speedDan;
        return this.velocity;
    }

    public int speedUpByAmount(int amount) {
        return this.velocity += amount;

    }

//    public int speedDown(int speedDan) {
//        if (this.velocity == 0) {
//            return this.velocity;
//        }
//
//        this.velocity -= 10 * speedDan;
//        return this.velocity;
//    }
    //위에 코드는 return이 두 번이라 가독성이 좋지 않다고 판단이 되기 때문에 이렇게 처리하기도
    public int speedDown(int speedDan) {
        if (this.velocity != 0) {
            this.velocity -= 10 * speedDan;
        }
        return this.velocity;
    }


    public int speedDown() {
        if (this.velocity >= 10) {
            this.velocity -= 10;
        } else {
            this.velocity = 0;
        }
        return this.velocity;
    }

    //정보를 보여주는 함수니까, getInfo()보다는 showInfo()가 더 좋음
    public void showInfo() {
        System.out.printf("Model Name : %s\n Current Velocity : %d\n", this.model, this.velocity);
    }
}
