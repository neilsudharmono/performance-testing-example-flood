import { step, TestSettings, beforeAll } from '@flood/element'
import {testSettings, pageURLs} from './Setting'
import {doLogin} from './GeneralMethod'

export const settings: TestSettings = {
	loopCount: testSettings.loopCount,
	clearCookies: testSettings.clearCookies,
	waitUntil: 'visible',
	actionDelay: testSettings.actionDelay,
  	stepDelay: testSettings.stepDelay,
}


export default () => {

	beforeAll(async (browser) => {
		await doLogin(browser);

	})

	step('Start', async browser => {
		// visit instructs the browser to launch, open a page, and navigate to clipspeccom-dev.azurewebsites.net
		await browser.visit(pageURLs.doLogin)
		await browser.takeScreenshot()
	})

	// browser keyword can be shorthanded as "b" or anything that is descriptive to you.
	step('Step 2 - open projects', async browser => {
		
		await browser.visit(pageURLs.project)
		await browser.takeScreenshot()
		// check if loading is not appear

		// check if project row is loaded
	})
}
