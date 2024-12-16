package org.example.modifierprac;

//- 계좌는 잔액과 비밀번호 정보를 가진다
//- 잔액과 비밀번호는 외부에서 직접 접근할 수 없다

//- 다음 기능을 수행할 수 있다.
//    - 계좌 생성 (비밀번호 설정)
//    - 입금
//    - 출금 (비밀번호 확인 필요)
//    - 잔액 조회 (비밀번호 확인 필요)
//
//단, 입금이나 출금시 0원 이하의 금액은 불가능하며,
//잔액보다 큰 금액은 출금할 수 없다.
public class BankAccount {
    private double balance;
    private String password;

    /**
     * 계좌 생성 (입금 금액이 있는 경우)
     * 계좌 비밀번호는 4자리로 설정해야한다.
     * @param password
     * @param balance
     */
    private BankAccount(String password, double balance) {
        //추가) 계좌 생성시 비밀번호 길이 validate
        this.password = password;
        this.balance = balance;
    }

    /**
     * 계좌 생성 (입금 금액이 없는 경우)
     * 계좌 비밀번호는 4자리로 설정해야한다.
     * @param password
     */
    private BankAccount(String password) {
        this(password, 0);
    }

    /**
     * 계좌를 개설한다. 신규 가입 금액이 0원인 경우
     * @param password
     * @return
     */
    public static BankAccount openingBankAccount(String password) {
            validateInitialPassword(password); //여기서 예외 발생시 호출한 곳으로 넘어감
            return new BankAccount(password);
    }




    //엄밀히 따지면 내가 입금하는거, 외부인이 입금하는거 갈릴듯 (외부인이 입금시 입금 후 잔액조회x, 본인이 넣으면 잔액조회o)
    /**
     * 입금, 0원 입금은 불가능
     * @param amount
     */
    public void deposit(double amount) {

        try {
            checkDepositAmount(amount);
            //인스턴스 메서드니까, 자기 자신의 필드인게 확실하니 this.balance 안해줘도 됨!
            balance += amount;
        }catch (IllegalStateException e) {
            System.out.println(e.getMessage());
        }
    }

    /**
     * 입금 금액이 0원 이상인지 확인한다.
     * @param amount
     */
    private static void checkDepositAmount(double amount) {
        if (amount < 0) {
            throw new IllegalArgumentException("입금 금액은 0원 이상이여야 합니다.");
        }
    }


    /**
     * 출금
     *  - 비밀번호를 확인한다.
     *  - 잔액보다 큰 금액을 출금할 수 없다.
     * @param password
     * @param amount
     */
    public void withdraw(String password, double amount) {

        try {
            //비밀번호 확인
            validatePassword(password);
            //출금 가능 여부 확인
            checkWithdrawAvailable(amount);

            //출금
            double prevBalance = validateBalance(password);
            balance -= amount;
            double currentBalance = balance;
            System.out.printf("출금 금액 : %f\n 이전 금액 : %f\n 현재 금액 : %f\n", amount, prevBalance, currentBalance);

        } catch (IllegalArgumentException e) {
            // 메시지 세분화 하고 싶다면 Exception도 커스터마이징 해야할 듯 (아님! getMessage활용하면 세분화 가능)
            System.out.println("error : " + e.getMessage());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    /**
     * 잔액 조회
     * - 비밀번호가 일치해야 조회가 가능하다.
     *
     * @param password
     * @return balance
     */
    public double validateBalance(String password) throws Exception {
        try {
            //비밀번호 확인
            validatePassword(password);
            return balance;
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
            //에러가 발생헀을 때 retyrn 반환값이 없기 때문에 문제! 에러 메시지는 여기에서 출력하는게 맞기 때문에
            //에러가 발생했을 때에 대한 Exception을 한번 더 던져준다.
            throw new Exception();
        }

    }

    /**
     * 비밀번호 일치 여부를 확인한다.
     * @param password
     * @return
     */
    private boolean validatePassword(String  password) {
        if (password != this.password) {
            throw new IllegalArgumentException("Wrong password");
        } else {
            return true;
        }
    }


    //출금 가능 잔액 조회
    public boolean checkWithdrawAvailable(double amount) {
        if (balance < amount) {
            throw new IllegalArgumentException("Insufficient balance");
        } else {
            return true;
        }
    }

    /**
     * 초기 비밀번호는 4자리로 설정해야 한다.
     * 인스턴스 생성 이전에 검증하는 것이므로 static 메서드, 계좌 개설시에만 확인(내부에서만 사용) 하므로 private
     * @param password
     * @return
     */
    private static void validateInitialPassword(String password) {
        if (password == null || password.length() != 4) {
            throw new IllegalArgumentException("Password length must be four!");
        }
    }




}
