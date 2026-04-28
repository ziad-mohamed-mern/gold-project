import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import goldImg from '../assets/gold.png';

const Gold = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-DEFAULT hover:text-gold-dark transition-colors mb-8 font-semibold">
          <ArrowRight className="h-5 w-5" />
          العودة للرئيسية
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-gold-DEFAULT/20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-DEFAULT/20 to-transparent mix-blend-overlay z-10"></div>
            <img src={goldImg} alt="الذهب" className="w-full h-auto object-cover" />
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-gold-DEFAULT" />
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white">الذهب الأصيل</h1>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-gold-DEFAULT to-transparent mb-8"></div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              تعتبر مجموعتنا من الذهب تجسيداً للفخامة والرقي. نقدم تشكيلات متنوعة من عيار 24، 21، و 18 قيراط، مصاغة بأيدي أمهر الحرفيين لضمان دقة التفاصيل وجودة اللمسات النهائية.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
              سواء كنت تبحث عن طقم زفاف متكامل يخطف الأنظار، أو قطعة يومية ناعمة تعبر عن شخصيتك، فإن خياراتنا تلبي كافة الأذواق من التصاميم التراثية العريقة إلى الموديلات الإيطالية العصرية.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gold-DEFAULT/20 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">مميزات مجموعتنا</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gold-DEFAULT"></div> نقاء مضمون وشهادات معتمدة.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gold-DEFAULT"></div> تصاميم حصرية لا تتكرر.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gold-DEFAULT"></div> خدمة صيانة وتلميع مجانية للسنة الأولى.</li>
              </ul>
            </div>
            
            <button className="px-8 py-4 bg-gold-DEFAULT text-white rounded-full font-bold text-lg hover:bg-gold-dark transition-colors shadow-lg shadow-gold-DEFAULT/30 w-full md:w-auto">
              اطلب استشارة مجانية
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Gold;
