package array;

import java.util.Arrays;
import java.util.Iterator;

public class ArrayPractice {
    public static void main(String[] args) {
        //출력시에는 for문 순회하거나, toString 하거나

        int[] numbers = new int[10]; // 배열은 사이즈 초기화 필요
        int lastIdx = numbers.length - 1;
        numbers[lastIdx] = 9;
        for (int num : numbers) {
            System.out.print(num);
        }
        System.out.println();


        //선언 + 생성 동시에 하는 방법
        int[] numbers2;
        numbers2 = new int[] {1,2,3,4,5};

        for (int num : numbers2) {
            System.out.print(num);
        }
        System.out.println();


        //선언 + 생성 동시
        int[] numbers3 = {1, 2, 3, 4, 5, };;
        System.out.println(Arrays.toString(numbers3));

        //numbers2, numbers3는 서로 다른 객체
        System.out.println(numbers2 == numbers3); //false (주소값 비교)
        System.out.println(Arrays.equals(numbers2, numbers3)); // true

        char[] chars = {'a', 'b', 'c', 'd', 'e', 'f'};
        for (int i = 0; i < chars.length; i++) {
            System.out.println(chars[i]);
        }

        for(char c : chars) {
            System.out.println(c);
        }

        String[] numbers4 = new String[5]; // int 타입은 0으로 초기화, String 은 null 로 초기화
        for (String i : numbers4) {
            System.out.println(i);
        }


    }
}
