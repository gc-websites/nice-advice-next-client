'use client';
import { useSocket } from './SocketProvider';

export default function LiveViewerCount({ documentId }: { documentId: string }) {
  const { activeUsers } = useSocket();
  const count = activeUsers[documentId] || 0;

  return (
    <p className="section__description text-sm text-main dark:text-main">
      {count} reading now
    </p>
  );
}
