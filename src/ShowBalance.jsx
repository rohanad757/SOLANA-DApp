import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowBalance() {

    const { connection } = useConnection();
    const wallet = useWallet();

    async function getMeUserBalance() {
        let PublicKey = wallet.publicKey;
        let balance = await connection.getBalance(PublicKey);
        document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
    }

    getMeUserBalance();

    return <div className="container" >
        Balance : <span id="balance"></span> SOL
    </div>
}

export default ShowBalance