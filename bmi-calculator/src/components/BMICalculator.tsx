'use client';

import { useState, useEffect } from 'react';

interface BMIResult {
  value: number;
  category: string;
  color: string;
  bgColor: string;
  description: string;
  advice: string;
}

export default function BMICalculator() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<BMIResult | null>(null);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [isCalculating, setIsCalculating] = useState(false);

  const getBMICategory = (bmi: number): { category: string; color: string; bgColor: string; description: string; advice: string } => {
    if (bmi < 18.5) {
      return {
        category: 'نقص في الوزن',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50 border-blue-200',
        description: 'وزنك أقل من المعدل الطبيعي',
        advice: 'يُنصح بزيادة السعرات الحرارية وممارسة تمارين القوة'
      };
    } else if (bmi >= 18.5 && bmi < 25) {
      return {
        category: 'وزن طبيعي',
        color: 'text-green-600',
        bgColor: 'bg-green-50 border-green-200',
        description: 'وزنك في المعدل الطبيعي',
        advice: 'حافظ على نمط حياة صحي ومتوازن'
      };
    } else if (bmi >= 25 && bmi < 30) {
      return {
        category: 'زيادة في الوزن',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50 border-orange-200',
        description: 'وزنك أعلى من المعدل الطبيعي',
        advice: 'يُنصح بتقليل السعرات الحرارية وزيادة النشاط البدني'
      };
    } else {
      return {
        category: 'سمنة',
        color: 'text-red-600',
        bgColor: 'bg-red-50 border-red-200',
        description: 'وزنك أعلى بكثير من المعدل الطبيعي',
        advice: 'يُنصح بشدة باستشارة طبيب مختص ووضع خطة غذائية'
      };
    }
  };

  const calculateBMI = async () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!weightNum || !heightNum || weightNum <= 0 || heightNum <= 0) {
      alert('يرجى إدخال قيم صحيحة للوزن والطول');
      return;
    }

    setIsCalculating(true);
    
    // محاكاة تأخير للتأثير البصري
    await new Promise(resolve => setTimeout(resolve, 1000));

    let bmi: number;
    if (unit === 'metric') {
      // BMI = weight(kg) / height(m)^2
      const heightInMeters = heightNum / 100;
      bmi = weightNum / (heightInMeters * heightInMeters);
    } else {
      // BMI = (weight(lb) / height(in)^2) * 703
      bmi = (weightNum / (heightNum * heightNum)) * 703;
    }

    const category = getBMICategory(bmi);
    setResult({
      value: Math.round(bmi * 10) / 10,
      ...category
    });
    
    setIsCalculating(false);
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  const getBMIProgress = (bmi: number) => {
    // تحويل BMI إلى نسبة مئوية للشريط التقدمي
    const maxBMI = 40;
    const progress = Math.min((bmi / maxBMI) * 100, 100);
    return progress;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
            حاسبة مؤشر كتلة الجسم
          </h1>
          <p className="text-gray-600 text-lg">احسب مؤشر كتلة جسمك بسهولة ودقة</p>
        </div>

        {/* Unit Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-xl p-1 flex shadow-inner">
            <button
              onClick={() => setUnit('metric')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                unit === 'metric'
                  ? 'bg-white text-blue-600 shadow-md transform scale-105'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              متري (كم/سم)
            </button>
            <button
              onClick={() => setUnit('imperial')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                unit === 'imperial'
                  ? 'bg-white text-blue-600 shadow-md transform scale-105'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              إمبراطوري (رطل/بوصة)
            </button>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-6">
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              الوزن ({unit === 'metric' ? 'كم' : 'رطل'})
            </label>
            <div className="relative">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg bg-gray-50 focus:bg-white group-hover:border-gray-300"
                placeholder={unit === 'metric' ? 'مثال: 70' : 'مثال: 154'}
              />
              <span className="absolute left-4 top-4 text-gray-400 text-lg font-medium">
                {unit === 'metric' ? 'كم' : 'رطل'}
              </span>
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              الطول ({unit === 'metric' ? 'سم' : 'بوصة'})
            </label>
            <div className="relative">
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg bg-gray-50 focus:bg-white group-hover:border-gray-300"
                placeholder={unit === 'metric' ? 'مثال: 175' : 'مثال: 69'}
              />
              <span className="absolute left-4 top-4 text-gray-400 text-lg font-medium">
                {unit === 'metric' ? 'سم' : 'بوصة'}
              </span>
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateBMI}
          disabled={isCalculating}
          className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isCalculating ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white ml-3"></div>
              جاري الحساب...
            </div>
          ) : (
            'احسب مؤشر كتلة الجسم'
          )}
        </button>

        {/* Result */}
        {result && (
          <div className={`mt-8 p-6 rounded-xl border-2 ${result.bgColor} transform transition-all duration-500 animate-fadeIn`}>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-800 mb-3">
                {result.value}
              </div>
              <div className={`text-2xl font-bold mb-2 ${result.color}`}>
                {result.category}
              </div>
              <div className="text-gray-700 mb-4 text-lg">
                {result.description}
              </div>
              
              {/* BMI Progress Bar */}
              <div className="mb-6">
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000"
                    style={{ width: `${getBMIProgress(result.value)}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  مؤشر كتلة الجسم: {result.value}
                </div>
              </div>

              {/* Advice */}
              <div className="bg-white/70 rounded-lg p-4 mb-6 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">💡 نصيحة:</h4>
                <p className="text-gray-700 text-sm">
                  {result.advice}
                </p>
              </div>
              
              {/* BMI Scale */}
              <div className="mt-6">
                <div className="text-sm font-semibold text-gray-700 mb-4">📊 مقياس مؤشر كتلة الجسم</div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-blue-50">
                    <span className="text-blue-600 font-medium">نقص في الوزن</span>
                    <span className="text-gray-500">&lt; 18.5</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-green-50">
                    <span className="text-green-600 font-medium">وزن طبيعي</span>
                    <span className="text-gray-500">18.5 - 24.9</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-orange-50">
                    <span className="text-orange-600 font-medium">زيادة في الوزن</span>
                    <span className="text-gray-500">25 - 29.9</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-red-50">
                    <span className="text-red-600 font-medium">سمنة</span>
                    <span className="text-gray-500">≥ 30</span>
                  </div>
                </div>
              </div>

              <button
                onClick={resetCalculator}
                className="mt-6 px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300 font-medium"
              >
                🔄 حساب جديد
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>⚠️ هذه الحاسبة للإرشاد فقط وليست بديلاً عن الاستشارة الطبية</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}