import axios from "axios";
// define commenRequest function
export const commonRequest =async(method,url,body) => {

    // api request configeration
    
    let reqConfig= {
        method,
        url,
        data: body,
        headers:{
            "content-type":"application/json"
        }


    }
// api call using axios
return await axios(reqConfig).then((response)=>{
    return response
}).catch((err)=>{
    return err
})

}