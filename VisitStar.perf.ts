import assert from 'assert'
import { Condition, step, RecoverWith, TestSettings, By, Until, beforeAll, Browser, beforeEach, Key } from '@flood/element'
export const settings: TestSettings = {
    loopCount: Infinity,
    waitTimeout: 60,
    responseTimeMeasurement:'step'
}
export const pageURLS = {
    viewmystar: 'https://mystar.givetocarols.com/view?star=7226833',
    viewstar: 'https://mystar.givetocarols.com/'
}

export default () => {
step('Visit site', async (browser) => {
    await browser.visit(pageURLS.viewmystar)
    await browser.wait (Until.elementIsVisible(By.css('[class="animation-locate-button"]')))
    //await browser.takeScreenshot()
  })

  step('Visit View All Stars', async (browser)=> {
    await browser.visit(pageURLS.viewstar)
    await browser.wait (Until.elementIsVisible(By.css('[class="donation-target-title"]')))
    //await browser.takeScreenshot()
  })  
}