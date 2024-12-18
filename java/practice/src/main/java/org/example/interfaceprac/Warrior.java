package org.example.interfaceprac;

//- 분노게이지 관련 기능을 추가하시오 (최대 100)
//- 기본 체력은 120입니다
//- 레벨업 시 체력 30 증가
public class Warrior extends Character {

    private int ragePoint;
    private static final int MAX_RAGE_POINT = 100;

//    public Warrior(String name, int maxHealthPoint) {
//        super(name, maxHealthPoint);
//        this.ragePoint = MAX_RAGE_POINT;
//    }

    public Warrior(String name) {
        super(name, 120);
        this.ragePoint = MAX_RAGE_POINT;
//        this(name, 120);
    }

}
