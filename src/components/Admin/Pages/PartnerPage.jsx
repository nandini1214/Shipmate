import TableComponent from "../TableComponents/TableComponent";
import SearchAndFilterBar from "../uicomponents/SearchAndFilterBar";
import { Pencil, Trash2, Users } from "lucide-react";

function PartnerPage({ partners }) {
  const partnersFilter = [
    {
      options: [
        { value: "all", label: "All Status" },
        { value: "active", label: "Active" },
        { value: "pending", label: "Pending" },
      ],
    },
  ];

  const handleEdit = (partner) => {
    console.log("Edit:", partner);
    // open modal or navigate to edit
  };

  const handleDelete = (partnerId) => {
    console.log("Delete ID:", partnerId);
    // trigger delete confirmation
  };

  const partnerTableHeaders = [
    {
      label: "PARTNER",
      key: "full_name",
      render: (partner) => (
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-gray-300 flex items-center justify-center">
            {partner.profile_image ? (
              <img
                src={partner.profile_image}
                alt="Profile"
                className="h-10 w-10 rounded-lg object-cover"
              />
            ) : (
              <Users className="h-5 w-5 text-gray-600" />
            )}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {partner?.first_name || "N/A"} {partner?.last_name || ""}
            </div>
            <div className="text-sm text-gray-500">
              {partner?.email || partner?.contact || "No contact"}
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Contact",
      key: "contact",
      render: (partner) => <span>{partner.contact || "-"}</span>,
    },
    {
      label: "Address",
      key: "address",
      render: (partner) => <span>{partner.address || "-"}</span>,
    },
     {
      label: "Buisness Name",
      key: "buisness_name",
      render: (partner) => (
        <span>{partner?.store_details?.business_name || "-"}</span>
      ),
    },
    {
      label: "Buisness Type",
      key: "business_type",
      render: (partner) => (
        <span>{partner?.store_details?.buisness_type || "-"}</span>
      ),
    },
    {
      label: "Status",
      key: "is_active",
      render: (partner) => (
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            partner.is_active
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-700"
          }`}
        >
          {partner.is_active ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      label: "Actions",
      key: "actions",
      render: (partner) => (
        <div className="flex justify-content-center gap-2">
          <button
            className="text-blue-600 hover:text-blue-800"
            onClick={() => handleEdit(partner)}
          >
            <Pencil size={16} />
          </button>
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => handleDelete(partner.id)}
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
        placeholder="Search partners..."
        filters={partnersFilter}
        onAdd={true}
        addLabel="Add Partner"
      />
      {/* <PartnerTable partners={partners} /> */}

      <TableComponent headers={partnerTableHeaders} data={partners} />
    </div>
  );
}

export default PartnerPage;
