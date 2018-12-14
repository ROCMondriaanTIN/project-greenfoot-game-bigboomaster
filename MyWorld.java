
import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 *
 * @author R. Springer
 */
public class MyWorld extends World {

    private CollisionEngine ce;
    Hero hr;
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
        if(Greenfoot.mouseClicked(null)){
            for(Key key: hr.getKeysInRange()) {
                if(Greenfoot.getMouseInfo().getActor().equals(key)){ 
                    removeObject(key);
                    Greenfoot.playSound("smb3_1-up.wav");
                    Punten.scoreKey();
                }
            }
        }
         if(Greenfoot.mouseClicked(null)){
            for(Letter letter: hr.getLettesInRange()) {
                if(Greenfoot.getMouseInfo().getActor().equals(letter)){ 
                    removeObject(letter);
                    Hero.letter ++;
                    Greenfoot.playSound("smb3_1-up.wav");
                    Punten.scoreLetter();
                }
            }
        }
    }

    public void act(){
        removeKey();
    }
}
