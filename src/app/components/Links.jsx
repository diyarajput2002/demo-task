"use client"
function Links() {
  return (
    <div className="p-4 mt-20">
      <h2 className="text-sm font-semibold text-gray-500 mb-2">Links</h2>
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-400">Analysis</h3>
        <ul>
          <li className="mb-1"><a href="#" className="text-blue-600">Trial balance</a></li>
          <li className="mb-1"><a href="#" className="text-blue-600">Voucher transactions</a></li>
          <li className="mb-1"><a href="#" className="text-blue-600">Audit trail</a></li>
        </ul>
        <hr/>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-400">Setup</h3>
        <ul>
          <li className="mb-1"><a href="#" className="text-blue-600">Ledger calendars</a></li>
          <li className="mb-1"><a href="#" className="text-blue-600">Ledger reasons</a></li>
          <li className="mb-1"><a href="#" className="text-blue-600">Ledger account alias</a></li>
          <li className="mb-1"><a href="#" className="text-blue-600">Journal names</a></li>
          <li className="mb-1"><a href="#" className="text-blue-600">Journal descriptions</a></li>
          <hr/>
          <li className="mb-1"><a href="#" className="text-blue-600">Currency exchange rates</a></li>
          <li className="mb-1"><a href="#" className="text-blue-600">Charts of accounts - all</a></li>
          <li className="mb-1"><a href="#" className="text-blue-600">Main accounts - chart of accounts: Shared</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Links;