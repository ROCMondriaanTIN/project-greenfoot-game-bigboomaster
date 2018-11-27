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
    
    LevelButtons lb1 = new LevelButtons("level1.png");
    LevelButtons lb2 = new LevelButtons("level2.png");
    LevelButtons lb3 = new LevelButtons("level3.png");
    LevelButtons lb4 = new LevelButtons("level4.png");
    LevelButtons lb5 = new LevelButtons("level5.png");
    LevelButtons lb6 = new LevelButtons("level6.png");
    LevelButtons lb7 = new LevelButtons("level7.png");
    LevelButtons lb8 = new LevelButtons("level8.png");
    LevelButtons lb9 = new LevelButtons("level9.png");
    LevelButtons lb10 = new LevelButtons("level10.png");
    
    public void buttonImages(){
      addObject(lb1,70,350);
      addObject(lb2,270,350);
      addObject(lb3,470,350);
      addObject(lb4,670,350);
      addObject(lb5,870,350);
      addObject(lb6,70,570);
      addObject(lb7,270,570);
      addObject(lb8,470,570);
      addObject(lb9,670,570);
      addObject(lb10,870,570);
    }
    
    public void buttonUse(){
            if (Greenfoot.mouseClicked(lb1)) {
            Greenfoot.setWorld(new Level1());
        }
    }
    
    public void act(){
     buttonImages();
     buttonUse();
    }
}
