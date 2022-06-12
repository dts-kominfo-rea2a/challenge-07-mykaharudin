const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput =(emosi)=>{
  return new Promise((res)=>{
      let keseluruhan=0;

      promiseTheaterIXX().then((hasilNonton)=>{
        hasilNonton.forEach(element => {
          if (element.hasil === emosi) {
            keseluruhan++;
          }
        });
      }).then(promiseTheaterVGC().then((hasilNonton)=>{
        hasilNonton.forEach((element)=>{
          if (element.hasil == emosi) {
            keseluruhan++;
          }
        })
        res(keseluruhan);
      }))
    }
  );
}

module.exports = {
  promiseOutput,
};
