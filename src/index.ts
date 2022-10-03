import { ethers } from "ethers";
import Counter from "../artifacts/contracts/Contract.sol/Counter.json";

function getEth() {
    // @ts-ignore
    const eth= window.ethereum;
    if(!eth) {
        throw new Error("get metamask and positive attitude");
    }
    return eth;
}

async function hasAccounts() {
    const eth = getEth();
    const accounts = await eth.request({method: "eth_accounts"}) as string[];
    
    return accounts && accounts.length;
}

async function requestAccounts() {
    const eth = getEth();
    const accounts = await eth.request({method: "eth_requestAccounts"}) as string[];

    return accounts && accounts.length;
}

async function run() {
    if (!await hasAccounts() && !await requestAccounts()) {
        throw new Error("Please let me take your money");
    }

    const counter = new ethers.Contract(
        // where the contract is
        // "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        process.env.CONTRACT_ADDRESS,  
        // what the contract has
        // [
        //     "function count() public",
        //     "function getCounter() public view returns (uint32)",
        // ],
        Counter.abi,
        // how to comunicate with the contract
        new ethers.providers.Web3Provider(getEth()).getSigner()
    );

    document.getElementById("msg").innerText = "Counter: ";
    // document.getElementById("msg").innerText = await counter.hello();

    const el = document.createElement("div");
    async function setCounter(count?) {
        el.innerHTML = count || await counter.getCounter();
    }
    // setCounter();
    counter.on(counter.filters.CounterInc(), function(count) {
        setCounter(count);
    })

    const button = document.createElement("button");
    button.innerText = "increment";
    button.onclick = async function () {
        await counter.count();
        setCounter();
    }

    document.body.appendChild(el);
    document.body.appendChild(button);
}

run();