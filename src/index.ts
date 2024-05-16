import {Patlite} from './patlite';

const delay = (ms: number) => {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

(async() => {

  const interval = 3000; // ミリ秒

  const patlite = new Patlite('192.168.10.1');  // パトライトのIPアドレスorホスト名を指定
  patlite.on();

  await delay(interval);
  patlite.blink();

  await delay(interval);
  patlite.blinkFast();

  await delay(interval);
  patlite.off();

  //await delay(interval);
  patlite.greenslow();

  await delay(interval);
  patlite.greenfast();

  await delay(interval);
  patlite.green();

  await delay(interval);
  patlite.yellowslow();

  await delay(interval);
  patlite.yellowfast();

  await delay(interval);
  patlite.yellow();

  await delay(interval);
  patlite.redslow();

  await delay(interval);
  patlite.redfast();

  await delay(interval);
  patlite.red();

  await delay(interval);
  patlite.greenoff();

  await delay(interval);
  patlite.yellowoff();

  await delay(interval);
  patlite.redoff();

})().catch(error => {
    console.log(error)
});
