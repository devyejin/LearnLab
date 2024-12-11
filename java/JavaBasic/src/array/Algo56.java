package array;

import java.util.Arrays;

public class Algo56 {

    public static void main(String[] args) {
        int[] arr1 = {1,2,3};
        int[] arr2 = {4,5,6};
        System.out.println(Arrays.toString(solution(arr1, arr2)));
    }

    public static int[] solution(int[] numbers1, int[] numbers2) {
        int num1Length = numbers1.length;
        int num2Length = numbers2.length;
        int length = num1Length + num2Length;

        int[] nums = new int[length];
        for (int i = 0; i < num1Length; i++) {
            nums[i] = numbers1[i];
        }

        int idx = 0;
        for(int i = num1Length; i < length; i++) {
            nums[i] = numbers2[idx++];
            System.out.println(idx);
        }

        return nums;
    }
}
