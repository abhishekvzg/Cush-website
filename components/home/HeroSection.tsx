import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#E8E6FF] to-[#C5C4FF] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Your Journey to Perfect Sleep
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Ever felt the ache after sitting too long? The restless shifting, the stiff neck, 
              the lower back pain? We did too. That's why we created Cush - designed for comfort, 
              crafted for better posture & pain relief.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
              <Link 
                href="/products" 
                className="inline-block bg-[#CCFF00] text-black font-medium px-8 py-3 rounded hover:bg-[#B8E600] transition-colors text-center"
              >
                Shop Now
              </Link>
              <Link 
                href="/about" 
                className="inline-block bg-[#6B63FF] text-white font-medium px-8 py-3 rounded hover:bg-[#5B54E8] transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2">
                  <Image
                    src="/images/icons/breathable.svg"
                    alt="Breathable"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="text-sm font-medium">Breathable</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2">
                  <Image
                    src="/images/icons/durable.svg"
                    alt="Durable"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="text-sm font-medium">Durable</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2">
                  <Image
                    src="/images/icons/washable.svg"
                    alt="Washable"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="text-sm font-medium">Washable</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/images/hero/cooling-gel-pillow.jpg"
              alt="Cush Cooling Gel Pillow"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 