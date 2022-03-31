import web3 from './web3.js';
import ElectionFactory from './build/ElectionFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ElectionFactory.interface),
  '0x5757809C83f677841D550C1e289b37D6600BA376'
);

export default instance;
