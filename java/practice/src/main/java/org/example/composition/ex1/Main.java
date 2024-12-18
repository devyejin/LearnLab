package org.example.composition.ex1;

public class Main {
    public static void main(String[] args) {
        Person yejinPerson = new Person("yejin");
        Pencil bluePen = new Pencil("bluePen", "blue");
        Pencil yellowPen = new Pencil("yellowPen", "yellow");


        yejinPerson.havePencil(bluePen.getName(), bluePen);
        yejinPerson.havePencil(yellowPen.getName(), yellowPen);

        yejinPerson.usePencil(bluePen.getName());
        yejinPerson.usePencil(yellowPen.getName());

    }
}
