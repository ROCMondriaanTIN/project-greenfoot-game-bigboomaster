import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Key here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Key extends Actor
{
    public static int HERO_WIDTH;
    public static int HERO_HEIGHT;
    public Key(int width, int heigth){
       this.HERO_WIDTH = width;
       this.HERO_HEIGHT = heigth;  
       setImage("hud_keyBlue.png");
       getImage().scale(width, heigth);
    }
    public void act() 
    {
        
    }    
}
