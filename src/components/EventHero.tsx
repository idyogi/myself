
import { Heart, Calendar, Clock, Users, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/CountdownTimer';

const EventHero = () => {
  // Target date: 21 Juni 2025, 23:59 WIB
  const priceIncreaseDate = new Date('2025-06-21T23:59:00+07:00');

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4 leading-tight">
                MYSELF I<br />
                <span className="text-green-600">WITH LOVE</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-green-700 font-medium italic mb-6">
                "Kamu Gak Perlu Cantik untuk Bahagia"
              </p>
              
              <div className="mb-6">
                <p className="text-base md:text-lg lg:text-xl text-green-800 max-w-2xl leading-relaxed">
                  💌 Yuk, jadi diri yang lebih berarti<br />
                  Bukan versi paling glowing.<br />
                  Bukan versi yang semua orang suka.<br />
                  <span className="font-semibold">Tapi versi dirimu yang paling jujur dan paling utuh.</span>
                </p>
              </div>

              {/* CTA Button */}
              <div className="mb-6">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://up.myscalev.com/myself', '_blank')}
                >
                  <Heart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Oke, saya mau daftar kelasnya
                </Button>
              </div>
            </div>

            {/* Right Side - Poster Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-md w-full">
                <img 
                  src="/lovable-uploads/846495ac-ec1a-46ce-9513-5921f26d0c3a.png"
                  alt="To: Myself with Love - Event Poster"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8">
            <CountdownTimer 
              targetDate={priceIncreaseDate}
              currentPrice={39000}
              newPrice={43000}
              className="max-w-md mx-auto"
            />
          </div>

          {/* Event Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg">
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-green-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-semibold text-green-800 mb-1 md:mb-2 text-sm md:text-base">Tanggal</h3>
              <p className="text-green-700 text-sm md:text-base">28-29 Juni 2025</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-green-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-semibold text-green-800 mb-1 md:mb-2 text-sm md:text-base">Waktu</h3>
              <p className="text-green-700 text-sm md:text-base">19:30 - 21:30 WIB</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-green-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-semibold text-green-800 mb-1 md:mb-2 text-sm md:text-base">Platform</h3>
              <p className="text-green-700 text-sm md:text-base">Full Online via Zoom</p>
            </div>
          </div>

          {/* Price */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-md mx-auto shadow-xl">
            <div className="text-center">
              <p className="text-green-700 text-base md:text-lg mb-2">Harga Spesial</p>
              <div className="text-3xl md:text-4xl font-bold text-green-800 mb-2">Rp 39.000</div>
              <p className="text-xs md:text-sm text-green-600">Termasuk rekaman kelas + bonus worksheet & template</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
