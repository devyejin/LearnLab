package array;

public class Algo47 {
    //abs 500
    public int solution(int[] numbers) {
        int answer = -500;
        for (int number : numbers) {
            if (number > answer)
                answer = number;
        }
        return answer;
    }
}
