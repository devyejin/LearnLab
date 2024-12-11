package Iteration;

public class Algo18 {
    public static int solution(int start, int end) {
        // start~end까지의 총 합을 return
        int answer = 0;
        for (int i = start; i <= end; i++) {
            answer += i;
        }
        return answer;
    }

    public static void main(String[] args) {
        int answer = solution(1, 10);
        System.out.println(answer);
    }
}
