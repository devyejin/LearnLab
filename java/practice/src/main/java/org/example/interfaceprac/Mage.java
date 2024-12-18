package org.example.interfaceprac;

//- 마나 관련 기능을 추가하시오 (최대 100)
//- 기본 체력은 70입니다
//- 레벨업 시 체력 15 증가
public class Mage extends Character implements ManaManageable {

    private int manaPoint;
    private static final int MAX_MANA_POINT = 100;

//    public Mage(String name, int maxHealthPoint) {
//        super(name, maxHealthPoint);
//    }

    public Mage(String name) {
        super(name, 70);
        this.manaPoint = MAX_MANA_POINT;
    }


    @Override
    public void manaAttack(Character target) {
        System.out.println("mana attack!!!!");
    }

    @Override
    public void manaMethod() {
        System.out.println("mana method!!!!");
    }
}
