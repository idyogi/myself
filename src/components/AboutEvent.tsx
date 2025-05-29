
import { CheckCircle, Heart, BookOpen, Pen } from 'lucide-react';

const AboutEvent = () => {
  const targetAudience = [
    "Pernah ngerasa gak cukup karena penampilan",
    "Sering mengukur nilai diri dari wajah atau fisik", 
    "Ingin berdamai dengan luka yang terlihat di wajah dan yang tersembunyi di hati",
    "Ingin belajar mencintai diri sebagai ciptaan Allah, bukan produk standar sosial",
    "Butuh ruang tenang untuk menulis, menyembuhkan, dan mengenali diri sendiri"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* About the Event */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Tentang Kelas Ini
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <span className="font-semibold text-green-700">"To: Myself with Love"</span> adalah kelas reflektif selama 2 hari untuk kamu yang:
            </p>
          </div>

          {/* Target Audience */}
          <div className="grid md:grid-cols-1 gap-4 mb-16">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-green-50 p-6 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>

          {/* What You'll Learn */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">
              Yang Akan Kita Bahas
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Kita akan ngobrol tentang bagaimana luka bisa tercermin di wajah, kenapa kamu selalu merasa lelah (tapi dipaksa tetap kuat), dan bagaimana cara pelan-pelan kembali membangun rasa syukur pada diri.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Akan ada momen reflektif, journaling, dan tantangan kecil yang mengajak kamu nulis surat cinta untuk diri sendiri — langkah awal menyapa diri dengan penuh sayang.
              </p>
            </div>
          </div>

          {/* Facilitator */}
          <div className="bg-white border-2 border-green-200 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">
              Bersama Atika Cahya
            </h3>
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Seorang penulis buku <span className="font-semibold text-green-700">"Tumbuh Menyala"</span> yang juga content creator dengan fokus pada tema healing, refleksi diri, dan kesehatan mental.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ia dikenal karena gaya penyampaian yang <span className="font-semibold text-green-700">lembut, tulus, dan menenangkan!</span>
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="text-center bg-green-800 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Filosofi Kelas</h3>
            <p className="text-xl leading-relaxed mb-4">
              Kamu gak akan diajak menghakimi diri. Tapi diajak memahami:
            </p>
            <p className="text-2xl font-bold italic">
              "Kenapa aku merasa seperti ini? Dan bagaimana aku bisa mulai memeluknya?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
