import { useOptions } from "@/hooks";
import { SpeedTable } from "@/types";
import styled from "styled-components";

const TableContainer = styled.table`
  td {
    border-bottom: 1px solid #ddd;
  }
`;

export type ChecklistTableProps = {
  table: SpeedTable;
};

const ChecklistSpeedTable = ({ table }: ChecklistTableProps) => {
  const options = useOptions();

  return (
    <TableContainer>
      <tbody>
        {table.items.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.speed ? (
              <td>
                V<sub>{row.speed}</sub>
              </td>
            ) : (
              <td></td>
            )}

            <td>{row.label}</td>
            <td>
              <strong>{row.value}</strong>
            </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default ChecklistSpeedTable;
