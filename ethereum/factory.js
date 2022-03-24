import web3 from './web3.js';
import ElectionFactory from './build/ElectionFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ElectionFactory.interface),
  '0xcD0efa3d645cEf370cf004C212D54Becb704808b'
);

export default instance;
