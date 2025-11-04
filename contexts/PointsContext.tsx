import React, { createContext, useContext, useState, useCallback } from 'react';
import { PointsNotification } from '../components/PointsNotification';

interface PointsContextType {
    showPoints: (points: number) => void;
}

const PointsContext = createContext<PointsContextType | undefined>(undefined);

interface QueuedNotification {
    id: number;
    points: number;
}

export const PointsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<QueuedNotification[]>([]);

    const showPoints = useCallback((points: number) => {
        // Fix: Use functional updates to avoid race conditions
        const id = Date.now() + Math.random(); // Use timestamp + random for unique IDs
        setNotifications(prevNotifications => [...prevNotifications, { id, points }]);
    }, []);

    const value = { showPoints };

    return (
        <PointsContext.Provider value={value}>
            {children}
            {/* Render only the most recent notification and remove older ones */}
            {notifications.length > 0 && (
                <PointsNotification
                    key={notifications[notifications.length - 1].id}
                    points={notifications[notifications.length - 1].points}
                    notificationId={notifications[notifications.length - 1].id}
                    onComplete={(completedId) => {
                        // Remove the notification by its ID
                        setNotifications(prev => prev.filter(n => n.id !== completedId));
                    }}
                />
            )}
        </PointsContext.Provider>
    );
};

export const usePoints = () => {
    const context = useContext(PointsContext);
    if (context === undefined) {
        throw new Error('usePoints must be used within a PointsProvider');
    }
    return context;
};

