import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";
import { ParamsType } from "@/app/cabins/page";
import { NextApiResponse } from "next";

export async function GET({ params }: { params: ParamsType }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId!),
      getBookedDatesByCabinId(cabinId!),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}

// export async function POST() {}
