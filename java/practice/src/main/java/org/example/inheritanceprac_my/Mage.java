package org.example.inheritanceprac_my;
//
//- Character 클래스를 상속받는 Mage 클래스를 작성하시오
//    - 마나 관련 기능을 추가하시오 (최대 100)
//    - 기본 체력은 70입니다
//    - 레벨업 시 체력 15 증가
public class Mage extends Character{

    private int manaLevel;
    private int maxManaLevel;


    /**
     * 기본 체력은 70
     * 마나는 최대 100
     * @param name
     */
    public Mage(String name) {
        super(name, 70);
        this.maxManaLevel = 100;
        this.manaLevel = 100;
    }

    /**
     * 레벨 업 시 체력 15증가
     */
    @Override
    protected int calculateMapHPGap() {
        return 15;
    }

//    TODO : 레벨에 따라 소모되는 마나량으로 변경하기
    /**
     * 마나를 이용한 공격, 
     * 공격자 : 마나 10 소모, 경험치 10 획득
     * 타겟 : hp - 10
     * @return
     */
    public void useManaAttack(Character target) {
        System.out.printf("공격자 : %s, 공격받은 자 : %s\n", name, target.name);

        if (manaLevel < 10) {
            System.out.println("마나가 부족합니다.");
        } else {
            System.out.println("마나를 이용한 공격");
            manaLevel -= 10;
            exp += 10;
            target.curHp -= 10;
            System.out.printf("공격자 마나 소모량 : %d\n, 현재 마나량 : %d\n", 10, manaLevel);
            System.out.printf("공격받은 자 현재 HP : %d\n", target.curHp);
        }
    }



    @Override
    public String toString() {
        return "Mage{" +
                "level=" + level +
                ", max_hp=" + max_hp +
                ", curHp=" + curHp +
                '}';
    }
}
