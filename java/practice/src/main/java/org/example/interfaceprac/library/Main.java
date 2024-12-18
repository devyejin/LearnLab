package org.example.interfaceprac.library;

public class Main {
    public static void main(String[] args) {
        Book bookTheStranger = new Book("The Stranger", "08.3-ㅅ374ㅁ2-266");
        bookTheStranger.findLocation();
        bookTheStranger.showInfo();
        System.out.println();
        bookTheStranger.loan();
        bookTheStranger.showInfo();


        Ebook ebook = new Ebook("이북 - puppy so cute!", "E 810-A361c-29");


    }
}
