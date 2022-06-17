import assert from 'assert'
import { step, TestSettings, By, Until, beforeAll, afterAll } from '@flood/element'
import {testSettings, pageURLs,singleElementIsAppear} from './Setting'
import {doLogin,checkLoadingAnimationNotAppear} from './GeneralMethod'


export const settings: TestSettings = {
	loopCount: testSettings.loopCount,
	clearCookies: testSettings.clearCookies,
	waitUntil: 'visible',
	actionDelay: testSettings.actionDelay,
  	stepDelay: testSettings.stepDelay,
}


export default () => {

	beforeAll(async (browser) => {
        // visit instructs the browser to launch, open a page, and navigate to clipspeccom-dev.azurewebsites.net
		await doLogin(browser);

    })
    
    async function checkProductDetailsAppear(browser) {
        // check if the Product Detail row is appear
        await browser.wait(Until.elementIsVisible(By.css('[data-testid=defaultDescription]')))

        // check if its load all the items
        const reports = await browser.findElements(By.css('[data-testid=productImage]'))

        assert.equal(reports.length, singleElementIsAppear, 'all Product details loaded') 

        // record it as screenshot
        await browser.takeScreenshot()

    }
    

	step('Check Product Details Loaded', async browser => {
        // visit Product Details page
        await browser.visit(pageURLs.productDetail)

        // check if loading is not appear
        //await checkLoadingAnimationNotAppear(browser)

        // check if Product data is loaded
        checkProductDetailsAppear(browser)
	})
	
}
