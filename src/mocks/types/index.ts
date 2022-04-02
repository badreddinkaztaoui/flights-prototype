export type ContingentType = {
   id: string;
   seats: number;
   booked: number;
};

export type FlightType = {
   id: string;
   code: string; // IATA airline code (BA)
   number: number;
   date: Date;
   origin: string;
   destination: string; // IATA airport code (LON)
   contingents: Array<ContingentType>;
};

export type FlightsTypes = Array<FlightType>;
