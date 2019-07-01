const https = require("https");

const url = "https://api.uspharmacycard.com/drug/price/147/none/08823/00378395277/Atorvastatin%20Calcium/GENERIC/30/8";

https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
        body += data;
    });
    res.on("end", () => {
        body = JSON.parse(body);
        console.log(body);
    });
});