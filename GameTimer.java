import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Timer here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class GameTimer extends Actor
{
    public void act() 
    {
        setImage(new GreenfootImage("Timer: " + Level1.startSeconds, 30, Color.BLUE, Color.WHITE));
    } 
}
