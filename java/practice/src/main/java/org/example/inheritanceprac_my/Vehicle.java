//package org.example.inheritanceprac2;
////- 모델명, 속도, 연료량을 갖는 Vehicle 클래스를 구현하시오.
////    - 속도 관련 기능을 구현하시오
////    - 최대 연료량은 100입니다
//
//// 달릴 때, speed의 특정 % 만큼 연료를 소모한다고 가정 (default는 10%라 가정)
//
//// MAX_FUEL의 경우, 모든 Vehicle이 같고, 100으로 고정이므로 static final로 선언
//public class Vehicle {
//    protected String model;
//    protected int speed;
//    protected static final double MAX_FUEL; //최대 연료량
//    protected double curFuelAmount; //현재 남아있는 연료량
//    //속도에 따른 연료 소모량
//    protected double fuelConsumptionRatio;
//
//
//    protected Vehicle(String model, int speed, double curFuelAmount, double fuelConsumptionRatio) {
//        this.model = model;
//        this.speed = speed;
//        this.curFuelAmount = curFuelAmount;
//        this.fuelConsumptionRatio = fuelConsumptionRatio;
//    }
//
//    /**
//     * 기본 최대 연료량 : 100, 기본 연료 소모량 : speed의 10%
//     * @param model
//     */
//    protected Vehicle(String model) {
//        this(model, 0, 100, 100, 0.1);
//    }
//
//    protected Vehicle(String model, double maxFuelAmount) {
//        this(model, 0, maxFuelAmount, maxFuelAmount, 0.1 );
//    }
//
//    protected  Vehicle() {}
//
//
//    public static Vehicle newVehicle(String model) {
//       return Vehicle.newVehicle(model, 100);
//    }
//
//    public static Vehicle newVehicle(String model, double maxFuelAmount) {
//        return new Vehicle(model,maxFuelAmount);
//    }
//
//
//
//    //속도 관련 기능
//    /**
//     * 현재 속도를 보여준다.
//     * @return
//     */
//    public void showCurSpeed() {
//        System.out.println("현재 속도 " + speed);
//    }
//
//    /**
//     * 속도를 10만큼 높인다.
//     */
//    public void speedUp() {
//        speed += 10;
//    }
//
//    /**
//     * 속도를 10만큼 낮춘다.
//     */
//    public void speedDown() {
//        speed -= 10;
//    }
//
//    /**
//     * 현재 연료량을 보여준다.
//     */
//    public void showCurFuelAmount() {
//        System.out.printf("현재 남은 연료량 : %f\n",  curFuelAmount);
//    }
//
//    /**
//     * 달릴때 마다 연료가 소모된다.
//     */
//    public void run() {
//        //달릴 만큼의 연료가 남아있는지를 확인한다.
//        if(!isFuelSufficient()) {
//            System.out.println("연료가 부족합니다.");
//            showCurFuelAmount();
//        } else {
//            //달린다.
//            System.out.println("run~~~!");
//            //연료를 소모한다.
//            consumeFuel();
//            showCurFuelAmount();
//        }
//
//    }
//
//    /**
//     * 자동차 전원을 켠다.
//     * - 기본 speed를 10으로 잡는다.
//     */
//    public void startEngin() {
//        speed = 10;
//    }
//
//    /**
//     * 현재 연료량이 연료 소모량보다 큰지 확인한다.
//     * 연료 소모량 : speed * 비율 이라 가정
//     * @return
//     */
//    private boolean isFuelSufficient() {
//        double fuelConsumptionAmount = calcFuelConsumption();
//        return curFuelAmount >= fuelConsumptionAmount;
//    }
//
//    /**
//     * 연료를 소모한다.
//     */
//    private void consumeFuel() {
//       curFuelAmount -= calcFuelConsumption();
//    }
//
//    /**
//     * 속도에 따른 연료 소모량을 계산한다.
//     */
//    private double calcFuelConsumption() {
//        return speed * fuelConsumptionRatio;
//    }
//
//
//
//}
