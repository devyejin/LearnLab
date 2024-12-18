package org.example.composition.ex1;

import java.util.HashMap;

public class Person {

    private final String name;
    private HashMap<String, Pencil> pencils = new HashMap<>();

    public Person(String name) {
        this.name = name;
    }

    public void havePencil(String pencilName, Pencil pencil) {
       pencils.put(pencilName, pencil);
    }

    public void usePencil(String pencilName) {
        Pencil pencil = pencils.get(pencilName);
        pencil.write();
    }
}
