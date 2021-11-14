import axios from "axios"

export default class ScoreApi{
    constructor(){
        this.url = 'https://keepthescore.co/api/'
    }

    getBoard(){
        return axios({
            method: 'GET',
            url: this.url + 'uzkqvmwxnle/board/',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(
            response => {
                return response.data
            }
        )
    }
    getScore(){
        return axios({
            method: 'POST',
            url: this.url + 'ihmyvnahygr/score/',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(
            response => {
                return response.data
            }
        )
    }
}