import web3 from "./web3";
import Campaign from "./build/Election.json";

export default (address) => {
  return new web3.eth.Contract(JSON.parse(Election.interface), address);
};
