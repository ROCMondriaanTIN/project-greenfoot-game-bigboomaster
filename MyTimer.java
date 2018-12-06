import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import java.util.Timer;
import java.util.TimerTask;
public class MyTimer extends Actor
{

    public int secondsPassed = 0;

    Timer timer = new Timer();

    TimerTask task = new TimerTask(){

            public void run(){

                secondsPassed ++;

                getWorld().showText("Time: " + secondsPassed, 450, 300);

            }

        };
        public void runTimer(){
           //timer.scheduleAtFixedRate(task, 1000, 1000);
        }

    public void act(){
         runTimer();
    } 

}
