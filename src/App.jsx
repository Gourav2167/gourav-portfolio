import React, { useState, useEffect, useRef } from 'react';
import {
    Terminal,
    Cpu,
    Database,
    Cloud,
    Lock,
    ShieldAlert,
    ChevronRight,
    Github,
    Linkedin,
    ExternalLink,
    Droplets,
    Wind,
    Zap,
    Smartphone
} from 'lucide-react';

const App = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [vaultUnlocked, setVaultUnlocked] = useState(false);
    const [password, setPassword] = useState('');
    const [terminalText, setTerminalText] = useState([]);
    const [moisture, setMoisture] = useState(68);
    const [isTyping, setIsTyping] = useState(true);

    const logs = [
        "Establishing encrypted tunnel...",
        "Initializing Flutter environment...",
        "Connecting to Supabase instance...",
        "Syncing Cardano Hydra nodes...",
        "Loading LoRA adapters for specialized LLM...",
        "NASA Power API handshake: SUCCESS",
        "Gourav Singh v2.6 Online."
    ];

    // Terminal Typing Animation
    useEffect(() => {
        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < logs.length) {
                setTerminalText(prev => [...prev, logs[currentLine]]);
                currentLine++;
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, 600);
        return () => clearInterval(interval);
    }, []);

    // IoT Sprinkle Simulation
    useEffect(() => {
        const interval = setInterval(() => {
            setMoisture(prev => Math.max(30, Math.min(90, prev + (Math.random() > 0.5 ? 1 : -1))));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleUnlock = (e) => {
        e.preventDefault();
        if (password === 'GOU2026') {
            setVaultUnlocked(true);
        } else {
            const input = document.getElementById('pass-input');
            input.classList.add('animate-bounce');
            setTimeout(() => input.classList.remove('animate-bounce'), 500);
        }
    };

    const NavItem = ({ id, label, icon: Icon }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${activeTab === id
                    ? 'bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                    : 'text-slate-400 hover:text-emerald-400 hover:bg-slate-800'
                }`}
        >
            <Icon size={18} />
            <span className="hidden md:inline capitalize">{label}</span>
        </button>
    );

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-slate-300 font-sans selection:bg-emerald-500/30">
            {/* Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center space-x-1">
                <NavItem id="home" label="Home" icon={Terminal} />
                <NavItem id="projects" label="Work" icon={Smartphone} />
                <NavItem id="iot" label="IoT" icon={Cpu} />
                <NavItem id="vault" label="Vault" icon={Lock} />
            </nav>

            {/* Main Content */}
            <main className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto">

                {activeTab === 'home' && (
                    <div className="space-y-12 animate-in fade-in duration-700">
                        {/* Hero Section */}
                        <div className="text-center md:text-left space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-xs font-mono uppercase tracking-widest">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>System Online: Bengaluru</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight">
                                GOURAV <span className="text-emerald-500">SINGH</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
                                Full-Stack Engineer & AI Architect. Bridging the gap between
                                <span className="text-white"> mobile experiences</span>,
                                <span className="text-white"> IoT hardware</span>, and
                                <span className="text-white"> decentralized protocols</span>.
                            </p>
                        </div>

                        {/* Terminal Mockup */}
                        <div className="bg-black/60 border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-sm max-w-3xl">
                            <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/10">
                                <div className="flex space-x-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <span className="text-xs text-slate-500 uppercase tracking-tighter">bash — gourav-sh — 80x24</span>
                            </div>
                            <div className="p-6 space-y-2 min-h-[220px]">
                                {terminalText.map((line, i) => (
                                    <div key={i} className="flex space-x-2">
                                        <span className="text-emerald-500">➜</span>
                                        <span className="text-slate-300">{line}</span>
                                    </div>
                                ))}
                                {isTyping && <div className="animate-pulse inline-block w-2 h-4 bg-emerald-500 ml-6"></div>}
                            </div>
                        </div>

                        {/* Quick Skills */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                            {[
                                { label: 'Mobile', tech: 'Flutter / Dart' },
                                { label: 'Backend', tech: 'Supabase / Node.js' },
                                { label: 'AI/ML', tech: 'LoRA / RAG / Python' },
                                { label: 'Web3', tech: 'Aiken / Hydra / Cardano' }
                            ].map((skill, i) => (
                                <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                    <p className="text-xs text-slate-500 uppercase mb-1 font-bold">{skill.label}</p>
                                    <p className="text-white font-medium">{skill.tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'projects' && (
                    <div className="grid md:grid-cols-2 gap-6 animate-in slide-in-from-bottom-8 duration-500">
                        <ProjectCard
                            title="Crestadel"
                            tag="Blockchain"
                            desc="Real-estate fractionalization DApp built on Cardano. Implemented smart contracts with Aiken and high-speed transactions via Hydra protocol."
                            features={["Aiken", "Hydra", "Cardano", "Defi"]}
                            icon={<ShieldAlert className="text-purple-400" />}
                        />
                        <ProjectCard
                            title="NASA Rain Predictor"
                            tag="AI / Data"
                            desc="Created during NASA Space Apps 2025. Predicts local rainfall using historical data fetched through the NASA Power API."
                            features={["Python", "NASA API", "ML", "Flutter"]}
                            icon={<Wind className="text-blue-400" />}
                        />
                        <ProjectCard
                            title="Food Aggregator"
                            tag="Production"
                            desc="Full-scale mobile marketplace with real-time tracking, multi-vendor support, and payment integration."
                            features={["Flutter", "Supabase", "Stripe"]}
                            icon={<Smartphone className="text-orange-400" />}
                        />
                        <ProjectCard
                            title="Nexora"
                            tag="Fintech"
                            desc="Real-time paper trading platform for high-stakes finance competitions. Handles live market data simulation."
                            features={["Flutter", "WebSockets", "Finance"]}
                            icon={<Zap className="text-yellow-400" />}
                        />
                    </div>
                )}

                {activeTab === 'iot' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-8 duration-500">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-3xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4">
                                    <Droplets className="text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors" size={100} />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2">Sprinkle</h3>
                                <p className="text-slate-400 mb-8 max-w-xs">Intelligent soil moisture monitoring and remote motor control system for precision agriculture.</p>

                                <div className="space-y-6 relative">
                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-xs uppercase font-bold text-slate-500 tracking-widest">Real-time Moisture</span>
                                            <span className="text-2xl font-mono text-emerald-400 font-bold">{moisture}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all duration-1000"
                                                style={{ width: `${moisture}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button className="flex-1 bg-emerald-500 text-black font-bold py-3 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg">
                                            ACTIVATE MOTOR
                                        </button>
                                        <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-500/5 border border-blue-500/20 p-8 rounded-3xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4">
                                    <Smartphone className="text-blue-500/20 group-hover:text-blue-500/40 transition-colors" size={100} />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2">RC Command</h3>
                                <p className="text-slate-400 mb-8 max-w-xs">Custom low-latency Bluetooth controller built for hardware RC car integration.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-mono uppercase font-bold tracking-widest">ESP32</span>
                                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-mono uppercase font-bold tracking-widest">Bluetooth LE</span>
                                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-mono uppercase font-bold tracking-widest">Flutter Controller</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'vault' && (
                    <div className="max-w-2xl mx-auto py-12 animate-in zoom-in duration-300">
                        {!vaultUnlocked ? (
                            <div className="text-center space-y-8">
                                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                                    <Lock className="text-emerald-500" size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-white">Security Clearance Required</h2>
                                    <p className="text-slate-500 mt-2">Accessing confidential research projects (Searchweb, CVloom).</p>
                                </div>
                                <form onSubmit={handleUnlock} className="flex flex-col items-center space-y-4">
                                    <input
                                        id="pass-input"
                                        type="password"
                                        placeholder="ENTER AUTHORIZATION KEY"
                                        className="w-full max-w-xs bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-mono"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button type="submit" className="text-slate-500 hover:text-emerald-400 text-sm font-mono transition-colors uppercase tracking-[0.2em]">
                                        Decrypt Files
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3 mb-8">
                                    <div className="bg-emerald-500/20 p-2 rounded-lg">
                                        <ShieldAlert className="text-emerald-400" size={24} />
                                    </div>
                                    <h2 className="text-2xl font-black text-white uppercase tracking-wider">Vault Decrypted</h2>
                                </div>
                                <div className="grid gap-6">
                                    <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 rounded-2xl group hover:border-emerald-500/50 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">CVloom</h3>
                                            <span className="text-[10px] bg-emerald-500 text-black font-bold px-2 py-1 rounded">AI AGENT</span>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            AI Resume Architect that transforms standard resumes into ATS-optimized versions. Uses custom fine-tuned LLM logic to enhance specific sections for recruiter impact.
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 rounded-2xl group hover:border-emerald-500/50 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Searchweb</h3>
                                            <span className="text-[10px] bg-emerald-500 text-black font-bold px-2 py-1 rounded">RECRUITMENT OS</span>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Semantic talent engine for HRs. Uses RAG to map specific skills to social profiles, streamlining the discovery process with intelligent redirect logic.
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setVaultUnlocked(false)}
                                    className="w-full py-3 mt-8 border border-white/5 text-slate-600 hover:text-red-400 text-xs font-mono transition-colors"
                                >
                                    SECURE VAULT AND LOGOUT
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </main>

            {/* Footer Info */}
            <footer className="fixed bottom-6 left-6 right-6 flex justify-between items-center pointer-events-none text-slate-600 text-[10px] font-mono uppercase tracking-[0.3em]">
                <div className="hidden md:block">Gourav_Singh_v2.0.26</div>
                <div className="flex items-center space-x-4 pointer-events-auto">
                    <a href="#" className="hover:text-emerald-400 transition-colors"><Github size={14} /></a>
                    <a href="#" className="hover:text-emerald-400 transition-colors"><Linkedin size={14} /></a>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span className="text-emerald-500 font-bold">Encrypted Connection</span>
                </div>
            </footer>
        </div>
    );
};

const ProjectCard = ({ title, tag, desc, features, icon }) => (
    <div className="group bg-white/[0.03] border border-white/10 p-6 rounded-3xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                {icon}
            </div>
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest font-bold">{tag}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors flex items-center">
            {title}
            <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            {desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
            {features.map((f, i) => (
                <span key={i} className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 rounded-lg text-slate-500 font-mono">
                    {f}
                </span>
            ))}
        </div>
    </div>
);

export default App;
