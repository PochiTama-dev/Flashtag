import React from "react";
import "./GenericTable.scss";

interface GenericTableProps {
  columnTitles: string[];
  data: any[];
  headerTitle?: string;
  headerButtons?: React.ReactNode;
}

const GenericTable: React.FC<GenericTableProps> = ({
  columnTitles,
  data,
  headerTitle,
  headerButtons,
}) => {
  return (
    <div className="generic-table">
      <div className="table-header">
        {headerTitle && <h2>{headerTitle}</h2>}
        {headerButtons && <div className="header-buttons">{headerButtons}</div>}
      </div>
      <table>
        <thead>
          <tr>
            {columnTitles.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columnTitles.map((title, colIndex) => (
                <td key={colIndex}>{row[title]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
