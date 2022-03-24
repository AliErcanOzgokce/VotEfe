pragma solidity ^0.4.17;
pragma experimental ABIEncoderV2;

contract ElectionFactory {
    address[] public deployedElections;
    string[] public deployedElectionNames;

    function createElection(string name, uint count) public {
        address newElection = new Election(name, count, msg.sender);
        string memory electionNames = name;

        deployedElectionNames.push(electionNames);
        deployedElections.push(newElection);
    }

    function getDeployedElections() public view returns(address[]) {
        return deployedElections;
    }

    function getDeployedElectionNames() public view returns(string[]) {
        return deployedElectionNames;
    }

}

contract Election {
    struct Canditates {
        string description;
        string name;
        string partyName;
        uint votingCounts;
        bool winner;
        mapping(address => bool) voters;
    }

    Canditates[] public canditates;
    string public electionName;
    mapping(address => uint) public avaibleVote;
    uint public canditatesCount;
    address public manager;
    uint public votersCount;
    mapping(address => bool) public voters;

    modifier restricted() {
        require (msg.sender == manager);
        _;
    }

    modifier canditatesLimit() {
        require (canditates.length == canditatesCount);
        _;
    }

    function Election (string name, uint count, address creator) public {
        manager = creator;
        electionName = name;
        canditatesCount = count;
    }

    function register () public {
        require(!voters[msg.sender]);
        require(!(avaibleVote[msg.sender]==1)); //That means he/she registered but not voted yet
        require(!(avaibleVote[msg.sender]==2)); //That means he/she registered and voted
        voters[msg.sender] = true;

        avaibleVote[msg.sender]=1;
        votersCount++;
    }

    function createCantitate (string name, string partyName, string description) public restricted  {
        require(!(canditates.length>=canditatesCount));
        Canditates memory newCanditate = Canditates({
            description: description,
            name: name,
            partyName: partyName,
            winner: false,
            votingCounts: 0
        });

        canditates.push(newCanditate);
    }

    function voteCanditate (uint index) public {
        Canditates storage canditate = canditates[index];

        require(voters[msg.sender]);
        require(!canditate.voters[msg.sender]);

        canditate.voters[msg.sender] = true;
        avaibleVote[msg.sender] = 2;
        canditate.votingCounts++;
    }

    function pickWinner() restricted canditatesLimit view returns (/*string*/uint) {
        uint winner;
        uint max= 0;
        for(uint i=0; i < canditatesCount; i++){
            Canditates storage canditate = canditates[i];
            if(canditate.votingCounts > max){
                winner = i;
            }
        }
        /*
        Candidates storage winnerCandidate = candidates[winner];
        return (winnerCandidate.name);
        */
        return winner;
    }

    function getCanditatesSummary(uint index) public view returns ( string, string, string, uint ) {
      Canditates storage canditate = canditates[index];
      return (
          canditate.name,
          canditate.partyName,
          canditate.description,
          canditate.votingCounts
      );
    }

    function getCanditatesCount() public view returns (uint) {
      return canditates.length;
    }

}
