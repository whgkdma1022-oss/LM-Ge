import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">P</span>
            </div>
            <span className="text-lg font-display font-bold tracking-tight text-white uppercase">
              PHYSICAL <span className="text-accent">AI</span>
            </span>
          </div>
          <p className="text-muted text-sm max-w-sm leading-relaxed mb-8">
            Digital intelligence meeting the Physical world. 
            우리는 지능의 경계를 넘어 더 안전하고 정밀한 현실 세계의 혁신을 주도합니다.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Github', 'Youtube'].map(social => (
              <a key={social} href="#" className="text-muted hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">{social}</a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6">핵심 구역</h5>
          <ul className="space-y-4 text-sm text-muted">
            <li><a href="#tech" className="hover:text-accent transition-colors">Closed-loop 기술</a></li>
            <li><a href="#contrast" className="hover:text-accent transition-colors">개념 비교</a></li>
            <li><a href="#innovation" className="hover:text-accent transition-colors">산업 사례</a></li>
            <li><a href="#trends" className="hover:text-accent transition-colors">정책 트렌드</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-6">정보 리소스</h5>
          <ul className="space-y-4 text-sm text-muted">
            <li><a href="#" className="hover:text-accent transition-colors">기술 백서 (2024)</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">NVIDIA GR00T 가이드</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">정부 정책 문의</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">프라이버시 센터</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted/50">© 2026 Physical AI Strategy Group. All rights reserved.</p>
        <div className="flex gap-8 text-[10px] font-bold text-muted/30 uppercase tracking-[0.2em]">
          <span>Security</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
