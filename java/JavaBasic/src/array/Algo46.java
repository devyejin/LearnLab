package array;

public class Algo46 {
    public static void main(String[] args) {}

    //배열 원소에서 최소값 찾기 (abs 500이하 정수)
    public int solution(int[] numbers) {
        int answer = 500;
        //Java의 최대값은 Integer.MAX_VALUE (파이썬은 float("INF")
        int maxValue = Integer.MAX_VALUE;
        for (int number : numbers) {
            if (number < answer) {
                answer = number;
            }
        }

        return answer;
    }
}
