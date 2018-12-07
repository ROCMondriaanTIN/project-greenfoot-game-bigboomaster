import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Punten here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Punten extends Actor
{
    static int punten = 0;
    public void addedToWorld(World w)
    {
        getWorld();
    }
    public void act() 
    {
        setImage(new GreenfootImage("Score: " + punten, 30, Color.BLUE, Color.WHITE));
    }    
    public static void scoreKey()
    {
        punten += 100;
    }
    public static void scoreLetter()
    {
        punten += 500;
    }
}
