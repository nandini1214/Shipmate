const ServiceCard = ({ icon: Icon, title, time, description, price, color }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center space-x-3 mb-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{time}</p>
        </div>
      </div>
      <p className="text-xs text-gray-600 mb-3">{description}</p>
      <span className="text-sm font-semibold text-green-600">{price}</span>
    </div>
  );
};

export default ServiceCard;
