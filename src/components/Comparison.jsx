import React from 'react';
import { motion } from 'framer-motion';
import { Database, Activity } from 'lucide-react';

const Comparison = () => {
  return (
    <section id="contrast" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              AI의 진화: <br />
              <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-8">디지털</span>에서 <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-8">피지컬</span>로
            </h2>
          </div>
          <p className="text-muted text-sm max-w-sm">
            지능이 데이터의 경계를 넘어 물리 법칙이 지배하는 현실 세계로 확장됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Digital AI */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-10 rounded-3xl bg-surface border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Database size={120} />
            </div>
            <span className="text-xs font-bold text-muted uppercase tracking-widest mb-2 block">Current Paradigm</span>
            <h3 className="text-3xl font-bold text-white mb-8">디지털 AI (LLM/GPT)</h3>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="text-muted/50 font-display font-bold text-xl">01</div>
                <div>
                  <p className="text-white font-semibold">입력 (Input)</p>
                  <p className="text-muted text-sm">텍스트, 이미지, 오디오 등의 원시 데이터</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-muted/50 font-display font-bold text-xl">02</div>
                <div>
                  <p className="text-white font-semibold">핵심 매커니즘</p>
                  <p className="text-muted text-sm">통계적 기반의 다음 토큰 및 픽셀 예측</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-muted/50 font-display font-bold text-xl">03</div>
                <div>
                  <p className="text-white font-semibold">출력 (Output)</p>
                  <p className="text-muted text-sm">텍스트, 코드, 디지털 콘텐츠 생성</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Physical AI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-10 rounded-3xl bg-accent/5 border border-accent/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-accent">
              <Activity size={120} />
            </div>
            <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">Next Frontier</span>
            <h3 className="text-3xl font-bold text-white mb-8">피지컬 AI (Robotics)</h3>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="text-accent/50 font-display font-bold text-xl">01</div>
                <div>
                  <p className="text-white font-semibold">입력 (Input)</p>
                  <p className="text-muted text-sm">멀티모달 물리 센서 (토크, 거리, 가속도)</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-accent/50 font-display font-bold text-xl">02</div>
                <div>
                  <p className="text-white font-semibold">핵심 매커니즘</p>
                  <p className="text-muted text-sm">물리 법칙이 내재된 동역학 제어 엔진</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-accent/50 font-display font-bold text-xl">03</div>
                <div>
                  <p className="text-white font-semibold">출력 (Output)</p>
                  <p className="text-muted text-sm">물리적 행동, 힘 제어, 복합적인 작업 수행</p>
                </div>
              </li>
            </ul>
            
            <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
