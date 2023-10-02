import {NextResponse} from "next/server";
import axios from "axios";
export async function POST(req, res) {
  const JSONBody = await req.json();
  try {
    const rawResponse = await axios.post(
      process.env.BASE_URL + "api/CreateContact",
      JSONBody
    );
  } catch (e) {
    return NextResponse.json(e);
  }
}
