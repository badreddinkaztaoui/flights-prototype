import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Components
import DataGrid, { Column, SearchPanel } from "devextreme-react/data-grid";
// Data
import FLIGHTS_DATA from "../../mocks/data/flights.json";
import { ContingentType } from "../../mocks/types";

const { data } = FLIGHTS_DATA;

const FlightDetails = () => {
   // Use navigate to return back to flights list page
   const navigate = useNavigate();
   // Get the selected flight if From the URL Params
   const { id } = useParams<{ id: string }>();
   // Store the selected contingent data
   const [contingents, setContingents] = useState<Array<ContingentType>>([]);

   useEffect(() => {
      // Extract the contingent data from the selected flight
      function filterFlightById() {
         data.map((flight) => {
            if (flight.id === id) {
               setContingents(flight.contingents);
            }
         });
      }
      filterFlightById();
   }, [id]);

   return (
      <div>
         <h1 className="page-title">
            <span style={{ cursor: "pointer" }} onClick={() => navigate("/list")}>
               🔙
            </span>
            Flights details
         </h1>
         <DataGrid dataSource={contingents} allowColumnReordering={true} rowAlternationEnabled={true} className="grid" showBorders={true}>
            <SearchPanel visible={true} highlightCaseSensitive={true} placeholder="Search contingent" />
            <Column dataField="id" caption="# Client ID" dataType="string" />
            <Column dataField="seats" caption="All seats" alignment="left" dataType="number" />
            <Column dataField="booked" caption="Booked seats" alignment="left" dataType="number" />
         </DataGrid>
      </div>
   );
};

export default FlightDetails;
