import requests

# Get request BankList

bank_list = requests.get(url="https://mvisa.bankalfalah.com/APIgetway/FintechAPI/GetListOfBanks")
print(bank_list)



# post request Title Fetch

payload = {
    "UserID":"admin",
    "Password":"admin",
    "ChannelID":"OSCAR",
    "AccountNo":"1234567890123456",
    "Amount":"100",
    "BankID":"TBANK",
    "BillReference":"12394068991",
    "CNIC":"4130336326216",
    "Description":"Send Otp",
    "dataHash":"string",
    "MerchantId":"13691",
    "StoreId":"001543",
    "RefNumber":"",
    "AuthToken":"zknI8Lz9axOft1wk3eid2ovU2UgTUxR6MllpI4pcIs+KofengEXrBomts2/UQAhu9vwpLV3pih52MirVinuLg/IZ0cdUXMrMY68un9fA+fb5VocO3RC42xI4gcMPQZOxkgQzQG1TvEJZLlojbbcT2Q==",
    "TransRefNo":"I-2"
 }

title_fetch = requests.post(url="https://mvisa.bankalfalah.com/APIgetway/FintechAPI/FetchTitle", json=payload  )
print(title_fetch)


