package array;

public class Algo57 {
    public int[] solution(int[] numbers, int n) {
        int originLength = numbers.length;
        int changeLength = originLength * n;
        int[] answer = new int[changeLength];

        for (int i = 0; i < changeLength; i++) {
            int idx = i % originLength;
            answer[i] = numbers[idx];
        }
        return answer;
    }

}
