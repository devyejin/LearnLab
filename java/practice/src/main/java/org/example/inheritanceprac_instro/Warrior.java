package org.example.inheritanceprac_instro;

public class Warrior extends Character{
    private int rage;
    // CONSTANCT 클래스나 설정파일로 분리 가능 ( + 기획사항에서 MAX_RAGE가 변경되는 사항이라면 static final로 선언하지 않음)
    private static final int MAX_RAGE = 100;


    public Warrior(String name) {
        super(name);
        this.health = 120; // 'health' has private access라 생성자에서 dot으로 접근 불가, 이런 경우 protected로 변경
        this.maxHealth = 120;
        this.rage = 0;
    }

    @Override
    public void levelUp() {
        super.levelUp();
        maxHealth += 30;
        health += 30;
        // level업시 최대치로 채워줄지 말지는 서비스 기획의 선택
//        health = maxHealth;
    }

    //공격할 때 마다 분노가 쌓이고, 일정 수치 이상이면 추가 공격한다고 가정
    @Override
    public void attack() {
        System.out.println("attack");
        rage += 10;

        if (rage >= 50) {
            System.out.println("rage attack");
        }
    }

    public void rageUp() {
        rage += 50;
    }
}
