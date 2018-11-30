
import greenfoot.*;
import javax.swing.JOptionPane;

public class Hero extends Mover {

    VeranderSpeler vs;
    private final double gravity;
    private final double acc;
    private final double drag;
    public static int HERO_WIDTH;
    public static int HERO_HEIGHT;
    private GreenfootImage run1 = new GreenfootImage("p1_walk01 L.png");
    private GreenfootImage run2 = new GreenfootImage("p1_walk02 L.png");
    private GreenfootImage run3 = new GreenfootImage("p1_walk03 L.png");
    private GreenfootImage run4 = new GreenfootImage("p1_walk04 L.png");
    private GreenfootImage run5 = new GreenfootImage("p1_walk05 L.png");
    private GreenfootImage run6 = new GreenfootImage("p1_walk06 L.png");
    private GreenfootImage run7 = new GreenfootImage("p1_walk07 L.png");
    private GreenfootImage run8 = new GreenfootImage("p1_walk08 L.png");
    private GreenfootImage run9 = new GreenfootImage("p1_walk09 L.png");
    private GreenfootImage run10 = new GreenfootImage("p1_walk10 L.png");
    private GreenfootImage run11 = new GreenfootImage("p1_walk11 L.png");
    private GreenfootImage run12 = new GreenfootImage("p1_walk01.png");
    private GreenfootImage run13 = new GreenfootImage("p1_walk02.png");
    private GreenfootImage run14 = new GreenfootImage("p1_walk03.png");
    private GreenfootImage run15 = new GreenfootImage("p1_walk04.png");
    private GreenfootImage run16 = new GreenfootImage("p1_walk05.png");
    private GreenfootImage run17 = new GreenfootImage("p1_walk06.png");
    private GreenfootImage run18 = new GreenfootImage("p1_walk07.png");
    private GreenfootImage run19 = new GreenfootImage("p1_walk08.png");
    private GreenfootImage run20 = new GreenfootImage("p1_walk09.png");
    private GreenfootImage run21 = new GreenfootImage("p1_walk10.png");
    private GreenfootImage run22 = new GreenfootImage("p1_walk11.png");

    private int frame = 1;
    private int speed = 3;
    private boolean onGround;
    public static boolean inLevel;

    public Hero(int width, int heigth) {
        super();
        this.HERO_WIDTH = width;
        this.HERO_HEIGHT = heigth;
        gravity = 9.8;
        acc = 0.6;
        drag = 0.8;
        setImage("p1.png");
        getImage().scale(width, heigth);
    }

    @Override
    public void act() {
        handleInput();
        switchChar();
        velocityX *= drag;
        velocityY += acc;
        if (velocityY > gravity) {
            velocityY = gravity;
        }
        applyVelocity();
        handleInput();
        dead();
    }
    public void dead(){
            if(inLevel == true){
            for (Actor enemy : getIntersectingObjects(Enemy.class)) {
                inLevel = false;
                if (enemy != null) {
                    getWorld().removeObject(this);
                    Greenfoot.setWorld(new GameOver());
                    return;
                }
            }
            for (Actor WaterTile : getIntersectingObjects(WaterTile.class)) {
                inLevel = false;
                if (WaterTile != null) {
                    getWorld().removeObject(this);
                    Greenfoot.setWorld(new GameOver());
                    return;
                }
            }
        }
    }

    boolean onGround(){
        Actor under = getOneObjectAtOffset(0, getImage().getHeight()/2, Tile.class);
        return under != null;
    }

    public void switchChar(){
        switch(vs.speler){
            case 1:
            setImage("p1_stand.png");
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
            break;
            case 2:
            setImage("p2_stand.png");
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
            break;
            case 3:
            setImage("p3_stand.png");
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
            break;
            case 4:
            setImage("beanSprite.png");
            getImage().scale(80, 60);
            break;
            default:
            JOptionPane.showMessageDialog(null, "Character Error", "Error", JOptionPane.WARNING_MESSAGE);
        }
    }

    public void handleInput() {
        if (Greenfoot.isKeyDown("w") && (onGround() == true)) {
            velocityY = -13;
            setImage("p1_jump.png");
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }

        else if (Greenfoot.isKeyDown("a")) {
            velocityX = -7;
            animatieLeft();
        }
        if (Greenfoot.isKeyDown("d")) {
            velocityX = 7;
            animatieRight();
        }
    }

    public int getWidth() {
        return getImage().getWidth();
    }

    public int getHeight() {
        return getImage().getHeight();
    }

    public void animatieRight() {
        if(frame == 1)
        {
            setImage(run12);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 2)
        {
            setImage(run13);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 3)
        {
            setImage(run14);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 4)
        {
            setImage(run15);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 5)
        {
            setImage(run16);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 6)
        {
            setImage(run17);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 7)
        {
            setImage(run18);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 8)
        {
            setImage(run19);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 9)
        {
            setImage(run20);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 10)
        {
            setImage (run21);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
            frame = 0;
            return;
        }
        frame ++;

    }

    public void animatieLeft() {
        if(frame == 1)
        {
            setImage(run1);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 2)
        {
            setImage(run2);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 3)
        {
            setImage(run3);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 4)
        {
            setImage(run4);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 5)
        {
            setImage(run5);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 6)
        {
            setImage(run6);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 7)
        {
            setImage(run7);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 8)
        {
            setImage(run8);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 9)
        {
            setImage(run9);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
        }
        else if (frame == 10)
        {
            setImage (run10);
            getImage().scale(HERO_WIDTH, HERO_HEIGHT);
            frame = 0;
            return;
        }
        frame ++;
    }
}
