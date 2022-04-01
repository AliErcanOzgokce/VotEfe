import web3 from './web3.js';
import ElectionFactory from './build/ElectionFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ElectionFactory.interface),
  'CHANGE HERE TO YOUR CONTRACT ADDRESS'
);

export default instance;
