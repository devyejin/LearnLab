package org.example.interfaceprac;

public abstract class Character {
    protected String name;
    protected int level;
    protected int healthPoint;
    //레벨 업 시 체력이 증가하므로 각 개별 인스턴스가 가져야 한다 -> 인스턴스 변수
    protected int maxHealthPoint;

    protected int experiencePoint;


    public Character(String name, int maxHealthPoint) {
        this.name = name;
        this.level = 1;
        this.maxHealthPoint = maxHealthPoint;
        this.healthPoint = maxHealthPoint;
    }

     public void attack(Character target) {
         System.out.println("공격!");
         System.out.printf("공격자 : %s, 공격받은자 : %s\n", this.name, target.name);
         this.experiencePoint += 10;
         target.healthPoint -= 10;
     }
     public void levelUp() {
         level ++;
         maxHealthPoint += 15;
         healthPoint = maxHealthPoint;
         System.out.println("Mage.levelUp");
     }

}
