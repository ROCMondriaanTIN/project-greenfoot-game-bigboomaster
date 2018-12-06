
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
        /*System.out.println("0");
        if(hr.inRangeOfKey == true){
        System.out.println("1");
        if(Greenfoot.mouseClicked(Key.class)){
        System.out.println("2");
        removeObjects(getObjects(Key.class));
        }
        }*/
        System.out.println("0");
        if(Greenfoot.mouseClicked(null)){
            for(Key key: hr.getKeysInRange()) {
                if(Greenfoot.getMouseInfo().getActor().equals(key)){ 
                    removeObject(key);
                }
            }
            
        }
        /*
        if(hr.inRangeOfKey.size() > 0){
            System.out.println("1");
            if(Greenfoot.mouseClicked(Key.class)){
                System.out.println("2");
                for(Object object : hr.inRangeOfKey){
                    System.out.println("3");
                    if (object instanceof Key){
                        System.out.println(hr.inRangeOfKey.size());
                        removeObject((Key)object);
                    }
                }
            }
        }*/
    }

    public void act(){
        removeKey();
    }
}
