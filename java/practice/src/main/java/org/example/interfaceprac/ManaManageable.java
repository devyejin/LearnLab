package org.example.interfaceprac;

public interface ManaManageable {

    //마나에 대한 수치, 최대값을 인터페이스에서는 지닐 수 없나?
    //인터페이스는 상수만 지닐 수 있는데 변화해야하니까

    public void manaAttack(Character target);
    public void manaMethod();
}
