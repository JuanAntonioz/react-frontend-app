interface FullScreenLoaderProps {
  message?: string;
}

export const FullScreenLoader = ({
  message = 'Cargando...',
}: FullScreenLoaderProps) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500 font-medium animate-pulse">{message}</p>
      </div>
    </div>
  );
};
