import React, { useState } from "react";
import "./ProductsTable.scss";
import GenericTable from "../../../../components/GenericTable/GenericTable";

const ProductsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const columnTitles = [
    "ID",
    "Tipo",
    "Título producto",
    "Campaña",
    "Link",
    "Modificación",
    "Estado",
  ];

  const data = [
    {
      ID: 1,
      Tipo: "Wifi",
      "Título producto": "QR Comercial",
      Campaña: "Navidad",
      Link: "Copiar Wifi",
      Modificación: "Hace 15 días",
      Estado: "Activo",
    },
    {
      ID: 2,
      Tipo: "Link",
      "Título producto": "QR Comercial 12621",
      Campaña: "Pascua",
      Link: "Copiar link",
      Modificación: "-",
      Estado: "Inactivo",
    },
  ];

  const filteredData = data.filter((item) =>
    item["Título producto"].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-table">
      <h2>
        <svg
          style={{ marginRight: "10px" }}
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="34" height="34" rx="17" fill="#EEF3FE" />
          <path
            d="M9.5 15.3333V10.3333C9.5 10.0972 9.58 9.89944 9.74 9.74C9.9 9.58056 10.0978 9.50056 10.3333 9.5H15.3333C15.5694 9.5 15.7675 9.58 15.9275 9.74C16.0875 9.9 16.1672 10.0978 16.1667 10.3333V15.3333C16.1667 15.5694 16.0867 15.7675 15.9267 15.9275C15.7667 16.0875 15.5689 16.1672 15.3333 16.1667H10.3333C10.0972 16.1667 9.89944 16.0867 9.74 15.9267C9.58056 15.7667 9.50056 15.5689 9.5 15.3333ZM11.1667 14.5H14.5V11.1667H11.1667V14.5ZM9.5 23.6667V18.6667C9.5 18.4306 9.58 18.2328 9.74 18.0733C9.9 17.9139 10.0978 17.8339 10.3333 17.8333H15.3333C15.5694 17.8333 15.7675 17.9133 15.9275 18.0733C16.0875 18.2333 16.1672 18.4311 16.1667 18.6667V23.6667C16.1667 23.9028 16.0867 24.1008 15.9267 24.2608C15.7667 24.4208 15.5689 24.5006 15.3333 24.5H10.3333C10.0972 24.5 9.89944 24.42 9.74 24.26C9.58056 24.1 9.50056 23.9022 9.5 23.6667ZM11.1667 22.8333H14.5V19.5H11.1667V22.8333ZM17.8333 15.3333V10.3333C17.8333 10.0972 17.9133 9.89944 18.0733 9.74C18.2333 9.58056 18.4311 9.50056 18.6667 9.5H23.6667C23.9028 9.5 24.1008 9.58 24.2608 9.74C24.4208 9.9 24.5006 10.0978 24.5 10.3333V15.3333C24.5 15.5694 24.42 15.7675 24.26 15.9275C24.1 16.0875 23.9022 16.1672 23.6667 16.1667H18.6667C18.4306 16.1667 18.2328 16.0867 18.0733 15.9267C17.9139 15.7667 17.8339 15.5689 17.8333 15.3333ZM19.5 14.5H22.8333V11.1667H19.5V14.5ZM22.8333 24.5V22.8333H24.5V24.5H22.8333ZM17.8333 19.5V17.8333H19.5V19.5H17.8333ZM19.5 21.1667V19.5H21.1667V21.1667H19.5ZM17.8333 22.8333V21.1667H19.5V22.8333H17.8333ZM19.5 24.5V22.8333H21.1667V24.5H19.5ZM21.1667 22.8333V21.1667H22.8333V22.8333H21.1667ZM21.1667 19.5V17.8333H22.8333V19.5H21.1667ZM22.8333 21.1667V19.5H24.5V21.1667H22.8333Z"
            fill="#613FC2"
          />
        </svg>
        Productos Flashtag
      </h2>
      <label>Administra y gestiona tus precomprados.</label>
      <div className="table-controls">
        <h4>QR creados</h4>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid gray",
          }}
        >
          Filtros
        </button>
        <button style={{ backgroundColor: "black" }}>Asignar</button>
        <button>Exportar</button>
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid gray",
            padding: "8px",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 5.00008V4.33341C13.3333 3.39999 13.3333 2.93328 13.1517 2.57676C12.9919 2.26316 12.7369 2.00819 12.4233 1.8484C12.0668 1.66675 11.6001 1.66675 10.6667 1.66675H9.33333C8.39991 1.66675 7.9332 1.66675 7.57668 1.8484C7.26308 2.00819 7.00811 2.26316 6.84832 2.57676C6.66667 2.93328 6.66667 3.39999 6.66667 4.33341V5.00008M8.33333 9.58342V13.7501M11.6667 9.58342V13.7501M2.5 5.00008H17.5M15.8333 5.00008V14.3334C15.8333 15.7335 15.8333 16.4336 15.5608 16.9684C15.3212 17.4388 14.9387 17.8212 14.4683 18.0609C13.9335 18.3334 13.2335 18.3334 11.8333 18.3334H8.16667C6.76654 18.3334 6.06647 18.3334 5.53169 18.0609C5.06129 17.8212 4.67883 17.4388 4.43915 16.9684C4.16667 16.4336 4.16667 15.7335 4.16667 14.3334V5.00008"
              stroke="#D63939"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <GenericTable
        columnTitles={columnTitles}
        data={filteredData}
        headerTitle="QR Creados"
      />
    </div>
  );
};

export default ProductsTable;
