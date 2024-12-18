package org.example.interfaceprac.library;

//- 모든 자료는 제목, ID, 대출 가능 여부를 가짐
//- 모든 자료는 대출/반납이 가능해야 함
public abstract class Material {
    protected String title;
    protected int id;
    protected boolean isLoanable;
    protected MaterialType type;

    public Material(String title,MaterialType type) {
        this.title = title;
        this.id += 1;
        this.isLoanable = true;
        this.type = type;

    }

    //대출 (해당 책을 대출하는 거니까)
    public void loan() {
        isLoanable = false;
        System.out.println("대출 완료 : " + title);
    }

    //반납
    public void returnLoan() {
        isLoanable = true;
        System.out.println("반납 완료 : " + title);
    }

    public void showInfo() {
        System.out.println("title = " + title);
        System.out.println("isLoanable = " + isLoanable);
        System.out.println("type = " + type);
    }

}
