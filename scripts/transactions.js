const headers = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'X-Country': 'UG',
    'X-Currency': 'UGX',
    'Authorization': 'Bearer UC*****2w',
    'x-signature': 'MGsp*********Ag==',
    'x-key': 'DVZC***********NM='
  };
  fetch('https://openapiuat.airtel.africa/standard/v2/cashin/',{
    method: 'POST',
    body: inputBody,
    headers: headers
  }).then(function(res) {
      return res.json();
  }).then(function(body) {
      console.log(body);
  });

  const bd = 
  {
    "subscriber": {
      "msisdn": "70***14"
    },
    "transaction": {
      "amount": "100",
      "id": "12***260"
    },
    "additional_info": [
      {
        "key": "remark",
        "value": "AIRTXXXXXX"
      }
    ],
    "reference": "10***2",
    "pin": "KYJE***+o8="
  }

  const Reponse = {
    "data": {
      "message": "Transaction Successful",
      "status": "SUCCESS",
      "transaction": {
        "airtel_money_id": "product-partner-ABCD1234",
        "id": "ABCD1234",
      }
    },
    "status": {
      "code": "200",
      "message": "SUCCESS",
      "response_code": "DP01000001001",
      "success": true
    }
  }