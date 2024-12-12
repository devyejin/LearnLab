package org.example;

public class MP3Player {
    private String model;
    private int volume;
    private boolean isPowerOn;

    public MP3Player(String model) {
        this.model = model;
        this.volume = 0;
        this.isPowerOn = false;
    }

    //동작 성공시 boolean 타입을 return 해줄건지도 생각해줘야함 (함수와 클래스 모듈화)
    //기획단계에서 고려하지 않으면 구현단계에서 코드가 더럽
    //맨 처음에 할 때는 우선 구현부터 하고 추후에는 기획을 명확히 하는 방식으로
    public boolean pushPowerButton() {
        if (this.isPowerOn) {
            this.powerOff();
        } else {
            this.powerOn();
        }
        return this.isPowerOn;
    }

    //아무 생각없이 메서드 만들지 말고, 엣지케이스들 고려하기!
    public void powerOn() {
        this.isPowerOn = true;
        this.volume = 40;
    }

    public void powerOff() {
        this.isPowerOn = false;
        this.volume = 0;
    }

    /**
     *
     * @param n n배 볼륨 업
     */
    public void volumeUp(int n) {
//        최대 볼륨은 100
        if (this.volume >= 100) {
            System.out.println("최대 볼륨은 100입니다.");
            return;
        }

        this.volume += 20 * n;
    }

    public void volumeDown() {
        //최소 볼륨은 0
        if (this.volume <= 0) {
            System.out.println("최소 볼륨은 0입니다.");
            return;
        }

        this.volume -= 20;
    }

    public void getInfo() {
        System.out.printf("Product Name : %s\n, Current Volume: %s\n, Current PowerOn : %s\n ", this.model, this.volume, this.isPowerOn);
    }
}
