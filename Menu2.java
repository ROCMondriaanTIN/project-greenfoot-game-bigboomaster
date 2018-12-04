import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Menu2 here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Menu2 extends World
{
    public Menu2()
    {    
        super(1000,800,1,false);
        this.setBackground("background6.png");
        prepare();
        Greenfoot.start();
        Music.MenuSound.playLoop();
        Music.MenuSound.setVolume(70);
    }

    public void act(){
        advandce();
    }

    private void prepare()
    {
        MenuFoto menuFoto = new MenuFoto();
        addObject(menuFoto,512,362);    
    }

    private void advandce(){
        if(Greenfoot.isKeyDown("enter")){
            Greenfoot.setWorld(new VeranderSpeler());
        }
    }
}
