package Iteration;

import java.util.ArrayList;

//모든 소수 곱의 총합 구하기
public class Algo26 {

    public static void main(String[] args) {
        System.out.println(solution(2, 5));
    }

    public static int solution(int start, int end) {
        int sum = 0;
        ArrayList<Integer> primes = getPrimes(start, end);
        // 2 3 5 => 2*3 + 2*5 + 3*5
        sum = getSums(primes);
        return sum;

    }

    //계산식 부분 (계산식 부분을 쪼개야하나 고민됐는데, 개발할때는 쪼개는게 맞고 알고풀때는 쪼개지 않는게 맞을수도)
    private static int getSums(ArrayList<Integer> primes) {
        int sum = 0;
        for (int i= 0; i < primes.size() - 1; i ++) {
            for (int j = i + 1; j < primes.size(); j ++) {
                sum += primes.get(i) * primes.get(j);
            }
        }
        return sum;
    }

    //start ~ end 사이의 소수값들을 반환
    public static ArrayList<Integer> getPrimes(int start, int end) {
        ArrayList<Integer> primes = new ArrayList<>();
        for(int i = start; i <= end; i++) {
            if(isPrime(i)) {
                primes.add(i);
            }
        }
//        System.out.println(primes);
        return primes;
    }

    //소수 판별
    public static boolean isPrime(int number) {
        if (number == 1) {
            return false;
        }

        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}
