/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package algoritmos1;

import java.util.Scanner;

/**
 *
 * @author 204
 */
public class Algoritmos1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        int cantidadPersonas, edad, continuar;
        double promedioEdades, sumatoriaEdades;
        Scanner lector = new Scanner(System.in);
        System.out.println("Bienvenido a la calucladora de promedios");
        do {
            System.out.println("Vamos a empezar a pedir edades");
            cantidadPersonas = 0;
            sumatoriaEdades = 0;
            promedioEdades = 0;
            
            do {
                System.out.println("Ingresa la edad de la persona " + (cantidadPersonas + 1));
                edad = lector.nextInt();
                
                if(edad <= 18){
                    cantidadPersonas++;
                    sumatoriaEdades+=edad;
                }
            } while (edad <= 18);
            
            if(cantidadPersonas > 0){
                promedioEdades = sumatoriaEdades/cantidadPersonas;
                System.out.println("El primedio de edades de las " + (cantidadPersonas)
                        + " es " + promedioEdades);
            }else{
                System.out.println("No ingresaste ninguna edad válida");
            }
            
            System.out.println("¿Desea continuar? Escriba 1 para Si, 0 para no.");
            continuar = lector.nextInt();
            
        } while (continuar == 1);
        
        System.out.println("Chaooo!!.");
    }
}
