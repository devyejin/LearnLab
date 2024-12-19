package org.example.composition.ex2_instro_expand;

public class Person {
    public String name;
    public Pencil pencil;
    public Pencil[] pencils;
    public Tool tool;

    //1. 생성자 주입
    //만약 생성자에서 pecnil을 바로 주입하면 유연하지 못함
//    public Person(String name, Pencil pencil) {
//        this.name = name;
//        this.pencil = pencil;
//    }

    public Person(String name) {
        this.name = name;
    }

    //2. setter주입
    public void setPencil(Pencil pencil) {
        this.pencil = pencil;
    }


    public void setPencils(Pencil[] pencils) {
        this.pencils = pencils;
    }

    public void setTool(Tool tool) {
        this.tool = tool;
    }

    public void write() {
        pencil.write();
    }

    public void writeMany() {
        for (Pencil pencil : pencils) {
            pencil.write();
        }
    }

    public void use() {
        tool.use();
    }


}
