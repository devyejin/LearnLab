package org.example.modifierprac;

public class Main {
    public static void main(String[] args) {
//        Person person = new Person();
//        person.setName("kyle");
//        person.age = 10;
//        person.height = 160;
//
//        System.out.println(person.getName());
//        System.out.println(person.toString());

        String initialPassword = "12345";

        //여기 새로운 계좌 생성 전에 비밀번호 검증
        try {
            BankAccount.openingBankAccount(initialPassword);
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }






    }

}
