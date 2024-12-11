package array;

//idx 변수를 사용하지 않고 할 방법
public class Algo57_2 {
    public int[] solution(int[] numbers, int n) {
        int originLength = numbers.length;
        int changeLength = originLength * n;
        int[] answer = new int[changeLength];

        //한 덩어리가 n개 존재하는거니까
//
        for(int j = 0; j < n; j++) {
            for (int i = 0; i < originLength; i++) {
                answer[i * j] = numbers[i];
            }
        }

        return answer;
    }
}
