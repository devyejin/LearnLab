package array;

public class Algo44 {
    // numbers에 n이 몇 개가 들어 있는지 개수를 반환
    public int solution(int n, int[] numbers) {
        int answer = 0;
        for (int number : numbers) {
            if (number == n) {
                answer += 1;
            }
        }
        return answer;
    }
}
