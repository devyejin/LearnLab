//package org.example.inheritanceprac2;
//
////최대 연료량은 300입니다
//public class Bus extends Vehicle{
//    private int curPassenger;
//    private int maxPassengers;
//
//    /**
//     * 기본 정원을 20명으로 설정한다.
//     * @param model
//     */
//    protected Bus(String model) {
//        super(model, 300);
//        maxPassengers = 20;
//    }
//
//    public static Bus newBus(String model) {
//        return new Bus(model);
//    }
//
//    //승객 관련 기능
//    /**
//     * 승객 타승
//     */
//    public void boardPassenger() {
//        curPassenger++;
//    }
//
//    /**
//     * 승객 하차
//     */
//    public void removePassenger() {
//        if (curPassenger > 0) {
//            curPassenger--;
//        } else {
//            System.out.println("하차할 인원이 없습니다.");
//        }
//    }
//
//
//
//}
