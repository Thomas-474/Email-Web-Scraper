/**
 * 
 * @param {object} jsonData 
 */
async function serverRequest(jsonData) {
    let data = JSON.stringify(jsonData);
    if(jsonData.constructor === String) data = jsonData;
    let req = new Request('http://localhost:8000/',{
        method: 'POST',
        body: data
    });
    let res = await fetch(req);
    return res;
}

/**
 * 
 * @param {number} ms the amount of time to sleep for in milliseconds
 * @returns
 */
 function sleep(ms) {
    return new Promise((resolve) => {setTimeout(resolve,ms)});
}

/**
 * 
 * @param {function():boolean} cond the condition to check for
 * @param {number} timeout the max amount of time that can be waited
 * @returns {Promise<boolean>}
 */
async function until(cond,{timeout=3000,delay=100}={}) {
    var passed = false;
    var timedOut = false;
    setTimeout(()=>timedOut = true,timeout);
    while(!passed && !timedOut) {
        passed = cond();
        await sleep(delay);
    }
    return passed;
}

export {serverRequest,sleep,until};