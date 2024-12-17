package org.example.modifierprac_instro;

public class Main {
    public static void main(String[] args) {
        String myPassword = "12345";
        BankAccount myAccount = null;

        if( BankAccount.validateInitialPassword(myPassword)) {
            myAccount = new BankAccount(myPassword);
        } else {
            System.out.println("초기 비밀번호 검증 실패 ");
            return;
        }

//        BankAccount myAccount = new BankAccount("1234");
        myAccount.deposit(1000000);
        System.out.println(myAccount.getBalance("1356"));
        System.out.println(myAccount.getBalance("1234"));

        myAccount.withdraw("1234", 300000);
        System.out.println(myAccount.getBalance("1234"));


    }
}
