import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  Heart, ShieldCheck, Clock, Sparkles, BookOpen, Users, MapPin, Phone, Instagram, Facebook, Mail, Sun, Star, ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-children.jpg";
import bercarioImg from "@/assets/bercario.jpg";
import educacaoImg from "@/assets/educacao.jpg";
import tempoImg from "@/assets/tempo-integral.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Encantadamente Creche — Berçário e Educação Infantil em Maraponga, Fortaleza" },
      { name: "description", content: "Creche em Maraponga, Fortaleza com berçário, educação infantil, sistema de tempo integral e hotelzinho. Ambiente seguro e acolhedor. Agende uma visita." },
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
          image: "/og.jpg",
          telephone: "+55 85 98973-9830",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Paurilo Barroso, 707",
            addressLocality: "Fortaleza",
            addressRegion: "CE",
            addressCountry: "BR",
          },
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
        <a href="#top" className="flex items-center gap-2">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-foreground">
            <Heart className="w-4 h-4" fill="currentColor" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">Encantadamente</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#diferenciais" className="hover:text-foreground transition">Diferenciais</a>
          <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
          <a href="#depoimentos" className="hover:text-foreground transition">Depoimentos</a>
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
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/60 text-accent-foreground px-3 py-1 text-xs font-semibold">
            <Sun className="w-3.5 h-3.5" /> Matrículas abertas 2026
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight">
            Onde a infância <em className="not-italic text-primary">floresce</em> com carinho.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Berçário e Educação Infantil em <strong className="text-foreground font-semibold">Maraponga, Fortaleza</strong>.
            Cuidado afetivo, desenvolvimento integral e tempo integral para a tranquilidade da sua família.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 shadow-warm">
              <a href={WA_URL} target="_blank" rel="noreferrer" onClick={trackWhatsApp}>Agende uma visita <ArrowRight className="w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 bg-background">
              <a href={WA_URL} target="_blank" rel="noreferrer" onClick={trackWhatsApp}>Falar no WhatsApp</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
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

        <div className="relative">
          <div className="absolute -inset-6 bg-accent/40 rounded-[2.5rem] -rotate-2" aria-hidden />
          <img
            src={heroImg}
            alt="Crianças brincando alegremente na Encantadamente Creche"
            width={1536}
            height={1280}
            className="relative rounded-[2rem] shadow-warm object-cover w-full h-[480px] md:h-[560px]"
          />
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl px-5 py-4 shadow-warm flex items-center gap-3 max-w-[260px]">
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
          <div key={label} className="flex items-center gap-3 text-sm">
            <Icon className="w-5 h-5 text-primary" />
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
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Para pais que se preocupam</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
            Deixar seu filho aos cuidados de alguém é uma decisão de coração.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Sabemos o tamanho dessa escolha. Por isso criamos um espaço onde o acolhimento vem primeiro
            — e onde cada criança é vista, ouvida e estimulada no seu tempo.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-3xl bg-muted p-6">
            <h3 className="text-base font-semibold text-foreground">Preocupações comuns</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {problems.map(p => <li key={p} className="flex gap-2">— {p}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl bg-primary text-primary-foreground p-6 shadow-warm">
            <h3 className="text-base font-semibold">Nossa resposta</h3>
            <ul className="mt-4 space-y-3 text-sm opacity-95">
              {solutions.map(p => <li key={p} className="flex gap-2">✓ {p}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const cards = [
    {
      img: bercarioImg,
      tag: "Berçário",
      title: "Berçário acolhedor",
      desc: "Cuidado individualizado, rotina afetiva e ambiente seguro para os primeiros passos do seu bebê.",
    },
    {
      img: educacaoImg,
      tag: "Educação Infantil",
      title: "Aprender brincando",
      desc: "Atividades lúdicas que despertam a curiosidade, a criatividade e o desenvolvimento integral.",
    },
    {
      img: tempoImg,
      tag: "Tempo Integral · Hotelzinho",
      title: "Sua rotina, sem estresse",
      desc: "Sistema de Tempo Integral (STI) e Hotelzinho para acompanhar a agenda da família com tranquilidade.",
    },
  ];
  return (
    <section id="servicos" className="bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Nossos serviços</p>
          <h2 id="diferenciais" className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
            Tudo o que sua família precisa, sob o mesmo teto.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cards.map(c => (
            <article key={c.title} className="group rounded-3xl overflow-hidden bg-background border border-border hover:shadow-warm transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" width={1024} height={768}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{c.tag}</span>
                <h3 className="mt-2 font-display text-2xl font-medium">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </article>
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
      <div className="md:col-span-2 relative">
        <div className="aspect-square rounded-[2rem] bg-secondary/30" />
        <img src={bercarioImg} alt="Carinho na Encantadamente"
          width={1024} height={1024} loading="lazy"
          className="absolute inset-4 rounded-[1.75rem] object-cover shadow-warm" />
      </div>
      <div className="md:col-span-3">
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
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote: "Meu filho chega em casa todos os dias contando o que aprendeu. A equipe é atenciosa e o ambiente, muito acolhedor.",
      name: "Mariana S.",
      role: "mãe do Bento, 3 anos",
    },
    {
      quote: "O tempo integral salvou nossa rotina. Saio para trabalhar tranquila, sabendo que ela está em boas mãos.",
      name: "Camila R.",
      role: "mãe da Helena, 2 anos",
    },
    {
      quote: "Encontramos muito mais do que uma creche — encontramos uma família que cuida do nosso bebê com carinho.",
      name: "Rafael e Júlia",
      role: "pais do Théo, 11 meses",
    },
  ];
  return (
    <section id="depoimentos" className="bg-secondary/15">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Famílias Encantadamente</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
            Quem confia, recomenda.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map(t => (
            <figure key={t.name} className="rounded-3xl bg-card border border-border p-7 flex flex-col">
              <div className="flex text-primary mb-4">
                {[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4" fill="currentColor" />)}
              </div>
              <blockquote className="text-foreground leading-relaxed font-display text-xl">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
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
      <div className="rounded-[2.5rem] overflow-hidden bg-grain border border-border grid md:grid-cols-2">
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
          <Button type="submit" size="lg" disabled={loading} className="w-full rounded-full shadow-warm">
            {loading ? "Abrindo WhatsApp..." : "Quero agendar uma visita"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Você será direcionado ao WhatsApp com seus dados preenchidos.
          </p>
        </form>
      </div>
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
        <div className="flex items-center gap-2">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-foreground">
            <Heart className="w-4 h-4" fill="currentColor" />
          </span>
          <div>
            <div className="font-display text-lg font-semibold leading-none">Encantadamente Creche</div>
            <div className="text-xs text-muted-foreground mt-1">Maraponga · Fortaleza/CE</div>
          </div>
        </div>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href="https://www.instagram.com/encantadamentecreche/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary transition"><Instagram className="w-5 h-5" /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-primary transition"><Facebook className="w-5 h-5" /></a>
          <a href="mailto:contato@encantadamente.com.br" aria-label="Email" className="hover:text-primary transition"><Mail className="w-5 h-5" /></a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Encantadamente. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
