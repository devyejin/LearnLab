package org.example.interfaceprac;


public class Truck extends Vehicle implements LoadManageable {

    private static final int FUEL_CAPACITY = 250;
    private static final int LOAD_CAPACITY = 200;
    private int loadCount;

    public Truck(String modelName) {
        super(modelName);
        this.loadCount = 0;
    }

    @Override
    public void load(int amount) {
        loadCount += amount;
        System.out.println("Truck.load");
        System.out.println("loadCount = " + loadCount);
    }

    @Override
    public void unload(int amount) {
        loadCount -= amount;
        System.out.println("Truck.unload");
        System.out.println("loadCount = " + loadCount);
    }
}
