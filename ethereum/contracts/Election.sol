pragma solidity ^0.4.17;

contract ElectionFactory {
    address[] public deployedElections;

    function createElection(string name, uint count) public {
        address newElection = new Election(name, count, msg.sender);

        deployedElections.push(newElection);
    }

    function getDeployedElections() public view returns(address[]) {
        return deployedElections;
    }
}

contract Election {
    struct Candidates {
        string description;
        string name;
        string partyName;
        uint votingCounts;
        bool winner;
        mapping(address => bool) voters;
    }

    Candidates[] public candidates;
    string public electionName;
    mapping(address => uint) public avaibleVote;
    uint public candidatesCount;
    address public manager;
    uint public votersCount;
    mapping(address => bool) public voters;

    modifier restricted() {
        require (msg.sender == manager);
        _;
    }

    modifier candidatesLimit() {
        require (candidates.length == candidatesCount);
        _;
    }

    function Election (string name, uint count, address creator) public {
        manager = creator;
        electionName = name;
        candidatesCount = count;
    }

    function register () public {
        require(!voters[msg.sender]);
        require(!(avaibleVote[msg.sender]==1)); //That means he/she registered but not voted yet
        require(!(avaibleVote[msg.sender]==2)); //That means he/she registered and voted
        voters[msg.sender] = true;

        avaibleVote[msg.sender]=1;
        votersCount++;
    }

    function createCanditate (string name, string partyName, string description) public restricted  {
        require(!(candidates.length>=candidatesCount));
        Candidates memory newCanditate = Candidates({
            description: description,
            name: name,
            partyName: partyName,
            winner: false,
            votingCounts: 0
        });

        candidates.push(newCanditate);
    }

    function voteCanditate (uint index) public {
        Candidates storage candidate = candidates[index];

        require(voters[msg.sender]);
        require(!candidate.voters[msg.sender]);

        candidate.voters[msg.sender] = true;
        avaibleVote[msg.sender] = 2;
        candidate.votingCounts++;
    }

    function pickWinner() restricted candidatesLimit view returns (/*string*/uint) {
        uint winner;
        uint max= 0;
        for(uint i=0; i < candidatesCount; i++){
            Candidates storage candidate = candidates[i];
            if(candidate.votingCounts > max){
                winner = i;
            }
        }
        /*
        Candidates storage winnerCandidate = candidates[winner];
        return (winnerCandidate.name);
        */
        return winner;
    }

}
