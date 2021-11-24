import axios from "axios"

export default class ScoreApi {
    constructor(publicKey, privateKey){
        this.url = 'https://keepthescore.co/api/'
        this.publicKey = publicKey
        this.privateKey = privateKey
    }
    getBoard(){
        return axios({
            method: 'GET',
            url: this.url + this.publicKey +'/board/',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(
            response => {
                return response.data
            }
        )
    }
    addScore(playerId, score){
        return axios({
            method: 'POST',
            url: this.url + this.privateKey + '/score/',
            data: { player_id: playerId, score: score },
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