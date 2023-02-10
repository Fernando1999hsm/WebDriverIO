import { loginfunction, alert as alertDivNone, signIn as SignInButton, AccesTextInfoP as ParrafTextInfo } from '../pageobjects/loginPage'

import { checkout as CheckOut, cards as CardsP, addProductToCart} from '../pageobjects/shop'

import { productPrices, sumOProducts, totalFormattedPrice } from '../pageobjects/reviewPage'

import { expect as expectChai } from "chai";
//const logInPage = import "../pageobjects/loginPage.js";

//
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test\testData\LoginTest,json'))
let e2ecredentials = JSON.parse(fs.readFileSync('test\testData\e2eTesting.json'))

describe('Ecommerce Application', async()=>{

    credentials.forEach(({usrname,password})=>{
        xit('Login Fail Page', async()=>{
            //WebDriverIO  its  ASYNC         await makes SYNC
            await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
            console.log(await browser.getTitle())
            await expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")

            await loginfunction(usrname,password)
            
            await console.log(await alertDivNone.getText())
            await browser.waitUntil( async()=> await SignInButton.getAttribute('value') === 'Sign In', 
            {
                timeout: 5000,
                timeoutMsg: 'Error message is not showing up'
            })
            await console.log(await alertDivNone.getText())
            await expect(await ParrafTextInfo).toHaveTextContaining("username is rahulshettyacademy and Password is learning")
            //aqui se perdio todo
        })
    })
    e2ecredentials.forEach( ({products}) =>{
        xit('End to End Test', async()=>{
            //case from eCommerceE2E.js
            //const products = ['iphone X', 'Blackberry']
            await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
            await loginfunction("rahulshettyacademy","learning")
            await CheckOut.waitForExist()
            await addProductToCart(products)
            await link.click()
            const sumOfProducts = await sumOProducts()
            const totalIntegerValue = await totalFormattedPrice()
    
            await expectChai(sumOfProducts).to.equal(totalIntegerValue)
        
            await $(".btn-success").click()
            await $("#country").setValue("ind")
            await $(".lds-ellipsis").waitForExist({reverse:true})
            //reverse:true makes continue ounce it desapear
            await $("=India").click()
            await $("input[type='submit']").click()
            await expect($(".alert-success")).toHaveTextContaining("Success")
    
        })
    })

})