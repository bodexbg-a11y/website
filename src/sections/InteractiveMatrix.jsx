import { useState } from 'react';
import { T } from '../context/LangContext';

const categories = [
  {
    id: 'leak',
    titleBg: 'Активен Воден Теч',
    titleEn: 'Active Water Leak',
    descBg: 'Силни течове под налягане през пукнатини или фуги в мазета, тунели и хидротехнически съоръжения.',
    descEn: 'High-pressure water leaks through cracks or joints in basements, tunnels, and hydrotechnical structures.',
    materialBg: 'HydroBloc Schaum 510 + PU 500',
    materialEn: 'HydroBloc Schaum 510 + PU 500',
    spec1TitleBg: 'Време за реакция',
    spec1TitleEn: 'Reaction Time',
    spec1ValueBg: '~ 10 секунди (Пяна)',
    spec1ValueEn: '~ 10 seconds (Foam)',
    spec2TitleBg: 'Степен на набъбване',
    spec2TitleEn: 'Swelling Ratio',
    spec2ValueBg: 'До 40 пъти обема си',
    spec2ValueEn: 'Up to 40x volume',
    spec3TitleBg: 'Инжектиране',
    spec3TitleEn: 'Injection Pressure',
    spec3ValueBg: 'Високо налягане (1K/2K помпа)',
    spec3ValueEn: 'High pressure (1C/2C pump)',
    actionType: 'Инжекционна пяна / Injection Foam',
  },
  {
    id: 'crack',
    titleBg: 'Пукнатини в Бетона',
    titleEn: 'Concrete Cracks',
    descBg: 'Ремонт на сухи, влажни или носещи пукнатини в бетонни плочи, греди и фундаменти.',
    descEn: 'Repair of dry, damp, or structural cracks in concrete slabs, beams, and foundations.',
    materialBg: 'HydroBloc PU 500 / Silox EP 800',
    materialEn: 'HydroBloc PU 500 / Silox EP 800',
    spec1TitleBg: 'Тип свързване',
    spec1TitleEn: 'Bond Type',
    spec1ValueBg: 'Еластично (PU) или Силово (EP)',
    spec1ValueEn: 'Flexible (PU) or Structural (EP)',
    spec2TitleBg: 'Вискозитет',
    spec2TitleEn: 'Viscosity',
    spec2ValueBg: 'Свръхнисък (лесно проникване)',
    spec2ValueEn: 'Ultra-low (deep penetration)',
    spec3TitleBg: 'Стандарти',
    spec3TitleEn: 'Standards',
    spec3ValueBg: 'DIN-EN 1504-5 / KTW одобрение',
    spec3ValueEn: 'DIN-EN 1504-5 / KTW approved',
    actionType: 'Полиуретанова смола / PU Resin',
  },
  {
    id: 'joint',
    titleBg: 'Работни и Разширителни Фуги',
    titleEn: 'Construction & Expansion Joints',
    descBg: 'Хидроизолация на фуги при връзката между различни етапи на бетониране.',
    descEn: 'Waterproofing joints at the interface between different concrete pouring stages.',
    materialBg: 'HydroTape / BentoFlex / Pro Inject 403',
    materialEn: 'HydroTape / BentoFlex / Pro Inject 403',
    spec1TitleBg: 'Тип система',
    spec1TitleEn: 'System Type',
    spec1ValueBg: 'Набъбваща лента или инжекционен маркуч',
    spec1ValueEn: 'Swelling tape or injection hose',
    spec2TitleBg: 'Капацитет',
    spec2TitleEn: 'Capacity',
    spec2ValueBg: '140% - 160% набъбване (HydroTape)',
    spec2ValueEn: '140% - 160% swelling (HydroTape)',
    spec3TitleBg: 'Монтаж',
    spec3TitleEn: 'Installation',
    spec3ValueBg: 'Преди изливане на следващия бетон',
    spec3ValueEn: 'Before pouring next concrete phase',
    actionType: 'Набъбваща лента / Swellable Tape',
  },
  {
    id: 'damp',
    titleBg: 'Капилярна Влага в Зидария',
    titleEn: 'Rising Damp in Masonry',
    descBg: 'Предотвратяване на покачваща се влага в стари сгради с тухлени или каменни зидове.',
    descEn: 'Prevention of rising damp in historic or older brick and stone masonry buildings.',
    materialBg: 'Remafix 709 / Remafix 715',
    materialEn: 'Remafix 709 / Remafix 715',
    spec1TitleBg: 'Форма на продукта',
    spec1TitleEn: 'Product Form',
    spec1ValueBg: 'Течност (709) или Крем (715)',
    spec1ValueEn: 'Liquid (709) or Cream (715)',
    spec2TitleBg: 'Метод',
    spec2TitleEn: 'Application Method',
    spec2ValueBg: 'Без налягане или инжекция под ниско налягане',
    spec2ValueEn: 'Gravity-fed or low-pressure injection',
    spec3TitleBg: 'Резултат',
    spec3TitleEn: 'Result',
    spec3ValueBg: 'Постоянна хидрофобна хоризонтална преграда',
    spec3ValueEn: 'Permanent hydrophobic barrier',
    actionType: 'Хоризонтална Бариера',
  },
  {
    id: 'surface',
    titleBg: 'Повърхностна Хидроизолация',
    titleEn: 'Surface Waterproofing',
    descBg: 'Хидроизолация на основи, сутерени, резервоари и мокри помещения.',
    descEn: 'Waterproofing of foundations, basements, water tanks, and wet rooms.',
    materialBg: 'Cembond 863 / HydroCoat 750',
    materialEn: 'Cembond 863 / HydroCoat 750',
    spec1TitleBg: 'Вид покритие',
    spec1TitleEn: 'Coating Type',
    spec1ValueBg: 'Циментова шлам-мембрана / Полимерна боя',
    spec1ValueEn: 'Cementitious slurry / Polymer paint',
    spec2TitleBg: 'Основа',
    spec2TitleEn: 'Substrate',
    spec2ValueBg: 'Прилага се върху влажен бетон',
    spec2ValueEn: 'Can be applied to damp concrete',
    spec3TitleBg: 'Еластичност',
    spec3TitleEn: 'Elasticity',
    spec3ValueBg: 'Висока устойчивост на пукнатини и UV',
    spec3ValueEn: 'High crack bridging & UV stable',
    actionType: 'Минерален разтвор / Mineral Mortar',
  }
];

export default function InteractiveMatrix() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  function handleEnquire(materialType) {
    // Write selection to localStorage and dispatch custom event
    localStorage.setItem('prefilledMaterialType', materialType);
    localStorage.setItem('prefilledTab', 'materials');
    window.dispatchEvent(new Event('prefillContactForm'));
    
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="section matrix-section" id="matrix">
      <div className="glow-orb glow-orb-1" />
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="eyebrow" data-reveal style={{ justifyContent: 'center' }}>
            <T bg="Интерактивен избор" en="Interactive Selector" />
          </div>
          <h2 className="h2" data-reveal>
            <T 
              bg={<>Намерете Правилното <span className="accent">Решение за Бетон</span></>} 
              en={<>Find the Right <span className="accent">Concrete Solution</span></>} 
            />
          </h2>
          <p className="lead" style={{ maxWidth: 650, margin: '20px auto 0', fontSize: '1.05rem' }}>
            <T 
              bg="Изберете вида проблем с бетонната или зиданата конструкция, за да видите препоръчания ARCAN материал, неговите спецификации и технология."
              en="Select the type of concrete or masonry problem to see the recommended ARCAN material, its specifications, and technology."
            />
          </p>
        </div>

        <div className="matrix-grid">
          {/* Selector buttons list */}
          <div className="selector-nav-card" data-reveal>
            <span className="selector-nav-label">
              <T bg="Вид конструкция / Проблем" en="Structure Type / Issue" />
            </span>
            <div className="selector-buttons">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`selector-btn${activeCategory.id === cat.id ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                >
                  <span><T bg={cat.titleBg} en={cat.titleEn} /></span>
                  <span className="selector-btn-chevron">➔</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic result panel */}
          <div className="selector-result-card" data-reveal data-d="1">
            <div className="result-header">
              <div className="result-eyebrow">
                <T bg="Препоръчан Немски Материал" en="Recommended German Material" />
              </div>
              <h3 className="result-title">
                <T bg={activeCategory.materialBg} en={activeCategory.materialEn} />
              </h3>
            </div>

            <div className="result-body">
              <p className="result-desc">
                <T bg={activeCategory.descBg} en={activeCategory.descEn} />
              </p>

              <div className="result-specs-grid">
                <div className="result-spec-item">
                  <div className="result-spec-title">
                    <T bg={activeCategory.spec1TitleBg} en={activeCategory.spec1TitleEn} />
                  </div>
                  <div className="result-spec-value">
                    <T bg={activeCategory.spec1ValueBg} en={activeCategory.spec1ValueEn} />
                  </div>
                </div>

                <div className="result-spec-item">
                  <div className="result-spec-title">
                    <T bg={activeCategory.spec2TitleBg} en={activeCategory.spec2TitleEn} />
                  </div>
                  <div className="result-spec-value">
                    <T bg={activeCategory.spec2ValueBg} en={activeCategory.spec2ValueEn} />
                  </div>
                </div>

                <div className="result-spec-item">
                  <div className="result-spec-title">
                    <T bg={activeCategory.spec3TitleBg} en={activeCategory.spec3TitleEn} />
                  </div>
                  <div className="result-spec-value">
                    <T bg={activeCategory.spec3ValueBg} en={activeCategory.spec3ValueEn} />
                  </div>
                </div>
              </div>
            </div>

            <div className="result-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleEnquire(activeCategory.actionType)}
              >
                <T bg="Запитване за Решение →" en="Enquire About Solution →" />
              </button>
              <a href="#contact" className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '15px 28px' }}>
                <T bg="Консултация с Инженер" en="Engineer Consultation" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
