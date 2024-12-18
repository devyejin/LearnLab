package org.example;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class Test {
    public static void main(String[] args) {

        Class<LoadV> vClass = LoadV.class;

        System.out.println("클래스로드시점체크");

        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
        scheduler.schedule(() -> LoadV.staticMethod(), 5, TimeUnit.SECONDS);


    }
}

class LoadV {
    

    static {
        System.out.println("static block");
    }
    
    public LoadV() {
        System.out.println("생성자 호출");
    }
    
    public static void staticMethod() {
        System.out.println("staticMethod 호출");
    }
    
}
