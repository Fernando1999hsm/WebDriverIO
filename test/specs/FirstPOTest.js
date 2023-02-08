import { loginfunction, alert as alertDivNone, signIn as SignInButton, AccesTextInfoP as ParrafTextInfo } from '../pageobjects/loginPage.js'

//const logInPage = import "../pageobjects/loginPage.js";

describe('Ecommerce Application', async()=>{

    it('Login Fail Page', async()=>{
        //WebDriverIO  its  ASYNC         await makes SYNC
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")

        await loginfunction("rahulshettyacademy","learningss")
        
        await console.log(await alertDivNone.getText())
        await browser.waitUntil( async()=> await SignInButton.getAttribute('value') === 'Sign In', 
        {
            timeout: 5000,
            timeoutMsg: 'Error message is not showing up'
        })
        await console.log(await alertDivNone.getText())
        await expect(await ParrafTextInfo).toHaveTextContaining("username is rahulshettyacademy and Password is learning")
    })

    xit('Login Success Page', async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        await $("#signInBtn").click()
        //wait until this button display
        await $(".btn-primary").waitForExist()
        //url
        await expect(browser).toHaveUrlContaining("shop")
        await expect(browser).toHaveTitle("ProtoCommerce")
    })

})

//to run the script:
//npx wdio run ./wdio.conf.js
//npx wdio run wdio.conf.js

/* elements from page to webdriver
id - #id - #username
class name - .className - .form-control

tragname[attributestag='value'] - - input[name='username']

xpath:
//tagname[@attribute='value'] -  - //input[@type='password']

parentTag, to childTag

*/