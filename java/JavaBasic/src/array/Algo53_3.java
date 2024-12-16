package array;

public class Algo53_3 {
    public int[] solution(int[] numbers, int step) {
        //answer 배열의 길이
//        int len = numbers.length / step + 1;
//        주의 : 1~N까지 중 step의 배수니까 length-1
        int len = (numbers.length - 1) / step + 1;
        int[] answer = new int[len];

        for (int i = 0; i < len; i++) {
            answer[i] = numbers[step * i];
        }
        return answer;
    }
}
