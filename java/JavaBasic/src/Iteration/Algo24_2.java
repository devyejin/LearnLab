package Iteration;

public class Algo24_2 {

    public static void main(String[] args) {
        System.out.println(solution(4,5));
    }
//  O(n^2) -> O(n)으로 줄이기

//    4 * 1 + 4 * 2  + ... 4 * 9
//    5 * 1 + 5 * 2 + ... 5 * 9
//    (4+5) * 1 ... + (4+5) * 9 처리

    public static int solution(int start, int end) {
        int answer = 0;
        int num = 0;

        for (int i = start; i <= end; i++) {
            num += i;
        }

        for (int i = 1; i <= 9; i++) {
            answer += num * i;
        }

        return answer;

    }

}
