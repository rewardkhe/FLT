const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://flatmates.com.au/rooms/adamstown-2289+callaghan-2308+cardiff-2285+charlestown-2290+fletcher-2287+hamilton-2303+islington-2296+kotara-2289+lambton-2299+mayfield-2304+merewether-2291+mount-hutton-2290+new-lambton-2305+new-lambton-heights-2305+sandgate-2304+shortland-2307+waratah-2298+warners-bay-2282+windale-2306'


axios(url)
.then(response => {
     const html = response.data
     const $ = cheerio.load(html)
const addressStack = []
const priceStack = []


     $('.styles__address___28Scu',html).each(function() {
        const Address = $(this).text()
       
        addressStack.push({
            Address,
        })
     })

       $('.styles__price___3Jhqs',html).each(function() {
        const Price = $(this).text()
       
        priceStack.push({
            Price,
        })
     })

    console.log(addressStack)
    console.log(priceStack)


}).catch(err => console.log(err))

app.listen (PORT, () => console.log(`server running on PORT ${PORT}`))