import { NextResponse } from "next/server";
import { createWalletCore } from "@/lib/wallet/hdwallet";
import { prisma } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
    try {
        const payload = await req.json();
        if(!payload.email || !payload.password || !payload.name){
            return NextResponse.json({error: "Missing email, password or name"}, {status: 400});
        }

        const {email, password, name, extWallet} = payload;
      
        const randomId = uuidv4();
        const wallet = await createWalletCore(randomId);  
        const created = await prisma.user.create({
            data: {
                id: randomId,
                name: name,
                email: email,
                password: password,
                walletAddress:wallet.wallet.address,
                privateKey: wallet.wallet.privateKey, 
                connectedWallet: extWallet || uuidv4()
            }
        })
      
        return NextResponse.json({wallet: created.walletAddress}, {status: 200});
    } catch (error) {   
        console.log(error); 
        return NextResponse.json({error: error instanceof Error ? error.message : "Internal server error"}, {status: 500});
    }
}
