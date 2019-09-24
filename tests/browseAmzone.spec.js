// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('browse_Amzone', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('browse_Amzone', async function() {
    await driver.get("https://www.amazon.com/")
    await driver.setRect(1920, 1057)
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.executeScript("window.scrollTo(0,0)")
    {
      const element = await driver.findElement(By.xpath("//a[@id=\'nav-orders\']/span[2]"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.xpath("//a[@id=\'nav-orders\']/span[2]")).click()
    {
      const element = await driver.findElement(By.id("nav-your-amazon"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    {
      const element = await driver.findElement(By.id("nav-your-amazon-text"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.linkText("Today\'s Deals")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.executeScript("window.scrollTo(0,45)")
  })
})