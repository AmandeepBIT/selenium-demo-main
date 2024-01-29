const webdriver = require("selenium-webdriver");
const { By, Key } = require("selenium-webdriver");

describe("Test Login Page", () => {
  let driver;

  beforeEach(async () => {

    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
  });

  afterEach(async () => {
    driver.quit();
  });

  it("if login button clicked without password", async function () {
    await driver.get("https://portal.koachee.com/login");
    await driver
      .findElement(By.id("email"))
      .sendKeys("amansoft.developer@gmail.com", Key.RETURN);

      new Promise(resolve => setTimeout(resolve, 5000));
  });
});
