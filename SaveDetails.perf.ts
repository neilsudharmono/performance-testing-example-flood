import assert from 'assert'
import { Condition, step, RecoverWith, TestSettings, By, Until, beforeAll, Browser, beforeEach, Key } from '@flood/element'

export const settings: TestSettings = {
	loopCount: -1,
	clearCookies: false,
    waitUntil: 'visible',
    chromeVersion:'stable',
    waitTimeout: 120,
	actionDelay: 10,
    stepDelay: 15,
    clearCache: true
}

export const options = {
    username: 'administrator.clipspec@yopmail.com',
    password: 'Welcome000*',
    loginUrl: 'https://clipspec-dev.azurefd.net'
}


export const usernameAdmin = [
    'admin0cp@yopmail.com',
    'admin1cp@yopmail.com',
    'admin2cp@yopmail.com',
    'admin3cp@yopmail.com',
    'admin4cp@yopmail.com',
    'admin5cp@yopmail.com',
    'admin6cp@yopmail.com',
    'admin7cp@yopmail.com',
    'admin8cp@yopmail.com',
    'admin9cp@yopmail.com',

]

export const pageURLs = {
    dashboard: 'https://clipspec-dev.azurefd.net/#/',
    project: 'https://clipspec-dev.azurefd.net/projects#/',
    masterProduct: 'https://clipspec-dev.azurefd.net/masterproducts#/',
    productBuilderSet: 'https://clipspec-dev.azurefd.net/builderproducts#/ead22520-3e74-4c04-82ea-2d701919eda4/products',
    surchargeBuilderSet:'https://clipspec-dev.azurefd.net/builderproducts#/ead22520-3e74-4c04-82ea-2d701919eda4/surcharges',
    business :'https://clipspec-dev.azurefd.net/businessaccounts#/',
    businessDetail : 'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd',
    builder : 'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd',
    builderDetail : 'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd/builder/5461e52c-762c-49f2-9f41-1c233e042ff4',
    productDetail : 'https://clipspec-dev.azurefd.net/masterproducts#/3bd72964-40ae-4001-92f7-42feeab2539f/ZFREMOTE',
    productBuilderDetail : 'https://clipspec-dev.azurefd.net/builderproducts#/d3cee30f-affb-414c-b480-8a7eedba6731/products/4c31d53d-e43c-421a-a9c4-b32845c8a9a2/4CB340%2F6',
    surcharges: 'https://clipspec-dev.azurefd.net/mastersurcharges#/',
    doLogin : 'https://clipspec-dev.azurefd.net/account/dologin',
}

export const pageProjectDetail=[
    'https://clipspec-dev.azurefd.net/projects#/projects/1b06ba10-09c7-4ff0-9fbd-a7fdc39213a7/details',
    'https://clipspec-dev.azurefd.net/projects#/projects/e9297d91-72ba-4f8e-9daa-c9da22027f3d/details',
    'https://clipspec-dev.azurefd.net/projects#/projects/eeae47e4-62c1-4bd0-a425-498adba0559b/details',
    'https://clipspec-dev.azurefd.net/projects#/projects/e9297d91-72ba-4f8e-9daa-c9da22027f3d/details',
    'https://clipspec-dev.azurefd.net/projects#/projects/c2bf402d-10f2-4b16-8b90-cf6983c38c3c/details',
    'https://clipspec-dev.azurefd.net/projects#/projects/13c343ff-9db7-46b0-9611-41fa1cd4cb9c/details',
    'https://clipspec-dev.azurefd.net/projects#/projects/23a2e2bb-b2f3-4514-8c67-174ba6273bf6/details',
    'https://clipspec-dev.azurefd.net/projects#/projects/a55838c4-ae29-40dd-863f-3b860c93e24f/details',
    'https://clipspec-dev.azurefd.net/projects#/projects/074d1671-2578-4c57-b2ba-1b8fb4adc018/details',
    'https://clipspec-dev.azurefd.net/projects#/projects/76d5adf2-23d1-408f-9bc9-d689e78443a3/details',

]



export const pageBusinessDetail=[
     'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd/builder/ba8c673e-67a3-49d0-a66e-0c6e3323659d/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd/builder/b9378c88-dea0-4255-81d8-15f42fb295e7/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd/builder/5461e52c-762c-49f2-9f41-1c233e042ff4/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd/builder/fc167714-9412-426c-a2cc-1f7e76ebbbb0/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd/builder/0f597308-b4e4-49d8-9ab2-24104a41a4e9/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd/builder/67d09d87-0071-49b5-b157-249fe210119d/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd/builder/21fc8ed0-6e73-4a80-b39e-27924ea1f213/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd/builder/99e67ec0-d772-43eb-be25-2801e9241a9d/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd/builder/c44e9c6c-127a-4fec-a020-2b5c9eb20d45/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/125bb013-ac0f-4c53-8176-7e4d7a9836dd/builder/d430a115-7325-4fb7-b2e6-2c00229a04a8/details',

]

export const pageAccountDetail = [
     'https://clipspec-dev.azurefd.net/businessaccounts#/a4e9ede6-77f3-484e-88c2-171cfb2fa0d4/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/7dfe4610-a097-4e08-b09a-90bddc633007/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/ecd918f4-94f7-4f1e-89c5-aaaff86cdaa2/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/c17811d8-5511-40c2-9b67-f218d93ecfdc/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/acf1d280-0563-4353-a9ca-00069ebf710e/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/466f88f5-4c8a-4a3d-8d15-9e0f37ec54d7/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/8058b390-b43e-437b-add1-cc02dc2089d2/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/dbf1a65a-6c48-4e67-92f7-f9d712868215/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/6530b6ec-49e8-4914-a00a-6fab35df187a/details',
     'https://clipspec-dev.azurefd.net/businessaccounts#/6ea28565-ced9-4b54-993c-591145429991/details'

]

export const defaultPageLoadItems = 12
export const singleElementIsAppear = 1



export default () => {

	/*beforeAll(async (browser) => {
        // visit instructs the browser to launch, open a page, and navigate to clipspeccom-prod.azurewebsites.net
        //await doLogin(browser);
    
        num = await randomNumber();
        
        console.log('Test number :'+num)

    })*/

    const doLogin = async (browser:Browser) => {
        await browser.visit(options.loginUrl,{waitUntil:'load',timeout:0});
        console.log('Login');
        let num = Math.floor(Math.random() * 10) ;
        let login = await browser.maybeFindElement(By.visibleText('Please wait'))
        let serverError = await browser.maybeFindElement(By.visibleText('Server error'))
        let triggerLogin = false

        if(login!=null){
            triggerLogin = true
        }

        if(serverError!=null){
            triggerLogin = true
        }
        

        if(triggerLogin == true)
        {

            await browser.takeScreenshot();
            //await browser.click(By.css('.btn-skin-1'));
            await typeEmail(browser, usernameAdmin[num]);
            await typePassword(browser, options);
            await browser.wait(Until.urlIs('https://clipspec-dev.azurefd.net/#/'))
            console.log('Login Successfull');
        }
        else
        {
            console.log('Relogin Successfull');
        }
    

    }

    const typeEmail = async (browser: Browser, username) => {
        await browser.wait(Until.elementIsVisible(By.css('input[id=inputEmail]')))
        await browser.type(By.css('input[id=inputEmail]'), username)
        await browser.click(By.css('input[type=submit]'));
    }

    const typePassword = async (browser: Browser,options: { username: string; password: string; loginUrl?: string; }) => {
        await browser.wait(Until.elementIsVisible(By.css('input[id=inputPassword3]')))
        await browser.type(By.css('input[id=inputPassword3]'), options.password)
        await browser.click(By.css('input[type=submit]'));
    }

    

    //PROJECTS
        
    async function SaveBuilderDetail(browser) {
        // check builder detail page appear
        await browser.wait(Until.elementIsVisible(By.css('[data-testid=builder-name]')))

        await browser.click(By.css('[data-testid=button-submit]'));

        await browser.wait(Until.elementIsVisible(By.css('[data-testid=notice-msg]')))

        // record it as screenshot
        await browser.takeScreenshot()

    }

    async function SaveBusinessDetail(browser) {
        // check business detail page appear
        await browser.wait(Until.elementIsVisible(By.css('[data-testid=business-account-name]')))

        await browser.click(By.css('[data-testid=button-submit]'));

        await browser.wait(Until.elementIsVisible(By.css('[data-testid=notice-msg]')))

        // record it as screenshot
        await browser.takeScreenshot()
    }

    async function SaveProjectDetails(browser) {
        // check project detail page appear
        await browser.wait(Until.elementIsVisible(By.css('[data-testid=last-modified-by]')))

        await browser.click(By.css('[data-testid=button-submit]'));

        await browser.wait(Until.elementIsVisible(By.css('[data-testid=notice-msg]')))

        // record it as screenshot
        await browser.takeScreenshot()

    }    

    step('Login', async browser => {
        await doLogin(browser);
        // record it as screenshot
        await browser.takeScreenshot()
        
    })

    //PROJECT DETAILS

    step('1. Visit Project Listing', async browser => {
        // visit project page
        let num = Math.floor(Math.random() * 10) ;
        let randomURL = pageProjectDetail[num];
        await browser.visit(randomURL)

      
            
    })

    step('Save Project Detail', async browser => {

        SaveProjectDetails(browser);
            
    })

    //BUSINESS DETAILS
    step('2. Visit Business Detail', async browser => {
        // visit Business Detail page
        let num = Math.floor(Math.random() * 10) ;
        let randomURL = pageAccountDetail[num];
        await browser.visit(randomURL)

 
    })

    step('Save Business Detail', async browser => {
   
        SaveBusinessDetail(browser)
    })
    

    //BUILDER DETAILS
    step('3. Visit Builder Detail', async browser => {
        // visit Builder Detail page
        let num = Math.floor(Math.random() * 10);
        let randomURL = pageBusinessDetail[num];
        await browser.visit(randomURL)

    })

    step('Save Builder Detail', async browser => {
   
        // check if Builder data is loaded
        SaveBuilderDetail(browser)
    })

    
	
}
