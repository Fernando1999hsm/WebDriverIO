describe('Windows and Frames Miscellanous', async()=>{
    xit('Parent and Child Windows Switch',async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $(".blinkingText").click()
        const handle = await browser.getWindowHandles()//2 windows
        await browser.switchToWindow(handle[1]) //use this when you switch to a window open by aplications
        console.log(await $("h1").getText())
        console.log(await browser.getTitle()) //RS Academy
        await browser.closeWindow()
        await browser.switchToWindow(handle[0])
        console.log(await browser.getTitle()) //LoginPage Practise | Rahul Shetty Academy
        //
        await browser.newWindow("https://rahulshettyacademy.com")
        console.log(await browser.getTitle()) //Selenium, API Testing, Software Testing & More QA Tutorials | Rahul Shetty Academy
        await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/")//use this when you switch to a window oen by automation/script
        await $("#username").setValue("helloiswithchedback")
        await browser.pause(3000)
    })

    xit('Frames Switch',async()=>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#mousehover").scrollIntoView()
        console.log(await $$("a").length)//27
        await browser.switchToFrame(await $("[id='courses-iframe']"))
        console.log(await $("=Courses").getTagName())
        console.log(await $$("a").length)//107
    })
})