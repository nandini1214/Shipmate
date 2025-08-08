import OrdersTable from "../TableComponents/OrdersTable";
import TableComponent from "../TableComponents/TableComponent";
import SearchAndFilterBar from "../uicomponents/SearchAndFilterBar";


function OrdersPage({ orders }) {
  const orderFilters = [
    {
      options: [
        { value: 'all', label: 'All Status' },
        { value: 'delivered', label: 'Delivered' },
        { value: 'in-transit', label: 'In Transit' },
        { value: 'preparing', label: 'Preparing' }
      ]
    },
    {
      options: [
        { value: 'today', label: 'Today' },
        { value: 'week', label: 'This Week' },
        { value: 'month', label: 'This Month' }
      ]
    }
  ];
  return (
    <div className="space-y-6">
      <SearchAndFilterBar
        placeholder="Search orders..."
        filters={orderFilters}
        onExport={true}
      />
      <OrdersTable orders={orders} />
      {/* <TableComponent /> */}
    </div>
  )
}

export default OrdersPage 