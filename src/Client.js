const LOCAL_STORAGE_KEY = 'my_key_for_tokens';


class Client{
    constructor(){
        this.localeStorageIsEnabled = (typeof localStorage !== 'undefined');
        if(this.localeStorageIsEnabled){
            this.token = localStorage.getItem(LOCAL_STORAGE_KEY)
            if(!this.token) {
                this.token = sessionStorage.getItem(LOCAL_STORAGE_KEY);
            }
        }
    }
    isLoggedIn() {
      return !!this.token;
    }
    getNewses(successCallback){
        return fetch('https://serene-hamlet-84320.herokuapp.com/api/news',{
            headers: {
                token: this.token
            }
        })
            .then(this.checkStatus)
            .then(res => res.json())
            .then(successCallback)
            .catch(err => {
                console.log(err)
            })
    }
    login(data, rememberMe){
        const dataString = JSON.stringify(data);
        return fetch('https://serene-hamlet-84320.herokuapp.com/users/login',{
            method: 'POST',
            body: dataString,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(this.checkStatus)
            .then(res => res.json())
            .then(json => this.setToken(json.token,rememberMe))
    }
    logout(){

        return fetch('https://serene-hamlet-84320.herokuapp.com/users/logout',{
            headers: {
                token: this.token
            }
        })
            .then(this.checkStatus)
            .then(res => res.json())
            .catch(err => {
                console.log(err);
            })
            .then(() => {
                this.removeToken();
            })

    }
    setToken(token, rememberMe) {
        this.token = token;

        if(this.localeStorageIsEnabled){
            if(rememberMe){
                localStorage.setItem(LOCAL_STORAGE_KEY,this.token);
            } else {
                sessionStorage.setItem(LOCAL_STORAGE_KEY,this.token);
            }
        }
    }
    removeToken(){
        this.token = null;
        if(this.localeStorageIsEnabled){
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            sessionStorage.removeItem(LOCAL_STORAGE_KEY);
        }
    }
    checkStatus (response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            throw error;
        }
    }
}

export const client = new Client();