import { Edit, Eye, Trash2 } from "lucide-react"


function ActionButtons({ showView = true, showEdit = true, showDelete = false }) {
  return (
    <div className="flex items-center space-x-2">
    {showView && (
      <button className="text-indigo-600 hover:text-indigo-900">
        <Eye className="h-4 w-4" />
      </button>
    )}
    {showEdit && (
      <button className="text-gray-600 hover:text-gray-900">
        <Edit className="h-4 w-4" />
      </button>
    )}
    {showDelete && (
      <button className="text-red-600 hover:text-red-900">
        <Trash2 className="h-4 w-4" />
      </button>
    )}
  </div>
  )
}

export default ActionButtons