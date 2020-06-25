const axios = require('axios');

function call_api(ticker) {
    return axios.get('https://cloud.iexapis.com/stable/stock/' + ticker + '/quote?token=pk_6cfdcb6c8f4e40a989c23bc34b42cfec');
}

module.exports = {
    call_api
}