import web3 from './web3.js';
import ElectionFactory from './build/ElectionFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ElectionFactory.interface),
  '0x374333f61FFdF1Fa67b3Db0b23CB94f8f988954d'
);

export default instance;
