import assert from 'assert'
import { step, TestSettings, By, Until, beforeAll, afterAll } from '@flood/element'
import {testSettings, pageURLs} from '../Setting'
import {doLogin} from '../GeneralMethod'

export const settings: TestSettings = {
	loopCount: testSettings.loopCount,
	clearCookies: testSettings.clearCookies,
	actionDelay: testSettings.actionDelay,
    stepDelay: testSettings.stepDelay
    
    
}


export default () => {

	/*beforeAll(async (browser) => {
        // visit instructs the browser to launch, open a page, and navigate to clipspeccom-dev.azurewebsites.net
		await doLogin(browser);

    })*/

    let exportTrue = false;
    let num;

    
    async function checkExportPDFTrade(browser) {
        
        // check if the project listing row is appear
        
        await browser.wait(Until.elementIsVisible(By.css('[data-testid=exportButton]')))
        
        if(exportTrue)
        {
        
        await browser.click(By.css('[data-testid="toggle-dropdown"]'));
        await browser.click(By.css('[value="trade"]'));
        await browser.click(By.css('[data-testid=exportButton]'));
        
        }
        

    }
    

	step('Export PDF', { waitTimeout: '90s' } ,  async browser => {

        //get random number, if it get 1 user will click export
        num = Math.floor(Math.random() * 3) + 1;

        console.log("Randum number is " + num);
        if(num==1)
        {
          exportTrue = true;
        }

        await doLogin(browser);
        // visit project page
        await browser.visit(pageURLs.exportPdf)

        // check if project row is loaded
        checkExportPDFTrade(browser)
    })

    
    step('check project overview', { waitTimeout: '90s' } ,  async browser => {
        
         
        if(exportTrue) 
        {
            await browser.wait(Until.elementIsVisible(By.css('[class=cprsu-pdf-item]')))

            const reports = await browser.findElements(By.css('[data-testid=notice-msg]'))
    
            assert(reports.length > 0, 'export successful') 
    
            
            // record it as screenshot
            await browser.takeScreenshot()
        
        }
        else
        {
            console.log("User not click export button");
        }
        
    })

	
}
