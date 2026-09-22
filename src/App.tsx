import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  Grid3X3,
  MapPin,
  Menu,
  MessageCircle,
  Pause,
  Phone,
  Play,
  X,
} from 'lucide-react';

import heroVideo from '@assets/VID-20260918-WA0020_1789914868709.mp4';
import image16 from '@assets/image_(16)_1789914868704.jpg';
import image13 from '@assets/image_(13)_1789914868702.jpg';
import image14 from '@assets/image_(14)_1789914868703.jpg';
import image15 from '@assets/image_(15)_1789914868703.jpg';
import image19 from '@assets/image_(19)_1789914868705.jpg';
import image20 from '@assets/image_(20)_1789914868705.jpg';
import image22 from '@assets/image_(22)_1789914868706.jpg';
import image23 from '@assets/image_(23)_1789914868706.jpg';
import image24 from '@assets/image_(24)_1789914868706.jpg';
import image25 from '@assets/image_(25)_1789914868707.jpg';
import image26 from '@assets/image_(26)_1789914868707.jpg';
import image28 from '@assets/image_(28)_1789914868707.jpg';
import image29 from '@assets/image_(29)_1789914868708.jpg';
import image32 from '@assets/image_(32)_1789914868708.jpg';
import moment1 from '@assets/moments_865880923466366_1789914868708.jpg';
import moment2 from '@assets/moments_865880946799697_1789914868709.jpg';
import moment3 from '@assets/moments_888111091243349_1789914868709.jpg';

const phone = '05335474965';
const phoneHref = `tel:${phone}`;

const whatsappHref =
  'https://wa.me/905335474965?text=Merhaba%20Sadettin%20Usta%2C%20yenileme%20projem%20i%C3%A7in%20bilgi%20almak%20istiyorum.';

const mapsHref =
  'https://share.google/Mzqc4fY7plx0VEpZU';

type Media = {
  src: string;
  label: string;
  kind: 'video' | 'image';
};

type GalleryItem = {
  src: string;
  title: string;
  tag: string;
  index: number;
};

const heroSlides: Media[] = [
  {
    kind: 'video',
    src: heroVideo,
    label: 'Bursa iç dekorasyon ve tadilat uygulamalarından hareketli görüntüler',
  },
  {
    kind: 'image',
    src: image16,
    label: 'Bursa özel duvar ve tavan uygulaması',
  },
  {
    kind: 'image',
    src: image13,
    label: 'Işık bandı ve yüzey işçiliği uygulaması',
  },
  {
    kind: 'image',
    src: image14,
    label: 'Aydınlatma ve alçıpan detayları',
  },
  {
    kind: 'image',
    src: image15,
    label: 'Kavisli niş duvar uygulaması',
  },
  {
    kind: 'image',
    src: image19,
    label: 'Özel ışık bandı uygulaması',
  },
  {
    kind: 'image',
    src: image20,
    label: 'Dekoratif taş duvar kaplaması',
  },
  {
    kind: 'image',
    src: image22,
    label: 'Taş duvar yüzey uygulaması',
  },
  {
    kind: 'image',
    src: image23,
    label: 'Doğal dokulu taş duvar uygulaması',
  },
  {
    kind: 'image',
    src: image24,
    label: 'Sıcak ışıklı asma tavan uygulaması',
  },
  {
    kind: 'image',
    src: image25,
    label: 'Renkli ışık ve tavan formu',
  },
  {
    kind: 'image',
    src: image26,
    label: 'Geometrik dekoratif tavan uygulaması',
  },
  {
    kind: 'image',
    src: image28,
    label: 'Koridor aydınlatma çizgisi',
  },
  {
    kind: 'image',
    src: image29,
    label: 'Parke ve dekoratif duvar paneli uygulaması',
  },
  {
    kind: 'image',
    src: image32,
    label: 'Tamamlanmış iç mekân uygulaması',
  },
  {
    kind: 'image',
    src: moment1,
    label: 'Alçıpan tavan uygulamasının yapım aşaması',
  },
  {
    kind: 'image',
    src: moment2,
    label: 'Kavisli tavan formunun yapım aşaması',
  },
  {
    kind: 'image',
    src: moment3,
    label: 'Özel form ve gölge detayı',
  },
];

const galleryItems: GalleryItem[] = [
  {
    src: image16,
    title: 'Duvarın yeni yüzü',
    tag: 'Duvar · Tavan',
    index: 0,
  },
  {
    src: image13,
    title: 'Işığın saklı çizgisi',
    tag: 'Işık bandı',
    index: 1,
  },
  {
    src: image14,
    title: 'Ritmik yüzey',
    tag: 'Alçıpan',
    index: 2,
  },
  {
    src: image15,
    title: 'Kavisli nişler',
    tag: 'Dekorasyon',
    index: 3,
  },
  {
    src: image19,
    title: 'Yumuşak dalga',
    tag: 'Işık bandı',
    index: 6,
  },
  {
    src: image20,
    title: 'Taşın karakteri',
    tag: 'Taş duvar',
    index: 7,
  },
  {
    src: image22,
    title: 'Katmanlı taş',
    tag: 'Taş duvar',
    index: 8,
  },
  {
    src: image23,
    title: 'Sakin gri doku',
    tag: 'Taş duvar',
    index: 9,
  },
  {
    src: image24,
    title: 'Sıcak tavan',
    tag: 'Asma tavan',
    index: 10,
  },
  {
    src: image25,
    title: 'Renkle değişen form',
    tag: 'Aydınlatma',
    index: 11,
  },
  {
    src: image26,
    title: 'Geometrik gölge',
    tag: 'Tavan',
    index: 12,
  },
  {
    src: image28,
    title: 'Çizgisel ışık',
    tag: 'Tavan',
    index: 13,
  },
  {
    src: image29,
    title: 'Mermer ve çıta',
    tag: 'Duvar paneli',
    index: 14,
  },
  {
    src: image32,
    title: 'Son ışık',
    tag: 'Tamamlanan iş',
    index: 15,
  },
  {
    src: moment1,
    title: 'Formun başlangıcı',
    tag: 'Uygulama',
    index: 16,
  },
  {
    src: moment2,
    title: 'El işçiliği',
    tag: 'Uygulama',
    index: 17,
  },
  {
    src: moment3,
    title: 'Özgün detay',
    tag: 'Uygulama',
    index: 18,
  },
];

const serviceGroups = [
  {
    number: '01',
    title: 'Tavan & ışık',
    image: image24,
    items: [
      'Asma tavan',
      'Işık bandı',
      'Gergi tavan',
      'Metal tavan',
      'Taş yünü karolama tavan',
      'Baffle tavan',
      'Petek tavan',
      'Mesh / genişletilmiş sac tavan',
      'PVC tavan',
    ],
  },
  {
    number: '02',
    title: 'Duvar & yüzey',
    image: image29,
    items: [
      'Alçıpan bölme duvar',
      'Dekoratif taş duvar kaplama',
      'Stropiyer kartonpiyer',
      'Isı yalıtımı / mantolama',
    ],
  },
  {
    number: '03',
    title: 'Ev & komple tadilat',
    image: image16,
    items: [
      'Parke',
      'Mutfak dolapları ve kapılar',
      'Su tesisatı',
      'Çatıdan temele komple tadilat',
    ],
  },
];

function useReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('.reveal')
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['İşler', '#isler'],
    ['Hizmetler', '#hizmetler'],
    ['Yaklaşım', '#yaklasim'],
    ['İletişim', '#iletisim'],
  ];

  return (
    <header
      className={`topbar fixed inset-x-0 top-0 z-40 text-[#f1eadf] ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <div className="section-wrap flex h-[78px] items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3"
          data-testid="link-brand"
          aria-label="Sadettin Güneş İç Dekorasyon ana sayfa"
        >
          <span className="grid h-10 w-10 place-items-center border border-[#e4a15c] font-display text-lg font-bold text-[#e4a15c]">
            SG
          </span>

          <span className="hidden text-[11px] font-bold uppercase leading-tight tracking-[.2em] sm:block">
            Sadettin
            <br />
            Güneş
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Ana navigasyon"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[11px] font-bold uppercase tracking-[.15em] transition-opacity hover:opacity-60"
              data-testid={`link-nav-${label}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={phoneHref}
          className="hidden items-center gap-2 text-[12px] font-bold tracking-[.08em] md:flex"
          data-testid="link-nav-call"
          aria-label="Sadettin Güneş'i telefonla ara"
        >
          <Phone size={15} strokeWidth={1.6} />
          {phone}
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center md:hidden"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          data-testid="button-mobile-menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/15 bg-[#101718] px-6 py-6 md:hidden">
          <nav
            className="flex flex-col gap-5"
            aria-label="Mobil navigasyon"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold"
                data-testid={`link-mobile-${label}`}
              >
                {label}
              </a>
            ))}

            <a
              href={phoneHref}
              className="mt-1 flex items-center gap-2 border-t border-white/15 pt-5 text-sm font-bold"
              data-testid="link-mobile-call"
            >
              <Phone size={16} />
              {phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const current = heroSlides[active];

  const goTo = (index: number) =>
    setActive(
      (index + heroSlides.length) %
        heroSlides.length
    );

  useEffect(() => {
    if (!playing) return undefined;

    const timer = window.setInterval(() => {
      setActive(
        (value) =>
          (value + 1) % heroSlides.length
      );
    }, 6500);

    return () => window.clearInterval(timer);
  }, [playing]);

  useEffect(() => {
    if (
      current.kind !== 'video' ||
      !videoRef.current
    ) {
      return;
    }

    if (playing) {
      void videoRef.current
        .play()
        .catch(() => undefined);
    } else {
      videoRef.current.pause();
    }
  }, [active, current.kind, playing]);

  return (
    <section
      id="top"
      className="relative min-h-[760px] overflow-hidden bg-[#101718] text-[#f1eadf] md:min-h-[860px]"
      data-testid="section-hero"
      aria-label="Bursa iç dekorasyon ve tadilat"
    >
      <div className="absolute inset-0">
        {current.kind === 'video' ? (
          <video
            ref={videoRef}
            className="hero-media h-full w-full object-cover"
            src={current.src}
            autoPlay
            muted
            loop
            playsInline
            aria-label={current.label}
          />
        ) : (
          <img
            className="hero-media h-full w-full object-cover"
            src={current.src}
            alt={current.label}
          />
        )}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,17,18,.95)_0%,rgba(11,17,18,.7)_41%,rgba(11,17,18,.14)_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,17,18,.88),transparent_42%)]" />
      </div>

      <div className="section-wrap relative flex min-h-[760px] flex-col justify-end pb-12 pt-36 md:min-h-[860px] md:pb-16">
        <div className="max-w-[820px]">
          <p className="eyebrow mb-6 flex items-center gap-3 text-[#e4a15c]">
            <span className="h-px w-9 bg-[#e4a15c]" />
            Bursa · İç dekorasyon & tadilat
          </p>

          <h1 className="font-display text-[clamp(3.8rem,9.6vw,9.2rem)] font-bold leading-[.82] tracking-[-.075em]">
            Boşluğu
            <br />
            <span className="text-[#e4a15c]">
              karaktere
            </span>
            <br />
            çeviririz.
          </h1>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#isler"
              className="solid-button inline-flex items-center gap-3 bg-[#e4a15c] px-5 py-3.5 text-sm font-bold text-[#101718]"
              data-testid="link-hero-work"
            >
              İşleri incele
              <ArrowDown size={16} />
            </a>

            <a
              href={phoneHref}
              className="outline-button inline-flex items-center gap-3 border border-white/45 px-5 py-3.5 text-sm font-bold"
              data-testid="link-hero-call"
            >
              <Phone size={16} />
              Doğrudan arayın
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-5 border-t border-white/25 pt-5 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              className="grid h-9 w-9 place-items-center border border-white/35 hover:bg-white/10"
              aria-label="Önceki çalışma"
              data-testid="button-slide-prev"
            >
              <ChevronLeft size={17} />
            </button>

            <button
              type="button"
              onClick={() => goTo(active + 1)}
              className="grid h-9 w-9 place-items-center border border-white/35 hover:bg-white/10"
              aria-label="Sonraki çalışma"
              data-testid="button-slide-next"
            >
              <ChevronRight size={17} />
            </button>

            <button
              type="button"
              onClick={() =>
                setPlaying((value) => !value)
              }
              className="ml-2 grid h-9 w-9 place-items-center border border-white/35 hover:bg-white/10"
              aria-label={
                playing
                  ? 'Slaytı duraklat'
                  : 'Slaytı oynat'
              }
              data-testid="button-slide-toggle"
            >
              {playing ? (
                <Pause size={14} />
              ) : (
                <Play size={14} />
              )}
            </button>
          </div>

          <div
            className="media-dots flex gap-1.5 overflow-hidden"
            aria-label="Çalışma seçimi"
          >
            {heroSlides.map((slide, index) => (
              <button
                type="button"
                key={slide.src}
                onClick={() => goTo(index)}
                className="h-1 w-5 shrink-0 bg-white/40"
                aria-current={
                  active === index
                    ? 'true'
                    : undefined
                }
                aria-label={`${index + 1}. çalışma: ${slide.label}`}
                data-testid={`button-slide-${index}`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between gap-5 md:block md:text-right">
            <span className="text-[10px] font-bold tracking-[.18em] text-white/65">
              {String(active + 1).padStart(2, '0')} /{' '}
              {String(heroSlides.length).padStart(2, '0')}
            </span>

            <span className="ml-4 text-[10px] uppercase tracking-[.16em] text-white/50">
              {current.kind === 'video'
                ? 'Film'
                : 'Fotoğraf'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section
      id="yaklasim"
      className="bg-[#eee8dd] py-24 md:py-36"
      data-testid="section-approach"
    >
      <div className="section-wrap grid gap-12 md:grid-cols-[.6fr_1.4fr] md:gap-24">
        <div className="reveal">
          <p className="eyebrow text-[#bd592e]">
            Atölye notu
          </p>

          <div className="mt-6 h-px w-24 bg-[#bd592e]" />

          <p className="mt-6 max-w-[220px] text-sm leading-6 text-[#475452]">
            Her çizgi ölçülür.
            <br />
            Her ışık test edilir.
            <br />
            Her yüzey temiz teslim edilir.
          </p>
        </div>

        <div className="reveal delay-1">
          <h2 className="font-display text-[clamp(2.8rem,6vw,6.4rem)] font-bold leading-[.87] tracking-[-.07em] text-[#101718]">
            Tavan, duvar,
            <br />
            <span className="text-[#bd592e]">
              ışık
            </span>{' '}
            ve zemin.
          </h2>

          <p className="mt-8 max-w-[620px] text-[16px] leading-7 text-[#475452]">
            Bursa’da ev, iş yeri ve yaşam alanları için
            iç dekorasyon ve tadilat uygulamaları
            gerçekleştiriyoruz. Özellikle Nilüfer ve
            Osmangazi başta olmak üzere Bursa genelinde;
            tavan, duvar, aydınlatma, parke, mutfak ve
            komple tadilat uygulamalarını tek elden
            yürütüyoruz.
          </p>

          <a
            href="#hizmetler"
            className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#101718] underline decoration-[#bd592e] decoration-2 underline-offset-8"
            data-testid="link-approach-services"
          >
            Hizmetleri keşfet
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [lightboxIndex, setLightboxIndex] =
    useState<number | null>(null);

  const lightboxItem =
    lightboxIndex === null
      ? null
      : galleryItems[lightboxIndex];

  const openLightbox = (index: number) =>
    setLightboxIndex(index);

  const next = () =>
    setLightboxIndex((value) =>
      value === null
        ? 0
        : (value + 1) % galleryItems.length
    );

  const previous = () =>
    setLightboxIndex((value) =>
      value === null
        ? galleryItems.length - 1
        : (value - 1 + galleryItems.length) %
          galleryItems.length
    );

  useEffect(() => {
    if (lightboxIndex === null) {
      return undefined;
    }

    const onKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      }

      if (event.key === 'ArrowRight') {
        next();
      }

      if (event.key === 'ArrowLeft') {
        previous();
      }
    };

    document.addEventListener(
      'keydown',
      onKeyDown
    );

    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener(
        'keydown',
        onKeyDown
      );

      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <>
      <section
        id="isler"
        className="bg-[#101718] py-24 text-[#f1eadf] md:py-36"
        data-testid="section-work"
      >
        <div className="section-wrap">
          <div className="reveal flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-[#e4a15c]">
                Gerçek işlerden seçki
              </p>

              <h2 className="mt-5 max-w-[800px] font-display text-[clamp(3rem,7vw,7.4rem)] font-bold leading-[.82] tracking-[-.075em]">
                Mekânın
                <br />
                <span className="text-[#e4a15c]">
                  yakın planı.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#aeb8b0]">
              <Grid3X3 size={16} />
              {galleryItems.length} görüntü · arşiv
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
            {galleryItems.map((item, index) => (
              <button
                type="button"
                key={item.src}
                onClick={() =>
                  openLightbox(index)
                }
                className={`project-card reveal group relative overflow-hidden bg-[#222c2d] text-left ${
                  index === 0
                    ? 'col-span-2 md:col-span-7 md:row-span-2'
                    : index === 5 || index === 11
                      ? 'md:col-span-5'
                      : 'md:col-span-5'
                } ${
                  index % 4 === 1
                    ? 'md:translate-y-10'
                    : ''
                }`}
                data-testid={`button-gallery-${index}`}
                aria-label={`${item.title} görselini büyüt`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover ${
                    index === 0
                      ? 'aspect-[4/4.8] md:h-full'
                      : index % 3 === 0
                        ? 'aspect-[4/5]'
                        : 'aspect-[4/3]'
                  }`}
                />

                <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between bg-gradient-to-t from-[#101718]/95 via-[#101718]/60 to-transparent p-4 pt-16 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span>
                    <span className="eyebrow block text-[#e4a15c]">
                      {item.tag}
                    </span>

                    <span className="mt-1 block font-display text-lg font-bold">
                      {item.title}
                    </span>
                  </span>

                  <Eye
                    size={18}
                    className="mb-1 shrink-0 text-[#e4a15c]"
                  />
                </span>
              </button>
            ))}
          </div>

          <p className="mt-7 text-[11px] text-[#8f9b95]">
            Fotoğraflar Sadettin Güneş’in gerçek
            uygulamalarından seçilmiştir.
          </p>
        </div>
      </section>

      {lightboxItem && (
        <div
          className="lightbox-backdrop fixed inset-0 z-50 grid place-items-center p-4 text-[#f1eadf]"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxItem.title} görseli`}
        >
          <button
            type="button"
            onClick={() =>
              setLightboxIndex(null)
            }
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center border border-white/30 hover:bg-white/10"
            aria-label="Görseli kapat"
            data-testid="button-lightbox-close"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={previous}
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/30 hover:bg-white/10 md:left-8"
            aria-label="Önceki görsel"
            data-testid="button-lightbox-prev"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex max-w-[1100px] flex-col items-center gap-4">
            <img
              src={lightboxItem.src}
              alt={lightboxItem.title}
              className="lightbox-image max-w-full object-contain"
            />

            <div className="flex w-full items-center justify-between border-t border-white/20 pt-4">
              <div>
                <p className="eyebrow text-[#e4a15c]">
                  {lightboxItem.tag}
                </p>

                <p className="mt-1 font-display text-xl font-bold">
                  {lightboxItem.title}
                </p>
              </div>

              <span className="text-xs tracking-[.16em] text-white/55">
                {String(
                  (lightboxIndex ?? 0) + 1
                ).padStart(2, '0')}{' '}
                /{' '}
                {String(
                  galleryItems.length
                ).padStart(2, '0')}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/30 hover:bg-white/10 md:right-8"
            aria-label="Sonraki görsel"
            data-testid="button-lightbox-next"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </>
  );
}

function Services() {
  const [active, setActive] = useState(0);

  const selected = useMemo(
    () => serviceGroups[active],
    [active]
  );

  return (
    <section
      id="hizmetler"
      className="bg-[#eee8dd] py-24 md:py-36"
      data-testid="section-services"
    >
      <div className="section-wrap">
        <div className="reveal flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-[#bd592e]">
              Uygulama alanları
            </p>

            <h2 className="mt-5 max-w-[800px] font-display text-[clamp(3rem,6.5vw,6.8rem)] font-bold leading-[.84] tracking-[-.075em] text-[#101718]">
              Bir mekân.
              <br />
              <span className="text-[#bd592e]">
                Tüm katmanları.
              </span>
            </h2>
          </div>

          <p className="max-w-[300px] text-sm leading-6 text-[#475452]">
            Bursa’da iç dekorasyon ve tadilat
            uygulamaları. İhtiyacınızı seçin; ölçü,
            malzeme ve uygulama için konuşalım.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-[.78fr_1.22fr]">
          <div className="flex flex-col border-t border-[#101718]/25">
            {serviceGroups.map((group, index) => (
              <button
                type="button"
                key={group.title}
                onClick={() => setActive(index)}
                className={`service-tile flex items-center justify-between border-b border-[#101718]/25 px-4 py-6 text-left ${
                  active === index
                    ? 'bg-[#101718] text-[#f1eadf]'
                    : 'text-[#101718]'
                }`}
                aria-pressed={active === index}
                data-testid={`button-service-group-${index}`}
              >
                <span className="flex items-center gap-4">
                  <span
                    className={`font-mono text-xs ${
                      active === index
                        ? 'text-[#e4a15c]'
                        : 'text-[#bd592e]'
                    }`}
                  >
                    {group.number}
                  </span>

                  <span className="font-display text-2xl font-bold tracking-[-.04em]">
                    {group.title}
                  </span>
                </span>

                <ArrowRight size={18} />
              </button>
            ))}

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-3 border border-[#bd592e] px-5 py-3.5 text-sm font-bold text-[#101718] hover:bg-[#bd592e] hover:text-[#f1eadf]"
              data-testid="link-services-whatsapp"
            >
              <MessageCircle size={17} />
              Fikrinizi yazın
            </a>
          </div>

          <div className="reveal delay-1 relative min-h-[460px] overflow-hidden bg-[#293334] text-[#f1eadf]">
            <img
              src={selected.image}
              alt={`${selected.title} hizmet uygulaması`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-65"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#101718] via-[#101718]/55 to-transparent" />

            <div className="relative flex h-full flex-col justify-end p-7 md:p-10">
              <p className="eyebrow text-[#e4a15c]">
                0{active + 1} / 03
              </p>

              <h3 className="mt-3 font-display text-4xl font-bold tracking-[-.055em]">
                {selected.title}
              </h3>

              <div className="mt-6 flex max-w-[560px] flex-wrap gap-x-5 gap-y-3 border-t border-white/25 pt-5">
                {selected.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-[#d8d8cf]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="iletisim"
      className="bg-[#bd592e] py-24 text-[#f1eadf] md:py-32"
      data-testid="section-contact"
    >
      <div className="section-wrap grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-end">
        <div className="reveal">
          <p className="eyebrow text-[#101718]">
            İlk adım
          </p>

          <h2 className="mt-6 max-w-[780px] font-display text-[clamp(3.2rem,8vw,8.2rem)] font-bold leading-[.8] tracking-[-.08em]">
            Mekânı
            <br />
            anlatalım.
          </h2>

          <p className="mt-8 max-w-[460px] text-base leading-7 text-[#f5d9cd]">
            Fotoğrafı, ölçüsü veya fikri gönderin.
            Nilüfer ve Osmangazi başta olmak üzere
            Bursa’daki projeniz için doğrudan konuşalım.
          </p>
        </div>

        <div className="reveal delay-1">
          <div className="border-t border-white/35 pt-5">
            <p className="eyebrow text-[#101718]">
              Sadettin Güneş
            </p>

            <p className="mt-2 text-sm text-[#f5d9cd]">
              İç dekorasyon & tadilat · Bursa
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3">
            <a
              href={phoneHref}
              className="solid-button inline-flex items-center justify-between bg-[#101718] px-5 py-4 text-base font-bold"
              data-testid="link-contact-call"
            >
              <span className="flex items-center gap-3">
                <Phone size={18} />
                {phone}
              </span>

              <ArrowUpRight size={18} />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="outline-button inline-flex items-center justify-between border border-white/65 px-5 py-4 text-base font-bold"
              data-testid="link-contact-whatsapp"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={18} />
                WhatsApp’tan yazın
              </span>

              <ArrowUpRight size={18} />
            </a>

            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="outline-button inline-flex items-center justify-between border border-white/65 px-5 py-4 text-base font-bold"
              data-testid="link-contact-maps"
            >
              <span className="flex items-center gap-3">
                <MapPin size={18} />
                Bursa konumunu açın
              </span>

              <ExternalLink size={17} />
            </a>
          </div>

          <p className="mt-4 text-xs text-[#f5d9cd]">
            Konum ve müşteri yorumları için Google Maps
            bağlantısı.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="bg-[#0b1112] py-10 text-[#f1eadf]"
      data-testid="footer-site"
    >
      <div className="section-wrap flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <a
            href="#top"
            className="flex items-center gap-3"
            data-testid="link-footer-brand"
            aria-label="Sadettin Güneş İç Dekorasyon ana sayfa"
          >
            <span className="grid h-10 w-10 place-items-center border border-[#e4a15c] font-display text-lg font-bold text-[#e4a15c]">
              SG
            </span>

            <span className="text-[11px] font-bold uppercase leading-tight tracking-[.2em]">
              Sadettin
              <br />
              Güneş
            </span>
          </a>

          <p className="mt-5 max-w-[320px] text-xs text-[#8f9b95]">
            Bursa’da iç dekorasyon ve tadilat.
            Nilüfer ve Osmangazi başta olmak üzere
            Bursa genelinde uygulama.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-[#b7c0ba]">
          <a
            href="#isler"
            className="hover:text-[#e4a15c]"
            data-testid="link-footer-work"
          >
            İşler
          </a>

          <a
            href="#hizmetler"
            className="hover:text-[#e4a15c]"
            data-testid="link-footer-services"
          >
            Hizmetler
          </a>

          <a
            href="#iletisim"
            className="hover:text-[#e4a15c]"
            data-testid="link-footer-contact"
          >
            İletişim
          </a>

          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e4a15c]"
            data-testid="link-footer-maps"
          >
            Google Maps
          </a>
        </div>

        <p className="text-[11px] text-[#6f7b76]">
          © {new Date().getFullYear()} Sadettin Güneş
        </p>
      </div>
    </footer>
  );
}

function MobileActions() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-30 grid grid-cols-3 gap-1 bg-[#101718] p-1 text-[#f1eadf] shadow-2xl md:hidden">
      <a
        href={phoneHref}
        className="flex items-center justify-center gap-1.5 py-3 text-[11px] font-bold"
        data-testid="link-floating-call"
        aria-label="Sadettin Güneş'i ara"
      >
        <Phone size={15} />
        Ara
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-1.5 border-x border-white/15 py-3 text-[11px] font-bold"
        data-testid="link-floating-whatsapp"
        aria-label="WhatsApp ile iletişim kur"
      >
        <MessageCircle size={15} />
        WhatsApp
      </a>

      <a
        href={mapsHref}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-1.5 py-3 text-[11px] font-bold"
        data-testid="link-floating-maps"
        aria-label="Google Maps üzerinde konumu aç"
      >
        <MapPin size={15} />
        Harita
      </a>
    </div>
  );
}

function Home() {
  useReveal();

  return (
    <div className="site-shell grain">
      <Header />

      <main>
        <Hero />
        <Intro />
        <Gallery />
        <Services />
        <Contact />
      </main>

      <Footer />
      <MobileActions />
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
