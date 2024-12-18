package org.example.interfaceprac.library;

public class Ebook extends Material implements Downloadable {

    private String callNumber;

    public Ebook(String title, String callNumber) {
        super(title, MaterialType.EBOOK);
        this.callNumber = callNumber;
    }

    @Override
    public void download(Material material) {
        System.out.println("다운로드 완료");
        System.out.println("material.title = " + material.title);
    }
}
