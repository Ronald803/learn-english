import APITestRequest from './axios.config'

export function getTest(){
    return APITestRequest.get('/api/test',{
        validateStatus: function(status){
            return status<500
        }
    })
}