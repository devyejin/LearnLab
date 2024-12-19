package org.example.composition.ex3_instro;

public class Main {
    public static void main(String[] args) {
        Chracter cha = new Chracter( 100);
        Gun gun = new Gun(10,20);
        Sword sword = new Sword(30, 4);

        cha.attack(); // 기본 공격 (기본 power) 10

        // 무기 있을 땐 기본 power + 무기power
        cha.setWeapon(gun);
        cha.attack(); // 20

        cha.setWeapon(sword);
        cha.attack(); // 40


    }
}
