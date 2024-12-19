package org.example.composition.ex2_instro_expand;

public class Pencil implements Tool {
    private String color;

    public Pencil(String color) {
        this.color = color;
    }

    public void write() {
        System.out.println(color + "펜으로 글 작성");
    }

    @Override
    public void use() {
        write();
    }
}
