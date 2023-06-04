const ethers = require('ethers'); // npm install ethers  

const Infura_Id = ""; // Your Infura ID
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${Infura_Id}`);

// Async function to create a new wallet and get the balance of the wallet
async function main() {


    while (true) {
        const wallet = await ethers.Wallet.createRandom(); // creating a new Wallet
        const address = wallet.address; // getting the address of the wallet
        const balance = await provider.getBalance(address); // getting the balance of the wallet
        var data = {
            "privateKey": wallet.privateKey,
            "publickKey": wallet.address,
            "balance": ethers.utils.formatEther(balance),
            "Mnemonic": wallet.mnemonic.phrase,
        }
        if (data.balance > 0) {
            console.log(data, "\nFOUND FUNDS\n")
            break; // if the balance is greater than 0, then break the loop
        }
    }
}

main()

/*
Guessing Ethereum passphrases to access funds is an inherently speculative and uncertain activity.
There is an extremely low probability of successfully guessing a passphrase that grants access to 
an Ethereum account with funds.
*/