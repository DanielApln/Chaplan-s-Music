
import java.io.IOException;
import java.util.Scanner;

public class LabAvtivity4 {

	public static void main(String[] args) throws IOException {
		
		
		Scanner scan = new Scanner(System.in);

        System.out.print("Enter the first number:");
        int num1 = scan.nextInt();

        System.out.print("Enter the first number:");
        int num2 = scan.nextInt();
        
        System.out.print("Enter the first number:");
        int num3 = scan.nextInt();
        

        if (num1 == num2 && num3 == num1){
            System.out.println("All numbers are equal.");
        }
        else{
            System.out.println("Not all numbers are equal.");
        }

            scan.close();
	}	



}
