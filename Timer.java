import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
public class Timer extends World
{

    public static int time;
    public Timer()
    {    
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(1000,800, 1);
    }
    public static void countTime()
    {
        time--;
        if(time == 0){
        Greenfoot.setWorld(new GameOver());
        }          
    }

}
