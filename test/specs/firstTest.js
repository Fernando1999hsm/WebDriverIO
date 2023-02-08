describe('Ecommerce Application', async()=>{

    xit('Login Fail Page', async()=>{
        //WebDriverIO  its  ASYNC         await makes SYNC
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")
        //css selector, Xpath
        await $("input[name='username']").setValue("rahulshettyacademy")
        //await browser.pause(3000)
        await $("#username").setValue("SecondCSS")
        //await browser.pause(3000)
        const password = $("//input[@type='password']")
        await password.setValue("learningss")
        await $("#signInBtn").click()
        await console.log(await $(".alert-danger").getText())
        await browser.waitUntil( async()=> await $("#signInBtn").getAttribute('value') === 'Sign In', 
        {
            timeout: 5000,
            timeoutMsg: 'Error message is not showing up'
        })
        await console.log(await $(".alert-danger").getText())
        await expect($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")
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