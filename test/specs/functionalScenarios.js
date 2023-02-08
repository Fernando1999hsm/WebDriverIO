import { expect as expectChai } from "chai";
describe('Functional Testing on Application', ()=>{

    xit('Scrolling and Mouse hover', async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.maximizeWindow();
        //await $("#mousehover").scrollIntoView()
        await browser.scroll(0,1000);
        await browser.pause(3000)
        await $("#mousehover").moveTo()
        await browser.pause(3000)
        await $("=Top").click()
        //await $("//a[text()='Top']").click()
        await browser.pause(3000)
    })

    xit('Javascript Alerts', async()=>{//checar javascript alers, porque no funciona
        await browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
        await $("button").doubleClick()
        //await $("button").click()
        await browser.pause(3000)
        //await browser.waitUntil(isAlertOpen());
        console.log("Prueba de estado:")
        //console.log(await browser.isAlertOpen())
        //expectChai(await browser.isAlertOpen()).to.be.true
        //expectChai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
        //console.log(await browser.getAlertText())
        await browser.pause(3000)
        await browser.acceptAlert();
        await browser.pause(3000)
    })

    xit('Web Tables Sort Validation',async()=>{
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("tr th:nth-child(1)").click()
        //retrive list of veggie name into array A
        //sort the array A -> array B
        //Compare array a and array B
        await browser.pause(2000)
        const veggiesLocators = await $$("tr td:nth-child(1)")
        //const originalVeggiesName = await veggiesLocators.map(async veggie=> await veggie.getText())
        const originalVeggiesName = await Promise.all(veggiesLocators.map(async veggie => await veggie.getText()))
        console.log("Normal Names:"+originalVeggiesName)
        let veggies = originalVeggiesName.slice()
        //array are passed by reference
        let sortedVeggies = veggies.sort()
        console.log("Sorted Names:"+sortedVeggies)
        expectChai(originalVeggiesName).to.eql(sortedVeggies)
    })

    xit('Web Tables Filter Validation', async()=>{
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("input[type='search']").setValue("Tomato")
        const veggiesLocators = await $$("tr td:nth-child(1)")
        await expect(veggiesLocators).toBeElementsArrayOfSize({eq:1})
        console.log(await veggiesLocators[0].getText())
        await expect(await veggiesLocators[0]).toHaveTextContaining("Tomato")

    })
})