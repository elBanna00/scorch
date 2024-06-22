// import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";
// import { ParamsType } from "@/app/cabins/page";

// export async function GET({ params }: { params: any }) {
//   const { cabinId } = params;

//   try {
//     const [cabin, bookedDates] = await Promise.all([
//       getCabin(cabinId!),
//       getBookedDatesByCabinId(cabinId!),
//     ]);

//     return (Response as any).json({ cabin, bookedDates });
//   } catch {
//     return (Response as any).json({ message: "Cabin not found" });
//   }
// }

// // export async function POST() {}
import { NextRequest, NextResponse } from "next/server";
import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const cabinId = searchParams.get("cabinId");

  if (!cabinId) {
    return NextResponse.json(
      { message: "Cabin ID is required" },
      { status: 400 }
    );
  }

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return NextResponse.json({ cabin, bookedDates });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Cabin not found" }, { status: 404 });
  }
}
