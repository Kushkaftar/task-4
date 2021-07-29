import axios from "axios"

const requestAxios = async function (path) {
    try {
        const resp = await axios(`https://api.affstar.com/api/public/${path}`, {
            method: "GET"
        })
        // console.log('resp = ', resp)
        return resp
    } catch (err) {
        console.error(err, "err");
    }

}
export { requestAxios }