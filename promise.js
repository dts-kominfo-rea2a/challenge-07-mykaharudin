const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emosi)=>{
  const ptIix = await promiseTheaterIXX();
  const ptVgc = await promiseTheaterVGC();

  return new Promise(
    (res)=>{
      let hasil;

      const iixMarah;
      const vgcMarah
      const iixTidakmarah;
      const vgcTidakmarah
      if(emosi == "marah"){
        iixMarah=ptIix.filter((element)=>element.hasil == "marah");
        vgcMarah=ptVgc.filter((element)=>element.hasil == "marah");

        hasil = iixMarah + vgcMarah;
      }else if(emosi == "tidak marah"){
        iixTidakmarah = ptIix.filter((element)=>element.hasil == "tidak marah");
        vgcTidakmarah = ptVgc.filter((element)=>element.hasil == "tidak marah");
        hasil = iixTidakmarah + vgcTidakmarah;
      }

      return res(hasil);
    }
  )
};

module.exports = {
  promiseOutput,
};
