import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Music here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Music
{
    static GreenfootSound bgm1 = new GreenfootSound("bgm1.wav");
    static GreenfootSound MenuSound = new GreenfootSound("MenuSound.wav");
    
    public static void levendeHero(){
    if(Hero.inLevel == false){
        bgm1.stop();
    }
}
}
