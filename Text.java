import greenfoot.*;
 
public class Text extends Actor
{
    public int timer = 0;
    public Text()
    {
        this("");
    }
 
    public Text(String text)
    {
        setText(text);
    }
 
    public void setText(String text)
    {
        setImage(new GreenfootImage(text, 24, Color.BLACK, new Color(0, 0, 0, 0)));
    } 
}
