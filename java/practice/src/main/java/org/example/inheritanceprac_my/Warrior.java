package org.example.inheritanceprac_my;

//- Character 클래스를 상속받는 Warrior 클래스를 작성하시오
//    - 분노게이지 관련 기능을 추가하시오 (최대 100)
//    - 기본 체력은 120입니다
//    - 레벨업 시 체력 30 증가
public class Warrior extends Character{
    //분노 게이지
    private int rageLevel;
    //maxRageLevel의 경우 변화가 없고, Warrior만 갖는 필드이므로 static final로 지정
    private static final int maxRageLevel = 100;


    /**
     * 기본 체력은 120, 레벨은 1로 설정한다.
     *
     * @param name
     */
    public Warrior(String name) {
       super(name, 120);
       this.rageLevel = 100;
    }

    /**
     * 레벨업 시 체력 30 증가
     * 현재 체력도 최대치로 업데이트
     */
//    @Override
//    public void levelUp() {
//        //레벨 업
//        super.levelUp();
//        //체력 증가
//        expandMaxHP(30);
//        curHp = max_hp;
//        System.out.printf("max hp : %d\n, 현재 hp : %d\n  ", max_hp, curHp);
//
//    }


    @Override
    protected int calculateMapHPGap() {
        return 30;
    }

    //TODO : 소모량 필드로 분리하기
    /**
     * 분노 게이지를 이용한 공격
     * 스킬을 사용하면 분노게이지가 30만큼 소모된다.
     */
    public void useRageSkillAttack(Character target) {
        if (rageLevel < 30) {
            System.out.println("분노 게이지가 부족합니다.");
        } else {
            System.out.println("분노 게이지 사용한 공격 ");
            System.out.printf("공격자 : %s, 공격 받은 자 : %s\n", name, target.name);

            rageLevel -= 30;
            this.exp += 30;
            target.curHp -= 30;
            System.out.printf("*공격자*  현재 경험치 : %d, 현재 남은 분노 게이지 : %d\n", exp, rageLevel);
            System.out.printf("*공격 받은 자*  현재 HP : %d\n", target.curHp);
        }


    }

    // 인스턴스 자신이 갖고 있는 필드에 접근할 때는 굳이 getter, setter할 필요 없다.
//    private int getRageLevel() {
//        return rageLevel;
//    }


    @Override
    public String toString() {
        return "Warrior{" +
                "rageLevel=" + rageLevel +
                ", level=" + level +
                ", max_hp=" + max_hp +
                ", curHp=" + curHp +
                '}';
    }
}
