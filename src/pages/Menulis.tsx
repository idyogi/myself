
import { Heart, Calendar, Clock, Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Menulis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Link to="/" className="inline-flex items-center text-purple-700 hover:text-purple-800 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>
      </div>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
            {/* Left Side - Poster Image */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="max-w-xs sm:max-w-sm md:max-w-md w-full">
                <img 
                  src="/lovable-uploads/84795c64-4216-421e-9db9-1cc83567126b.png"
                  alt="To: Myself with Love - Menulis Poster"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-left order-2 lg:order-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-800 mb-4">
                To My Self<br />
                <span className="text-pink-600">With Love</span>
              </h1>
              
              <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>Kita tumbuh di dunia yang ngajarin kita buat "jadi lebih".<br />
                Lebih cantik. Lebih kurus. Lebih glowing. Lebih kuat.<br />
                Sampai lupa rasanya jadi diri sendiri.</p>

                <p>Tiap kali ngaca, yang dilihat bukan wajah…<br />
                Tapi standar orang lain yang gak pernah kamu minta.</p>

                <p>Tiap kali capek, kamu masih maksa senyum —<br />
                Takut dibilang lemah, takut dibilang drama, takut dibilang gak bersyukur.</p>

                <p className="font-semibold text-purple-800">Padahal kamu cuma butuh satu hal:<br />
                Ruang buat jujur. Sama diri sendiri. Tanpa takut dihakimi.</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">✨ To: Myself With Love</h3>
                <p className="text-gray-700 mb-4">Kelas 2 hari yang lembut, pelan, dan penuh kasih — untuk kamu yang ingin belajar menyapa diri sendiri lagi.</p>
                
                <p className="font-medium text-purple-700 mb-4">Bukan buat jadi versi terbaik. Tapi versi paling jujur.</p>
                
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-purple-800">💌 Kita akan:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nulis surat cinta untuk diri sendiri</li>
                    <li>Ngobrol tentang luka yang nempel di wajah & hati</li>
                    <li>Pelan-pelan belajar berdamai & bersyukur</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-100 rounded-xl p-6 mb-8">
                <p className="text-purple-800 font-medium mb-4">Kamu gak sendirian. Dan kamu gak harus kuat terus.</p>
                <p className="text-2xl font-bold text-purple-800 mb-2">📎 Rp29.000 aja</p>
                <p className="text-sm text-purple-700">Termasuk rekaman, worksheet refleksi, dan template healing journey.</p>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  onClick={() => window.open('https://up.myscalev.com/myself', '_blank')}
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  🕊 Klik link buat daftar
                </Button>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center">
                <p className="text-gray-700 italic">Karena kadang self-love bukan soal berubah.<br />
                Tapi soal pulang ke diri sendiri.<br />
                <span className="font-semibold text-purple-800">Dengan sabar. Dengan sayang. Dengan tenang.</span></p>
              </div>
            </div>
          </div>

          {/* Event Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg text-center">
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-purple-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-semibold text-purple-800 mb-1 md:mb-2 text-sm md:text-base">Tanggal</h3>
              <p className="text-purple-700 text-sm md:text-base">28-29 Juni 2025</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg text-center">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-purple-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-semibold text-purple-800 mb-1 md:mb-2 text-sm md:text-base">Waktu</h3>
              <p className="text-purple-700 text-sm md:text-base">19:30 - 21:30 WIB</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg text-center">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-semibold text-purple-800 mb-1 md:mb-2 text-sm md:text-base">Platform</h3>
              <p className="text-purple-700 text-sm md:text-base">Full Online via Zoom</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menulis;
