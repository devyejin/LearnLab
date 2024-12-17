package org.example.modifierprac_instro;
//- 다음 내용을 바탕으로 BankAccount 클래스를 구현하시오.
//        - 계좌는 잔액과 비밀번호 정보를 가진다
//    - 잔액과 비밀번호는 외부에서 직접 접근할 수 없다
//
//- 다음 기능을 수행할 수 있다.
//    - 계좌 생성 (비밀번호 설정)
//    - 입금
//    - 출금 (비밀번호 확인 필요)
//    - 잔액 조회 (비밀번호 확인 필요)
//
//단, 입금이나 출금시 0원 이하의 금액은 불가능하며,
//잔액보다 큰 금액은 출금할 수 없다.
public class BankAccount {
    private int balance;
    private String password;

    public BankAccount(String password) {
        this.password = password;
        this.balance = 0;
    }

    /**
     * 잔액 조회
     * - 비밀번호 확인 후 일치하면 조회 가능
     * @param password
     * @return
     */
    public int getBalance(String password) {
        //비밀번호 확인
        if(!validatePassword(password)) {
//
            return -1; //1. 의미 없는 수를 반환 (typing에 맞춰서)
            //2.  error handling (더 좋은 방식), 호출한 곳(main)에서 처리
//            throw new IllegalArgumentException("Invalid password");
        }

        return balance;
    }

    //증가된 balance를 return해줘야 할까?
//    - 기획의 문제이긴 하지만, balance를 return하는 getter(getBalance)가 존재하므로 void타입으로 정의
    /**
     * 입금
     * - balance를 증가 시킨다.
     * 단, 입금이나 출금시 0원 이하의 금액은 불가능
     * @param amount 입금할 금액, amount > 0
     */
    public void deposit( int amount) {

        if (!validateAmount(amount)) {
            System.out.println("입금 불가 금액입니다.");
            return; // return의 기능 1. 반환 2. 함수를 종료시킨다
        }
        balance += amount;
        System.out.println(amount + "원이 입금됨");
    }
    //참고(deposit을 int로 반환하고 싶은 경우)
//    public int deposit(int amount) {
//        if(validateAmount(amount)) {
//            balance += amount;
//        }
//        return balance;
//    }


    //deposit과 마찬가지로 void 타입
    /**
     * 출금
     * @param password
     * @param amount
     * 단, 입금이나 출금시 0원 이하의 금액은 불가능
     */
    public void withdraw(String password, int amount) {
        //비밀번호 확인
        if(!validatePassword(password)) {
            return;
        }
        //출금 금액 확인
        if (!validateAmount(amount)) {
            System.out.println("0원 이하 금액은 출금 불가");
            return;
        }

        //출금 금액이 잔고보다 많으면 안된다.
        if (amount > balance) {
            return;
        }
        balance -= amount;
    }

    // log message를 어디에서 출력해줄 것인가
    // - validateAmount의 경우 입금, 출금 두 곳에서 사용하기때문에 사용하는곳에서 메시지를 출력하는게 확장성이 높음
    // - 만약 0원 이상, 이하 이런식으로 공통된 메시지만 출력한다면 validateAmount 내부에서 출력하는게 유지보수성 좋음
    // -이 문제 또한 기획의 문제
    //메서드로 분리했을 때의 장점 : 기획사항에서 0원이상이 아닌 1000원이상으로 변경시 모든 로직을 직접 수정하는게 아니라 하나의 메서드만 수정하면 된다.
    /**
     * 입금, 출금 금액이 0원 이상인지 확인한다.
     * @param amount
     * @return
     */
//    private boolean validateAmount(int amount, int minAmount) 도 가능 (기획의 문제)
    private boolean validateAmount(int amount) {
        return amount > 0;
    }

    /**
     * 비밀번호를 검증한다.
     * - 이 경우 log message를 공통적으로 처리하기위해 validatePassword 내부에서 출력
     * @param password
     * @return
     */
    private boolean validatePassword(String password) {
//        return password.equals(this.password);
        if(this.password.equals(password)) {
            return true;
        } else {
            System.out.println("비밀번호가 부적합");
            return false;
        }
    }

    //인스턴스 생성 이전에 사용하기 때문에 static
    /**
     * 계좌 생성시 초기 비밀번호 검증
     * - 비밀번호는 4자리
     * @param password
     * @return
     */
    public static boolean validateInitialPassword(String password) {
        return password.length() == 4;
    }

}
