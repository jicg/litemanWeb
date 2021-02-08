import axios from "axios";
import * as qs from "qs"

let BaseUrl: String = "http://127.0.0.1:8082"

class Http {

    public post = (url: String, param: JSON) => {
        return axios.post("" + BaseUrl + url, qs.stringify(param), {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
        }).then((data) => {
            let ret = data.data;
            console.log(data)
            return ret
        }).catch((e) => {
            console.log(e)
            return e
        });
    }

    public get = (url: String) => {
        return axios.get("" + BaseUrl + url, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
        }).then((data) => {
            return data.data
        }).catch((e) => {
            throw e
        })
    }

    public getObj = <T = any>(url: String): Promise<T> => {
        return axios.get<T>("" + BaseUrl + url, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
        }).then((r) => {
            return r.data
        }).catch((e) => {
            throw e
        })
    }
}

const http = new Http()
export default http;