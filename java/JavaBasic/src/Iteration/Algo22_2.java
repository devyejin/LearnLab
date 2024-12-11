package Iteration;

public class Algo22_2 {
    public static void main(String[] args) {

    }
    //number의 ㅏ릿수를 반환
    public static int solution(long number) {
        //number를 10으로 나눈다.
        //몫을 10으로 다시 나눈다
        //언제까지? 0이될 때 까지
        int count = 0;
        while(number != 0) {
            number = number / 10;
            count += 1;
        }
        return count;
    }
}
