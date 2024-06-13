import Counter from "@/app/_components/Counter";
import CabinCard from "@/app/_components/CabinCard";
import { CabinType, getCabins } from "../_lib/data-service";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  // CHANGE
  const cabins = await getCabins();

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin: CabinType) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}

// import { Suspense } from "react";
// // import CabinList from "../_components/CabinList";
// // import Spinner from "../_components/Spinner";
// // import Counter from "../_components/Counter";

// export const revalidate = 3600;
// // export const revalidate = 15;

// export const metadata = {
//   title: "Cabins",
// };

// export default function Page() {
//   return (
//     <div>
//       <h1 className="text-4xl mb-5 text-accent-400 font-medium">
//         Our Luxury Cabins
//       </h1>
//       <p className="text-primary-200 text-lg mb-10">
//         Cozy yet luxurious cabins, located right in the heart of the Italian
//         Dolomites. Imagine waking up to beautiful mountain views, spending your
//         days exploring the dark forests around, or just relaxing in your private
//         hot tub under the stars. Enjoy nature&apos;s beauty in your own little
//         home away from home. The perfect spot for a peaceful, calm vacation.
//         Welcome to paradise.
//       </p>

//       <Suspense fallback={<Spinner />}>
//         <CabinList />
//       </Suspense>
//     </div>
//   );
// }
