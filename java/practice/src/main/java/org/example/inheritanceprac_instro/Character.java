package org.example.inheritanceprac_instro;

//캡슐화의 정도 또한 개발자의 선택
//protected가 아닌 private 방식으로 구현 (BankAccount의 경우 protected방식)
public class Character {
    private String name;
    private int level;
    //protected가 아닌 private로 캡슐화 한 후 getter,setter로 변경할 수도 있음(강사님 생각은 라이브러리 개발이 아닌 이상 그정도까지 할 필요는 없다고 봄)
    protected int health;
    protected int maxHealth;

    public Character(String name) {
        this.name = name;
        this.level = 1;
        this.health = 100;
    }

    //기본 공격 기능
    public void attack() {
        System.out.println("attack!");
    }

    //레벨 업
    public void levelUp() {
        level += 1;
        System.out.println("level = " + level);
    }
}
