package org.example.composition.ex3_instro;

public class Sword extends Weapon implements SpecialAttackable{

    public Sword(int power, int stemina) {
        super(power, stemina);
    }

    @Override
    public void specialAttack() {
        System.out.println("Sword slice!!!");
    }
}
