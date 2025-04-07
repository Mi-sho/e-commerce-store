
const request = async (method, url, data, options = {} ) => {
    const {headers: passedHeaders = {}, ...restOptions } = options;


    const headers = {
        "Content-type": "application/json",
        ...passedHeaders
    };

    const requestConfig = {
        method: method !== "GET" ? method : "GET",
        headers,
        ...restOptions,
    };

    if(method !== "GET" && data) {
        requestConfig.body = JSON.stringify(data);
    };
 
 

    try{
        const response = await fetch(url, requestConfig);
        
        if(!response.ok) {
            const error = new Error(`Request failed: ${response.status}`);
            error.status = response.status;
            throw error;

           
        }
        
        const result = await response.json();
        return result;
        

    } catch(err) {
        if(!err.status) {
            err.message = 'Network error: ' + err.message;
        }
        throw err;
    };

};

export default {
    get: (url, options) => request('GET', url, null, options),
    post: (url, data, options) => request('POST', url, data, options),
    put: (url, data, options) => request('PUT', url, data, options),
    delete: (url, options) => request('DELETE', url, null, options),
    request
}

