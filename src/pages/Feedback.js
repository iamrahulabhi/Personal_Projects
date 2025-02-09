import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div>
      <table {...getTableProps()} className="table-auto w-full border-collapse">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-4 py-2 border-b cursor-pointer bg-gray-200 text-left"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-4 py-2 border-b">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="px-3 py-1 mx-1 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:bg-gray-300"
          >
            {"<<"}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="px-3 py-1 mx-1 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:bg-gray-300"
          >
            &lt; Prev
          </button>
        </div>

        <div>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className="border p-1 rounded w-16 text-center"
          />
        </div>

        <div>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="px-3 py-1 mx-1 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:bg-gray-300"
          >
            Next &gt;
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className="px-3 py-1 mx-1 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:bg-gray-300"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Feedback = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Country",
        accessor: "country",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      { name: "John Doe", age: 28, country: "USA" },
      { name: "Jane Smith", age: 34, country: "Canada" },
      { name: "Samuel Adams", age: 25, country: "UK" },
      { name: "Andrew Lee", age: 30, country: "Australia" },
      { name: "Rita Patel", age: 27, country: "India" },
      { name: "Tommy Lee", age: 22, country: "USA" },
      { name: "Megan Fox", age: 33, country: "Canada" },
      { name: "James Bond", age: 40, country: "UK" },
      { name: "Bruce Wayne", age: 35, country: "USA" },
      { name: "Peter Parker", age: 18, country: "Australia" },
      { name: "Clark Kent", age: 32, country: "India" },
    ],
    []
  );
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Feedback;
