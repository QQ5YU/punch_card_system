import axiosInstance from "./axiosInstance";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(req, res, authOptions);
    const token = session.user.accessToken;
    axiosInstance
      .get("/api/AccountEdit/AllAcountSearch", {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        if (result.status === 200) {
          return res.status(200).json({
            data: result.data,
          });
        } else
          return res.status(result.status).json({ message: result.statusText });
      })
      .catch((err) => {
        console.log("err-------------------------", err);
        if (err.response.status === 401) {
          return res.status(401);
        } else
          return res.status(err.response.status).json({
            message: err.response.data.message,
          });
      });
  } catch (err) {
    console.log("error to get all accounts ------------", err);
    return res.status(500).json({ error: err });
  }
}
