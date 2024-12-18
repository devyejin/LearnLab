package org.example.interfaceprac.library;

public class Book extends Material implements LocationProvider {

    // 청구기호
    private final String callNumber;

    public Book(String title, String callNumber) {
        super(title, MaterialType.BOOK);
        this.callNumber = callNumber;
    }

    @Override
    public void findLocation() {
        System.out.println("책 위치 정보 : " + callNumber);
    }

    @Override
    public void showInfo() {
        super.showInfo();
        System.out.println("callNumber = " + callNumber);
    }
}
