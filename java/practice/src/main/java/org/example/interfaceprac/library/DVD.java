package org.example.interfaceprac.library;

public class DVD extends Material implements LocationProvider{

    //위치정보
    final private String callNumber;

    public DVD(String title, String callNumber) {
        super(title, MaterialType.DVD);
        this.callNumber = callNumber;
    }

    @Override
    public void findLocation() {
        System.out.println("DVD 위치 정보 : " + callNumber);
    }
}
