//const expectchai = import('../../node_modules/chai/chai.js')
//var expectchai = chai.expect;
//import '../../node_modules/chai';
//var expectChai = import('chai').expect
import { expect as expectChai } from "chai";

describe('UI Controls Test Suite', async()=>{

    xit('Login Success Page', async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow();
        await $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        await password.setValue("learning")

        //what i multiple elements $$
        const radioButtons = await $$(".customradio")//also .radiotextsty
        const userDropdown = radioButtons[1]
        await userDropdown.$("span").click() //chaning locators-

        const modal= await $(".modal-body")
        await modal.waitForDisplayed()
        await $("#cancelBtn").click()

        //behaviour clicking cancel button 
        console.log(await radioButtons[0].isSelected())
        console.log(await radioButtons[1].isSelected())

        console.log("Prueba de mantenimiento")
        console.log(await $$(".customradio")[0].$("span").isSelected())

        await userDropdown.$("span").click()
        await modal.waitForDisplayed()
        await $("#okayBtn").click()
        //validate pop up not show up when you select admin
        await $$(".customradio")[0].$("span").click()
        await expect(modal).not.toBeDisabled()

        const dropdown = await $("select.form-control") //select tag
        await dropdown.selectByAttribute('value','teach')
        //await browser.pause(3000)
        await dropdown.selectByVisibleText("Consultant")
        //await browser.pause(3000)
        await dropdown.selectByIndex(0)
        await browser.pause(3000)
        console.log(await dropdown.getValue())
        await browser.pause(3000)
        //chai assertions | install chai>> npm install chai
        expectChai(await dropdown.getValue()).to.equal("stud")

    })

    xit('Dynamic Dropdown Controls', async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#autocomplete").setValue("ind")
        await browser.pause(3000)
        let items = await $$("[class='ui-menu-item'] div")
        for(var i=0; i<await items.length;i++){
            console.log(await items[i].getText())
            if(await items[i].getText() === "India"){
                await items[i].click()
                await browser.pause(3000)
            }
        }
    })

    xit('Checkboxes Identiication', async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const element = await $$("input[type='checkbox']")
        await element[1].click()
        console.log(await element[1].isSelected())
        console.log(await element[2].isSelected())
        await browser.saveScreenshot("Screenshot.png")
    })
})