
import greenfoot.*;

/**
 *
 * @author R. Springer
 */
public class Enemy extends Mover {

    private int walkRange;
    private int xMin;
    private int xMax;
    private boolean firstAct;
    private int speed;
    public static int HERO_WIDTH;
    public static int HERO_HEIGHT;

    public Enemy(int width, int heigth) {
        super();
        setImage("pokerMad.png");
        getImage().scale(width, heigth);
        getImage().mirrorHorizontally();
        this.HERO_WIDTH = width;
        this.HERO_HEIGHT = heigth;
        walkRange = 140;
        firstAct = true;
        speed = 1;
    }

    @Override
    public void act() {
        int x = getX();
        int y = getY();

        if (firstAct) {
            firstAct = false;
            xMin = x - walkRange / 2;
            xMax = x + walkRange / 2;
        }

        velocityX = speed;
        applyVelocity();
        if (getX() >= xMax) {
            speed *= -1;
            x = xMax;
            getImage().mirrorHorizontally();
        } else if (getX() <= xMin) {
            speed *= -1;
            x = xMin;
            getImage().mirrorHorizontally();
        }
    }
}
