import assert from 'assert'
import { step, TestSettings, By, Until, beforeAll, afterAll } from '@flood/element'
import {testSettings, pageURLs,defaultPageLoadItems} from './Setting'
import {doLogin,checkLoadingAnimationNotAppear} from './GeneralMethod'

export const settings: TestSettings = {
	loopCount: testSettings.loopCount,
	clearCookies: testSettings.clearCookies,
    waitUntil: 'visible',
    waitTimeout: 300,
	actionDelay: testSettings.actionDelay,
  	stepDelay: testSettings.stepDelay,
}


export default () => {

    
    async function checkProjectListingAppear(browser) {
        // check if the project listing row is appear
        await browser.wait(Until.elementIsVisible(By.css('[data-testid=name]')))

        // check if its load all the items
        const reports = await browser.findElements(By.css('[data-testid=projectStatus]'))

        assert(reports.length>0, 'all project data is loaded') 

        // record it as screenshot
        await browser.takeScreenshot()

    }

     
    step('Login', async browser => {
        // visit project page
        await doLogin(browser);
        
    })
    
    step('Visit Project Listing', async browser => {
        // visit project page
        await browser.visit(pageURLs.project)

        // check if project row is loaded
        checkProjectListingAppear(browser)
        
    })
	
}
