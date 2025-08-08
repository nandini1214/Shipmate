import React from "react";

const TableComponent = ({
  headers = [],
  data = [],
  onSort = () => {},
  renderSortIcon = () => null,
  rowKey = "id",
  emptyMessage = "No data found.",
}) => {
  return (
    <>
      {data && data.length > 0 ? (
        <div className="overflow-auto max-h-[60vh] rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                {headers.map((header) => (
                  <th
                    key={header.key}
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer"
                    onClick={() => header.sortable && onSort(header.key)}
                  >
                    <div className="flex items-center gap-1">
                      {header.label}
                      {header.sortable && renderSortIcon(header.key)}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {data.map((row, index) => (
                <tr key={row[rowKey] || index} className="hover:bg-gray-50">
                  {headers.map((header) => (
                    <td key={header.key} className="px-6 py-4 whitespace-nowrap">
                      {header.render
                        ? header.render(row)
                        : row[header.key] ?? "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-sm text-gray-500 py-6">{emptyMessage}</div>
      )}
    </>
  );
};

export default TableComponent;
