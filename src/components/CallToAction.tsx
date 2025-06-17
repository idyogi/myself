
import { Button } from '@/components/ui/button';
import { Heart, Phone, MessageCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Message */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Kalau kamu merasa kecil, lelah, dan gak tahu harus mulai dari mana...
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              Kelas ini bukan tentang mengubah dirimu jadi orang lain.
            </p>
            <p className="text-2xl md:text-3xl font-bold mb-8">
              Ini tentang pulang ke diri sendiri.<br />
              <span className="text-green-200">Dengan pelan-pelan, sabar, dan penuh cinta.</span>
            </p>
          </div>

          {/* Price Highlight */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4">Investasi untuk Dirimu</h3>
            <div className="text-5xl font-bold mb-2">Rp 39.000</div>
            <p className="text-green-200">Termasuk rekaman kelas + bonus worksheet & template</p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-6 mb-12">
            <Button 
              size="lg" 
              className="bg-white text-green-800 hover:bg-green-50 px-12 py-6 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
              onClick={() => window.open('https://up.myscalev.com/myself', '_blank')}
            >
              <Heart className="w-6 h-6 mr-3" />
              Oke, saya mau daftar kelasnya
            </Button>
            
            <p className="text-lg text-green-200">
              📌 Daftar sekarang sebelum kuota habis!
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-12">
            <h4 className="text-xl font-bold mb-4">Info Pendaftaran</h4>
            <div className="flex items-center justify-center space-x-4">
              <Phone className="w-5 h-5" />
              <span>Admin AQLI: 0821 8985 3539</span>
            </div>
          </div>

          {/* Final Message */}
          <div className="border-t border-white/20 pt-12">
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              Kamu gak harus cantik untuk bahagia.<br />
              Tapi kamu bisa mulai bahagia..<br />
              <span className="font-bold">Saat kamu berhenti menyakiti diri dengan harapan yang bukan-bukan.</span>
            </p>
            <p className="text-2xl md:text-3xl font-bold text-green-200">
              Yuk, pulang. Ke diri yang selama ini menunggu untuk dipeluk. 💚
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
