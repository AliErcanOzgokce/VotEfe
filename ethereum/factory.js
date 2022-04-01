import web3 from './web3.js';
import ElectionFactory from './build/ElectionFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ElectionFactory.interface),
  '0xBac9055ec8724a011E75558d435E1201107208B8'
);

export default instance;
