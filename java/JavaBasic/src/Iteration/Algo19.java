package Iteration;

public class Algo19 {
    public static int solution(int start, int end) {
        int answer = 0;
        for (int i = start; i <= end; i++) {
            if (i % 2 == 0) {
                answer += i;
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        int result = solution(1, 10);
        System.out.println(result);
    }

}