

function StatusBadge({ status }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'delivered': return 'bg-green-100 text-green-800';
            case 'in-transit': return 'bg-blue-100 text-blue-800';
            case 'preparing': return 'bg-yellow-100 text-yellow-800';
            case 'active': return 'bg-green-100 text-green-800';
            case 'offline': return 'bg-gray-100 text-gray-800';
            case 'pending': return 'bg-orange-100 text-orange-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
    return (
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(status)}`}>
            {status}
        </span>
    )
}

export default StatusBadge