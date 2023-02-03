const crypto = require('crypto');

const add=(a,b)=>{
    console.log(a+b)
}

const sub=(a,b)=>{
    console.log(a-b)
}

const mult=(a,b)=>{
    console.log(a*b)
}

const divide=(a,b)=>{
    console.log(a/b)
}

const sin =(deg) =>{
    const radians=(Math.PI /180)* Number(deg)
    console.log(Math.cos(radians))
  }
  const tan =(deg) =>{
    const radians=(Math.PI /180)* Number(deg)
    console.log(Math.tan(radians))
  }

  const random =(input) =>{
    const length = parseInt(input) || 10;
    const randomNumber = crypto.randomBytes(length).toString("hex");
        console.log(randomNumber);
  }




module.exports={add,sub,mult,divide,sin,tan,random}