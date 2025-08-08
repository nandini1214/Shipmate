import React from 'react';

const QuickActions = ({ actions = [], onClick }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-4 gap-3">
                {actions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                        <button
                            key={index}
                            className={`${action.bgColor} ${action.hoverColor} ${action.textColor} p-4 rounded-lg text-left transition-colors`}
                        >
                            <Icon className="h-6 w-6 mb-2" />
                            <p className="font-medium">{action.title}</p>
                            <p className={`text-sm ${action.subtitleColor}`}>{action.subtitle}</p>
                        </button>
                    );
                })}
            </div>
        </div>

    );
};

export default QuickActions;
