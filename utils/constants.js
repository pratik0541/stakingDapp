export const cwmContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const faucetsContractAddress =
  "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export const cwmAbi = [ { inputs: [], stateMutability: "nonpayable", type: "constructor", }, { anonymous: false, inputs: [ { indexed: true, internalType: "address", name: "owner", type: "address", }, { indexed: true, internalType: "address", name: "spender", type: "address", }, { indexed: false, internalType: "uint256", name: "value", type: "uint256", }, ], name: "Approval", type: "event", }, { anonymous: false, inputs: [ { indexed: true, internalType: "address", name: "previousOwner", type: "address", }, { indexed: true, internalType: "address", name: "newOwner", type: "address", }, ], name: "OwnershipTransferred", type: "event", }, { anonymous: false, inputs: [ { indexed: true, internalType: "address", name: "from", type: "address", }, { indexed: true, internalType: "address", name: "to", type: "address", }, { indexed: false, internalType: "uint256", name: "value", type: "uint256", }, ], name: "Transfer", type: "event", }, { inputs: [ { internalType: "address", name: "owner", type: "address", }, { internalType: "address", name: "spender", type: "address", }, ], name: "allowance", outputs: [ { internalType: "uint256", name: "", type: "uint256", }, ], stateMutability: "view", type: "function", }, { inputs: [ { internalType: "address", name: "spender", type: "address", }, { internalType: "uint256", name: "amount", type: "uint256", }, ], name: "approve", outputs: [ { internalType: "bool", name: "", type: "bool", }, ], stateMutability: "nonpayable", type: "function", }, { inputs: [ { internalType: "address", name: "account", type: "address", }, ], name: "balanceOf", outputs: [ { internalType: "uint256", name: "", type: "uint256", }, ], stateMutability: "view", type: "function", }, { inputs: [], name: "decimals", outputs: [ { internalType: "uint8", name: "", type: "uint8", }, ], stateMutability: "view", type: "function", }, { inputs: [ { internalType: "address", name: "spender", type: "address", }, { internalType: "uint256", name: "subtractedValue", type: "uint256", }, ], name: "decreaseAllowance", outputs: [ { internalType: "bool", name: "", type: "bool", }, ], stateMutability: "nonpayable", type: "function", }, { inputs: [ { internalType: "address", name: "spender", type: "address", }, { internalType: "uint256", name: "addedValue", type: "uint256", }, ], name: "increaseAllowance", outputs: [ { internalType: "bool", name: "", type: "bool", }, ], stateMutability: "nonpayable", type: "function", }, { inputs: [ { internalType: "address", name: "account", type: "address", }, { internalType: "uint256", name: "amount", type: "uint256", }, ], name: "mint", outputs: [], stateMutability: "nonpayable", type: "function", }, { inputs: [], name: "name", outputs: [ { internalType: "string", name: "", type: "string", }, ], stateMutability: "view", type: "function", }, { inputs: [], name: "owner", outputs: [ { internalType: "address", name: "", type: "address", }, ], stateMutability: "view", type: "function", }, { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function", }, { inputs: [], name: "symbol", outputs: [ { internalType: "string", name: "", type: "string", }, ], stateMutability: "view", type: "function", }, { inputs: [], name: "totalSupply", outputs: [ { internalType: "uint256", name: "", type: "uint256", }, ], stateMutability: "view", type: "function", }, { inputs: [ { internalType: "address", name: "to", type: "address", }, { internalType: "uint256", name: "amount", type: "uint256", }, ], name: "transfer", outputs: [ { internalType: "bool", name: "", type: "bool", }, ], stateMutability: "nonpayable", type: "function", }, { inputs: [ { internalType: "address", name: "from", type: "address", }, { internalType: "address", name: "to", type: "address", }, { internalType: "uint256", name: "amount", type: "uint256", }, ], name: "transferFrom", outputs: [ { internalType: "bool", name: "", type: "bool", }, ], stateMutability: "nonpayable", type: "function", }, { inputs: [ { internalType: "address", name: "newOwner", type: "address", }, ], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function", }, ];

export const faucetsAbi = [ { inputs: [ { internalType: "address", name: "tokenAddress", type: "address", }, { internalType: "uint256", name: "_buyTimeLimit", type: "uint256", }, ], stateMutability: "nonpayable", type: "constructor", }, { inputs: [], name: "getBuyLimitTime", outputs: [ { internalType: "uint256", name: "", type: "uint256", }, ], stateMutability: "view", type: "function", }, { inputs: [], name: "getNextBuyTime", outputs: [ { internalType: "uint256", name: "", type: "uint256", }, ], stateMutability: "view", type: "function", }, { inputs: [], name: "requestTokens", outputs: [], stateMutability: "nonpayable", type: "function", }, { inputs: [ { internalType: "uint256", name: "_buyTimeLimit", type: "uint256", }, ], name: "setBuyLimitTime", outputs: [], stateMutability: "nonpayable", type: "function", }, ];




export const tokenAddress = "0x0A3AF7e2a4550F4c0a1C1Fdd76008D16971A4b9b";

export const tokenABI = [{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"uint256","name":"cap_","type":"uint256"},{"internalType":"uint256","name":"initialBalance_","type":"uint256"},{"internalType":"bytes","name":"signature_","type":"bytes"},{"internalType":"address payable","name":"feeReceiver_","type":"address"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"increasedSupply","type":"uint256"},{"internalType":"uint256","name":"cap","type":"uint256"}],"name":"ERC20ExceededCap","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"uint256","name":"cap","type":"uint256"}],"name":"ERC20InvalidCap","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[],"name":"ERC20MintingFinished","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"finishMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintingFinished","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

export const stakeContractAddress = "0x17C368bdfFDf86b1EeD7e74cBAf13912726267F3";

export const stakeContractABI = [{"inputs": [{"internalType": "address","name": "_tokenAddress","type": "address"},{"internalType": "uint256","name": "_rewardRate","type": "uint256"},{"internalType": "uint256","name": "_lockinTime","type": "uint256"}],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "OwnableInvalidOwner","type": "error"},{"inputs": [{"internalType": "address","name": "account","type": "address"}],"name": "OwnableUnauthorizedAccount","type": "error"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "uint256","name": "amount","type": "uint256"}],"name": "Staked","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "uint256","name": "amount","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "reward","type": "uint256"}],"name": "Unstaked","type": "event"},{"inputs": [],"name": "LOCKIN_TIME","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "REWARD_RATE","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "_user","type": "address"},{"internalType": "uint256","name": "_index","type": "uint256"}],"name": "calculateReward","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_newLockInTime","type": "uint256"}],"name": "setLockInTime","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_newRate","type": "uint256"}],"name": "setRewardRate","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_amount","type": "uint256"}],"name": "stake","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"},{"internalType": "uint256","name": "","type": "uint256"}],"name": "stakedAmounts","outputs": [{"internalType": "uint256","name": "amount","type": "uint256"},{"internalType": "uint256","name": "addTime","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "token","outputs": [{"internalType": "contract IERC20","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_index","type": "uint256"}],"name": "unstake","outputs": [],"stateMutability": "nonpayable","type": "function"}];






// 0x8A64807F28474c186fE829106d73c0f0B23B73E3

// [{"inputs": [{"internalType": "address","name": "owner","type": "address"}],"name": "OwnableInvalidOwner","type": "error"},{"inputs": [{"internalType": "address","name": "account","type": "address"}],"name": "OwnableUnauthorizedAccount","type": "error"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "uint256","name": "amount","type": "uint256"}],"name": "Staked","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "uint256","name": "amount","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "reward","type": "uint256"}],"name": "Unstaked","type": "event"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_newLockInTime","type": "uint256"}],"name": "setLockInTime","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_newRate","type": "uint256"}],"name": "setRewardRate","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_amount","type": "uint256"}],"name": "stake","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_tokenAddress","type": "address"},{"internalType": "uint256","name": "_rewardRate","type": "uint256"},{"internalType": "uint256","name": "_lockinTime","type": "uint256"}],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [{"internalType": "uint256","name": "_index","type": "uint256"}],"name": "unstake","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_user","type": "address"},{"internalType": "uint256","name": "_index","type": "uint256"}],"name": "calculateReward","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "LOCKIN_TIME","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "REWARD_RATE","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"},{"internalType": "uint256","name": "","type": "uint256"}],"name": "stakedAmounts","outputs": [{"internalType": "uint256","name": "amount","type": "uint256"},{"internalType": "uint256","name": "addTime","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "token","outputs": [{"internalType": "contract IERC20","name": "","type": "address"}],"stateMutability": "view","type": "function"}]