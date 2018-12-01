import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class VeranderSpeler here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class VeranderSpeler extends World
{

    public static int speler = 1;
    
    public VeranderSpeler(){    
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(1000, 800, 1); 
        setBackground("charactarselect.png.png");
        prepare();
    }
    Speler1 speler1 = new Speler1();
    Speler2 speler2 = new Speler2();
    Speler3 speler3 = new Speler3();
    Speler4 speler4 = new Speler4();
    private void prepare(){
        addObject(speler4,177,540);
        speler4.setLocation(305,540);
        speler4.setLocation(336,540);
        speler4.setLocation(795,540);
        addObject(speler1,193,540);
        addObject(speler2,317,540);
        addObject(speler3,464,540);
        speler4.setLocation(65,540);
        speler3.setLocation(432,540);
        speler3.setLocation(434,540);
        speler2.setLocation(308,540);
    }

    public void select(){
        if (Greenfoot.mouseClicked(speler1)) {
            Greenfoot.setWorld(new LevelSelect());
            speler = 1;
        }
        else if (Greenfoot.mouseClicked(speler2)) {
            Greenfoot.setWorld(new LevelSelect());
            speler = 2;
        }
        else if (Greenfoot.mouseClicked(speler3)) {
            Greenfoot.setWorld(new LevelSelect());
            speler = 3;
        }
        else if (Greenfoot.mouseClicked(speler4)) {
            Greenfoot.setWorld(new LevelSelect());
            speler = 4;
        }
    }
    
    public void act(){
    select();
    }
}
