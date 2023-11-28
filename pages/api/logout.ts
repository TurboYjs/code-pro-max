import {NextApiRequest, NextApiResponse} from "next";
import {serialize} from "cookie";

export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const serialized=serialize("cookie_name", "", {
        httpOnly:true
    })
    res.setHeader("Set-Cookie", serialized)
    return res.status(200).json({})
}
