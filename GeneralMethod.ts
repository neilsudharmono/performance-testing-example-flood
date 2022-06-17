
import { By, Until, Browser} from '@flood/element'
import {options, pageURLs} from './Setting'

const doLogin = async (browser:Browser) => {
    await browser.visit(options.loginUrl);
    console.log('Login');

    let login = await browser.maybeFindElement(By.visibleText('Login'))

    if(login != null)
    {

        await browser.takeScreenshot();
        await browser.click(By.css('.btn-skin-1'));
        await typeEmail(browser, options);
        await typePassword(browser, options);
        await browser.wait(Until.urlIs(pageURLs.dashboard));
        console.log('Login Successfull');
    }
    else
    {
        console.log('Relogin Successfull');
    }
   

}

const  checkLoadingAnimationNotAppear = async (browser:Browser) => {
    // Get a collection of handles to all h1,h2, and h3 nodes
    let animationAppear = await browser.wait(Until.elementIsNotVisible(By.css("[data-testid=text-msg]")))
    console.log('Loading is appear : ' + animationAppear)
}

const typeEmail = async (browser: Browser,options: { username: string; password: string; loginUrl?: string; }) => {
    await browser.wait(Until.elementIsVisible(By.css('input[id=inputEmail]')))
    await browser.type(By.css('input[id=inputEmail]'), options.username)
    await browser.click(By.css('input[type=submit]'));
}

const typePassword = async (browser: Browser,options: { username: string; password: string; loginUrl?: string; }) => {
    await browser.wait(Until.elementIsVisible(By.css('input[id=inputPassword3]')))
    await browser.type(By.css('input[id=inputPassword3]'), options.password)
    await browser.click(By.css('input[type=submit]'));
}

export {
    doLogin,
    checkLoadingAnimationNotAppear
}
