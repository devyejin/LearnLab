package array;

public class Algo45 {
    //numbers에 소수가 몇 개 있는지를 반환
    public static int solution(int[] numbers) {
        int answer = 0;
        for (int number : numbers) {
            answer += isPrime(number);
        }
        return answer;
    }

    public static int isPrime(int n) {
        for(int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return 0;
            }
        }
        return 1;
    }
}
