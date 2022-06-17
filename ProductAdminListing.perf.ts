import assert from 'assert'
import { step, TestSettings, By, Until, beforeAll, afterAll } from '@flood/element'
import {testSettings, pageURLs,defaultPageLoadItems} from './Setting'
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
    
    async function checkProductListingAppear(browser) {
        // check if the product listing row is appear
        await browser.wait(Until.elementIsVisible(By.css('[data-testid=link]')))

        // check if its load all the items
        const reports = await browser.findElements(By.css('[data-testid=catCode]'))

        assert(reports.length > 0, 'all product admin data is loaded') 

        // record it as screenshot
        await browser.takeScreenshot()

    }
    

	step('Check Master Product Listing Loaded', async browser => {
        // visit product page
        await browser.visit(pageURLs.masterProduct)

        // check if loading is not appear
        //await checkLoadingAnimationNotAppear(browser)

        // check if product row is loaded
        checkProductListingAppear(browser)
	})
	
}
