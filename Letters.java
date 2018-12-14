import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Letters here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Letters extends Mover
{
    public static char letter;
    public static int HERO_WIDTH;
    public static int HERO_HEIGHT;
    public Letters(char letter, int width, int heigth){
        this.letter = letter;
        this.HERO_WIDTH = width;
        this.HERO_HEIGHT = heigth;  
        setImage("letter_" + letter + ".png");
        getImage().scale(width, heigth);
    }  
}
