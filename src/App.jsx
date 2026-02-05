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
    Smartphone,
    Globe,
    Code2,
    Binary,
    Activity
} from 'lucide-react';

const App = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [vaultUnlocked, setVaultUnlocked] = useState(false);
    const [password, setPassword] = useState('');
    const [terminalText, setTerminalText] = useState([]);
    const [moisture, setMoisture] = useState(68);
    const [isTyping, setIsTyping] = useState(true);
    const [isBooting, setIsBooting] = useState(true);
    const [isHovering, setIsHovering] = useState(false);

    const logs = [
        "Establishing encrypted tunnel...",
        "Initializing Flutter environment...",
        "Connecting to Supabase instance...",
        "Syncing Cardano Hydra nodes...",
        "NASA Power API handshake: SUCCESS",
        "Deploying Aiken Smart Contracts...",
        "Gourav Singh v2.6 Online."
    ];

    const addLog = (message) => {
        setTerminalText(prev => [...prev.slice(-12), message]);
    };

    // Boot Sequence Timer
    useEffect(() => {
        const timer = setTimeout(() => setIsBooting(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    // Zero-Lag Mouse Tracking with requestAnimationFrame
    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let frameId;

        const updatePosition = () => {
            const root = document.documentElement;
            root.style.setProperty('--mouse-x', `${mouseX}px`);
            root.style.setProperty('--mouse-y', `${mouseY}px`);
            frameId = requestAnimationFrame(updatePosition);
        };

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            const target = e.target;
            const isSelectable = target.closest('button, a, input');
            setIsHovering(!!isSelectable);
        };

        window.addEventListener('mousemove', onMouseMove);
        frameId = requestAnimationFrame(updatePosition);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(frameId);
        };
    }, []);

    // Removal of legacy systemLoad logic

    // Terminal Typing Animation
    useEffect(() => {
        if (isBooting) return;
        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < logs.length) {
                addLog(logs[currentLine]);
                currentLine++;
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, 600);
        return () => clearInterval(interval);
    }, [isBooting]);

    // IoT Sprinkle Simulation
    useEffect(() => {
        const interval = setInterval(() => {
            setMoisture(prev => Math.max(30, Math.min(90, prev + (Math.random() > 0.5 ? 1 : -1))));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const executeCommand = (cmd, targetId) => {
        // Instant UI Transition
        setActiveTab(targetId);

        // Background Terminal Simulation
        setIsTyping(true);
        addLog(`exec ${cmd}...`);
        setTimeout(() => {
            addLog(`SUCCESS: Loaded ${targetId}_node`);
            setIsTyping(false);
        }, 500);
    };

    const handleUnlock = (e) => {
        e.preventDefault();
        if (password.toUpperCase() === 'GOU2026') {
            executeCommand('decrypt_vault', 'vault');
            setVaultUnlocked(true);
        } else {
            const input = document.getElementById('pass-input');
            input.classList.add('animate-bounce');
            setTimeout(() => input.classList.remove('animate-bounce'), 500);
            addLog('ERROR: INVALID AUTHORIZATION KEY');
        }
    };

    const NavItem = ({ id, label, icon: Icon }) => (
        <button
            onClick={() => executeCommand(`./${label}`, id)}
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
        <div className="min-h-screen bg-[#0a0a0c] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-white relative overflow-x-hidden cursor-none">
            {/* Cinematic Layers */}
            <div className="noise-bg" />
            <div className="fixed inset-0 scanlines z-[9998] opacity-[0.03]" />

            {/* Custom Cursor */}
            <div className={`custom-cursor ${isHovering ? 'hovering' : ''}`} />

            {/* Boot Sequence Overlay */}
            {isBooting && (
                <div className="fixed inset-0 z-[10001] bg-[#0a0a0c] flex flex-col items-center justify-center p-6 space-y-12">
                    <div className="relative">
                        <div className="w-32 h-32 border-2 border-emerald-500/20 rounded-full animate-[spin_3s_linear_infinite]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/peacock-brand.png" alt="Logo" className="w-16 h-16 animate-pulse drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
                        </div>
                    </div>
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-black text-white tracking-[0.5em] italic">ESTABLISHING_SIGNAL</h2>
                        <div className="flex justify-center gap-1">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <div key={i} className="w-1 h-3 bg-emerald-500 animate-[bounce_1.5s_infinite]" style={{ animationDelay: `${i * 0.1}s` }} />
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-12 font-mono text-[10px] text-slate-500 uppercase tracking-widest text-center">
                        Encrypted_Handshake: 0x92f...A22<br />
                        Node_Status: SECURE
                    </div>
                </div>
            )}
            {/* Interactive Spotlight Background */}
            <div
                className="fixed inset-0 pointer-events-none transition-opacity duration-1000 z-0"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.08), transparent 80%)`
                }}
            />

            {/* Grid Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.15] z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-2 py-2 flex items-center space-x-1 shadow-2xl">
                <div className="px-4 border-r border-white/10 mr-2">
                    <img src="/peacock-brand.png" alt="Logo" className="w-6 h-6 hover:scale-125 transition-transform" />
                </div>
                <NavItem id="home" label="Home" icon={Terminal} />
                <NavItem id="projects" label="Work" icon={Smartphone} />
                <NavItem id="iot" label="IoT" icon={Cpu} />
                <NavItem id="vault" label="Vault" icon={Lock} />
            </nav>

            {/* Main Content */}
            <main className="relative pt-40 pb-20 px-6 max-w-6xl mx-auto z-10">

                {activeTab === 'home' && (
                    <div className="space-y-16 animate-in fade-in duration-1000">
                        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
                            {/* Hero Section */}
                            <div className="text-center md:text-left space-y-8 lg:w-2/3">
                                <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-mono uppercase tracking-[0.2em]">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span>Signal Established</span>
                                </div>

                                <div className="relative group">
                                    <div className="absolute -top-24 -left-12 opacity-20 group-hover:opacity-40 transition-opacity">
                                        <img src="/peacock-brand.png" alt="Peacock" className="w-64 h-64 blur-2xl animate-pulse" />
                                    </div>
                                    <h1 className="text-6xl md:text-[11rem] font-black text-white leading-[0.85] tracking-tighter drop-shadow-[0_20px_50px_rgba(0,0,0,1)] crt-flicker relative z-10">
                                        GOURAV<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 drop-shadow-glow">SINGH</span>
                                    </h1>
                                    <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
                                </div>

                                <p className="text-xl md:text-3xl text-slate-400 max-w-3xl leading-relaxed font-light">
                                    Engineering <span className="text-white font-medium border-b-2 border-emerald-500/30">resilient architectures</span> for
                                    mobile, decentralized ecosystems, and hardware.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button
                                        onClick={() => executeCommand('./deploy_work', 'projects')}
                                        className="px-10 py-5 bg-emerald-500 text-black font-black uppercase tracking-[0.2em] text-xs rounded-full hover:scale-[1.05] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all flex items-center gap-3 active:scale-95"
                                    >
                                        Execute_Deployment <ExternalLink size={16} />
                                    </button>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all"
                                    >
                                        Connect
                                    </a>
                                </div>
                            </div>

                            {/* Peacock Arcade Module */}
                            <div className="hidden lg:flex flex-col gap-4 lg:w-1/3 animate-in slide-in-from-right-12 duration-1000">
                                <section className="p-1 px-1 mb-2">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] flex items-center gap-2">
                                            <Activity size={14} /> PEACOCK_JUNGLE_ARCADE
                                        </h3>
                                        <div className="w-12 h-[1px] bg-emerald-500/20"></div>
                                    </div>
                                    <PeacockGame />
                                </section>

                                <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Zap size={80} className="text-emerald-500" />
                                    </div>
                                    <p className="text-[10px] font-mono font-black text-emerald-400 uppercase mb-2">Node Performance</p>
                                    <p className="text-3xl font-black text-white">42+ <span className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Stages Cleared</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Terminal */}
                        <div className="bg-black/90 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] font-mono text-sm max-w-4xl mx-auto border-t-4 border-t-emerald-500">
                            <div className="bg-white/5 px-8 py-4 flex items-center justify-between border-b border-white/5">
                                <div className="flex space-x-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/40"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/40"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/40"></div>
                                </div>
                                <span className="text-[10px] text-slate-600 uppercase font-black tracking-[0.4em]">Interactive_Executive_Control — v3.0.0</span>
                                <div className="text-[10px] text-emerald-500 font-black animate-pulse bg-emerald-500/10 px-2 py-0.5 rounded">ONLINE</div>
                            </div>
                            <div className="p-8 space-y-3 min-h-[280px] max-h-[400px] overflow-y-auto custom-scrollbar">
                                {terminalText.map((line, i) => (
                                    <div key={i} className="flex space-x-3 group translate-x-0 hover:translate-x-2 transition-transform">
                                        <span className="text-emerald-500 opacity-50 font-bold">»</span>
                                        <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">{line}</span>
                                    </div>
                                ))}
                                {isTyping && <div className="animate-pulse inline-block w-2.5 h-5 bg-emerald-500 ml-8"></div>}
                            </div>
                            <div className="bg-white/5 p-6 px-10 border-t border-white/5 flex flex-wrap gap-6 items-center">
                                <span className="text-[10px] text-slate-600 uppercase font-black tracking-widest">Entry_Nodes:</span>
                                {['./Work', './IoT', './Vault'].map((cmd, i) => (
                                    <button
                                        key={i}
                                        onClick={() => executeCommand(cmd, cmd.toLowerCase().replace('./', ''))}
                                        className="text-[10px] px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 hover:font-black transition-all font-bold uppercase tracking-widest active:scale-95"
                                    >
                                        {cmd}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Dynamic Skill Cloud */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
                            {[
                                { label: 'Architect', tech: 'Flutter / Dart', icon: Smartphone, desc: 'Production-grade UX' },
                                { label: 'Infrastructure', tech: 'Supabase / Node', icon: Database, desc: 'Real-time scalability' },
                                { label: 'Embedded', tech: 'ESP32 / Motors', icon: Cpu, desc: 'Hardware ecosystems' },
                                { label: 'Security', tech: 'Vault / Crypto', icon: Lock, desc: 'ZKP & Decentralization' }
                            ].map((skill, i) => (
                                <div key={i} className="group p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.05] transition-all hover:border-emerald-500/30 hover:-translate-y-2">
                                    <div className="p-3 bg-white/5 rounded-2xl w-fit mb-5 group-hover:scale-110 transition-transform">
                                        <skill.icon size={24} className="text-slate-500 group-hover:text-emerald-500 transition-colors" />
                                    </div>
                                    <p className="text-[10px] text-slate-500 uppercase mb-1 font-black tracking-widest">{skill.label}</p>
                                    <p className="text-white font-black text-lg mb-1">{skill.tech}</p>
                                    <p className="text-xs text-slate-500 font-medium group-hover:text-slate-400 transition-colors">{skill.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'projects' && (
                    <div className="space-y-12 animate-in slide-in-from-bottom-8 duration-500">
                        {/* Hackathon Highlights */}
                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                                <Globe className="text-emerald-500" /> Hackathon Experience
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <ProjectCard
                                    title="Crestadel"
                                    tag="Cardano Hackathon 2025"
                                    desc="Decentralized Real Estate DApp. Fractionalized property ownership on-chain with Aiken smart contracts and high-throughput scaling via Cardano Hydra."
                                    features={["Aiken", "Hydra", "Cardano", "Web3"]}
                                    icon={<Binary className="text-blue-400" />}
                                />
                                <ProjectCard
                                    title="Rain Predictor"
                                    tag="NASA Space Apps 2025"
                                    desc="Advanced rainfall forecasting app built in Harohalli. Leverages NASA's historical weather data and NASA Power API for precision predictions."
                                    features={["NASA Power API", "Python", "Flutter", "ML"]}
                                    icon={<Wind className="text-emerald-400" />}
                                />
                            </div>
                        </section>

                        {/* Mobile Apps */}
                        <section>
                            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                                <Smartphone className="text-blue-500" /> Moblie Ecosystem
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <ProjectCard
                                    title="Food Hub"
                                    tag="Production Ready"
                                    desc="Comprehensive food aggregator with multi-vendor support, real-time tracking, and split payment logic."
                                    features={["Flutter", "Supabase", "Stripe"]}
                                    icon={<Smartphone className="text-orange-400" />}
                                />
                                <ProjectCard
                                    title="QR Master"
                                    tag="Utility"
                                    desc="Professional QR code creation and management suite. Supports dynamic data and historical tracking."
                                    features={["Dart", "Flutter", "Hive"]}
                                    icon={<Zap className="text-yellow-400" />}
                                />
                                <ProjectCard
                                    title="Paper Trader"
                                    tag="Fintech"
                                    desc="High-performance emulated trading app with virtual currency for market simulation and learning."
                                    features={["WebSockets", "Finance", "Flutter"]}
                                    icon={<Activity className="text-purple-400" />}
                                />
                                <ProjectCard
                                    title="EMI Calculator"
                                    tag="Tool"
                                    desc="Clean, sleek financial calculator for loan planning with interactive amortization charts."
                                    features={["Flutter", "Charts", "UI/UX"]}
                                    icon={<Cpu className="text-pink-400" />}
                                />
                            </div>
                        </section>
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
                                <p className="text-slate-400 mb-8 max-w-xs">Intelligent soil moisture monitoring and remote motor control system for precision agriculture. Built for automated irrigation.</p>

                                <div className="space-y-6 relative">
                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-xs uppercase font-bold text-slate-500 tracking-widest font-mono">Real-time Moisture</span>
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
                                        <button className="flex-1 bg-emerald-500 text-black font-bold py-3 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                            ACTIVATE MOTOR
                                        </button>
                                        <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-500/5 border border-blue-500/20 p-8 rounded-3xl relative overflow-hidden group h-full">
                                <div className="absolute top-0 right-0 p-4">
                                    <Activity className="text-blue-500/20 group-hover:text-blue-500/40 transition-colors" size={100} />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter">RC Command</h3>
                                <p className="text-slate-400 mb-8 max-w-xs">Custom low-latency Bluetooth controller built for hardware RC car integration. ESP32 powered.</p>
                                <div className="space-y-3">
                                    <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold">
                                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 uppercase">ESP32-WROOM</span>
                                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 uppercase">BLE 5.0</span>
                                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 uppercase">Motor PWM</span>
                                    </div>
                                    <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                                        <div className="flex justify-between items-center text-xs mb-2">
                                            <span className="text-slate-500 uppercase">Signal Strength</span>
                                            <span className="text-blue-400">-42 dBm</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i < 5 ? 'bg-blue-500' : 'bg-slate-700'}`}></div>)}
                                        </div>
                                    </div>
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
                                    <p className="text-slate-500 mt-2">Gourav's Confidential AI Research & Prototypes.</p>
                                </div>
                                <form onSubmit={handleUnlock} className="flex flex-col items-center space-y-4">
                                    <input
                                        id="pass-input"
                                        type="password"
                                        placeholder="ENTER AUTHORIZATION KEY"
                                        className="w-full max-w-xs bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-mono placeholder:text-slate-700"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button type="submit" className="text-slate-500 hover:text-emerald-400 text-sm font-mono transition-colors uppercase tracking-[0.2em] animate-pulse">
                                        [ Authenticate ]
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
                                    <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 rounded-3xl group hover:border-emerald-500/50 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">CVloom</h3>
                                            <span className="text-[10px] bg-emerald-500 text-black font-bold px-2 py-1 rounded">PROPRIETARY AI</span>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                            Next-gen AI Resume Architect. Upload legacy resumes and input custom enhancements; the system generates state-of-the-art, ATS-optimized output designed for silicon valley standards.
                                        </p>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-500 font-mono">Gemini AI</span>
                                            <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-500 font-mono">PDF-Engine</span>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 rounded-3xl group hover:border-emerald-500/50 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Searchweb</h3>
                                            <span className="text-[10px] bg-emerald-500 text-black font-bold px-2 py-1 rounded">RECRUITMENT OS</span>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                            Semantic talent discovery engine. Allows HRs to search by complex skill clusters; AI identifies top profiles and maps direct social platform gateways for instant recruitment.
                                        </p>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-500 font-mono">Semantic Search</span>
                                            <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-500 font-mono">RAG</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setVaultUnlocked(false)}
                                    className="w-full py-4 mt-8 border-2 border-dashed border-white/5 text-slate-600 hover:text-red-400 hover:border-red-500/20 text-xs font-mono transition-all rounded-3xl"
                                >
                                    TERMINATE SESSION & WIPE LOGS
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </main>

            {/* Footer Info */}
            <footer className="fixed bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none text-slate-600 text-[10px] font-mono uppercase tracking-[0.3em] overflow-hidden whitespace-nowrap z-50">
                <div className="hidden md:block pb-1">Gourav_Singh_v3.2.26 // Production_Build</div>
                <ConnectivityBridge addLog={addLog} />
            </footer>
        </div>
    );
};

const ConnectivityBridge = ({ addLog }) => {
    return (
        <div className="flex items-center space-x-8 pointer-events-auto bg-black/40 backdrop-blur-3xl border border-white/5 p-2 px-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-t-emerald-500/20 z-50 relative group/bridge">
            <div className="flex items-center space-x-4">
                <div className="flex flex-col items-end">
                    <span className="text-[8px] text-emerald-500 font-black tracking-tighter connectivity-pulse">ENCRYPTED_STREAM_ACTIVE</span>
                    <span className="text-[10px] text-slate-400 font-black">CONNECT_BRIDGE_v3.1</span>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
            </div>

            <div className="flex items-center space-x-6">
                <SocialLink
                    href="https://github.com/Gourav2167"
                    icon={<Github size={20} />}
                    label="GIT_NODE"
                    id="github"
                    addLog={addLog}
                />
                <SocialLink
                    href="https://linkedin.com/in/gourav-singh"
                    icon={<Linkedin size={20} />}
                    label="MESH_NODE"
                    id="linkedin"
                    addLog={addLog}
                />
            </div>

            <div className="flex items-center space-x-4">
                <div className="w-[1px] h-8 bg-white/10" />
                <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
                    <span className="text-emerald-500 font-bold shrink-0">SECURE</span>
                </div>
            </div>
        </div>
    );
};

const SocialLink = ({ href, icon, label, id, addLog }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        addLog(`Establishing handshake with ${label}...`);
        addLog(`Routing external packet to ${href}`);
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            className="group relative flex items-center justify-center w-12 h-12"
        >
            {/* Orbital Rings */}
            <div className={`absolute inset-0 border border-emerald-500/20 rounded-full transition-all duration-300 pointer-events-none ${isHovered ? 'scale-150 rotate-90 opacity-100' : 'scale-100 rotate-0 opacity-0'}`} />
            <div className={`absolute inset-0 border border-emerald-500/10 rounded-full transition-all duration-500 pointer-events-none ${isHovered ? 'scale-[2] -rotate-45 opacity-100' : 'scale-100 rotate-0 opacity-0'}`} />

            <div className={`relative p-3 rounded-xl transition-all duration-200 ${isHovered ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-110' : 'bg-white/5 text-slate-400 group-hover:text-emerald-400'}`}>
                {icon}
            </div>

            {/* Micro HUD */}
            <div className={`absolute bottom-full mb-6 left-1/2 -translate-x-1/2 transition-all duration-200 pointer-events-none ${isHovered ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-2'}`}>
                {isHovered && (
                    <div className="bg-black/90 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl min-w-[140px] shadow-2xl border-b-2 border-b-emerald-500">
                        <div className="text-[8px] text-emerald-500 font-black tracking-[0.3em] mb-1">NODE_ID: {id}_MAIN</div>
                        <div className="text-white text-xs font-black uppercase tracking-widest">{label}</div>
                        <div className="mt-3 flex justify-between items-center text-[6px] text-slate-500 font-mono">
                            <span>LATENCY: 8ms</span>
                            <span>STATUS: ACTIVE</span>
                        </div>
                    </div>
                )}
            </div>
        </a>
    );
};

const ProjectCard = ({ title, tag, desc, features, icon }) => (
    <div className="group bg-white/[0.03] border border-white/10 p-6 rounded-3xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                {icon}
            </div>
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest font-black shrink-0">{tag}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors flex items-center shrink-0">
            {title}
            <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
            {desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
            {features.map((f, i) => (
                <span key={i} className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 rounded text-slate-500 font-mono font-bold tracking-tighter">
                    {f}
                </span>
            ))}
        </div>
    </div>
);

const PeacockGame = () => {
    const [gameState, setGameState] = useState('START');
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(localStorage.getItem('peacock_highscore') || 0);
    const [peacockPos, setPeacockPos] = useState(0);
    const [obstacles, setObstacles] = useState([]);

    const requestRef = useRef();
    const lastUpdateRef = useRef(0);
    const jumpVelocityRef = useRef(0);
    const peacockYRef = useRef(0);
    const obstaclesRef = useRef([]);
    const obstacleTimerRef = useRef(0);
    const scoreInternalRef = useRef(0);

    const jump = (e) => {
        if (e) e.stopPropagation();
        if (gameState === 'START') {
            setGameState('PLAYING');
            setScore(0);
            scoreInternalRef.current = 0;
            setPeacockPos(0);
            peacockYRef.current = 0;
            setObstacles([]);
            obstaclesRef.current = [];
            jumpVelocityRef.current = 0;
            return;
        }
        if (gameState === 'PLAYING' && peacockYRef.current === 0) {
            jumpVelocityRef.current = 16;
        }
        if (gameState === 'GAME_OVER') {
            setGameState('START');
            setScore(0);
            scoreInternalRef.current = 0;
            setPeacockPos(0);
            peacockYRef.current = 0;
            setObstacles([]);
            obstaclesRef.current = [];
            jumpVelocityRef.current = 0;
        }
    };

    useEffect(() => {
        if (gameState !== 'PLAYING') return;

        lastUpdateRef.current = performance.now();

        const update = (time) => {
            const deltaTime = Math.min(time - lastUpdateRef.current, 32);
            lastUpdateRef.current = time;
            const deltaFactor = deltaTime / 16;

            // 1. Vertical Physics (Persistent Ref)
            if (jumpVelocityRef.current !== 0 || peacockYRef.current > 0) {
                jumpVelocityRef.current -= 0.8 * deltaFactor;
                peacockYRef.current += jumpVelocityRef.current * deltaFactor;

                if (peacockYRef.current <= 0) {
                    peacockYRef.current = 0;
                    jumpVelocityRef.current = 0;
                }
                setPeacockPos(peacockYRef.current);
            }

            // 2. Obstacles & Dynamic Speed
            const currentSpeed = 5.5 + (scoreInternalRef.current / 200);
            const spawnRate = Math.max(800, 1600 - (scoreInternalRef.current * 1.5));

            const moved = obstaclesRef.current
                .map(obs => ({ ...obs, x: obs.x - (currentSpeed * deltaFactor) }))
                .filter(obs => obs.x > -100);

            obstaclesRef.current = moved;
            setObstacles([...moved]);

            // 3. Frame-Perfect Collision Detection
            // Peacock X range: [50, 75]
            const collision = moved.some(obs => {
                const obsWidth = obs.type === 'LOG' ? 48 : 16;
                const isWithinX = obs.x < 75 && (obs.x + obsWidth) > 50;
                const isBelowHeight = peacockYRef.current < obs.height - 5; // Grace buffer
                return isWithinX && isBelowHeight;
            });

            if (collision) {
                setGameState('GAME_OVER');
                return;
            }

            // 4. Spawning
            obstacleTimerRef.current += deltaTime;
            if (obstacleTimerRef.current > spawnRate) {
                const type = Math.random() > 0.4 ? 'LOG' : 'VINE';
                obstaclesRef.current.push({
                    x: 600,
                    id: Date.now(),
                    type,
                    height: type === 'LOG' ? 35 : 45
                });
                obstacleTimerRef.current = 0;
                scoreInternalRef.current += 1;
                setScore(scoreInternalRef.current);
            }

            requestRef.current = requestAnimationFrame(update);
        };

        requestRef.current = requestAnimationFrame(update);
        return () => cancelAnimationFrame(requestRef.current);
    }, [gameState]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                jump();
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [gameState]);

    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('peacock_highscore', score);
        }
    }, [score]);

    const PixelPeacock = ({ isJumping }) => (
        <svg viewBox="0 0 32 32" className={`w-12 h-12 transition-transform duration-100 ${isJumping ? '-rotate-6' : 'rotate-0'}`}>
            <rect x="12" y="10" width="8" height="12" fill="#065f46" />
            <rect x="14" y="6" width="5" height="5" fill="#065f46" />
            <rect x="19" y="7" width="3" height="1" fill="#fbbf24" />
            <rect x="16" y="7" width="1" height="1" fill="white" />
            <g className="opacity-40">
                <rect x="7" y="14" width="5" height="4" fill="#10b981" />
            </g>
            <rect x="13" y="22" width="1" height="5" fill="#92400e" />
            <rect x="18" y="22" width="1" height="5" fill="#92400e" />
        </svg>
    );

    return (
        <div
            className="relative h-64 bg-[#050505] rounded-3xl border border-emerald-500/10 overflow-hidden cursor-pointer group shadow-2xl select-none"
            onClick={jump}
        >
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#0c0c0e]">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]"></div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse"></div>
            </div>

            <div
                className="absolute left-10 bottom-12 z-10"
                style={{
                    transform: `translateY(-${peacockPos}px)`,
                    willChange: 'transform'
                }}
            >
                <div className="relative">
                    <PixelPeacock isJumping={peacockPos > 0} />
                    {peacockPos > 0 && (
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-12 bg-emerald-500/10 blur-xl"></div>
                    )}
                </div>
            </div>

            {obstacles.map(obs => (
                <div
                    key={obs.id}
                    className="absolute bottom-12 z-10"
                    style={{ left: `${obs.x}px` }}
                >
                    {obs.type === 'LOG' ? (
                        <div className="w-12 h-8 bg-[#27160c] border border-[#452711] relative shadow-lg">
                            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_50%,#000_50%)] bg-[size:4px_100%]"></div>
                        </div>
                    ) : (
                        <div className="w-4 h-12 flex flex-col items-center">
                            <div className="w-1 h-12 bg-[#064e3b] relative">
                                <div className="absolute -left-2 top-2 w-2 h-2 bg-[#064e3b] rotate-45"></div>
                                <div className="absolute -right-2 top-6 w-2 h-2 bg-[#064e3b] rotate-45"></div>
                                <div className="absolute top-0 w-2 h-2 bg-emerald-500/10 rounded-full blur-[1px]"></div>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            <div className="absolute top-8 left-10 z-20">
                <span className="text-4xl text-white font-black tracking-tighter tabular-nums drop-shadow-glow">
                    {score.toString().padStart(5, '0')}
                </span>
            </div>

            <div className="absolute top-8 right-10 text-right z-20">
                <span className="text-[8px] text-slate-700 font-bold block mb-1 uppercase tracking-widest">BEST</span>
                <span className="text-sm text-emerald-500/60 font-black">{highScore.toString().padStart(5, '0')}</span>
            </div>

            {gameState === 'START' && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl flex items-center justify-center z-30 group-hover:bg-black/85 transition-all">
                    <div className="text-center animate-in zoom-in duration-700">
                        <div className="mb-10 scale-150 relative">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full animate-pulse"></div>
                            <img src="/peacock-brand.png" alt="Start" className="w-16 h-16 relative z-10 opacity-40 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
                        </div>
                        <h2 className="text-white font-black text-5xl tracking-[0.2em] mb-6 uppercase italic drop-shadow-glow select-none">START</h2>
                        <p className="text-[10px] text-emerald-500/40 font-black tracking-[0.5em] animate-pulse">[ SPACE_BAR / CLICK ]</p>
                    </div>
                </div>
            )}

            {gameState === 'GAME_OVER' && (
                <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl flex items-center justify-center z-40 transition-all">
                    <div className="text-center p-12 animate-in zoom-in duration-300">
                        <div className="mb-8 flex justify-center relative">
                            <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full"></div>
                            <img src="/peacock-brand.png" alt="Lost" className="w-20 h-20 relative z-10 opacity-60 drop-shadow-[0_0_40px_rgba(239,68,68,0.3)]" />
                        </div>

                        <h2 className="text-red-500 font-black tracking-[0.1em] text-5xl mb-8 uppercase italic drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">U LOST</h2>

                        <div className="mb-10 p-6 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md">
                            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">FINAL_SCORE</span>
                            <span className="text-white font-black text-5xl tracking-tighter tabular-nums drop-shadow-glow">{score}</span>
                        </div>

                        <button
                            onClick={jump}
                            className="px-16 py-5 bg-white text-black font-black text-xs rounded-full hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] uppercase tracking-[0.5em]"
                        >
                            PLAY AGAIN
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
