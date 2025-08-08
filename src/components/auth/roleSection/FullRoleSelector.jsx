// src/components/form/FullRoleSelector.jsx
import React from 'react';
import RoleCard from './RoleCard'; // Assumes you’ve created this component already

const FullRoleSelector = ({ roles, selectedRole, onRoleSelect }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {roles.map((role) => (
            <RoleCard
                key={role.value}
                role={role.value}
                icon={role.icon}
                title={role.title}
                description={role.description}
                selected={selectedRole === role.value}
                onClick={() => onRoleSelect(role.value)}
            />
        ))}
    </div>
);

export default FullRoleSelector;
