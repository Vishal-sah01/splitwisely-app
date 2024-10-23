import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RetroAmountButton from "./RetroAmountButton";
import Link from 'next/link';

const BannerPage = () => {
  return (
    <main className="min-h-screen bg-mint-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl overflow-hidden">
        <div className="relative">
          {/* Vintage-style illustration background */}
          <div className="absolute inset-0 bg-[#8B6F5E] opacity-10" />

          <div className="relative h-[500px] flex flex-col items-center justify-center text-center px-4 space-y-6">
            {/* Decreased opacity of the image to 60% */}
            <img
              src="/img-table1.jpeg"
              alt="Friends having dinner together"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            {/* Main content */}
            <div className="space-y-4 max-w-2xl relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Split expense with your friends in seconds
              </h1>

              <p className="text-lg text-gray-600">
                Join now and make group payments a breeze!
              </p>
              <Link href="/group">
                <RetroAmountButton>
                </RetroAmountButton>
              </Link>
            </div>

            {/* Vintage illustration overlay */}
            <div className="absolute inset-0 -z-10">
              <div className="w-full h-full bg-[url('/img-table1.jpeg')] bg-cover bg-center opacity-80" />
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default BannerPage;
