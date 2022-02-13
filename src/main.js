const request = require("request-promise")
const cheerio = require("cheerio")

const textinEl = document.getElementById("textin");
const textoutEl = document.getElementById("textout");
const buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", function(){
    (async()=> {
        const input = textinEl.value;
        textinEl.value = ""
        const BASE_URL = `https://repeator.herokuapp.com//?input=${input}`;
        const response = await request({
            uri: BASE_URL,
            headers: {
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,ta;q=0.6"
            },
            gzip: true
        });
    
        let $ = cheerio.load(response)
        let data_1 = $("div[class='data_container'] > p").text();
        textoutEl.innerHTML = data_1
        console.log("This is working");
        console.log(data_1);
    })();
})
