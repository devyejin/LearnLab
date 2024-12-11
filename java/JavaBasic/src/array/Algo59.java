package array;

public class Algo59 {

    public int[] solution(int[] numbers) {
        int lenght = numbers.length;
        int[] answer = new int[lenght];
//        0 4 / 1 3
        for (int i = 0; i < lenght; i++) {
            int j = lenght - i - 1;
            answer[i] = numbers[j];
        }
        return answer;
    }
}
