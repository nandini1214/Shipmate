import { Phone, Mail } from "lucide-react";

const defaultOptions = [
  {
    icon: Phone,
    title: "Call Support",
    subtitle: "24/7 customer service",
    onClick: () => window.location.href = "tel:+911234567890",
  },
  {
    icon: Mail,
    title: "Email Support",
    subtitle: "Get help via email",
    onClick: () => window.location.href = "mailto:support@example.com",
  },
];

const Support = ({ options = defaultOptions }) => {
  return (
    <section>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <button
                key={idx}
                onClick={opt.onClick}
                className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors w-full text-left"
              >
                <Icon className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">{opt.title}</p>
                  <p className="text-sm text-gray-600">{opt.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Support;
