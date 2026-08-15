import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  Heart, ShieldCheck, Clock, Sparkles, BookOpen, Users, MapPin, Phone, Instagram, Mail, Sun, Star, ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-children.jpg";
import heroImgWebp from "@/assets/hero-children.webp";
import bercarioImg from "@/assets/bercario.jpg";
import bercarioImgWebp from "@/assets/bercario.webp";
import educacaoImg from "@/assets/educacao.jpg";
import educacaoImgWebp from "@/assets/educacao.webp";
import tempoImg from "@/assets/tempo-integral.jpg";
import tempoImgWebp from "@/assets/tempo-integral.webp";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Encantadamente Creche — Berçário e Educação Infantil em Maraponga, Fortaleza" },
      { name: "description", content: "Creche particular e escola infantil em Maraponga, Fortaleza, com berçário, educação infantil, tempo integral e hotelzinho. Ambiente seguro e acolhedor. Agende uma visita." },
      { property: "og:title", content: "Encantadamente Creche — Maraponga, Fortaleza" },
      { property: "og:description", content: "Onde a infância floresce: cuidado, carinho e educação em tempo integral." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ChildCare",
          name: "Encantadamente Creche",
          url: "https://www.crecheencantadamente.com/",
          image: "https://www.crecheencantadamente.com/og.jpg",
          telephone: "+55 85 98973-9830",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Paurilo Barroso, 707",
            addressLocality: "Fortaleza",
            addressRegion: "CE",
            postalCode: "60712-122",
            addressCountry: "BR",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "18:00",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "3",
            bestRating: "5",
          },
          sameAs: ["https://www.instagram.com/encantadamentecreche/"],
          areaServed: "Maraponga, Fortaleza",
        }),
      },
    ],
  }),
  component: Index,
});

const WA_URL =
  "https://wa.me/5585989739830?text=Ol%C3%A1!%20Tenho%20interesse%20em%20conhecer%20melhor%20o%20Encantada%20Mente%20%7C%20Ber%C3%A7%C3%A1rio%20e%20Educa%C3%A7%C3%A3o%20Infantil%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20matr%C3%ADcula%2C%20valores%20e%20disponibilidade.";

function gtagEvent(sendTo: string, extra?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const fn = (window as unknown as Record<string, unknown>).gtag as
    | ((...args: unknown[]) => void)
    | undefined;
  fn?.("event", "conversion", { send_to: sendTo, ...extra });
}

function trackWhatsApp() {
  gtagEvent("AW-18119200665/OsnuCJCxirUcEJmf9L9D");
  const rd = (window as unknown as Record<string, unknown>).RDStation as
    | { Conversions?: { record?: (id: string) => void } }
    | undefined;
  rd?.Conversions?.record?.("botao-whatsapp-c3dee1bd1aaed91d58ed");
}

function trackContato() {
  gtagEvent("AW-18119200665/hcUkCOul87QcEJmf9L9D", { value: 1.0, currency: "BRL" });
}

function trackFormulario() {
  gtagEvent("AW-18119200665/XZ-SCKjAirUcEJmf9L9D", { value: 1.0, currency: "BRL" });
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />
      <Nav />
      <Hero />
      <TrustStrip />
      <ProblemSolution />
      <Features />
      <About />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <Location />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function WhatsAppFloat() {
  function handleClick() {
    trackWhatsApp();
  }

  return (
    <a
      id="botao-whatsapp-c3dee1bd1aaed91d58ed"
      href={WA_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
      onClick={handleClick}
    >
      {/* Tooltip */}
      <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-foreground text-background text-sm font-medium px-3 py-1.5 rounded-full pointer-events-none whitespace-nowrap">
        Falar no WhatsApp
      </span>

      {/* Pulse ring */}
      <span className="relative flex">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
          style={{ backgroundColor: "#25D366" }} />
        <span
          className="relative grid place-items-center w-14 h-14 rounded-full shadow-lg"
          style={{ backgroundColor: "#25D366" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-7 h-7"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.874L.057 23.269a.75.75 0 0 0 .921.921l5.395-1.478A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 0 1-4.96-1.356l-.355-.213-3.682 1.007 1.007-3.682-.213-.355A9.75 9.75 0 1 1 12 21.75z" />
          </svg>
        </span>
      </span>
    </a>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="Encantadamente Creche" width={132} height={52} className="h-11 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#diferenciais" className="hover:text-foreground transition">Diferenciais</a>
          <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
          <a href="#depoimentos" className="hover:text-foreground transition">Depoimentos</a>
          <a href="#faq" className="hover:text-foreground transition">Dúvidas</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <Button asChild className="rounded-full px-5">
          <a href={WA_URL} target="_blank" rel="noreferrer" onClick={trackWhatsApp}>Agendar visita</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grain">
      {/* Ambient floating shapes for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-40 blur-3xl animate-float-slow"
          style={{ background: "var(--butter)" }} />
        <div className="absolute top-1/3 -right-16 w-64 h-64 rounded-full opacity-30 blur-3xl animate-float-slower"
          style={{ background: "var(--sage)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-14 pb-24 md:pt-20 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/60 text-accent-foreground px-3 py-1 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-700">
            <Sun className="w-3.5 h-3.5" /> Matrículas abertas 2026
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:100ms] [animation-fill-mode:backwards]">
            Onde a infância{" "}
            <span className="relative whitespace-nowrap not-italic text-primary">
              floresce
              <svg
                className="absolute left-0 -bottom-1 w-full h-3 text-primary/40"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M2 9.5C40 3 90 2 100 5.5C110 9 160 10 198 4" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{" "}
            com carinho.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:200ms] [animation-fill-mode:backwards]">
            Berçário e Educação Infantil em <strong className="text-foreground font-semibold">Maraponga, Fortaleza</strong>.
            Cuidado afetivo, desenvolvimento integral e tempo integral para a tranquilidade da sua família.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-3 duration-700 [animation-delay:300ms] [animation-fill-mode:backwards]">
            <Button asChild size="lg" className="group rounded-full px-7 shadow-warm transition-transform hover:-translate-y-0.5 hover:shadow-xl">
              <a href={WA_URL} target="_blank" rel="noreferrer" onClick={trackWhatsApp}>
                Agende uma visita <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 bg-background transition-transform hover:-translate-y-0.5">
              <a href={WA_URL} target="_blank" rel="noreferrer" onClick={trackWhatsApp}>Falar no WhatsApp</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground animate-in fade-in duration-700 [animation-delay:400ms] [animation-fill-mode:backwards]">
            <div className="flex -space-x-2">
              {[0,1,2,3].map(i => (
                <span key={i} className="w-8 h-8 rounded-full border-2 border-background"
                  style={{background: ["var(--terracotta)","var(--sage)","var(--butter)","var(--blush)"][i]}} />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-primary">
                {[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4" fill="currentColor" />)}
              </div>
              <span>+200 famílias acolhidas</span>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in-95 duration-700 [animation-delay:150ms] [animation-fill-mode:backwards]">
          <div className="absolute -inset-6 bg-accent/40 rounded-[2.5rem] -rotate-2" aria-hidden />
          <picture>
            <source srcSet={heroImgWebp} type="image/webp" />
            <img
              src={heroImg}
              alt="Crianças brincando alegremente na Encantadamente Creche"
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="relative rounded-[2rem] shadow-warm object-cover w-full h-[480px] md:h-[560px]"
            />
          </picture>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl px-5 py-4 shadow-warm flex items-center gap-3 max-w-[260px] animate-in fade-in slide-in-from-left-3 duration-700 [animation-delay:600ms] [animation-fill-mode:backwards]">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div className="text-sm">
              <div className="font-semibold">Ambiente seguro</div>
              <div className="text-muted-foreground text-xs">Equipe qualificada e acolhedora</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: Clock, label: "Tempo Integral (STI)" },
    { icon: Heart, label: "Berçário acolhedor" },
    { icon: BookOpen, label: "Educação Infantil" },
    { icon: Sparkles, label: "Hotelzinho" },
  ];
  return (
    <div className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-7xl px-5 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="group flex items-center gap-3 text-sm">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="w-4 h-4" />
            </span>
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProblemSolution() {
  const problems = [
    "Insegurança sobre a qualidade do cuidado",
    "Horários rígidos que não cabem na rotina",
    "Pouca atenção ao desenvolvimento da criança",
  ];
  const solutions = [
    "Equipe pedagógica preparada e afetiva",
    "Sistema de Tempo Integral + Hotelzinho",
    "Estímulo ao desenvolvimento global da criança",
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Para pais que se preocupam</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
            Deixar seu filho aos cuidados de alguém é uma decisão de coração.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Sabemos o tamanho dessa escolha. Por isso criamos um espaço onde o acolhimento vem primeiro
            — e onde cada criança é vista, ouvida e estimulada no seu tempo.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Reveal delay={100} className="rounded-3xl bg-muted p-6 transition-transform hover:-rotate-1">
            <h3 className="text-base font-semibold text-foreground">Preocupações comuns</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {problems.map(p => <li key={p} className="flex gap-2">— {p}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={220} className="rounded-3xl bg-primary text-primary-foreground p-6 shadow-warm transition-transform hover:rotate-1">
            <h3 className="text-base font-semibold">Nossa resposta</h3>
            <ul className="mt-4 space-y-3 text-sm opacity-95">
              {solutions.map(p => <li key={p} className="flex gap-2">✓ {p}</li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const cards = [
    {
      img: bercarioImg,
      imgWebp: bercarioImgWebp,
      tag: "Berçário",
      title: "Berçário acolhedor",
      desc: "Cuidado individualizado, rotina afetiva e ambiente seguro para os primeiros passos do seu bebê.",
    },
    {
      img: educacaoImg,
      imgWebp: educacaoImgWebp,
      tag: "Educação Infantil",
      title: "Aprender brincando",
      desc: "Atividades lúdicas que despertam a curiosidade, a criatividade e o desenvolvimento integral.",
    },
    {
      img: tempoImg,
      imgWebp: tempoImgWebp,
      tag: "Tempo Integral · Hotelzinho",
      title: "Sua rotina, sem estresse",
      desc: "Sistema de Tempo Integral (STI) e Hotelzinho para acompanhar a agenda da família com tranquilidade.",
    },
  ];
  return (
    <section id="servicos" className="bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Nossos serviços</p>
          <h2 id="diferenciais" className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
            Tudo o que sua família precisa, sob o mesmo teto.
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="group rounded-3xl overflow-hidden bg-background border border-border hover:shadow-warm transition-all hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <picture>
                    <source srcSet={c.imgWebp} type="image/webp" />
                    <img src={c.img} alt={`${c.title} — Encantadamente Creche, Maraponga, Fortaleza`} loading="lazy" decoding="async" width={1024} height={768}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </picture>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{c.tag}</span>
                  <h3 className="mt-2 font-display text-2xl font-medium">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { n: "10+", l: "anos de experiência" },
    { n: "200+", l: "famílias acolhidas" },
    { n: "1:6", l: "proporção educador/criança" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:py-28 grid md:grid-cols-5 gap-10 items-center">
      <Reveal className="md:col-span-2 relative">
        <div className="absolute -inset-3 rounded-[2.25rem] bg-linear-to-br from-blush/50 via-transparent to-sage/40 -rotate-2" aria-hidden />
        <div className="aspect-square rounded-[2rem] bg-secondary/30" />
        <picture>
          <source srcSet={bercarioImgWebp} type="image/webp" />
          <img src={bercarioImg} alt="Educadora acolhendo criança com carinho na Encantadamente Creche, Maraponga"
            width={1024} height={1024} loading="lazy" decoding="async"
            className="absolute inset-4 rounded-[1.75rem] object-cover shadow-warm" />
        </picture>
      </Reveal>
      <Reveal delay={120} className="md:col-span-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Nossa filosofia</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
          Educar com afeto. Cuidar com propósito.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
          Na Encantadamente, acreditamos que toda criança merece um lugar onde possa ser ela mesma —
          aprender brincando, descobrir o mundo no seu ritmo e crescer cercada de afeto.
          Nossa equipe é formada por educadores apaixonados pela primeira infância.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-6">
          {stats.map(s => (
            <div key={s.l}>
              <div className="font-display text-4xl text-primary">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote: "Meu filho chega em casa todos os dias contando o que aprendeu. A equipe é atenciosa e o ambiente, muito acolhedor.",
      name: "Mariana S.",
      role: "mãe do Bento, 3 anos",
      when: "há 2 semanas",
    },
    {
      quote: "O tempo integral salvou nossa rotina. Saio para trabalhar tranquila, sabendo que ela está em boas mãos.",
      name: "Camila R.",
      role: "mãe da Helena, 2 anos",
      when: "há 1 mês",
    },
    {
      quote: "Encontramos muito mais do que uma creche — encontramos uma família que cuida do nosso bebê com carinho.",
      name: "Rafael e Júlia",
      role: "pais do Théo, 11 meses",
      when: "há 3 semanas",
    },
  ];
  return (
    <section id="depoimentos" className="bg-secondary/15">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Famílias Encantadamente</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
            Quem confia, recomenda.
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="relative overflow-hidden rounded-3xl bg-card border border-border p-7 flex flex-col h-full transition-transform hover:-translate-y-1">
                <span className="pointer-events-none absolute -top-4 -right-2 font-display text-[7rem] leading-none text-primary/10 select-none" aria-hidden>"</span>
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4" fill="currentColor" />)}
                </div>
                <blockquote className="relative text-foreground leading-relaxed font-display text-xl">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-end justify-between gap-3 text-sm">
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-muted-foreground">{t.role}</div>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground/80">{t.when}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Quanto custa a mensalidade da creche?",
      a: "Os valores variam conforme o plano (meio período, tempo integral ou hotelzinho). Fale com a gente pelo WhatsApp para receber uma proposta personalizada para o seu caso.",
    },
    {
      q: "A partir de que idade a creche recebe crianças?",
      a: "Recebemos desde bebês, no berçário, acompanhando o desenvolvimento até a fase de Educação Infantil — sempre com cuidado individualizado e ambiente seguro.",
    },
    {
      q: "Qual o horário de funcionamento da Encantadamente?",
      a: "Funcionamos de segunda a sexta-feira, das 7h às 18h, em Maraponga, Fortaleza.",
    },
    {
      q: "O que é o Sistema de Tempo Integral (STI)?",
      a: "É o nosso regime de tempo integral, pensado para acompanhar a rotina da família com tranquilidade, unindo cuidado afetivo e atividades pedagógicas ao longo de todo o dia.",
    },
    {
      q: "E o Hotelzinho, como funciona?",
      a: "O Hotelzinho é um serviço complementar ao Tempo Integral, para os dias em que a família precisa de mais flexibilidade de horário — sem abrir mão do cuidado de sempre.",
    },
    {
      q: "Como faço para agendar uma visita ou matricular meu filho?",
      a: "É simples: chame no WhatsApp (85) 98973-9830 ou preencha o formulário abaixo. Agendamos uma visita guiada, sem compromisso, para conhecer nossa estrutura em Maraponga.",
    },
    {
      q: "Ainda há vagas para matrícula em 2026?",
      a: "As matrículas para 2026 estão abertas, mas as vagas são limitadas. Recomendamos agendar sua visita o quanto antes para garantir o período desejado.",
    },
    {
      q: "A Encantadamente é uma creche particular ou escola infantil?",
      a: "Somos uma creche e escola infantil particular em Maraponga, Fortaleza, com equipe pedagógica própria e proposta de ensino voltada para a primeira infância.",
    },
  ];

  return (
    <section id="faq" className="bg-card border-y border-border">
      <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Perguntas frequentes</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
            Tudo o que você precisa saber.
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <Accordion type="single" collapsible>
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="font-display text-lg">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </section>
  );
}

function trackRDConversion(identifier: string) {
  try {
    const rd = (window as unknown as Record<string, unknown>).RDStation as
      | { Conversions?: { record?: (id: string) => void } }
      | undefined;
    rd?.Conversions?.record?.(identifier);
  } catch {
    // silencioso — tracking é best-effort
  }
}

function LeadForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const age = String(data.get("age") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || name.length < 2) { toast.error("Por favor, informe seu nome."); return; }
    if (!phone || phone.length < 8) { toast.error("Informe um telefone válido."); return; }

    setLoading(true);

    trackWhatsApp();
    trackFormulario();
    trackRDConversion("agendamento-visita-formulario");

    const lines = [
      `Olá! Gostaria de agendar uma visita à Encantadamente.`,
      ``,
      `👤 Nome: ${name}`,
      `📱 Telefone: ${phone}`,
      age ? `👶 Idade da criança: ${age}` : null,
      message ? `💬 Mensagem: ${message}` : null,
    ].filter((l) => l !== null).join("\n");

    const waUrl = `https://wa.me/5585989739830?text=${encodeURIComponent(lines)}`;

    form.reset();
    setLoading(false);
    window.open(waUrl, "_blank", "noreferrer");
  };

  return (
    <section id="contato" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <Reveal className="rounded-[2.5rem] overflow-hidden bg-grain border border-border grid md:grid-cols-2">
        <div className="p-10 md:p-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" /> Vagas limitadas
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight">
            Venha conhecer a Encantadamente.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Agende uma visita guiada sem compromisso. Mostramos cada cantinho da nossa creche
            e tiramos todas as suas dúvidas — pessoalmente.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a href="tel:+5585989739830" className="flex items-center gap-3 hover:text-primary transition" onClick={trackContato}>
              <Phone className="w-4 h-4 text-primary" /> (85) 98973-9830
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" /> Rua Paurilo Barroso, 707 — Maraponga
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-card p-10 md:p-14 space-y-5">
          <div>
            <Label htmlFor="name">Seu nome</Label>
            <Input id="name" name="name" required maxLength={80} className="mt-2 h-11 rounded-xl bg-background" placeholder="Como podemos te chamar?" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Telefone / WhatsApp</Label>
              <Input id="phone" name="phone" required maxLength={20} className="mt-2 h-11 rounded-xl bg-background" placeholder="(85) 9xxxx-xxxx" />
            </div>
            <div>
              <Label htmlFor="age">Idade da criança</Label>
              <Input id="age" name="age" maxLength={20} className="mt-2 h-11 rounded-xl bg-background" placeholder="Ex.: 2 anos" />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Mensagem (opcional)</Label>
            <Textarea id="message" name="message" maxLength={500} rows={3} className="mt-2 rounded-xl bg-background" placeholder="Conte-nos um pouco sobre o que procura." />
          </div>
          <Button type="submit" size="lg" disabled={loading} className="w-full rounded-full shadow-warm transition-transform hover:-translate-y-0.5">
            {loading ? "Abrindo WhatsApp..." : "Quero agendar uma visita"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Você será direcionado ao WhatsApp com seus dados preenchidos.
          </p>
        </form>
      </Reveal>
    </section>
  );
}

function Location() {
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Onde estamos</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium leading-tight">
            No coração da Maraponga, em Fortaleza.
          </h2>
          <div className="mt-6 space-y-3 text-base">
            <p className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary mt-0.5" /> Rua Paurilo Barroso, 707 — Maraponga, Fortaleza/CE</p>
            <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> (85) 98973-9830</p>
            <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary" /> Seg a Sex · 7h às 18h</p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden border border-border h-80 shadow-warm">
          <iframe
            title="Mapa Encantadamente Creche"
            src="https://www.google.com/maps?q=Rua+Paurilo+Barroso,+707,+Maraponga,+Fortaleza&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Encantadamente Creche" width={132} height={52} className="h-10 w-auto" />
          <div>
            <div className="text-xs text-muted-foreground">Rua Paurilo Barroso, 707 — Maraponga, Fortaleza/CE</div>
            <a href="tel:+5585989739830" className="text-xs text-muted-foreground hover:text-primary transition">(85) 98973-9830</a>
          </div>
        </div>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href="https://www.instagram.com/encantadamentecreche/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary transition"><Instagram className="w-5 h-5" /></a>
          <a href="mailto:contato@crecheencantadamente.com" aria-label="Email" className="hover:text-primary transition"><Mail className="w-5 h-5" /></a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Encantadamente. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
