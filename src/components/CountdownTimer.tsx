
import { Clock, AlertTriangle } from 'lucide-react';
import { useCountdown } from '@/hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: Date;
  currentPrice: number;
  newPrice: number;
  className?: string;
}

const CountdownTimer = ({ targetDate, currentPrice, newPrice, className }: CountdownTimerProps) => {
  const { timeLeft, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <div className={`bg-red-100 border border-red-300 rounded-xl p-6 ${className}`}>
        <div className="text-center">
          <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-red-800 mb-2">Harga Sudah Naik!</h3>
          <div className="text-2xl font-bold text-red-700">Rp {newPrice.toLocaleString('id-ID')}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-red-50 border border-red-200 rounded-xl p-6 ${className}`}>
      <div className="text-center">
        <div className="flex items-center justify-center mb-3">
          <Clock className="w-6 h-6 text-red-600 mr-2" />
          <h3 className="text-lg font-bold text-red-800">Harga Naik Dalam</h3>
        </div>
        
        {/* Countdown Display */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="bg-red-600 text-white rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-xs">Hari</div>
          </div>
          <div className="bg-red-600 text-white rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
            <div className="text-xs">Jam</div>
          </div>
          <div className="bg-red-600 text-white rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xs">Menit</div>
          </div>
          <div className="bg-red-600 text-white rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.seconds}</div>
            <div className="text-xs">Detik</div>
          </div>
        </div>

        {/* Price Info */}
        <div className="text-sm text-red-700 mb-2">
          <span className="line-through">Rp {newPrice.toLocaleString('id-ID')}</span>
          <span className="ml-2 font-bold">→ Rp {currentPrice.toLocaleString('id-ID')}</span>
        </div>
        <p className="text-xs text-red-600">
          21 Juni 2025, 23:59 WIB harga naik menjadi Rp {newPrice.toLocaleString('id-ID')}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
