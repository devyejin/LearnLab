package array;

public class Algo58 {
    public int[] solution(int[] numbers, int start, int end) {
        int length = end - start + 1;
        int[] answer = new int[length];

        for (int i = 0; i < length; i++) {
            answer[i] = numbers[start + i];
        }

        //for (int i = start; i <= end; i++) {
//            answer[start-i] = numbers[i];
//        }
        return answer;
    }
}
