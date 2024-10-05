import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop() {
    let wallet = useWallet();
    let { connection } = useConnection();

    function requestAir() {
        const publicKey = wallet.publicKey;
        const amount = document.getElementById("amount").value;
        connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL)
    }

    return <div className="container" >
        <input id="amount" type="text" placeholder="Amount..." />
        <button onClick={requestAir} >Request Airdrop</button>
        <br />Connected Public Key :
        {wallet.publicKey && (
                <div className="public-key">{wallet.publicKey.toBase58()}</div>
            )}
    </div>
}
export default RequestAirdrop