import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Reveal, Overline } from "./Reveal";
import { whatsappLink } from "./config";

const questions = [
    {
        q: "Sexta à noite, planos cancelados. Sua reação:",
        options: [
            { t: "Alívio. Finalmente posso não falar com ninguém.", k: "foguete" },
            { t: "Repasso mentalmente tudo que disse na semana. 47 vezes.", k: "mente" },
            { t: "Ligo para alguém. Silêncio é suspeito.", k: "companhia" },
            { t: "Abro o notebook. Produtividade não tira folga.", k: "controle" },
        ],
    },
    {
        q: "Alguém te critica no trabalho. Você:",
        options: [
            { t: "Concordo na hora e sofro por 3 dias no chuveiro.", k: "companhia" },
            { t: "Já tenho 14 respostas prontas. Nenhuma dita em voz alta.", k: "mente" },
            { t: "Finjo que não ligo. Ligo.", k: "foguete" },
            { t: "Analiso se a crítica procede. Sou assim com tudo. Exausto.", k: "controle" },
        ],
    },
    {
        q: "Sobre pedir ajuda:",
        options: [
            { t: "Eu que ajudo os outros. Sempre. E depois desabo.", k: "companhia" },
            { t: "Ajuda? Eu nem sei explicar o que sinto.", k: "foguete" },
            { t: "Já pensei. Mas 'não é pra tanto', né?", k: "mente" },
            { t: "Eu resolvo sozinho(a). Sempre resolvi. Olha onde cheguei.", k: "controle" },
        ],
    },
    {
        q: "Sua relação com a zona de conforto:",
        options: [
            { t: "Moro nela. IPTU pago, cortina nova.", k: "foguete" },
            { t: "Saio dela na imaginação. Volto antes do jantar.", k: "mente" },
            { t: "Saio quando alguém precisa de mim lá fora.", k: "companhia" },
            { t: "Zona de conforto é ineficiente. Assim como essa pergunta.", k: "controle" },
        ],
    },
];

const results = {
    foguete: {
        title: "O(a) Fugitivo(a) Profissional",
        text: "Você transformou evitar sentimentos em esporte olímpico — medalha de ouro em mudar de assunto. A boa notícia: na terapia, fugir não funciona. A Grazi já viu todas as rotas de fuga. Inclusive essa que você está planejando agora.",
    },
    mente: {
        title: "O(a) Diretor(a) de Cinema Mental",
        text: "Sua cabeça produz temporadas inteiras de catástrofes que nunca estreiam. TCC foi literalmente inventada para você: vamos tirar esses roteiros do papel e exibir só o que é real.",
    },
    companhia: {
        title: "O(a) Bombeiro(a) Emocional",
        text: "Você apaga o incêndio de todo mundo e volta para uma casa pegando fogo. Ser gentil é lindo; se abandonar é caro. Terapia é onde, finalmente, alguém pergunta: e você, como está de verdade?",
    },
    controle: {
        title: "O(a) CEO de Si Mesmo(a)",
        text: "Planilhas, metas, performance — até para descansar você tem método. O problema: emoção não aceita KPI. Na terapia você vai aprender a desligar o modo 'gestão de crise' da própria vida.",
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
                        <Overline className="mb-6">Teste cientificamente provocativo</Overline>
                        <h2 className="font-serif-display font-bold text-3xl md:text-5xl tracking-tighter leading-tight mb-6">
                            Descubra <span className="italic text-[#E35A3D]">por que</span> você precisa de terapia
                        </h2>
                        <p className="text-[#A1A1AA] leading-relaxed">
                            Quatro perguntas. Zero chance de sair ileso. O resultado é humor — mas o diagnóstico de que terapia faria bem? Esse é real.
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
                                        <Overline className="mb-4">Seu veredito (com carinho)</Overline>
                                        <h3 className="font-serif-display font-black text-3xl md:text-4xl tracking-tight mb-6">
                                            {result.title}
                                        </h3>
                                        <p className="text-[#A1A1AA] leading-relaxed mb-10 max-w-xl">{result.text}</p>
                                        <div className="mt-auto flex flex-col sm:flex-row gap-4">
                                            <a
                                                href={whatsappLink(`Oi, Grazi. Fiz o teste do site e o resultado foi "${result.title}". Acho que precisamos conversar.`)}
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
                                                <RotateCcw size={16} /> Refazer (negar o resultado)
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
