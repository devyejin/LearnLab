package org.example.composition.ex2_instro_expand;

// 확장
// Person이 Tool로 다양한걸 지닐 수 있음
// Person은 use()를 사용 -> Tool로 car를 가지고 있는 경우 차가 속도를 높이고
//                     -> Tool로 Pencil을 가지고 있는 경우 글을 작성

public class Main {
    public static void main(String[] args) {
        Engine engine = new Engine(300);

        Car car1 = new Car("car1", engine);
        car1.speedUp();
        car1.speedUp();
        System.out.println(car1.speed);

        Engine engine2 = new Engine(100);

        Car car2 = new Car("car2", engine2);
        car2.speedUp();
        car2.speedUp();
        System.out.println(car2.speed);

        System.out.println("**** 확장 부분 *****");
        Person beemo = new Person("beemo");
        beemo.setTool(car1);
        beemo.use();

        Pencil yelloPen = new Pencil("yello");
        beemo.setTool(yelloPen);
        beemo.use();

    }
}
