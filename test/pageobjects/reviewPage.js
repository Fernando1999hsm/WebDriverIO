class ReviewPage{

    get productPrices(){
        return $$("//tr//td[4]/strong")
    }

    get totalPrice(){
        return $("h3 strong")
    }

    async sumOProducts(){
        const sumOfProducts = (await Promise.all( await this.productPrices.map( async (productPrice)=> parseInt((await productPrice.getText()).split(".")[1].trim())) ) )
        .reduce((acc,price)=> acc+price,0)//15000
        console.log(sumOfProducts)
    }
    async totalFormattedPrice(){
        const TotalValue = await this.totalPrice.getText()
        const totalIntegerValue = parseInt(TotalValue.split(".")[1].trim())
    }
}
module.exports = new ReviewPage()