package org.example.interfaceprac;
//짐 관련 기능
//		- 짐 적재
//		- 짐 파킹

public interface LoadManageable {

    void load(int amount);
    void unload(int amount);
}
