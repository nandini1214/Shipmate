import { AlertTriangle } from "lucide-react"


function ComingSoonPage({ title }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="mx-auto max-w-md">
                <AlertTriangle className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {title} Section
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                    This section is under development. More features coming soon!
                </p>
            </div>
        </div>
    )
}

export default ComingSoonPage