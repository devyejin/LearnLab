package org.example.composition.ex1_instro;

public class Pencil {
    private String color;

    public Pencil(String color) {
        this.color = color;
    }

    public void write() {
        System.out.println(color + "펜으로 글 작성");
    }

}
