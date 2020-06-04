// fetch data
const fetch = require("node-fetch");

const url = `https://pixabay.com/api/?key=11653033-76c56ad0947f83074c9dc5c64&q=yellow+flowers&image_type=photo&pretty=true`

const getFetch = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // let dataAll = data;
    // console.log(data)
    // console.log(data.hits[0].webformatURL);
    // let images = data.hits.webformatURL

    // let magic = images.map(mage => (data.hits.webformatURL))
    // console.log(magic);
    let len = data.hits
    console.log(len.length)
     
    for (i = 0; i < len.length; i++) {

          console.log(data.hits[i].webformatURL);
     }

    // dataAll.forEach(() => {
    //     console.log(images)
    // })
}


getFetch();  

// fs module to write
// let fs = require('fs');


// let readString = fs.readFileSync('try.text', "utf8");

// console.log(readString);


// let writeString = fs.writeFileSync("test.txt", readString)
// aria2c to download
