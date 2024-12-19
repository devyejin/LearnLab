package org.example.composition.ex3_instro;

//이번 예제에서는 캐릭터 자체를 활용할 것이라 그냥 클래스로 구현
public class Chracter {
    public int health;
    private Weapon weapon;
    public int power = 10;

    //무기는 있어도 되고 없어도 되는 것 -> 생성자가 아닌 setter로 넣는다
    public Chracter(int health) {
        this.health = health;
    }

    public void setWeapon(Weapon weapon) {
        this.weapon = weapon;
    }

    public void attack() {
        if (weapon == null) {
            System.out.println("attack!" + power);
        } else {
            System.out.println("attack!" + (power + weapon.power));
        }
    }

    //무기가 SpecialAttack이라는 인터페이스를 가지고 있는지를 확인해야함
    //만약 일반적인 Weapon이라면 SpecialAttack이라는 인터페이스가 없음
//    public void specialAttack() {
//        weapon.special
//    }
}
