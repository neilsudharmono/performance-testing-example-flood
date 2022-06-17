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
    
    async function checkProjectOverview(browser) {
        // check if the project listing row is appear
        await browser.wait(Until.elementIsVisible(By.css('[data-testid=projectStatus]')))

        // check if its load all the items
        const reports = await browser.findElements(By.css('[data-testid=link-ProjectDetails]'))

        assert(reports.length > 0, 'project data is loaded') 

        // record it as screenshot
        await browser.takeScreenshot()

    }
    

	step('Check Project Overview', async browser => {
        // visit project page
        await browser.visit(pageURLs.projectOverview)

        // check if project row is loaded
        checkProjectOverview(browser)
	})
	
}
