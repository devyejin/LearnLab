package array;

public class Algo56_3 {
    public static int[] solution(int[] numbers1, int[] numbers2) {
        int num1Length = numbers1.length;
        int num2Length = numbers2.length;
        int length = num1Length + num2Length;

        int[] result = new int[length];

        for (int i = 0; i < num1Length; i++) {
            result[i] = numbers1[i];
        }

        for ( int i = 0; i < num2Length; i++) {
            result[i + num2Length] = numbers2[i];
        }

        return result;

    }
}
