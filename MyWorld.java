
import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 *
 * @author R. Springer
 */
public class MyWorld extends World {

    private CollisionEngine ce;
    
    /**
     * Constructor for objects of class MyWorld.
     *
     */
    public MyWorld() {
        super(1000,800,1,false);
        Greenfoot.setWorld(new Menu2());
        Greenfoot.setSpeed(43);
    }
    public void removeKey(){
        if(Greenfoot.mouseClicked(getObjects(Key.class))){
            removeObjects(getObjects(Key.class));
        }
    }
    
}
