package org.example.interfaceprac;

public class Bus extends Vehicle implements PassengerManageable {

    private static final int PASSENGER_CAPACITY = 20;
    private int passengerCount;
    private static final int FUEL_CAPACITY = 300; //필드는 스코프 때문에 부모랑 겹쳐도 자기 자신의 필드를 찾음

    public Bus(String modelName) {
        super(modelName);
        this.passengerCount = 0;
    }

    @Override
    public void boardPassenger(int passengerCount) {
        this.passengerCount += passengerCount;
        System.out.println("Bus.boardPassenger");
        System.out.println("passengerCount = " + this.passengerCount);
    }

    @Override
    public void getOffPassenger(int passengerCount) {
        this.passengerCount -= passengerCount;
        System.out.println("Bus.getOffPassenger");
        System.out.println("passengerCount = " + this.passengerCount);
    }
}
