package org.example.interfaceprac;

public class Brucks extends Vehicle implements PassengerManageable, LoadManageable {

    private static final int FUEL_CAPACITY = 1000;

    private static final int LOAD_CAPACITY = 200;
    private int loadCount;

    private static final int PASSENGER_CAPACITY = 20;
    private int passengerCount;

    public Brucks(String modelName) {
        super(modelName);
        this.loadCount = 0;
        this.passengerCount = 0;
    }

    @Override
    public void load(int amount) {
        loadCount += amount;
        System.out.println("Brucks.load");
        System.out.println("loadCount = " + loadCount);
    }

    @Override
    public void unload(int amount) {
        loadCount -= amount;
        System.out.println("Brucks.unload");
        System.out.println("loadCount = " + loadCount);
    }

    @Override
    public void boardPassenger(int passengerCount) {
        this.passengerCount += passengerCount;
        System.out.println("Brucks.boardPassenger");
        System.out.println("this.passengerCount = " + this.passengerCount);
    }

    @Override
    public void getOffPassenger(int passengerCount) {
        this.passengerCount -= passengerCount;
        System.out.println("Brucks.getOffPassenger");
        System.out.println("this.passengerCount = " + this.passengerCount);
    }
}
