
import { Gift, FileText, Heart, Download } from 'lucide-react';

const BonusSection = () => {
  const bonuses = [
    {
      icon: FileText,
      title: "Worksheet Refleksi Diri",
      description: "Membantu kamu mengenali rasa, luka, dan kebutuhan emosional yang selama ini terabaikan."
    },
    {
      icon: Heart,
      title: "Self Love Journey Template", 
      description: "Template visual sederhana yang bisa kamu pakai untuk merekam proses healing dan self-love-mu dari hari ke hari."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-12 h-12 text-pink-600" />
            </div>
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Bonus Spesial untuk Peserta
            </h2>
            <p className="text-xl text-gray-700">
              Hadiah istimewa yang akan mendampingi perjalanan healing-mu
            </p>
          </div>

          {/* Bonus Items */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <bonus.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">{bonus.title}</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{bonus.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <Download className="w-8 h-8 text-green-600 mr-2" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Yang Kamu Dapatkan</h3>
            <ul className="text-lg text-gray-700 space-y-2">
              <li>✨ Rekaman kelas lengkap</li>
              <li>📝 Worksheet Refleksi Diri</li>
              <li>💖 Self Love Journey Template</li>
              <li>🎯 Akses selamanya ke materi</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
