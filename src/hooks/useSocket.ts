import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';


let socket: Socket;

const useSocket = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket = io(process.env.NEXT_PUBLIC_SOCKETURL || 'http://localhost:4000'); // Ensure correct URL/port NEXT_PUBLIC_SOCKETURL
  //   socket = io(process.env.NEXT_PUBLIC_SOCKETURL || 'https://moneymonkey-backend-d668543be371.herokuapp.com' ,{
  //     transports: ['websocket', 'polling'], reconnectionAttempts: 5,  withCredentials: true,

  //   }
  // ); 

    socket.on('connect', () => {
      console.log('Connected to server', socket.id);
      setConnected(true);
    });

    socket.on('disconnect', (reason) => {
      console.log('Disconnected from server', reason);
      setConnected(false);
    });

    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('connect_error');
    };
  }, []);

  return socket;
};

export default useSocket;
