import { T } from '../context/LangContext';

const items = [
  { num: '15+', bg: 'Години опит', en: 'Years experience' },
  { num: '5', bg: 'Сектори', en: 'Sectors' },
  { num: '50+', bg: 'Продуктови линии', en: 'Product lines' },
  { num: '100%', bg: 'B2B фокус', en: 'B2B focus' },
];

export default function Stats() {
  return (
    <section id="stats" className="section-sm">
      <div className="container">
        <div className="stats-grid">
          {items.map((s, i) => (
            <div className="stat-item" data-reveal data-d={i > 0 ? String(i) : undefined} key={s.num}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label"><T bg={s.bg} en={s.en} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
