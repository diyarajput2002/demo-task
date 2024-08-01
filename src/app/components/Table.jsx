function Table() {
    return (
      <div className="p-4 w-full mt-20">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 flex w-full justify-center">General Journal Processing</h2>
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-3 text-left">Batch</th>
                <th className="py-2 px-3 text-left">Name</th>
                <th className="py-2 px-3 text-left">Description</th>
                <th className="py-2 px-3 text-left">Created By</th>
                <th className="py-2 px-3 text-left">In Use By</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-3">General Journal</td>
                <td className="py-2 px-3">GenJrn</td>
                <td className="py-2 px-3">Admin</td>
                <td className="py-2 px-3">Admin</td>
                <td className="py-2 px-3">Admin</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">General Journal1</td>
                <td className="py-2 px-3">GenJrn1</td>
                <td className="py-2 px-3">Admin1</td>
                <td className="py-2 px-3">Admin1</td>
                <td className="py-2 px-3">Admin1</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">General Journal2</td>
                <td className="py-2 px-3">GenJrn2</td>
                <td className="py-2 px-3">Admin2</td>
                <td className="py-2 px-3">Admin2</td>
                <td className="py-2 px-3">Admin2</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">General Journal3</td>
                <td className="py-2 px-3">GenJrn3</td>
                <td className="py-2 px-3">Admin3</td>
                <td className="py-2 px-3">Admin3</td>
                <td className="py-2 px-3">Admin3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Table;