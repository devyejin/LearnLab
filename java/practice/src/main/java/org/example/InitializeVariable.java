package org.example;

import javax.swing.plaf.PanelUI;

public class InitializeVariable {
    public static void main(String[] args) {
        System.out.println("***** 멤버 변수 초기화 : 명시적 초기화 예시 *******");
        V1 v1 = new V1();
        System.out.println(v1.value);

        System.out.println("***** 멤버 변수 초기화 : 생성자를 이용한 초기화 예시 *******");
        V2 v2 = new V2();
        System.out.println(v2.value);

        System.out.println("***** 멤버 변수 초기화 : 인스턴스 변수 초기화 블럭 예시 *******");
        //인스턴스 변수 초기화 블럭의 경우, 객체를 생성할 때 마다 호출되는걸 확인할 수 있음
        V3 v3 = new V3();
        V3 v3_2 = new V3();
        System.out.println(v3.value);
        System.out.println(v3_2.value);

        System.out.println("***** 멤버 변수 초기화 : static(클래스) 변수 초기화 블럭 예시 *******");
        //static 변수 초기화 블럭의 경우, 단 한번만 호출됨을 볼 수 있음!
        V6 v6 = new V6();
        V6 v6_2 = new V6();
        V6 v6_3 = new V6();
        System.out.println(v6.instanceValue);
        System.out.println(v6_2.instanceValue);
        System.out.println(v6_3.instanceValue);


    }
}

// 1. 명시적 초기화
class V1 {
    int value = 10;
    String word = "text";
}
// 2. 생성자에 의한 초기화
class V2 {
    int value;
    String word;

    public V2() {
        this(10, "test");
    }

    public V2(int value, String word) {
        this.value = value;
        this.word = word;
    }
}

//현재 시각을 받아온 후 날짜만 넣는다는 식으로 추가적인 기능이 필요한 경우
//즉, 메서드(기능)가 필요함
class V3 {
    int value;
    String word;

    //인스턴스 초기화 블럭 (자기만의 scope를 갖는 실행 가능한 코드 -> for문, if문 같은 제어문 사용 가능)
    //생성자들이 공통적으로 갖는 로직을 넣을 수도 있음
    //예를 들어, 생성자들이 value를 10을 갖는다면 각 생성자마다 넣기보다는 인스턴스 초기화 블럭을 이용
    //인스턴스 변수 초기화블럭은 인스턴스가 생성될 때 마다 호출된다.
    {
        System.out.println("인스턴스 변수 생성! ");
        if (true) {
            this.value = 1;
        } else {
            this.value = 0;
        }

        this.word = "text";
    }
}

//생성자는 인스턴스 변수를 초기화할 때 사용하는 것!, static 변수를 초기화하기 위해서는 static 변수를 선언하면서 초기화해야 했는데
//static block을 통해서 초기화할 수 있다.
class V5 {
    static int staticValue = 10;
    int instanceValue;

}

//static block을 통해 static 변수를 초기화하는 경우
class V6 {
    static int staticValue;
    int instanceValue;

    static {
        System.out.println("static 변수는 프로그램 실행 시 한번만 호출된당!!!!");
        if (true) {
            staticValue = 1;
        } else {
            staticValue = 0;
        }
    }
}
