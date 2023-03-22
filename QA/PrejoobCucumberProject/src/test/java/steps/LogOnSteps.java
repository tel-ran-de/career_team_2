package steps;

import io.cucumber.java.en.Given;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class LogOnSteps {

    WebDriver driver;

    @Given("Navigate to Home Page")
    public void navigateToLogOnPage(){
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://localhost:3000/");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);




    }


}
