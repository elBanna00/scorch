"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { DateRange } from "react-day-picker";

interface ReservationContextValue {
  range: DateRange;
  setRange: any;
  resetRange: () => void;
}

const initialState: DateRange = { from: undefined, to: undefined };

// Create the context with the correct type
const ReservationContext = createContext<ReservationContextValue | undefined>(
  undefined
);
function ReservationProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
