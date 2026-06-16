import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Newspaper, Filter, Search } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [activeFilter, setActiveFilter] = useState('전체');

  const filters = ['전체', '센서/비전', '엣지 AI', '액추에이터/제어'];

  const news = [
    { title: "엔비디아, 차세대 로보틱스 모듈 Jetson Thor 공개", date: "2026.05.20", category: "엣지 AI" },
    { title: "K-문샷 프로젝트 2차 민관 합동 협의체 출범", date: "2026.05.18", category: "국내 정책" },
    { title: "미래 물류 주차 로봇 성능 실증 결과 발표", date: "2026.05.15", category: "센서/비전" }
  ];

  const qna = [
    { title: "실시간 힘 제어를 위한 토크 센서 데이터 정제 방법 문의", author: "TechMaster", replies: 12 },
    { title: "GR00T 모델을 온디바이스에 최적화하는 팁 공유", author: "RoboDev", replies: 8 }
  ];

  return (
    <section id="community" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-surface border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-2">커뮤니티 & 리소스</h2>
              <p className="text-muted text-sm italic">실시간 피드백 및 최신 기술 동향 (Firebase 연동 구조)</p>
            </div>

            <div className="flex bg-background p-1.5 rounded-2xl border border-white/5">
              <button 
                onClick={() => setActiveTab('news')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'news' ? 'bg-surface-lighter text-accent shadow-lg shadow-black/50' : 'text-muted hover:text-white'
                }`}
              >
                <Newspaper size={18} /> 뉴스 피드
              </button>
              <button 
                onClick={() => setActiveTab('qna')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'qna' ? 'bg-surface-lighter text-accent shadow-lg shadow-black/50' : 'text-muted hover:text-white'
                }`}
              >
                <MessageSquare size={18} /> 전문가 Q&A
              </button>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={16} />
              <input 
                type="text" 
                placeholder="검색어를 입력하세요..." 
                className="w-full bg-background border border-white/5 rounded-xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-accent/40 text-offwhite"
              />
            </div>
            <div className="flex gap-2">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === f ? 'bg-accent/20 text-accent border border-accent/20' : 'bg-background text-muted border border-white/5 hover:border-white/20'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* List Content */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'news' ? (
                <motion.div
                  key="news"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  {news.map((item, idx) => (
                    <div key={idx} className="group flex justify-between items-center p-6 bg-background rounded-2xl border border-white/5 hover:border-accent/20 transition-all cursor-pointer">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black text-accent uppercase">{item.category}</span>
                        <h4 className="text-white font-medium group-hover:text-accent transition-colors">{item.title}</h4>
                      </div>
                      <span className="text-xs text-muted font-display">{item.date}</span>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="qna"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  {qna.map((item, idx) => (
                    <div key={idx} className="group flex justify-between items-center p-6 bg-background rounded-2xl border border-white/5 hover:border-accent/20 transition-all cursor-pointer">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-white font-medium group-hover:text-accent transition-colors">{item.title}</h4>
                        <div className="flex gap-3 text-xs text-muted">
                          <span>작성자: {item.author}</span>
                          <span>댓글: {item.replies}</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-surface-lighter rounded-lg text-xs font-bold text-accent">답변하기</button>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
