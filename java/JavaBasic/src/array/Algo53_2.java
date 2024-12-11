package array;

import java.util.ArrayList;
import java.util.Arrays;

public class Algo53_2 {

    //0번째 인덱스부터 step만큼 건너뛰며 원소를 선택한 결과를 반환
//    public static ArrayList<Integer> solution(int[] numbers, int step) {
//
//        ArrayList<Integer> list = new ArrayList<>();
//        for (int i = 0; i < numbers.length; i += step) {
//            list.add(numbers[i]);
//        }
//        return list;
//    }

    public static void main(String[] args) {
        int[] arr = {1,2,3,4};
        int step = 2;
        System.out.println(Arrays.toString(solution(arr,2)));
    }
    public static int[] solution(int[] numbers, int step) {

//        int length = (int) Math.ceil(numbers.length / step);
        int length = (int) Math.ceil((double)numbers.length / step); // int / int는 int라서 double로 변경해줘야 함
        System.out.println(length);
        int[] answer = new int[length];

        answer[0] = numbers[0];
        for(int i = 1; i <length; i++){
            answer[i] = numbers[i*step];
        }

        return answer;
    }

}
