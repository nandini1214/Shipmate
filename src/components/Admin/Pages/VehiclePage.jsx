import { useState } from "react";
import TableComponent from "../TableComponents/TableComponent";
import AddVehicleModal from "../uicomponents/AddVehicleModal";
import SearchAndFilterBar from "../uicomponents/SearchAndFilterBar";
import { Pencil, Trash2, User, Users } from "lucide-react";

function VehiclePage({ drivers = [] }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const driverFilters = [
        {
            options: [
                { value: "all", label: "All Status" },
                { value: "active", label: "Active" },
                { value: "offline", label: "Offline" },
            ],
        },
    ];

    const handleEdit = (driver) => {
        console.log("Edit:", driver);
        // open modal or navigate to edit
    };

    const handleDelete = (driverId) => {
        console.log("Delete ID:", driverId);
        // trigger delete confirmation
    };

    const handleButtonClick = () => {
        setIsModalOpen(true)
    }
    const driverTableHeaders = [

        {
            label: "DRIVER",
            key: "full_name",
            render: (driver) => (
                <div className="flex items-center">
                    <div className="h-10 w-10 rounded-lg bg-gray-300 flex items-center justify-center">
                        {driver.profile_image ? (
                            <img
                                src={driver.profile_image}
                                alt="Profile"
                                className="h-10 w-10 rounded-lg object-cover"
                            />
                        ) : (
                            <Users className="h-5 w-5 text-gray-600" />
                        )}
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {driver?.first_name || "N/A"} {driver?.last_name || ""}
                        </div>
                        <div className="text-sm text-gray-500">
                            {driver?.email || driver?.contact || "No contact"}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            label: "Contact",
            key: "contact",
            render: (driver) => <span>{driver.contact || "-"}</span>,
        },
        // {
        //   label: "Email",
        //   key: "email",
        //   render: (driver) => <span>{driver.email || "-"}</span>,
        // },
        {
            label: "Vehicle Type",
            key: "vehicle_type",
            render: (driver) => (
                <span>{driver?.driver_details?.vehicle_type || "-"}</span>
            ),
        },
        {
            label: "Vehicle No.",
            key: "vehicle_number",
            render: (driver) => (
                <span>{driver?.driver_details?.vehicle_number || "-"}</span>
            ),
        },
        {
            label: "License",
            key: "license_number",
            render: (driver) => (
                <span>{driver?.driver_details?.license_number || "-"}</span>
            ),
        },
        {
            label: "Status",
            key: "is_active",
            render: (driver) => (
                <span
                    className={`text-xs px-2 py-1 rounded-full ${driver.is_active
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-700"
                        }`}
                >
                    {driver.is_active ? "Active" : "Inactive"}
                </span>
            ),
        },
        {
            label: "Actions",
            key: "actions",
            render: (driver) => (
                <div className="flex justify-content-center gap-2">
                    <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => handleEdit(driver)}
                    >
                        <Pencil size={16} />
                    </button>
                    <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(driver.id)}
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
                placeholder="Search drivers..."
                filters={driverFilters}
                onAdd={true}
                addLabel="Add Vehicle"
                onButtonClick={handleButtonClick}
            />
            {/* <DriversTable drivers={drivers} /> */}
            <TableComponent headers={driverTableHeaders} data={drivers} />
            <AddVehicleModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                // onSubmit={handleAddVehicle}
            />
        </div>
    );
}

export default VehiclePage;
