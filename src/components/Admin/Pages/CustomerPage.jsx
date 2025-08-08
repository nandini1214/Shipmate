import TableComponent from "../TableComponents/TableComponent";
import SearchAndFilterBar from "../uicomponents/SearchAndFilterBar";
import { Pencil, Trash2, Users } from "lucide-react";

function CustomerPage({ customers }) {
  const customerFilter = [
    {
      options: [
        { value: "all", label: "All Status" },
        { value: "active", label: "Active" },
        { value: "pending", label: "Pending" },
      ],
    },
  ];

  const handleEdit = (customer) => {
    console.log("Edit:", customer);
    // open modal or navigate to edit
  };

  const handleDelete = (customerId) => {
    console.log("Delete ID:", customerId);
    // trigger delete confirmation
  };

  const customerTableHeaders = [
    {
      label: "CUSTOMER",
      key: "full_name",
      render: (customer) => (
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-gray-300 flex items-center justify-center">
            {customer.profile_image ? (
              <img
                src={customer.profile_image}
                alt="Profile"
                className="h-10 w-10 rounded-lg object-cover"
              />
            ) : (
              <Users className="h-5 w-5 text-gray-600" />
            )}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {customer?.first_name || "N/A"} {customer?.last_name || ""}
            </div>
            <div className="text-sm text-gray-500">
              {customer?.email || customer?.contact || "No contact"}
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Contact",
      key: "contact",
      render: (customer) => <span>{customer.contact || "-"}</span>,
    },
    // {
    //   label: "Email",
    //   key: "email",
    //   render: (customer) => <span>{customer.email || "-"}</span>,
    // },
    {
      label: "Status",
      key: "is_active",
      render: (customer) => (
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            customer.is_active
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-700"
          }`}
        >
          {customer.is_active ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      label: "Actions",
      key: "actions",
      render: (customer) => (
        <div className="flex justify-content-center gap-2">
          <button
            className="text-blue-600 hover:text-blue-800"
            onClick={() => handleEdit(customer)}
          >
            <Pencil size={16} />
          </button>
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => handleDelete(customer.id)}
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <SearchAndFilterBar
        placeholder="Search customers..."
        filters={customerFilter}
        onAdd={true}
        addLabel="Add Customer"
      />
      {/* <CustomerTable customers={customers} /> */}

      <TableComponent headers={customerTableHeaders} data={customers} />
    </div>
  );
}

export default CustomerPage;
