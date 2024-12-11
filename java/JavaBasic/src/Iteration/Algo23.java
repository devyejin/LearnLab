package Iteration;

public class Algo23 {

    public static void main(String[] args) {
        long result = solution(1203);
        System.out.println(result);
    }

    //각 자릿수의 합 구하기
    public static long solution(long number) {
        int answer = 0;
        String num = String.valueOf(number);
        for (char c : num.toCharArray()) {
            answer += (c - '0');
        }
        return answer;
    }
}
