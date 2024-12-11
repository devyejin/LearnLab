package Iteration;

public class Algo21 {
    public static void main(String[] args) {
        int result = solution(1, 10);
        // 2 3 5 7
        System.out.println(result);
    }

    //start와 end는 1부터 100까지 (1은 소수가 아님
    public static int solution(int start, int end) {
        int answer = 0;
        for (int i = start; i <= end; i++) {
            answer += isPrime(i);
        }
        return answer;
    }

    /**
     * 소수 판별
     *
     * @param n
     * @return 소수이면 1, 소수가 아니라면 0
     */
    public static int isPrime(int n) {
        if (n == 1) {
            return 0;
        }

        for (int i = 2; i <= Math.sqrt(n); i++) {
            //여기서 모든 n에 대해 모든 i에 대해 검증해야되는데 return해서 문제됐음
            if (n % i == 0) {
                return 0;
            }
        }
        return 1;
    }
}