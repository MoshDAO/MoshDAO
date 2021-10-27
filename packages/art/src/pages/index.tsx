import { Viewer } from "@/art/components/Viewer";
import { useIsMounted } from "@/art/hooks/useIsMounted";

export const Index = (): JSX.Element => {
  const isMounted = useIsMounted();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-blue-600 via-purple-600 to-orange-500">
      <div className="text-center">
        <header className="mt-20 mb-12 space-y-6 text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            Mosh DAO Art
          </h1>
        </header>
        {isMounted && <Viewer />}
      </div>
    </div>
  );
};

export default Index;
