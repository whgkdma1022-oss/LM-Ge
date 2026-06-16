import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Factory, ShieldCheck } from 'lucide-react';

const Innovation = () => {
  const cases = [
    {
      icon: <Truck className="text-accent" />,
      title: "스마트 물류 (AGV/AMR)",
      content: {
        S: "전통적인 물류 창고는 고정된 경로만 이동 가능하여 공간 효율성이 낮고 사고 위험이 컸습니다.",
        T: "사람의 개입 없이도 최적 경로를 스스로 찾는 분산형 플릿 제어 시스템 구동.",
        A: "강화학습 기반 경로 탐색 알고리즘을 엣지 디바이스에 탑재하여 실시간 회피 주행 가능.",
        R: "공간 효율성 40% 향상 및 충돌 사고율 0% 기술 실증 완료."
      }
    },
    {
      icon: <Factory className="text-accent" />,
      title: "정밀 제조 (KETI 프로젝트)",
      content: {
        S: "산업용 로봇은 반복 작업에 강하나, 장인의 섬세한 촉감이나 감각적 제어를 복제하지 못했습니다.",
        T: "숙련자의 노하우(암묵지)를 로봇 소프트웨어로 이식하는 모방 학습 시스템 구축.",
        A: "모방 학습(Imitation Learning)과 토크 센서를 활용해 조립 압력과 각도를 실시간 보정.",
        R: "비정형 부품 조립 성공률 98% 달성 및 고숙련 공정 자동화 기반 마련."
      }
    },
    {
      icon: <ShieldCheck className="text-accent" />,
      title: "재난 대응 및 안전",
      content: {
        S: "가혹한 환경에서의 수색 작업은 무선 통신의 지연으로 인해 안정적인 원격 제어가 어려웠습니다.",
        T: "통신 단절 시에도 스스로 판단하여 복귀하거나 임무를 수행하는 자율성 부여.",
        A: "온디바이스 비주얼 슬램(SLAM)을 통해 지도 학습과 행동 제어를 로컬에서 처리.",
        R: "통신 두절 상황에서도 90% 이상의 임무 복구율 기록."
      }
    }
  ];

  return (
    <section id="innovation" className="py-24 bg-surface/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">산업별 혁신 사례</h2>
          <div className="h-1 w-20 bg-accent mb-6" />
          <p className="text-muted">현장에서 증명되고 있는 피지컬 AI의 성과를 STAR 기법으로 분석합니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-surface border border-white/5 p-8 rounded-3xl hover:bg-surface-lighter transition-all duration-500 overflow-hidden"
            >
              <div className="mb-6 p-3 bg-background w-fit rounded-xl border border-white/10 group-hover:border-accent/40 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-8 group-hover:text-accent transition-colors">{item.title}</h3>
              
              <div className="space-y-4">
                {Object.entries(item.content).map(([key, value]) => (
                  <div key={key} className="flex gap-4">
                    <span className="text-xs font-black text-accent/40 w-4 pt-1">{key}</span>
                    <p className="text-sm text-muted leading-relaxed">
                      <span className="text-offwhite font-medium">
                        {key === 'S' && 'Situation: '}
                        {key === 'T' && 'Task: '}
                        {key === 'A' && 'Action: '}
                        {key === 'R' && 'Result: '}
                      </span>
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <button className="mt-8 text-xs font-bold text-accent flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                상세 솔루션 보기 <ArrowRight size={12} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Help with icons in a real project
const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default Innovation;
