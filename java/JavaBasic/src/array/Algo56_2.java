package array;

import java.util.Arrays;

public class Algo56_2 {
    public static void main(String[] args) {
        int[] arr1 = {1,2,3};
        int[] arr2 = {4,5,6};
        System.out.println(Arrays.toString(solution(arr1, arr2)));
    }

    public static int[] solution(int[] numbers1, int[] numbers2) {
        int num1Length = numbers1.length;
        int num2Length = numbers2.length;
        int length = num1Length + num2Length;

        int[] result = new int[length];

        int idx = 0;
        for (int num : numbers1) {
            result[idx++] = num;
        }

        for (int num : numbers2) {
            result[idx++] = num;
        }

        return result;
    }
}
