package org.example.inheritanceprac_my;

import org.example.inheritanceprac_my.Cat;
import org.example.inheritanceprac_my.Character;
import org.example.inheritanceprac_my.Mage;
import org.example.inheritanceprac_my.Warrior;

public class Main {
    public static void main(String[] args) {

        System.out.println("***** Character ******");
        Character basicChar = new Character("basicChar");
        System.out.println(basicChar.toString());
        basicChar.upExp(130);
        basicChar.upExp(90);



        Warrior warrior = new Warrior("warrior");
        System.out.println(warrior.toString());
        basicChar.attack(warrior);
//
//
//        Mage mage = new Mage("mage");
//        System.out.println(mage.toString());
//
//        warrior.useRageSkillAttack(mage);
//        warrior.useRageSkillAttack(mage);
//        warrior.useRageSkillAttack(mage);


    }
}
