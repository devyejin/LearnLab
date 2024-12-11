package array;

public class Algo48 {
    public int solution(int[] numbers) {
        int answer = 0;
        for (int number : numbers) {
            answer += number;
        }
        return answer;
    }
}
