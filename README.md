![VotEfe](https://user-images.githubusercontent.com/78970916/161441177-64b12da5-26c2-4a21-a896-581a3dbe5987.png)

VotEfe is a smart contract that allows you to create elections on the blockchain network. You can make very safe, fast, and transparent elections using the Solidity infrastructure base and thanks to blockchain technology. 

# Main Window
<p align="center">
  <img src="https://i.ibb.co/rGGKRcF/ezgif-com-gif-maker.gif" alt="ezgif-com-gif-maker" border="0">
</p>

# How To Use?
* First, you should create a election on "create-elections" page. 
* Then you can create a canditates from "create-canditates" page <b>(Only the person who has created the election can create canditates)</b>. 
* Also before make voting you should register first. 
* You can check the current election status on "election-status" page and you can finalize the election <b>(Only the person who has created the election can finalize)</b>. 
* After the finalize election you can check the winner with "show-winner" button.

Note: When u finalize the election nobody can't make vote again. Before the make votement you should registered first. Only the manager (The person who created the election) can finalize election and create canditates. 

# Requirements

- Node.js
- React.js
- Next.js

# Installing & Setup

First you need to install packages 
 ```bash
 npm install
 ```
 And you need to execute to compile.js file
 
 ```bash
 node compile.js
 ```
 
 After instalitation process complete you need to make some changes in /ethereum/deploy.js file
 
 ![carbon](https://user-images.githubusercontent.com/78970916/161441280-ccd91579-bd1b-4375-b6b9-73c151c19bbb.png)
 
 When your deployment process done you need to copy the contract address and paste to /ethereum/factory.js file
 
 ![carbon (1)](https://user-images.githubusercontent.com/78970916/161441404-374d3523-487a-4a27-ba5f-945ad4fd30f0.png)

 You're all set !

# Usage
For starting the VotEfe

```bash
npm run dev
```

After starting go to there

http://localhost:3000/

# License

[MIT](https://choosealicense.com/licenses/mit/)


