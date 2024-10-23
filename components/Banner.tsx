import { Card } from "@/components/ui/card";
import RetroAmountButton from "./RetroAmountButton";
import Link from 'next/link';
import Image from 'next/image';  // Importing Image component

const BannerPage = () => {
  return (
    <main className="min-h-screen bg-mint-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl overflow-hidden">
        <div className="relative">
          {/* Vintage-style illustration background */}
          <div className="absolute inset-0 bg-[#8B6F5E] opacity-10" />

          <div className="relative h-[500px] flex flex-col items-center justify-center text-center px-4 space-y-6">
            {/* Decreased opacity of the image to 60% */}
            <Image
              src="/img-table1.jpeg"
              alt="Friends having dinner together"
              layout="fill"  // Fills the entire container
              objectFit="cover"  // Ensures the image covers the background like `object-cover` in CSS
              priority={true}  // Optimizes LCP for important images
              className="opacity-60"  // Custom class for opacity
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
              <Image
                src="/img-table1.jpeg"
                alt="Background vintage illustration"
                layout="fill"
                objectFit="cover"
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default BannerPage;
