package Iteration;

public class Algo24 {

    public static void main(String[] args) {
        System.out.println(solution(4,5));
    }

    public static int solution(int start, int end) {
        int answer = 0;
        //start단부터 end단까지의 모든 결과값을 합산
        for (int i = start; i <= end; i++) {
            answer += gugudan(i);
        }
        return answer;
    }

    public static int gugudan(int dan) {
        int result = 0;
        for (int i = 1; i <= 9; i++) {
            result += dan * i;
        }
        return result;
    }
}
