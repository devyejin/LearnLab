public class Main {
    public static void main(String[] args) {
        int result = solution(550000, "플래티넘", "현금");
        System.out.println(result);
    }

    public static int solution(int totalPrice, String membership, String paymentMethod) {
        int answer = 0;
        double discountPrice = totalPrice;

        //기본 할인
        if(totalPrice >= 500_000) {
            discountPrice = discount(totalPrice, 0.85);
//            answer = totalPrice * 0.85; // int * 0.85 하는 과정에서 실수가 되기 때문에 answer의 type을 실수로 잡아줘야 함
        } else if (totalPrice >= 300_000) {
            discountPrice = discount(totalPrice, 0.90);
        } else if (totalPrice >= 100_000) {
            discountPrice = discount(totalPrice, 0.95);
        }

        //등급별 할인
        switch (membership) {
            case "플래티넘":
                discountPrice = discount(discountPrice, 0.9);
                break;
            case "골드":
                discountPrice = discount(discountPrice, 0.95);
                break;
            case "실버":
                discountPrice = discount(discountPrice, 0.97);
                break;
        }

        //결제 방식별 할인
        if (paymentMethod.equals("현금")) {
            discountPrice = discount(discountPrice, 0.98);
        }

        //특별 프로모션
        if (totalPrice >= 500_000 && membership.equals("플래티넘") && paymentMethod.equals("현금")) {
            discountPrice -= 50_000;
        }

        answer = (int)discountPrice;

        return answer;
    }

    //기능을 분리하는게 좋음 (한 줄일지라도 기능이 다르기 때문에)
    public static double discount(double price, double discountPercent) {
        return price * discountPercent;
    }
}