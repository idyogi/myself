
import { Heart, Calendar, Clock, Users, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventHero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-4 leading-tight">
              MYSELF I<br />
              <span className="text-green-600">WITH LOVE</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-700 font-medium italic">
              "Kamu Gak Perlu Cantik untuk Bahagia"
            </p>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-green-800 max-w-2xl mx-auto leading-relaxed">
              💌 Yuk, jadi diri yang lebih berarti<br />
              Bukan versi paling glowing.<br />
              Bukan versi yang semua orang suka.<br />
              <span className="font-semibold">Tapi versi dirimu yang paling jujur dan paling utuh.</span>
            </p>
          </div>

          {/* Event Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-800 mb-2">Tanggal</h3>
              <p className="text-green-700">28-29 Juni 2025</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-800 mb-2">Waktu</h3>
              <p className="text-green-700">19:30 - 21:30 WIB</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-800 mb-2">Platform</h3>
              <p className="text-green-700">Full Online via Zoom</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-5 h-5 mr-2" />
              Oke, saya mau daftar kelasnya
            </Button>
          </div>

          {/* Price */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto shadow-xl">
            <div className="text-center">
              <p className="text-green-700 text-lg mb-2">Harga Spesial</p>
              <div className="text-4xl font-bold text-green-800 mb-2">Rp 29.000</div>
              <p className="text-sm text-green-600">Termasuk rekaman kelas + bonus worksheet & template</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
