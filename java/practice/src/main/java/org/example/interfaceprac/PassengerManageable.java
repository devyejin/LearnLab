package org.example.interfaceprac;
//
//승객 관련 기능
//		- 승객 하차
//		- 승객 탑승
public interface PassengerManageable {

    /**
     * 승객 탑승
     * @param passengerCount
     */
    void boardPassenger(int passengerCount);

    /**
     * 승객 하차
     * @param passengerCount
     */
    void getOffPassenger(int passengerCount);

}
