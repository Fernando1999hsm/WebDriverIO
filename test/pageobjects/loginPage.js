class LoginPage{

    get userName(){
        return $("input[name='username']")
    }

    get passWord(){
        return $("//input[@type='password']")
    }

    get alert(){
        return $(".alert-danger")
    }

    get signIn(){
        return $("#signInBtn")
    }

    get AccesTextInfoP(){
        return $("p")
    }

    async loginfunction(userName,password){
        await this.userName.setValue(userName)
        await this.passWord.setValue(password)
        await this.signIn.click()
    }
}
module.exports = new LoginPage()