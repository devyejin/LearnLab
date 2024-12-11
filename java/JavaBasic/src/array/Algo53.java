package array;

import java.util.ArrayList;
import java.util.Arrays;

public class Algo53 {

    //0번째 인덱스부터 step만큼 건너뛰며 원소를 선택한 결과를 반환
    public static ArrayList<Integer> solution(int[] numbers, int step) {

        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < numbers.length; i += step) {
            list.add(numbers[i]);
        }
        return list;
    }
}
