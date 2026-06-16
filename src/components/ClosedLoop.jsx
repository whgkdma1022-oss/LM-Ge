import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Brain, Move } from 'lucide-react';

const ClosedLoop = () => {
  const steps = [
    {
      icon: <Eye className="text-accent" size={32} />,
      title: "지각 (Perception)",
      desc: "LiDAR, 컴퓨터 비전 및 멀티모달 센서를 통해 실시간 물리 데이터를 수집합니다.",
      tags: ["Vision", "LiDAR", "Multimodal"]
    },
    {
      icon: <Brain className="text-accent" size={32} />,
      title: "인지·판단 (Cognition)",
      desc: "NVIDIA GR00T과 같은 파운데이션 모델을 통해 최적의 물리적 경로와 힘을 계산합니다.",
      tags: ["Foundation Model", "Edge 연산"]
    },
    {
      icon: <Move className="text-accent" size={32} />,
      title: "작동 (Actuation)",
      desc: "고성능 액추에이터를 통해 디지털 명령을 밀리그램 단위의 정밀한 움직임으로 변환합니다.",
      tags: ["High Torque", "Precision Control"]
    }
  ];

  return (
    <section id="tech" className="py-24 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-widest text-sm mb-4 uppercase"
          >
            Closed-Loop Architecture
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            끊임없이 순환하는 지능의 루프
          </motion.h2>
          <p className="text-muted max-w-2xl mx-auto">
            단순 자동화 로봇과 차별화되는 피지컬 AI의 핵심은 현실 세계의 피드백을 즉각적으로 인지하고 수정하는 폐쇄 루프 시스템입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Arrow Connections (Concept for Large Screens) */}
          <div className="hidden md:block absolute top-[40%] left-0 w-full h-1 border-t-2 border-dashed border-accent/20 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-surface-lighter border border-white/5 p-8 rounded-2xl relative group hover:border-accent/30 transition-all cursor-default"
            >
              <div className="w-16 h-16 bg-background rounded-xl flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:ring-accent/50 transition-all">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {step.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {step.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-accent px-2 py-1 bg-accent/10 rounded uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 bg-gradient-to-r from-accent/5 to-transparent border-l-4 border-accent rounded-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-accent/20 rounded-lg">
              <Zap className="text-accent" size={20} />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">엣지 컴퓨팅(Edge Computing)의 필연성</h4>
              <p className="text-sm text-muted leading-relaxed">
                피지컬 AI는 밀리초(ms) 단위의 즉각적인 반응이 필요합니다. 지연 시간이 발생하는 클라우드 대신 로봇 내부의 고성능 하드웨어에서 직접 연산이 이루어지는 '엣지 AI' 기술이 필수적인 이유입니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosedLoop;
