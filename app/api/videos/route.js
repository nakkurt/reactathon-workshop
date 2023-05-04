import { NextResponse } from "next/server";
import {listAssets} from "../../../server-lib/Mux";

export async function GET(req) {
    const assets = await listAssets()
    return NextResponse.json(assets)
}   