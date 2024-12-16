package org.example.inheritanceprac_my;

import java.security.interfaces.RSAMultiPrimePrivateCrtKey;
import java.util.PrimitiveIterator;

//- 이름, 레벨, 체력을 갖는 Character 클래스를 구현하시오
//    - 레벨은 1부터 시작합니다
//    - 기본 공격 기능을 구현하시오 (단순 출력)
//    - 레벨업 기능을 구현하시오 (exp가 100을 넘을 때 마다 level up을 한다)
public class Character {
    protected String name;
    protected int level;
    //상속받는 Warrior, Mage의 경우 level업 할 때 마다 변경되는데 픽스되는게 맞는가
    //우선 안해야징
    protected int max_hp;
    protected int curHp;
    protected int exp;
    private static final int MAX_EXP = 100;
    protected double expDelta;

    /**
     * 기본 체력은 100, 레벨은 1로 설정한다.
     * @param name
     */
    public Character(String name) {
        this(name, 1, 100, 100);
    }

    public Character(String name, int max_hp) {
        this(name, 1, max_hp, max_hp);
    }

    public Character(String name, int level, int max_hp, int curHp) {
        this.name = name;
        this.level = level;
        this.max_hp = max_hp;
        this.curHp = curHp;
        this.expDelta = 10;
    }

    public Character() {}

    /**
     * level up
     * Character의 경우, 레벨업을 해도 HP가 증가하지 않는다.
     */
    protected void levelUp(int remainExp) {
        level ++;
        exp = remainExp; //경험치 초기화
        System.out.println("레벨 업!!!");
        System.out.printf("현재 레벨 : %d, 경험치 : %d\n", level, exp);

        //max_hp 증가
        int expandMaxHpGap = calculateMapHPGap();
        max_hp += expandMaxHpGap;
        curHp = max_hp; // 최신화

        //exp 증가 폭 증가
        expDelta += level * 0.1;

        System.out.printf("max hp : %d\n, 현재 hp : %d\n  ", max_hp, curHp);
    }

    /**
     * 레벨업 시 증가시킬 Max_Hp Gap을 반환한다.
     * @return
     */
    protected int calculateMapHPGap() {
        return 0;
    }

    /**
     * MaxHp를 gap 만큼 늘린다.
     * @return
     */
    protected void expandMaxHP(int gap) {
        max_hp += gap;
    }

    /**
     * 기본 공격 기능
     * 피해자 : 10만큼 HP를 감소시킨다.
     * 공격자 : 10만큼 경험치를 증가시킨다.
     */
    public void attack(Character target) {
        System.out.println("attack!");
        System.out.printf("공격자 : %s, 피해자 : %s\n", name, target.name);

        upExp(10);
        target.curHp -= 10;
        System.out.printf("공격자 경험치 : %d, 피해자 hp : %d\n", this.exp, target.curHp);
    }

    /**
     * exp가 100을 넘으면 levelUp을 한다.
     * @param amount
     */
    public void upExp(int amount) {
        exp += amount;

        if (exp >= MAX_EXP) {
            int remainExp = exp - MAX_EXP;
            levelUp(remainExp);
        }
    }

    public void showCurHp() {
        System.out.printf("현재 hp : %d\n", curHp);
    }

    public void showCurLevel() {
        System.out.printf("현재 level : %d\n", level);
    }

    @Override
    public String toString() {
        return "Character{" +
                "name='" + name + '\'' +
                ", level=" + level +
                ", max_hp=" + max_hp +
                ", curHp=" + curHp +
                '}';
    }
}
