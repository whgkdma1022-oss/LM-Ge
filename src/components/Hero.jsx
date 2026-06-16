import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="glow-spot top-[10%] left-[20%]" />
        <div className="glow-spot bottom-[10%] right-[20%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-accent" />
            <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase">
              Beyond Digital Intelligence
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight">
            화면 밖으로 나온 <br />
            <span className="text-gradient">인공지능</span>의 시대
          </h1>

          <p className="text-lg text-muted mb-10 max-w-lg leading-relaxed">
            디지털 지능이 물리적 실체와 결합하여 현실 세계를 움직입니다. 
            피지컬 AI는 단순한 알고리즘을 넘어 동작과 힘을 제어하는 진화된 미래입니다.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-accent text-black font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white transition-all transform hover:-translate-y-1">
              폐쇄 루프 시스템 탐색하기 <ArrowRight size={18} />
            </button>
            <button className="bg-surface-lighter text-white font-semibold px-8 py-4 rounded-xl border border-white/5 hover:bg-surface transition-all">
              기술 백서 읽기
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
            <div className="flex items-start gap-3">
              <Cpu className="text-accent mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white">Edge AI</h4>
                <p className="text-sm text-muted">ms 단위의 즉각적 연산</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="text-accent mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white">Force Control</h4>
                <p className="text-sm text-muted">정밀한 물리 토크 제어</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Main Visual Image Placeholder - Should replace with 'physical_ai_hero' generated previously */}
          <div className="relative z-10 w-full h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1546776230-bb8629385881?auto=format&fit=crop&q=80&w=1000" 
              alt="Physical AI Humanoid Robot" 
              className="w-full h-full object-cover rounded-3xl opacity-60 mix-blend-screen"
            />
            {/* Animated Particles Effect Background */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -inset-10 border border-accent/20 rounded-full border-dashed"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
