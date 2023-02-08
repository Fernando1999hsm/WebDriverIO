import { expect as expectChai } from "chai";
describe('Ecomerce Aplication', async()=>{

    xit('End to End Test', async()=>{
        const products = ['iphone X', 'Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        await $("#signInBtn").click()
        //wait until this button display
        //await $(".btn-primary").waitForExist()
        //el asterisco indica que busque cualquier elemento que contenga "checkout"
        
        //await $("*=Checkout").waitForExist()
        const link = await $("*=Checkout")
        await link.waitForExist()
        const cards = await $$("div[class='card h-100']")
        for(let i=0;i<await cards.length;i++){
            const card = await cards[i].$("div h4 a")
            if(products.includes(await card.getText() ) ){
                await cards[i].$("button").click()
                //also work:
                //await cards[i].$(".card-footer button").click()
            }
        }
        await link.click()
        //  //tr//td[4]/strong
        //  tr td:nth-child(4) strong
        const productPrices = await $$("//tr//td[4]/strong")
        // string->integer

        const sumOfProducts = (await Promise.all( await productPrices.map( async (productPrice)=> parseInt((await productPrice.getText()).split(".")[1].trim())) ) )
        .reduce((acc,price)=> acc+price,0)//15000
        console.log(sumOfProducts)
        //
        const TotalValue = await $("h3 strong").getText()
        const totalIntegerValue = parseInt(TotalValue.split(".")[1].trim())

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