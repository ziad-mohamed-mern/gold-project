import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Moon, Gem, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import goldImg from '../assets/gold.png';
import silverImg from '../assets/silver.png';
import diamondImg from '../assets/diamond.png';
import aboutImg from '../assets/about.png'; // Assuming it'copied or will be
import heroBgImg from '../assets/hero_bg.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroBgImg} alt="Background" className="w-full h-full object-cover opacity-30 dark:opacity-40" onError={(e) => e.target.style.display = 'none'} />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/80 via-transparent to-gray-50 dark:from-gray-900/90 dark:via-gray-900/80 dark:to-gray-900 z-10"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-DEFAULT/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-diamond-DEFAULT/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
    </div>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-tight text-gray-900 dark:text-white">
        <span className="block text-6xl md:text-9xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gold-DEFAULT via-yellow-300 to-gold-DEFAULT drop-shadow-lg">
          مصنع النفيس للذهب
        </span>
        اكتشف عالم الفخامة والأناقة
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-700 dark:text-gray-300 mb-10 drop-shadow-md">
        نقدم لك أرقى التشكيلات من الذهب الخالص، الفضة اللامعة، والألماس النادر. استثمر في جمال لا يزول.
      </p>
      <a href="#showcase" className="px-8 py-4 bg-gradient-to-r from-gold-dark to-gold-DEFAULT text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-gold-DEFAULT/30 inline-flex items-center justify-center gap-2 mx-auto">
        <Sparkles className="h-5 w-5" />
        استعرض التشكيلة
      </a>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-2xl relative h-full min-h-[400px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-DEFAULT/20 to-transparent mix-blend-overlay z-10"></div>
          <img src={aboutImg} alt="من نحن" className="w-full h-full object-cover absolute inset-0" onError={(e) => e.target.style.display = 'none'} />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">من نحن</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold-DEFAULT to-transparent mb-8"></div>
          <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
            في "مصنع النفيس للذهب"، نؤمن بأن المجوهرات ليست مجرد زينة، بل هي إرث يُتوارث عبر الأجيال.
            نحن نختار بعناية فائقة كل قطعة لنضمن لكِ أعلى معايير الجودة والنقاء، سواء كنتِ تبحثين عن بريق الألماس الساحر،
            أو لمعان الذهب الأصيل، أو أناقة الفضة الكلاسيكية.
          </p>
          <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            خبراءنا يعملون بشغف لتقديم تصاميم تلبي ذوقك الرفيع، مستلهمين من التراث والأصالة مع لمسات عصرية تواكب أحدث صيحات الموضة العالمية.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const ShowcaseCard = ({ title, description, image, colorTheme, Icon, linkTo }) => {
  const colorMap = {
    gold: "from-yellow-400/20 to-gold-DEFAULT/20 border-gold-DEFAULT/30 hover:border-gold-DEFAULT hover:shadow-gold-DEFAULT/20",
    silver: "from-gray-300/20 to-silver-DEFAULT/20 border-silver-DEFAULT/30 hover:border-silver-DEFAULT hover:shadow-silver-DEFAULT/20",
    diamond: "from-sky-300/20 to-diamond-DEFAULT/20 border-diamond-DEFAULT/30 hover:border-diamond-DEFAULT hover:shadow-diamond-DEFAULT/20"
  };

  const textMap = {
    gold: "text-gold-DEFAULT",
    silver: "text-silver-dark dark:text-silver-light",
    diamond: "text-diamond-DEFAULT"
  };

  const buttonMap = {
    gold: "border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-white dark:hover:text-gray-900",
    silver: "border-silver-DEFAULT text-silver-dark dark:text-silver-light hover:bg-silver-DEFAULT hover:text-white dark:hover:text-gray-900",
    diamond: "border-diamond-DEFAULT text-diamond-DEFAULT hover:bg-diamond-DEFAULT hover:text-white dark:hover:text-gray-900"
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
      }}
      className={`group relative rounded-3xl overflow-hidden glass transition-all duration-500 hover:-translate-y-2 border-2 ${colorMap[colorTheme]} shadow-xl flex flex-col`}
    >
      <div className="relative h-80 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
          <Icon className={`h-8 w-8 ${textMap[colorTheme]} drop-shadow-md`} />
          <h3 className="text-3xl font-bold text-white drop-shadow-lg">{title}</h3>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed flex-grow">
          {description}
        </p>
        <Link to={linkTo} className={`mt-6 block text-center w-full py-3 rounded-xl font-bold transition-colors border-2 ${buttonMap[colorTheme]}`}>
          اكتشف المزيد
        </Link>
      </div>
    </motion.div>
  );
};

const Showcase = () => (
  <section id="showcase" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">تشكيلتنا الحصرية</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold-DEFAULT to-transparent mx-auto"></div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        <ShowcaseCard
          title="الذهب"
          description="تشكيلة رائعة من الذهب الخالص عيار 24 و 21 قيراط. تصاميم تجمع بين الأصالة والمعاصرة لتناسب ذوقك الرفيع."
          image={goldImg}
          colorTheme="gold"
          Icon={Sparkles}
          linkTo="/gold"
        />
        <ShowcaseCard
          title="الفضة"
          description="مجوهرات فضية فاخرة عيار 925، تتميز ببريقها الجذاب وتصاميمها العصرية التي تضفي لمسة من الأناقة اليومية."
          image={silverImg}
          colorTheme="silver"
          Icon={Moon}
          linkTo="/silver"
        />
        <ShowcaseCard
          title="الألماس"
          description="قطع ألماس نادرة وموثقة ببريق يخطف الأنفاس. استثمار في الجمال الأبدي مع كل قطعة فريدة من نوعها."
          image={diamondImg}
          colorTheme="diamond"
          Icon={Gem}
          linkTo="/diamond"
        />
      </motion.div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="glass rounded-3xl p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">تواصل معنا</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold-DEFAULT to-transparent mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">نحن هنا للإجابة على جميع استفساراتك ومساعدتك في اختيار القطعة المثالية.</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">الاسم الكامل</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-DEFAULT focus:border-transparent outline-none transition-all text-gray-900 dark:text-white" placeholder="أدخل اسمك" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">البريد الإلكتروني</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-DEFAULT focus:border-transparent outline-none transition-all text-gray-900 dark:text-white" placeholder="example@mail.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">الرسالة</label>
            <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-gold-DEFAULT focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none" placeholder="كيف يمكننا مساعدتك؟"></textarea>
          </div>
          <button type="button" className="w-full py-4 bg-gradient-to-r from-gold-dark to-gold-DEFAULT text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-gold-DEFAULT/40 transition-all flex justify-center items-center gap-2">
            <Send className="h-5 w-5" />
            إرسال الرسالة
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Showcase />
      <Contact />
    </div>
  );
};

export default Home;
