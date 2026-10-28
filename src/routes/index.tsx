import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const OURO = "#c9a96e";
const CREME = "#f0ede8";
const NOITE = "#0e0e12";
const CARTA = "#15151b";

const voos = [
  {
    sentido: "Ida",
    data: "Quarta, 21 de janeiro",
    pernas: [
      { n: "LH 4683", de: "BSB", deNome: "Brasília", hs: "17:45", para: "GRU", paraNome: "São Paulo · Guarulhos", hc: "19:35", dur: "1h50", dia: "" },
      { n: "LH 505", de: "GRU", deNome: "São Paulo · Guarulhos", hs: "21:35", para: "MUC", paraNome: "Munique", hc: "13:00", dur: "11h25", dia: "+1", conexao: "conexão de 2h em Guarulhos" },
      { n: "LH 1856", de: "MUC", deNome: "Munique", hs: "15:20", para: "MXP", paraNome: "Milão · Malpensa", hc: "16:30", dur: "1h10", dia: "", conexao: "conexão de 2h20 em Munique" },
    ],
  },
  {
    sentido: "Volta",
    data: "Sexta, 29 de janeiro",
    pernas: [
      { n: "LH 1873", de: "FCO", deNome: "Roma · Fiumicino", hs: "07:05", para: "MUC", paraNome: "Munique", hc: "08:35", dur: "1h30", dia: "" },
      { n: "LH 504", de: "MUC", deNome: "Munique", hs: "11:45", para: "GRU", paraNome: "São Paulo · Guarulhos", hc: "20:15", dur: "12h30", dia: "", conexao: "conexão de 3h10 em Munique" },
      { n: "LH 4706", de: "GRU", deNome: "São Paulo · Guarulhos", hs: "23:40", para: "BSB", paraNome: "Brasília", hc: "01:25", dur: "1h45", dia: "+1", conexao: "conexão de 3h25 em Guarulhos" },
    ],
  },
];

const roteiro = [
  {
    dia: "21",
    mes: "jan",
    semana: "Quarta",
    titulo: "Embarque em Brasília",
    texto: "Saída às 17h45 para São Paulo e, às 21h35, o voo da Lufthansa para Munique. Noite a bordo.",
  },
  {
    dia: "22",
    mes: "jan",
    semana: "Quinta",
    titulo: "Chegada a Milão",
    texto: "Desembarque em Munique às 13h e conexão para Milão, com chegada ao Malpensa às 16h30. Traslado ao Hotel Bernina e primeira noite na cidade — caminhada curta pela Galleria Vittorio Emanuele II e jantar em trattoria do centro.",
    nota: "A chegada é no fim da tarde: o dia 22 é de deslocamento, com o centro reservado para a noite.",
  },
  {
    dia: "23",
    mes: "jan",
    semana: "Sexta",
    titulo: "Milão · Duomo e La Scala",
    texto: "Dia inteiro na região do Duomo: a catedral e seus terraços, a Galleria, o Teatro alla Scala e o Castello Sforzesco. A Última Ceia, de Leonardo, exige ingresso com data e hora marcadas — se quiserem, reservamos com antecedência.",
  },
  {
    dia: "24",
    mes: "jan",
    semana: "Sábado",
    titulo: "Milão → Veneza",
    texto: "Frecciarossa das 09h44, chegada a Venezia Santa Lucia às 12h12. Check-in no Hotel Rialto, ao pé da ponte. Tarde pela Piazza San Marco e pela região da Ponte dos Suspiros.",
  },
  {
    dia: "25",
    mes: "jan",
    semana: "Domingo",
    titulo: "Veneza · Grande Canal",
    texto: "Dia inteiro na cidade: mercado de Rialto pela manhã, vaporetto pelo Grande Canal à tarde e, para quem quiser, a travessia até Murano e Burano. Fim de tarde sem roteiro, que é quando Veneza fica melhor.",
  },
  {
    dia: "26",
    mes: "jan",
    semana: "Segunda",
    titulo: "Veneza → Roma",
    texto: "Frecciarossa das 08h40, chegada a Roma Termini às 12h27. Check-in no Hotel Medici, a poucos minutos da estação, e tarde livre pelo centro — Fontana di Trevi, Pantheon e a Piazza di Spagna a pé.",
  },
  {
    dia: "27",
    mes: "jan",
    semana: "Terça",
    titulo: "Roma · Vaticano",
    texto: "Museus Vaticanos e Capela Sistina pela manhã, com ingresso de entrada rápida. Restante do dia para a Basílica de São Pedro, Castel Sant’Angelo e o bairro de Trastevere ao anoitecer.",
    nota: "O Vaticano fica na terça de propósito: às quartas de manhã a Praça de São Pedro recebe a audiência geral e a área fica tomada.",
  },
  {
    dia: "28",
    mes: "jan",
    semana: "Quarta",
    titulo: "Roma · Coliseu e Roma Imperial",
    texto: "Coliseu, Fórum Romano e Monte Palatino — a parte do dia que pede guia. À tarde, Capitólio e Altar da Pátria. Último dia inteiro na Itália.",
  },
  {
    dia: "29",
    mes: "jan",
    semana: "Sexta",
    titulo: "Retorno ao Brasil",
    texto: "Traslado ao Fiumicino para o voo das 07h05, com conexões em Munique e São Paulo.",
    nota: "Atenção: o voo sai às 07h05 — a saída do hotel é por volta das 4h30 da madrugada. Vale encerrar a quinta-feira mais cedo.",
    alerta: true,
  },
  {
    dia: "30",
    mes: "jan",
    semana: "Sábado",
    titulo: "Chegada a Brasília",
    texto: "Pouso em Brasília à 01h25 da madrugada de sábado, depois da conexão em Guarulhos.",
  },
];

const trens = [
  { data: "24 jan", de: "Milano Centrale", para: "Venezia S. Lucia", hs: "09:44", hc: "12:12", dur: "2h28", num: "Frecciarossa 9717" },
  { data: "26 jan", de: "Venezia S. Lucia", para: "Roma Termini", hs: "08:40", hc: "12:27", dur: "3h47", num: "Frecciarossa 9411" },
];

const hoteis = [
  {
    cidade: "Milão",
    nome: "Hotel Bernina",
    estrelas: 3,
    nota: "8,4",
    endereco: "Via Napo Torriani, 27",
    bairro: "A poucos passos da Estação Central e do Corso Buenos Aires",
    quarto: "Double Standard Room",
    detalhe: "17 m² · 1 cama de casal · café da manhã incluso",
    datas: "Check-in 22/01 às 14h · check-out 24/01 às 11h",
    fotos: ["bernina-fachada.jpg", "bernina-quarto.jpg", "bernina-lounge.jpg"],
    taxa: "R$ 166,56",
  },
  {
    cidade: "Veneza",
    nome: "Hotel Rialto",
    estrelas: 4,
    nota: "9,0",
    endereco: "San Marco, 5149 — Ponte di Rialto",
    bairro: "Literalmente ao pé da ponte, sobre o Grande Canal",
    quarto: "Economy Room",
    detalhe: "Café da manhã incluso",
    datas: "Check-in 24/01 às 14h · check-out 26/01 às 11h",
    fotos: ["rialto-terraco.jpg", "rialto-quarto.jpg", "rialto-cafe.jpg"],
    taxa: "R$ 73,76",
  },
  {
    cidade: "Roma",
    nome: "Hotel Medici",
    estrelas: 3,
    endereco: "Via Flavia, 96",
    bairro: "Entre a Via Veneto e a Roma Termini — a pé da estação e do centro",
    quarto: "Quarto triplo (Small)",
    detalhe: "1 cama de casal e 1 cama dobrável de solteiro · café da manhã incluso",
    datas: "Check-in 26/01 às 15h · check-out 29/01 às 10h",
    fotos: ["medici-fachada.jpg", "medici-quarto.jpg", "medici-area.jpg"],
    taxa: "R$ 214,19",
  },
];

const opcionais = [
  {
    nome: "Tour Vaticano",
    quando: "Terça, 27 · manhã",
    desc: "Museus Vaticanos e Capela Sistina com entrada rápida e guia oficial em português. Bilhetes inclusos.",
    dur: "~2h30",
    eur: "119,90",
    eurDupla: "239,80",
    brl: "R$ 1.426,81",
    nota: "Na modalidade em grupo a Basílica de São Pedro não está inclusa — o acesso guiado à Basílica existe só no tour semiprivativo. Podemos cotar a versão semiprivativa se quiser a Basílica com guia.",
  },
  {
    nome: "Rolê Noturno pela Roma Iluminada",
    quando: "Terça, 27 · noite",
    desc: "Caminhada no sentido oposto ao fluxo turístico: Fontana di Trevi, Pantheon, Altar da Pátria e pontos fora do roteiro óbvio, com Roma iluminada.",
    dur: "~3h",
    eur: "82,50",
    eurDupla: "165,00",
    brl: "R$ 981,75",
  },
  {
    nome: "Tour Arena · Roma Imperial",
    quando: "Quarta, 28 · manhã",
    desc: "Coliseu com acesso à arena, onde ficava o palco dos gladiadores, mais Fórum Romano e Monte Palatino. Grupo de até ~20 pessoas, guia oficial em português, bilhetes inclusos.",
    dur: "~3h",
    eur: "108,90",
    eurDupla: "217,80",
    brl: "R$ 1.295,91",
    destaque: true,
  },
];

const investimento = [
  { grupo: "Aéreo", itens: [{ nome: "BSB · MXP — FCO · BSB", obs: "Lufthansa, via São Paulo e Munique, 2 passageiros", valor: "R$ 16.864,23" }] },
  {
    grupo: "Ferroviário",
    itens: [
      { nome: "Milão → Veneza", obs: "Frecciarossa 9717 · 24/01", valor: "R$ 379,41" },
      { nome: "Veneza → Roma", obs: "Frecciarossa 9411 · 26/01", valor: "R$ 645,04" },
    ],
  },
  {
    grupo: "Hospedagem",
    itens: [
      { nome: "Hotel Bernina", obs: "Milão · 2 noites com café da manhã", valor: "R$ 2.031,30" },
      { nome: "Hotel Rialto", obs: "Veneza · 2 noites com café da manhã", valor: "R$ 1.528,47" },
      { nome: "Hotel Medici", obs: "Roma · 3 noites com café da manhã", valor: "R$ 2.627,37" },
    ],
  },
  {
    grupo: "Serviços",
    itens: [
      { nome: "Seguro viagem", obs: "Cobertura de USD 80.000 por passageiro", valor: "R$ 274,40" },
      { nome: "Chip de viagem", obs: "10 GB com validade de 30 dias", valor: "R$ 177,60" },
    ],
  },
];

function Index() {
  return (
    <div className="font-body" style={{ background: NOITE, color: CREME, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Jost:wght@200;300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${NOITE}; }
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Jost', system-ui, sans-serif; font-weight: 300; }
        .num { font-variant-numeric: lining-nums tabular-nums; }
        .wrap { max-width: 1060px; margin: 0 auto; padding: 0 24px; }
        .eyebrow { font-size: 11px; letter-spacing: .34em; text-transform: uppercase; color: ${OURO}; font-weight: 400; }
        .sec { padding: 96px 0; }
        .sec h2 { font-size: clamp(2rem, 4.4vw, 3.2rem); font-weight: 500; margin-top: 14px; }
        .rule { height: 1px; background: linear-gradient(90deg, ${OURO}, transparent); margin: 22px 0 46px; }
        .card { background: ${CARTA}; border: 1px solid rgba(201,169,110,.18); border-radius: 4px; }
        a { color: inherit; }
        @media print {
          .no-print { display: none !important; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/fotos/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,14,18,.72) 0%, rgba(14,14,18,.6) 40%, rgba(14,14,18,.97) 100%)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "90px 24px", maxWidth: 820 }}>
          <img src="/drk-logo.png" alt="DRK Viagens" style={{ height: 50, marginBottom: 44, filter: "brightness(0) invert(1)", opacity: .95 }} />
          <p className="eyebrow">Proposta exclusiva · Mário</p>
          <h1 className="font-display" style={{ fontSize: "clamp(3rem, 9vw, 6rem)", fontWeight: 500, lineHeight: 1.05, margin: "22px 0 0" }}>
            Itália
            <em style={{ display: "block", fontStyle: "italic", color: OURO, fontSize: "0.72em", marginTop: 6 }}>de norte a sul</em>
          </h1>
          <div style={{ width: 160, height: 1, background: `linear-gradient(90deg, transparent, ${OURO}, transparent)`, margin: "34px auto 0" }} />
          <p style={{ marginTop: 28, fontSize: 15, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(240,237,232,.82)" }}>
            Milão · Veneza · Roma
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", marginTop: 46 }}>
            {[
              { l: "Início", v: "21 jan" },
              { l: "Fim", v: "30 jan" },
              { l: "Duração", v: "10 dias" },
              { l: "Viajantes", v: "2 adultos" },
            ].map(({ l, v }) => (
              <div key={l} style={{ textAlign: "center" }}>
                <p className="eyebrow" style={{ fontSize: 10 }}>{l}</p>
                <p className="font-display num" style={{ fontSize: 26, fontWeight: 500, marginTop: 6 }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CIDADES ──────────────────────────── */}
      <section className="sec" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <p className="eyebrow">O percurso</p>
          <h2 className="font-display">Três cidades, sem correria</h2>
          <div className="rule" />
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "rgba(240,237,232,.74)", maxWidth: 720 }}>
            O roteiro desce a Itália de norte a sul, sempre de trem de alta velocidade e sempre pela manhã —
            de modo que a tarde da mudança já seja aproveitada na cidade seguinte. Duas noites em Milão, duas em
            Veneza e três em Roma, que é a cidade que mais pede tempo. Todos os hotéis ficam no centro, a pé das
            atrações principais.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 50 }}>
            {[
              { nome: "Milão", f: "d-milao.jpg", d: "22 a 24 jan", t: "Duomo, La Scala e a Galleria" },
              { nome: "Veneza", f: "d-veneza.jpg", d: "24 a 26 jan", t: "San Marco, Rialto e o Grande Canal" },
              { nome: "Roma", f: "d-roma.jpg", d: "26 a 29 jan", t: "Coliseu, Vaticano e a Fontana di Trevi" },
            ].map((c) => (
              <div key={c.nome} className="card" style={{ overflow: "hidden" }}>
                <div style={{ height: 180, backgroundImage: `url('/fotos/${c.f}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                <div style={{ padding: "20px 22px 24px" }}>
                  <p className="eyebrow" style={{ fontSize: 10 }}>{c.d}</p>
                  <h3 className="font-display" style={{ fontSize: 30, fontWeight: 500, margin: "6px 0 10px" }}>{c.nome}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(240,237,232,.62)" }}>{c.t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AÉREO ────────────────────────────── */}
      <section className="sec" style={{ background: "#0b0b0f", borderTop: "1px solid rgba(201,169,110,.12)", borderBottom: "1px solid rgba(201,169,110,.12)" }}>
        <div className="wrap">
          <p className="eyebrow">O voo</p>
          <h2 className="font-display">Lufthansa, via São Paulo e Munique</h2>
          <div className="rule" />
          {voos.map((v) => (
            <div key={v.sentido} className="card" style={{ padding: "30px 30px 26px", marginBottom: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 10, paddingBottom: 20, borderBottom: "1px solid rgba(201,169,110,.16)" }}>
                <span className="font-display" style={{ fontSize: 28, fontWeight: 500, color: OURO }}>{v.sentido}</span>
                <span style={{ fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(240,237,232,.6)" }}>{v.data}</span>
              </div>
              {v.pernas.map((p, i) => (
                <div key={p.n}>
                  {p.conexao && (
                    <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "rgba(240,237,232,.58)", fontStyle: "italic", padding: "16px 0", borderLeft: `2px solid ${OURO}`, paddingLeft: 16, margin: "18px 0" }}>
                      {p.conexao}
                    </p>
                  )}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 18, alignItems: "center", padding: "18px 0" }}>
                    <div>
                      <p className="font-display" style={{ fontSize: 34, fontWeight: 500 }}>{p.de}</p>
                      <p style={{ fontSize: 12.5, color: "rgba(240,237,232,.55)", marginTop: 2 }}>{p.deNome}</p>
                      <p className="num" style={{ fontSize: 22, marginTop: 8, color: OURO }}>{p.hs}</p>
                    </div>
                    <div style={{ textAlign: "center", minWidth: 110 }}>
                      <p className="num" style={{ fontSize: 12, color: "rgba(240,237,232,.55)" }}>{p.dur}</p>
                      <div style={{ height: 1, background: "rgba(201,169,110,.35)", margin: "8px 0" }} />
                      <p style={{ fontSize: 11, letterSpacing: ".1em", color: "rgba(240,237,232,.45)" }}>{p.n}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p className="font-display" style={{ fontSize: 34, fontWeight: 500 }}>{p.para}</p>
                      <p style={{ fontSize: 12.5, color: "rgba(240,237,232,.55)", marginTop: 2 }}>{p.paraNome}</p>
                      <p className="num" style={{ fontSize: 22, marginTop: 8, color: OURO }}>
                        {p.hc}{p.dia && <sup style={{ fontSize: 12 }}>{p.dia}</sup>}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className="card" style={{ padding: "22px 26px", marginBottom: 22 }}>
            <p className="eyebrow" style={{ fontSize: 10 }}>Bagagem</p>
            <p style={{ fontSize: 15, lineHeight: 1.75, marginTop: 10 }}>
              Tarifa Economy da Lufthansa: cada passageiro leva a bagagem de mão e
              <b style={{ fontWeight: 500 }}> 1 peça despachada de até 23 kg</b>, na ida e na volta.
            </p>
          </div>

          <div style={{ border: `1px solid ${OURO}`, borderRadius: 4, padding: "22px 26px", marginTop: 8, background: "rgba(201,169,110,.06)" }}>
            <p className="eyebrow" style={{ fontSize: 10 }}>Atenção ao embarque de volta</p>
            <p style={{ fontSize: 15, lineHeight: 1.75, marginTop: 10 }}>
              O voo de Roma parte às <b style={{ fontWeight: 500 }}>07h05 de sexta, 29 de janeiro</b> — a saída do hotel
              acontece por volta das <b style={{ fontWeight: 500 }}>4h30 da madrugada</b>. A volta tem duas conexões e
              a chegada a Brasília é <b style={{ fontWeight: 500 }}>à 01h25 de sábado, 30</b>: vale deixar o sábado livre.
            </p>
          </div>
        </div>
      </section>

      {/* ── ROTEIRO ──────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Dia a dia</p>
          <h2 className="font-display">Como os dias se encaixam</h2>
          <div className="rule" />
          {roteiro.map((d) => (
            <div key={d.dia} style={{ display: "grid", gridTemplateColumns: "92px 1fr", gap: 26, padding: "28px 0", borderTop: "1px solid rgba(201,169,110,.14)" }}>
              <div>
                <p className="font-display num" style={{ fontSize: 42, fontWeight: 500, color: OURO, lineHeight: 1 }}>{d.dia}</p>
                <p style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(240,237,232,.45)", marginTop: 6 }}>{d.mes}</p>
                <p style={{ fontSize: 11, letterSpacing: ".1em", color: "rgba(240,237,232,.4)", marginTop: 2 }}>{d.semana}</p>
              </div>
              <div>
                <h3 className="font-display" style={{ fontSize: 26, fontWeight: 500, marginBottom: 10 }}>{d.titulo}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "rgba(240,237,232,.72)" }}>{d.texto}</p>
                {d.nota && (
                  <p style={{
                    fontSize: 13.5, lineHeight: 1.7, marginTop: 14, paddingLeft: 14,
                    borderLeft: `2px solid ${d.alerta ? "#d9a441" : "rgba(201,169,110,.5)"}`,
                    color: d.alerta ? "#e8c98a" : "rgba(240,237,232,.55)", fontStyle: "italic",
                  }}>{d.nota}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRENS ────────────────────────────── */}
      <section className="sec" style={{ background: "#0b0b0f", borderTop: "1px solid rgba(201,169,110,.12)", borderBottom: "1px solid rgba(201,169,110,.12)" }}>
        <div className="wrap">
          <p className="eyebrow">Entre as cidades</p>
          <h2 className="font-display">Dois trechos de alta velocidade</h2>
          <div className="rule" />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(240,237,232,.7)", maxWidth: 680, marginBottom: 40 }}>
Os dois trens saem de manhã e são diretos, sem conexões. As estações ficam no centro das
            cidades — nada de deslocamento para aeroporto entre um destino e outro.
          </p>
          <div style={{ display: "grid", gap: 16 }}>
            {trens.map((t) => (
              <div key={t.num} className="card" style={{ padding: "22px 26px", display: "grid", gridTemplateColumns: "100px 1fr auto", gap: 22, alignItems: "center" }}>
                <div>
                  <p className="eyebrow" style={{ fontSize: 10 }}>{t.data}</p>
                  <p className="num" style={{ fontSize: 13, color: "rgba(240,237,232,.5)", marginTop: 4 }}>{t.dur}</p>
                </div>
                <div>
                  <p style={{ fontSize: 17 }}>
                    <span className="num" style={{ color: OURO, fontWeight: 400 }}>{t.hs}</span> {t.de}
                    <span style={{ color: OURO, margin: "0 10px" }}>→</span>
                    <span className="num" style={{ color: OURO, fontWeight: 400 }}>{t.hc}</span> {t.para}
                  </p>
                  <p style={{ fontSize: 12.5, color: "rgba(240,237,232,.45)", marginTop: 6 }}>{t.num}</p>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOTÉIS ───────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Onde ficar</p>
          <h2 className="font-display">Três hotéis, todos no centro</h2>
          <div className="rule" />
          {hoteis.map((h) => (
            <div key={h.nome} className="card" style={{ overflow: "hidden", marginBottom: 34 }}>
              <div style={{ position: "relative", height: 320, backgroundImage: `url('/fotos/${h.fotos[0]}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,14,18,0) 35%, rgba(14,14,18,.78) 72%, rgba(14,14,18,.97) 100%)" }} />
                <div style={{ position: "absolute", left: 28, bottom: 22, right: 28 }}>
                  <p className="eyebrow" style={{ fontSize: 10 }}>{h.cidade}</p>
                  <h3 className="font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 500, marginTop: 6 }}>{h.nome}</h3>
                  <p style={{ fontSize: 13, color: OURO, letterSpacing: ".18em", marginTop: 6 }}>
                    {"★".repeat(h.estrelas)}
                    {h.nota && <span className="num" style={{ color: "rgba(240,237,232,.72)", letterSpacing: "normal", marginLeft: 12 }}>{h.nota} / 10</span>}
                  </p>
                </div>
              </div>
              <div style={{ padding: "26px 28px 30px" }}>
                <p style={{ fontSize: 14.5, color: "rgba(240,237,232,.6)" }}>{h.endereco}</p>
                <p style={{ fontSize: 15.5, lineHeight: 1.75, marginTop: 10 }}>{h.bairro}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, marginTop: 24 }}>
                  {h.fotos.slice(1).map((f) => (
                    <div key={f} style={{ height: 170, borderRadius: 3, backgroundImage: `url('/fotos/${f}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  ))}
                </div>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(201,169,110,.16)" }}>
                  <p className="eyebrow" style={{ fontSize: 10 }}>O quarto</p>
                  <p style={{ fontSize: 17, marginTop: 8 }}>{h.quarto}</p>
                  <p style={{ fontSize: 14.5, color: "rgba(240,237,232,.62)", marginTop: 5 }}>{h.detalhe}</p>
                  <p className="num" style={{ fontSize: 13.5, color: "rgba(240,237,232,.5)", marginTop: 12 }}>{h.datas}</p>
                  <p className="num" style={{ fontSize: 13.5, color: "rgba(240,237,232,.5)", marginTop: 4 }}>
                    Taxa municipal paga no hotel: {h.taxa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INVESTIMENTO ─────────────────────── */}
      <section className="sec" style={{ background: "#0b0b0f", borderTop: "1px solid rgba(201,169,110,.12)", borderBottom: "1px solid rgba(201,169,110,.12)" }}>
        <div className="wrap">
          <p className="eyebrow">Investimento</p>
          <h2 className="font-display">Valor de cada produto</h2>
          <div className="rule" />
          {investimento.map((g) => (
            <div key={g.grupo} style={{ marginBottom: 30 }}>
              <p className="eyebrow" style={{ fontSize: 10, marginBottom: 12 }}>{g.grupo}</p>
              {g.itens.map((it) => (
                <div key={it.nome} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 24, padding: "15px 0", borderTop: "1px solid rgba(201,169,110,.13)" }}>
                  <div>
                    <p style={{ fontSize: 16.5 }}>{it.nome}</p>
                    <p style={{ fontSize: 13, color: "rgba(240,237,232,.5)", marginTop: 3 }}>{it.obs}</p>
                  </div>
                  <p className="num" style={{ fontSize: 18, color: OURO, whiteSpace: "nowrap", fontWeight: 400 }}>{it.valor}</p>
                </div>
              ))}
            </div>
          ))}

          <div className="card" style={{ padding: "34px 32px", marginTop: 20, borderColor: OURO }}>
            <p className="eyebrow" style={{ fontSize: 10 }}>Valor total do pacote · 2 passageiros</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 30, marginTop: 24 }}>
              <div>
                <p style={{ fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(240,237,232,.6)" }}>À vista no Pix</p>
                <p className="num" style={{ fontSize: 38, color: OURO, marginTop: 8, lineHeight: 1.1 }}>R$ 24.552,38</p>
                <p className="num" style={{ fontSize: 13.5, color: "rgba(240,237,232,.5)", marginTop: 6 }}>R$ 12.276,19 por pessoa</p>
              </div>
              <div>
                <p style={{ fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(240,237,232,.6)" }}>Cartão · 10x</p>
                <p className="num" style={{ fontSize: 32, marginTop: 8, lineHeight: 1.1 }}>R$ 2.754,36</p>
                <p className="num" style={{ fontSize: 13.5, color: "rgba(240,237,232,.5)", marginTop: 6 }}>total R$ 27.543,61</p>
              </div>
              <div>
                <p style={{ fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(240,237,232,.6)" }}>Cartão · 18x</p>
                <p className="num" style={{ fontSize: 32, marginTop: 8, lineHeight: 1.1 }}>R$ 1.676,94</p>
                <p className="num" style={{ fontSize: 13.5, color: "rgba(240,237,232,.5)", marginTop: 6 }}>total R$ 30.184,88</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <p className="eyebrow" style={{ fontSize: 10 }}>O que não está incluso</p>
            <ul style={{ listStyle: "none", marginTop: 16, display: "grid", gap: 12 }}>
              {[
                "Taxas municipais de hospedagem, pagas diretamente a cada hotel — R$ 454,51 no total, sujeitas a variação cambial.",
                "Traslados aeroporto–hotel em Milão e em Roma.",
                "Ingressos, passeios e visitas guiadas descritos no roteiro, salvo os já contratados à parte.",
                "Refeições além do café da manhã e despesas de caráter pessoal.",
              ].map((t) => (
                <li key={t} style={{ fontSize: 14.5, lineHeight: 1.75, color: "rgba(240,237,232,.62)", paddingLeft: 20, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: OURO }}>·</span>{t}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "rgba(240,237,232,.45)", marginTop: 24 }}>
              Tarifas sujeitas a disponibilidade e alteração até a confirmação da reserva.
            </p>
          </div>
        </div>
      </section>

      {/* ── OPCIONAIS ────────────────────────── */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Opcionais · fora do pacote</p>
          <h2 className="font-display">Roma com guia brasileiro</h2>
          <div className="rule" />
          <p style={{ fontSize: 16.5, lineHeight: 1.85, color: "rgba(240,237,232,.74)", maxWidth: 720, marginBottom: 44 }}>
            Três experiências que se encaixam exatamente nos dias que vocês já têm em Roma, operadas por uma
            agência brasileira com sede na cidade — <b style={{ fontWeight: 500 }}>guia oficial em português,
            bilhetes inclusos e entrada rápida</b>. <b style={{ fontWeight: 500 }}>Nada daqui entra no valor do
            pacote fechado acima</b>: são contratadas à parte, só se fizerem sentido para vocês.
          </p>

          {opcionais.map((o) => (
            <div key={o.nome} className="card" style={{ padding: "28px 30px", marginBottom: 20, borderColor: o.destaque ? OURO : undefined }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
                <div>
                  <p className="eyebrow" style={{ fontSize: 10 }}>{o.quando} · {o.dur}</p>
                  <h3 className="font-display" style={{ fontSize: 28, fontWeight: 500, marginTop: 7 }}>{o.nome}</h3>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p className="num" style={{ fontSize: 26, color: OURO }}>€ {o.eur}</p>
                  <p style={{ fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(240,237,232,.45)", marginTop: 3 }}>por pessoa</p>
                </div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(240,237,232,.7)", marginTop: 14 }}>{o.desc}</p>
              {o.nota && (
                <p style={{ fontSize: 13.5, lineHeight: 1.7, marginTop: 14, paddingLeft: 14, borderLeft: `2px solid rgba(201,169,110,.5)`, color: "rgba(240,237,232,.55)", fontStyle: "italic" }}>
                  {o.nota}
                </p>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginTop: 18, paddingTop: 16, borderTop: "1px solid rgba(201,169,110,.14)" }}>
                <p className="num" style={{ fontSize: 14, color: "rgba(240,237,232,.6)" }}>Para os dois: € {o.eurDupla}</p>
                <p className="num" style={{ fontSize: 14, color: "rgba(240,237,232,.6)" }}>≈ {o.brl}</p>
              </div>
            </div>
          ))}

          <div className="card" style={{ padding: "28px 30px", marginTop: 26, borderColor: OURO }}>
            <p className="eyebrow" style={{ fontSize: 10 }}>As três juntas · 2 pessoas</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginTop: 14 }}>
              <p className="num" style={{ fontSize: 36, color: OURO, lineHeight: 1.1 }}>€ 622,60</p>
              <p className="num" style={{ fontSize: 20, color: "rgba(240,237,232,.72)" }}>≈ R$ 3.704,47</p>
            </div>
            <p className="num" style={{ fontSize: 13, color: "rgba(240,237,232,.45)", marginTop: 14, lineHeight: 1.7 }}>
              Conversão de referência ao câmbio de R$ 5,95 por euro em 27/10/2026. O valor em reais varia conforme
              a cotação do dia da contratação.
            </p>
          </div>

          <div style={{ border: `1px solid ${OURO}`, borderRadius: 4, padding: "22px 26px", marginTop: 26, background: "rgba(201,169,110,.06)" }}>
            <p className="eyebrow" style={{ fontSize: 10 }}>Como os três se encaixam</p>
            <p style={{ fontSize: 15, lineHeight: 1.75, marginTop: 10 }}>
              Com três noites em Roma, os três passeios cabem sem aperto: Vaticano na manhã de terça, o noturno na
              mesma terça à noite e o Coliseu na manhã de quarta. A <b style={{ fontWeight: 500 }}>noite de quinta fica
              livre de propósito</b> — é a véspera do embarque das 4h30.
            </p>
          </div>

          <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(240,237,232,.5)", marginTop: 26 }}>
            Também existem transfers privativos com motorista a partir de € 60 e passeios bate-e-volta saindo de
            Milão, Veneza e Roma — Pisa, Chianti, Cinque Terre, Lago de Como, Verona, Pompeia. Se interessar, cotamos à parte.
          </p>
        </div>
      </section>

      {/* ── ACOMPANHAMENTO ───────────────────── */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Nos bastidores</p>
          <h2 className="font-display">O que fica por nossa conta</h2>
          <div className="rule" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 26 }}>
            {[
              { t: "Check-in de todos os trechos", d: "Aéreo, trens e hotéis, com os cartões de embarque enviados a você." },
              { t: "Monitoramento de voos", d: "Alteração de horário ou cancelamento chega até nós antes de chegar até você." },
              { t: "Suporte durante a viagem", d: "Canal direto com a equipe, no fuso de lá, para o que surgir no caminho." },
              { t: "Suporte jurídico", d: "Antes, durante e depois — inclusive para pedidos de reembolso e indenização." },
            ].map((s) => (
              <div key={s.t} className="card" style={{ padding: "26px 24px" }}>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 500, color: OURO }}>{s.t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "rgba(240,237,232,.65)", marginTop: 10 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RODAPÉ ───────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(201,169,110,.18)", padding: "56px 0 70px", textAlign: "center" }}>
        <div className="wrap">
          <img src="/drk-logo.png" alt="DRK Viagens" style={{ height: 42, filter: "brightness(0) invert(1)", opacity: .75 }} />
          <p className="num" style={{ fontSize: 13.5, color: "rgba(240,237,232,.5)", marginTop: 22, lineHeight: 1.9 }}>
            CNPJ 50.808.601/0001-01<br />
            (61) 99124-7708 · @drkviagens
          </p>
          <p style={{ fontSize: 12, color: "rgba(240,237,232,.3)", marginTop: 20, letterSpacing: ".1em" }}>
            Proposta preparada para Mário · outubro de 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
