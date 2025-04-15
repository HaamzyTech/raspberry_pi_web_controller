import SwitchToogle from "@/features/diod-switch/components/switch";
import { getStatus } from "@/features/diod-switch/server/data/diod";

export default async function Home() {
  
  const status = await getStatus();
  
  return (
    <div className="flex items-center justify-center h-screen bg-stone-100">
      <div className="flex flex-col items-center space-y-6">
        {status.error && (
          <div className="bg-red-200 text-red-500 px-4 py-2 rounded-lg">
            {status.message}
          </div>
        )}
        <SwitchToogle status={status.status || false} />
      </div>
    </div>
  );
}
