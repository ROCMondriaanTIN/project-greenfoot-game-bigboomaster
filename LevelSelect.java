import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class LevelSelect here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class LevelSelect extends World
{

    /**
     * Constructor for objects of class LevelSelect.
     * 
     */
    public LevelSelect()
    {      
        super(1000, 800, 1); 
        setBackground("background60.png");
    }
    
    LevelButtons lb1 = new LevelButtons("button_demo.png");

    public void buttonImages(){
      addObject(lb1,500,400);
    }
    
    public void buttonUse(){
            if (Greenfoot.mouseClicked(lb1)) {
            Greenfoot.setWorld(new Level1());
            Music.MenuSound.stop();
        }
    }
    
    public void act(){
     buttonImages();
     buttonUse();
    }
}
