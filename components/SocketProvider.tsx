'use client';
import { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';

interface SocketContextData {
  socket: Socket | null;
  activeUsers: Record<string, number>;
}

const SocketContext = createContext<SocketContextData>({ socket: null, activeUsers: {} });

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children, initialPostId }: { children: ReactNode, initialPostId?: string }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [activeUsers, setActiveUsers] = useState<Record<string, number>>({});

  useEffect(() => {
    const newSocket = io('https://vivid-triumph-4386b82e17.strapiapp.com');
    setSocket(newSocket);

    newSocket.on('updateAllActiveUsers', (data) => {
      setActiveUsers(data);
    });

    newSocket.on('updateActiveUsers', ({ postId, count }) => {
      setActiveUsers((prev) => ({
        ...prev,
        [postId]: count,
      }));
    });

    if (initialPostId) {
      newSocket.emit('joinPost', initialPostId);
    }

    return () => {
      if (initialPostId) {
        newSocket.emit('leavePost', initialPostId);
      }
      newSocket.off('updateAllActiveUsers');
      newSocket.off('updateActiveUsers');
      newSocket.disconnect();
    };
  }, [initialPostId]);

  return (
    <SocketContext.Provider value={{ socket, activeUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
