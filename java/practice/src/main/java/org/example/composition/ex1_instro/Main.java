package org.example.composition.ex1_instro;

public class Main {
    public static void main(String[] args) {
        Pencil redPencil = new Pencil("red");
        Pencil bluePencil = new Pencil("blue");

        Person beemo = new Person("beemo");
        beemo.setPencil(redPencil);
        beemo.write();

        System.out.println("many version");

        Person lynda = new Person("lynda");
        Pencil grayPencil = new Pencil("gray");
        Pencil greenPencil = new Pencil("green");
        Pencil[] pencils = {redPencil, bluePencil, greenPencil, grayPencil};

        lynda.setPencils(pencils);
        lynda.writeMany();
    }
}
