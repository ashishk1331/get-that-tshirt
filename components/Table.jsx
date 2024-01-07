export default function (props) {
  return (
    <>
  {/* Table Section */}
  <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Card */}
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
            {/* Header */}
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
              {/* Input */}
              <div className="sm:col-span-1">
                <label
                  htmlFor="hs-as-table-product-review-search"
                  className="sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="hs-as-table-product-review-search"
                    name="hs-as-table-product-review-search"
                    className="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-slate-800">
                <tr>
                  <th scope="col" className="ps-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        ID
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Added Date
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Title
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Author
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="h-px w-px whitespace-nowrap">
                    <div className="ps-6 py-2">
                      <a
                        className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                        href="#"
                      >
                        #35463
                      </a>
                    </div>
                  </td>
                  <td className="h-px w-px whitespace-nowrap">
                    <div className="px-6 py-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Aug 17, 2020, 5:48 (ET)
                      </span>
                    </div>
                  </td>
                  <td className="h-px w-px whitespace-nowrap">
                    <div className="px-6 py-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Hacktoberfest Tshirt
                      </span>
                    </div>
                  </td>
                  <td className="h-px w-px whitespace-nowrap">
                    <div className="px-6 py-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Jase Marley
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
}

