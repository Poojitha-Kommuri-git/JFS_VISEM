package com.su2;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter start number: ");
        int start = sc.nextInt();
        System.out.print("Enter end number: ");
        int end = sc.nextInt();
        boolean[] prime = new boolean[end + 1];
        for (int i = 2; i <= end; i++) {
            prime[i] = true;
        }
        for (int i = 2; i * i <= end; i++) {
            if (prime[i]) {
                for (int j = i * i; j <= end; j += i) {
                    prime[j] = false;
                }
            }
        }
        System.out.println("Prime numbers between " + start + " and " + end + ":");
        for (int i = start; i <= end; i++) {
            if (i >= 2 && prime[i]) {
                System.out.print(i + " ");
            }
        }
    }
}