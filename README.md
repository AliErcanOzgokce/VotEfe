# VotEfe
VotEfe is a smart contract that allows you to create elections on the blockchain network. You can make very safe, fast, and transparent elections using the Solidity infrastructure base and thanks to blockchain technology. 

# Main Window
<p align="center">
  <img src="https://i.ibb.co/rGGKRcF/ezgif-com-gif-maker.gif" alt="ezgif-com-gif-maker" border="0">
</p>

# How To Use?
First, you should create a election on "create-elections" page. Then you can create a canditates from "create-canditates" page <b>(Only the person who has created the election can create canditates)</b>. Also before make voting you should register first. You can check the current election status on "election-status" page and you can finalize the election <b>(Only the person who has created the election can finalize)</b>. After the finalize election you can check the winner with "show-winner" button.

Note: When u finalize the election nobody can't make vote again. Before the make votement you should registered first. Only the manager (The person who created the election) can finalize election and create canditates. 

# Requirements

- Node.js
- React.js
- Next.js
- Some money in wallet address to create a contract

# Configure
Go to the /ethereum/deploy.js file

```bash
const provider = new HDWalletProvider(
  'ADD YOUR 12 word mnemonic',
  // remember to change this to your own phrase!
  'ADD YOUR infura http web provider address'
  // remember to change this to your own endpoint!
);
```
add your 12 word mnemonic and your http web provider link (i used infura)

```bash
node deploy.js
```
Copy the contarct address then go to this file /ethereum/factory.js
```bash
const instance = new web3.eth.Contract(
  JSON.parse(ElectionFactory.interface),
  'CHANGE HERE TO YOUR CONTRACT ADDRESS'
);
```
paste the contract address here


Start the VotEfe

```bash
npm run dev
```

http://localhost:3000/

# License

[MIT](https://choosealicense.com/licenses/mit/)


