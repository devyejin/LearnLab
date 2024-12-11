package Iteration;

public class Algo20 {

    public static void main(String[] args) {
        int result = solution(1,10,3);
        System.out.println(result);
    }
    //number의 배수인 수들의 합
    public static  int solution(int start, int end, int number) {
        int answer = 0;
        for (int i= start; i <= end; i++) {
            if ( i % number ==0) {
                answer += i;
            }
        }
        return answer;
    }
}
