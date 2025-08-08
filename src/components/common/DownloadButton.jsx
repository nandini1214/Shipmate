const DownloadButton = ({ platform, icon: Icon, bgColor, hoverColor, comingSoon = false }) => {
    return (
        <button
            disabled={comingSoon}
            className={`${bgColor} ${hoverColor} text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
        >
            <Icon className="h-6 w-6" />
            <div className="text-left">
                <p className="text-xs opacity-90">Download for</p>
                <p className="text-lg font-bold">{platform}</p>
                {comingSoon && <p className="text-xs opacity-75">Coming Soon</p>}
            </div>
        </button>
    );
};

export default DownloadButton;