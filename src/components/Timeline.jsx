import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const milestones = [
    {
      year: "2023",
      title: "기반 마련",
      desc: "LLM의 성공과 더불어 로보틱스 트랜스포머(RT-2) 등 멀티모달 파운데이션 모델 공개.",
      tag: "Global"
    },
    {
      year: "2024",
      title: "글로벌 상용화 조짐",
      desc: "Tesla Optimus Gen 2 공개 및 생산 라인 투입 가속화. NVIDIA GR00T 플랫폼 발표.",
      tag: "Global"
    },
    {
      year: "2024.H2",
      title: "국가 전략 기술 지정",
      desc: "대한민국 제4차 지능형 로봇 기본계획 수립. AI-로봇 융합 프로젝트 대규모 예산 편성.",
      tag: "Domestic"
    },
    {
      year: "2025~",
      title: "피지컬 AI 대중화",
      desc: "B2B 물류/제조를 넘어 가사를 돕는 서비스형 피지컬 AI 시장의 본격적인 개화.",
      tag: "Vision"
    }
  ];

  return (
    <section id="trends" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-white mb-4">글로벌 & 국내 정책 트렌드</h2>
          <p className="text-muted">급변하는 피지컬 AI 생태계의 주요 이정표를 확인하세요.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-surface-lighter" />

          <div className="space-y-24">
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10 shadow-[0_0_15px_rgba(0,229,255,0.5)]" />

                {/* Content */}
                <div className={`w-[45%] ${idx % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                  <div className={`flex items-center gap-3 mb-2 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <span className="text-accent font-bold font-display text-2xl">{item.year}</span>
                    <span className="text-[10px] bg-surface-lighter px-2 py-0.5 rounded-full text-muted uppercase font-bold tracking-tighter">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-10 bg-surface rounded-[2rem] border border-white/5 text-center"
        >
          <h4 className="text-2xl font-bold text-white mb-4">K-Moonshot 프로젝트</h4>
          <p className="text-muted max-w-2xl mx-auto mb-8">
            대한민국 정부는 피지컬 AI를 국가 전략 기술 자산으로 규정하고, 2030년까지 글로벌 시장 점유율 15% 달성을 목표로 'K-문샷' 프로젝트를 가동하고 있습니다.
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-2 bg-background border border-white/10 rounded-full text-xs font-semibold text-offwhite">정부 정책 자료</div>
            <div className="px-6 py-2 bg-background border border-white/10 rounded-full text-xs font-semibold text-offwhite">R&D 로드맵</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
