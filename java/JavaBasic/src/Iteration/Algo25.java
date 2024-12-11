package Iteration;

public class Algo25 {

    public static void main(String[] args) {
        System.out.println(solution(5));
    }
    // number까지의 약수들의 총 합
    public static int solution(int number) {
//      n = 5, 5까지의 약수들 [1], [1,2], [1,3], [1,2,4], [1,5]
        //n의 약수를 구하기
        int answer = 0;
        for (int i = 1; i <= number; i++) {
            answer += getCommonSum(i);
        }
        return answer;
    }

    public static int getCommonSum(int n) {
        //n의 약수들의 합
        int sum = 0;
        for (int i=1; i <= n; i++) {
            if(n % i == 0) {
                sum += i;
            }
        }
        return sum;
    }


}
