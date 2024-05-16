// `npm i axios` で axios をインストールしてください

import axios, {AxiosInstance} from 'axios';

export class Patlite {
  private _client: AxiosInstance;

  constructor(hostname: string) {
    this._client = axios.create({
      baseURL: 'http://' + hostname,
    });
  }

  private sendCommand = async (light: string = '000', sound: string = '0') => {

    this._client.get('/api/control', {
      params: {
        alert: light + '00' + sound,
      }
     }).catch((error) => {
      // handle error
      console.log(error);
    });
  }

  on = async () => {
    this.sendCommand('111');
  }

  off = async () => {
    this.sendCommand('000');
  }

  blink = async () => {
    this.sendCommand('222');
  }

  blinkFast = async () => {
    this.sendCommand('333');
  }

  green = async () => {
    this.sendCommand('991');
  }

  greenoff = async () => {
    this.sendCommand('990');
  }

  greenslow = async () => {
    this.sendCommand('992');
  }

  greenfast = async () => {
    this.sendCommand('993');
  }

  red = async () => {
    this.sendCommand('199');
  }

  redslow = async () => {
    this.sendCommand('299');
  }

  redfast = async () => {
    this.sendCommand('399');
  }

  redoff = async () => {
    this.sendCommand('099');
  }

  yellow = async () => {
    this.sendCommand('919');
  }

  yellowslow = async () => {
    this.sendCommand('929');
  }

  yellowfast = async () => {
    this.sendCommand('939');
  }

  yellowoff = async () => {
    this.sendCommand('909');
  }
}



