import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gem, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import diamondImg from '../assets/diamond.png';

const Diamond = () => {
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
        <Link to="/" className="inline-flex items-center gap-2 text-diamond-DEFAULT hover:text-diamond-dark transition-colors mb-8 font-semibold">
          <ArrowRight className="h-5 w-5" />
          العودة للرئيسية
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-diamond-DEFAULT/20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-diamond-DEFAULT/20 to-transparent mix-blend-overlay z-10"></div>
            <img src={diamondImg} alt="الألماس" className="w-full h-auto object-cover" />
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Gem className="h-8 w-8 text-diamond-DEFAULT" />
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white">الألماس الساحر</h1>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-diamond-DEFAULT to-transparent mb-8"></div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              نقدم لك مجموعة حصرية من الألماس المختار بعناية ليعكس أقصى درجات التألق والبريق. كل حجر لدينا يروي قصة من الجمال النادر المستخرج من قلب الطبيعة.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
              تخضع جميع قطع الألماس لدينا لمعايير التقييم العالمية الـ 4Cs (اللون، النقاء، القطع، الوزن بالقيراط) لتضمني استثماراً حقيقياً يشع بريقاً على مر الزمان في تصاميم تأسر القلوب.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-diamond-DEFAULT/20 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">ضمان الألماس</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-diamond-DEFAULT"></div> شهادات موثوقة من مختبرات GIA العالمية.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-diamond-DEFAULT"></div> دقة متناهية في صقل الأحجار لضمان الانعكاس المثالي.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-diamond-DEFAULT"></div> خيارات متنوعة من القصات (برينسس، ماركيز، دائري).</li>
              </ul>
            </div>
            
            <button className="px-8 py-4 bg-diamond-DEFAULT text-white rounded-full font-bold text-lg hover:bg-diamond-dark transition-colors shadow-lg shadow-diamond-DEFAULT/30 w-full md:w-auto">
              تصفح التشكيلة الماسية
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Diamond;
