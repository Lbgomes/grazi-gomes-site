import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Reveal, Overline } from "./Reveal";
import { whatsappLink } from "./config";

const questions = [
    {
        q: "Quando seus planos são cancelados de última hora, você costuma:",
        options: [
            { t: "Sentir alívio por poder ficar sozinho(a)", k: "foguete" },
            { t: "Repassar mentalmente as conversas da semana", k: "mente" },
            { t: "Procurar companhia imediatamente", k: "companhia" },
            { t: "Aproveitar para adiantar tarefas e compromissos", k: "controle" },
        ],
    },
    {
        q: "Diante de uma crítica, sua reação mais comum é:",
        options: [
            { t: "Concordar rapidamente e refletir sobre ela por dias", k: "companhia" },
            { t: "Pensar em respostas que raramente diz em voz alta", k: "mente" },
            { t: "Aparentar indiferença, mesmo quando isso te afeta", k: "foguete" },
            { t: "Analisar racionalmente se a crítica é justa", k: "controle" },
        ],
    },
    {
        q: "Quando precisa de ajuda, você:",
        options: [
            { t: "Costuma ser quem ajuda, raramente quem pede", k: "companhia" },
            { t: "Tem dificuldade em nomear o que sente", k: "foguete" },
            { t: "Pensa em procurar apoio, mas acaba adiando", k: "mente" },
            { t: "Tenta resolver sozinho(a) antes de qualquer coisa", k: "controle" },
        ],
    },
    {
        q: "Sua relação com mudanças é:",
        options: [
            { t: "Prefiro a estabilidade do que já conheço", k: "foguete" },
            { t: "Imagino mudanças, mas raramente as inicio", k: "mente" },
            { t: "Mudo quando as pessoas ao redor precisam", k: "companhia" },
            { t: "Encaro mudanças como metas a cumprir", k: "controle" },
        ],
    },
];

const results = {
    foguete: {
        title: "Padrão de esquiva emocional",
        text: "Você tende a evitar emoções difíceis para manter a rotina em funcionamento. Na terapia, esse padrão é trabalhado com técnicas de TCC, em um ritmo seguro e respeitoso, ampliando sua tolerância emocional e sua qualidade de vida.",
    },
    mente: {
        title: "Padrão de ruminação",
        text: "Sua mente tende a repassar situações repetidamente, o que alimenta a ansiedade. A TCC oferece ferramentas com evidência científica para interromper esse ciclo e recuperar a presença no momento atual.",
    },
    companhia: {
        title: "Padrão de hipercuidado",
        text: "Você prioriza as necessidades dos outros e deixa as suas para depois. O processo terapêutico ajuda a estabelecer limites saudáveis e a incluir você na própria lista de cuidados.",
    },
    controle: {
        title: "Padrão de autocobrança",
        text: "A exigência consigo mesmo(a) gera um desgaste constante. A terapia trabalha essas crenças de desempenho, construindo uma relação mais equilibrada e compassiva com você.",
    },
};

export const Quiz = () => {
    const [step, setStep] = useState(0);
    const [scores, setScores] = useState({ foguete: 0, mente: 0, companhia: 0, controle: 0 });
    const [done, setDone] = useState(false);

    const answer = (k) => {
        const next = { ...scores, [k]: scores[k] + 1 };
        setScores(next);
        if (step + 1 >= questions.length) setDone(true);
        else setStep(step + 1);
    };

    const restart = () => {
        setStep(0);
        setScores({ foguete: 0, mente: 0, companhia: 0, controle: 0 });
        setDone(false);
    };

    const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const result = results[winner];

    return (
        <section id="teste" data-testid="quiz-section" className="relative py-28 md:py-40">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <Reveal>
                        <Overline className="mb-6">Autoavaliação</Overline>
                        <h2 className="font-serif-display font-bold text-3xl md:text-5xl tracking-tighter leading-tight mb-6">
                            Entenda o <span className="italic text-[#E35A3D]">momento</span> que você está vivendo
                        </h2>
                        <p className="text-[#A1A1AA] leading-relaxed">
                            Quatro perguntas de reflexão, elaboradas a partir de padrões comuns na prática clínica, para ajudar você a identificar como a terapia pode contribuir neste momento.
                        </p>
                        <p className="mt-6 text-[#A1A1AA]/60 text-sm leading-relaxed">
                            Esta autoavaliação é um exercício de reflexão e não substitui uma avaliação clínica.
                        </p>
                        <div className="mt-10 font-mono-accent text-xs uppercase tracking-[0.2em] text-[#A1A1AA]" data-testid="quiz-progress">
                            {done ? "Resultado" : `Pergunta ${step + 1} / ${questions.length}`}
                        </div>
                    </Reveal>
                </div>

                <div className="md:col-span-7 md:col-start-6">
                    <Reveal delay={0.1}>
                        <div className="border border-[#27272A]/60 bg-[#16161A]/60 backdrop-blur-xl p-8 md:p-12 min-h-[420px] flex flex-col">
                            <AnimatePresence mode="wait">
                                {!done ? (
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -40 }}
                                        transition={{ duration: 0.35 }}
                                        className="flex-1 flex flex-col"
                                    >
                                        <h3 className="font-serif-display font-bold text-2xl md:text-3xl tracking-tight mb-10" data-testid="quiz-question">
                                            {questions[step].q}
                                        </h3>
                                        <div className="space-y-3 flex-1">
                                            {questions[step].options.map((opt, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => answer(opt.k)}
                                                    data-testid={`quiz-option-${step}-${i}`}
                                                    className="w-full text-left border border-[#27272A]/60 px-6 py-4 text-[#A1A1AA] hover:text-[#F2F2F2] hover:border-[#E35A3D] hover:bg-[#E35A3D]/5 hover:-translate-y-0.5 transition-[color,border-color,background-color,transform] duration-300"
                                                >
                                                    <span className="font-mono-accent text-[10px] text-[#E35A3D] mr-3">{String.fromCharCode(65 + i)}</span>
                                                    {opt.t}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex-1 flex flex-col"
                                        data-testid="quiz-result"
                                    >
                                        <Overline className="mb-4">Seu resultado</Overline>
                                        <h3 className="font-serif-display font-black text-3xl md:text-4xl tracking-tight mb-6">
                                            {result.title}
                                        </h3>
                                        <p className="text-[#A1A1AA] leading-relaxed mb-10 max-w-xl">{result.text}</p>
                                        <div className="mt-auto flex flex-col sm:flex-row gap-4">
                                            <a
                                                href={whatsappLink(`Oi, Grazi. Fiz a autoavaliação no site e o resultado foi "${result.title}". Gostaria de conversar sobre uma consulta.`)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-testid="quiz-cta-button"
                                                className="bg-[#E35A3D] text-[#0A0A0C] font-medium px-8 py-4 rounded-full text-center hover:bg-[#F2F2F2] hover:-translate-y-1 transition-[background-color,transform] duration-300"
                                            >
                                                Agendar com a Grazi
                                            </a>
                                            <button
                                                onClick={restart}
                                                data-testid="quiz-restart-button"
                                                className="flex items-center justify-center gap-2 border border-[#27272A] px-8 py-4 rounded-full text-[#A1A1AA] hover:text-[#F2F2F2] hover:border-[#E35A3D] transition-[color,border-color] duration-300"
                                            >
                                                <RotateCcw size={16} /> Refazer a avaliação
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
