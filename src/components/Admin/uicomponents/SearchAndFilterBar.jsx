import { Download, Plus, Search } from "lucide-react"


function SearchAndFilterBar({ placeholder, filters = [], onExport = false, onAdd = false, addLabel = "Add",onButtonClick }) {
  return (
     <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex-1 min-w-64">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      {filters.map((filter, index) => (
        <select
          key={index}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {filter.options.map((option, optIndex) => (
            <option key={optIndex} value={option.value}>{option.label}</option>
          ))}
        </select>
      ))}
      <div className="flex items-center space-x-2">
        {onExport && (
          <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        )}
        {onAdd && (
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700" onClick={onButtonClick}>
            <Plus className="h-4 w-4 mr-2" />
            {addLabel}
          </button>
        )}
      </div>
    </div>
  </div>
  )
}

export default SearchAndFilterBar



