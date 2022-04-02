import React, { Fragment } from "react";
// Components
import DataGrid, { Column, SearchPanel } from "devextreme-react/data-grid";
import { useNavigate } from "react-router-dom";
// Data
import FLIGHTS_DATA from "../../mocks/data/flights.json";
// Types
import { CellClickEvent } from "devextreme/ui/data_grid";

const { data } = FLIGHTS_DATA;

const FlightsList = () => {
   // Use navigate to go the detail page of selected flight
   const navigate = useNavigate();
   // on Cell click function handler
   const onCellClickHandler = (e: CellClickEvent<any>) => {
      navigate(`/list/${e.data.id}`);
   };

   return (
      <Fragment>
         <h1 className="page-title">Flights List ✈ </h1>
         <DataGrid dataSource={data} allowColumnReordering={true} rowAlternationEnabled={true} className="grid" showBorders={true} onCellClick={(e) => onCellClickHandler(e)}>
            <SearchPanel visible={true} highlightCaseSensitive={true} placeholder="Search flight" />
            <Column>
               <Column dataField="code" caption="IATA airline code" dataType="string" />
               <Column dataField="number" caption="Flight number" alignment="left" dataType="number" />
            </Column>
            <Column>
               <Column dataField="date" dataType="date" />
               <Column dataField="origin" dataType="string" />
               <Column dataField="destination" dataType="string" />
            </Column>
         </DataGrid>
      </Fragment>
   );
};

export default FlightsList;
