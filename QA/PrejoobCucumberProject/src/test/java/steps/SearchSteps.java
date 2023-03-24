package steps;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.concurrent.TimeUnit;

public class SearchSteps {

    WebDriver driver;

    String URL = "https://dinamo.mzas.de";

    @Before
    public void navigateHomePage() {
        System.setProperty("webdriver.chrome.driver","/Users/nataliaghibner/ga_tools/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        driver = new ChromeDriver(options);
        driver.manage().window().maximize();

    }
    @After
    public void t() { driver.close();}




    @Given("Navigate to Home Page")
    public void SearchProfessionData() {

        driver.get(URL);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }


    @When("we click on the search field")
    public void ClickOnTheSearchField() {
        //id="search-input-field"
        driver.findElement(By.cssSelector("[data-qa-id='search-input-field']")).click();
        driver.findElement(By.cssSelector("[data-qa-id='search-input-field']")).clear();
        driver.findElement(By.cssSelector("[data-qa-id='search-input-field']")).sendKeys("Financial Analyst");
        driver.findElement(By.cssSelector("[class = 'Button_button__wK3Rr']")).click();

    }
     @Then("See video for Financial Analyst")
     public void seeVideoFinancialAnalyst(){
         Assert.assertTrue(driver.findElements(By.cssSelector("[data-qa-id='open-video-link']:first-child > p")).get(1).getText().contains("Financial"));
         Assert.assertTrue(driver.findElements(By.cssSelector("[data-qa-id='open-video-link']:first-child > p")).get(1).getText().contains("Quantitative Analyst"));
     }


    @Given("Search by industry")
    public void SearchIndustryData() {
    }

    @When("we click on the search field 1")
    public void ClickOnTheSearchField1() {
        driver.findElement(By.cssSelector("[data-qa-id='search-input-field']")).click();
        driver.findElement(By.cssSelector("[data-qa-id='search-input-field']")).clear();
        driver.findElement(By.cssSelector("[data-qa-id='search-input-field']")).sendKeys("Quantitative Analyst");
        driver.findElement(By.cssSelector("[class = 'Button_button__wK3Rr']")).click();
    }

    @Then("See a video of Quantitative Analyst")
    public void seeVideoQuantitativeAnalyst() {
        Assert.assertTrue(driver.findElements(By.cssSelector("[data-qa-id='open-video-link']:first-child > p")).get(1).getText().contains("Quantitative Analyst"));
    }


    @Given("Negative Search Test")
    public void NegativeSearchData() {
    }

    @When("we click on the search field 2")
    public void ClickOnTheSearchField2() {
        driver.findElement(By.cssSelector("[placeholder='sea']")).click();
        driver.findElement(By.cssSelector("[placeholder='sea']")).clear();
        driver.findElement(By.cssSelector("[placeholder='sea']")).sendKeys("sea");
        driver.findElement(By.cssSelector("[class = 'Button_button__wK3Rr']")).click();
    }
    @Then("an error")
    public void AnError(){

    }
}