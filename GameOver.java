import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class GameOver here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class GameOver extends World
{

    /**
     * Constructor for objects of class GameOver.
     * 
     */
    public GameOver()
    {    
        super(1000, 800, 1);
        this.setBackground("gameOver.png"); 
    }

    public void act(){
        advandce();
    }

    private void advandce(){
        if(Greenfoot.isKeyDown("enter")){
            Greenfoot.setWorld(new Menu());
        }
    }
}
