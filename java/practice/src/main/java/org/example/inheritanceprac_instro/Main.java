package org.example.inheritanceprac_instro;

public class Main {


    public static void main(String[] args) {

        Character basic = new Character("basic");
        basic.attack();
        basic.levelUp();

        Warrior warrior = new Warrior("warrior");
        System.out.println(warrior.health);
        warrior.attack();
        warrior.rageUp();
        warrior.attack();
    }
}
