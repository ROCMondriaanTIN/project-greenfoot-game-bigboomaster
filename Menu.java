    import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
    import java.util.*;
    public class Menu extends World
    {
        Buttons buttons = new Buttons();
        Button2 button2 = new Button2();
        Button3 button3 = new Button3();
        static GreenfootSound MenuSound = new GreenfootSound("MenuSound.wav");
        public Menu(){
            super(1000,800,1,false);
            this.setBackground("optieMenu.png");
            prepare();
            MenuSound.playLoop();
        }
        public void act(){
            allButtons();
        }
        
        public void prepare(){
        addObject(buttons,498,545);
        addObject(button2,202,545);
        addObject(button3,816,545);
    }

    public void allButtons(){
        if (Greenfoot.mouseClicked(buttons)) {
            Greenfoot.setWorld(new Level1());
            MenuSound.stop();
        }
        else if (Greenfoot.mouseClicked(button2)) {
            Greenfoot.setWorld(new VeranderSpeler());
            MenuSound.stop();
        }
        else if (Greenfoot.mouseClicked(button3)) {
            Greenfoot.setWorld(new LevelSelect());
            MenuSound.stop();
        }        
    }

    
}
