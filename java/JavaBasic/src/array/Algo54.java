package array;

import java.util.ArrayList;

public class Algo54 {
    public ArrayList<Integer> solution(int[] numbers, int direction) {
        ArrayList<Integer> answer = new ArrayList<Integer>();

        int arrLength = numbers.length;
//        d = 1일때 3 0 1 2
//        i - 1   0 - 1 + 4
//                1 - 1 + 4

//        d = -1 일 때
        for ( int i = 0; i < arrLength; i++ ) {
            if(direction > 0) {
                int idx = (i - direction + arrLength) % arrLength;
                answer.add(numbers[idx]);
            } else {
                int idx = (i + direction + arrLength) % arrLength;
                answer.add(numbers[idx]);
            }
        }
    return answer;
    }
}
