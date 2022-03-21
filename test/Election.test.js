const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/ElectionFactory.json");
const compiledElection = require("../ethereum/build/Election.json");

let accounts;
let factory;
let electionAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods.createElection("test", "1").send({
    from: accounts[0],
    gas: "1000000",
  });

  [electionAddress] = await factory.methods.getDeployedElections().call();
  election = await new web3.eth.Contract(
    JSON.parse(compiledElection.interface),
    electionAddress
  );
});

describe("Elections", () => {
  it("deploys a factory and a election", () => {
    assert.ok(factory.options.address),
    assert.ok(election.options.address)
  });

  it("marks caller as the election manager", async () => {
    const manager = await election.methods.manager().call();
    assert.equal(accounts[0],manager);
  });

  it("allows to people register", async () => {
    await election.methods.register().send({
      from: accounts[0],
      gas: "1000000"
    });

    const registered = await election.methods.avaibleVote(accounts[0]).call();
    assert.equal(1,registered);
  });

  it("whole processes test", async () => {
    await election.methods.register().send({
      from: accounts[0],
      gas: "1000000"
    });

    await election.methods.createCanditate("t","t","t").send({
      from: accounts[0],
      gas: "1000000"
    });

    await election.methods.voteCanditate("0").send({
      from: accounts[0],
      gas: "1000000"
    });

    const winner = await election.methods.pickWinner().call();

    assert.equal(0, winner);
  });
});
