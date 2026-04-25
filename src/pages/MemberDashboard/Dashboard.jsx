import React, { useState } from 'react';
import { 
    LayoutDashboard, Dumbbell, Apple, MessageSquare, Settings, 
    Bell, Search, Plus, Clock, TrendingUp, Target, Flame,
    Droplets, Calendar, ChevronRight, Menu, Play, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SidebarDashboard from '../../components/SidebarDashboard';

const MemberDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('overview');

    // Mock Data
    const stats = [
        { label: 'Calories Burned', value: '1,840', icon: Flame, color: '#f97316', unit: 'kcal', trend: '+12%' },
        { label: 'Workouts', value: '12', icon: Dumbbell, color: '#b0f020', unit: 'Completed', trend: '+3' },
        { label: 'Weight', value: '78.5', icon: Target, color: '#3b82f6', unit: 'kg', trend: '-1.2kg' },
        { label: 'Water Intake', value: '2.4', icon: Droplets, color: '#06b6d4', unit: 'Liters', trend: '80%' }
    ];

    const todayWorkout = {
        title: 'Push Day - Hypertrophy',
        duration: '45 min',
        intensity: 'High',
        exercises: 8,
        progress: 65,
        img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=200&fit=crop'
    };

    const nutritionData = [
        { label: 'Protein', current: 145, target: 180, color: '#b0f020' },
        { label: 'Carbs', current: 210, target: 250, color: '#3b82f6' },
        { label: 'Fats', current: 55, target: 70, color: '#f59e0b' }
    ];

    const upcomingClasses = [
        { id: 1, name: 'Advanced HIIT', trainer: 'Coach Marcus', time: '05:30 PM', date: 'Today' },
        { id: 2, name: 'Yoga Flow', trainer: 'Emma Wilson', time: '08:00 AM', date: 'Tomorrow' }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 }
        }
    };

    return (
        <div className="flex min-h-screen bg-[#0a0d0a] text-white font-sans">
            {/* Sidebar */}
            <SidebarDashboard 
                isSidebarOpen={isSidebarOpen} 
                role="member" 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
            />

            {/* Main Content */}
            <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'md:ml-[260px]' : 'md:ml-[80px]'}`}>
                {/* Header */}
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#0a0d0a]/80 backdrop-blur-xl sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 hover:bg-white/5 rounded-lg transition-colors hidden md:block"
                        >
                            <Menu size={20} className="text-gray-400" />
                        </button>
                        <div className="relative group hidden sm:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#b0f020] transition-colors" size={18} />
                            <input 
                                type="text" 
                                placeholder="Search workouts, recipes..." 
                                className="bg-[#121612] border border-white/5 rounded-xl py-2 pl-10 pr-4 w-64 focus:outline-none focus:border-[#b0f020]/50 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative p-2 hover:bg-white/5 rounded-lg transition-colors">
                            <Bell size={20} className="text-gray-400" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#b0f020] rounded-full ring-2 ring-[#0a0d0a]"></span>
                        </button>
                        <Link to="/profile" className="flex items-center gap-3 pl-6 border-l border-white/10 group">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold group-hover:text-[#b0f020] transition-colors">Ziad Waleed</p>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-black">Pro Member</p>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-[#b0f020]/20 p-0.5 group-hover:border-[#b0f020] transition-all">
                                <img 
                                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop" 
                                    alt="Profile" 
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </Link>
                    </div>
                </header>

                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="p-8 space-y-8"
                >
                    {/* Welcome Section */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                Welcome Back, Ziad! <span className="animate-bounce-subtle">👋</span>
                            </h2>
                            <p className="text-gray-500 mt-1">You're on a 14-day streak! Keep it up.</p>
                        </div>
                        {/* <div className="flex items-center gap-3">
                            <button className="bg-[#121612] text-white border border-white/5 px-4 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                                <Calendar size={20} />
                                Schedule
                            </button>
                            <button className="bg-[#b0f020] text-black px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:shadow-[0_10px_30px_rgba(176,240,32,0.3)] transition-all transform hover:-translate-y-1 active:scale-95">
                                <Plus size={20} />
                                Log Workout
                            </button>
                        </div> */}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-[#121612] p-6 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-[#b0f020]/30 transition-all duration-500"
                            >
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#b0f020]/5 rounded-full blur-2xl"></div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 rounded-2xl bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-[#b0f020]/20 transition-all">
                                        <stat.icon size={24} style={{ color: stat.color }} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 rounded-lg text-[#b0f020]">
                                        {stat.trend}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                                    <span className="text-xs text-gray-500 font-medium">{stat.unit}</span>
                                </div>
                                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Today's Workout Card */}
                        <motion.div 
                            className="lg:col-span-2 bg-[#121612] rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col md:flex-row group"
                        >
                            <div className="md:w-1/2 relative">
                                <img src={todayWorkout.img} alt="Workout" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121612] via-transparent to-transparent"></div>
                                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#b0f020] rounded-full flex items-center justify-center text-black shadow-2xl transform group-hover:scale-110 transition-all">
                                    <Play size={28} fill="currentColor" />
                                </button>
                            </div>
                            <div className="md:w-1/2 p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full bg-[#b0f020]/10 text-[#b0f020] text-[10px] font-black uppercase tracking-widest">Today's Focus</span>
                                        <span className="text-xs text-gray-500 flex items-center gap-1"><Clock size={12}/> {todayWorkout.duration}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{todayWorkout.title}</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Progress</span>
                                            <span className="text-[#b0f020] font-bold">{todayWorkout.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${todayWorkout.progress}%` }}
                                                className="h-full bg-[#b0f020]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <p className="text-[10px] text-gray-500 uppercase font-bold">Exercises</p>
                                            <p className="text-sm font-bold">{todayWorkout.exercises}</p>
                                        </div>
                                        <div className="w-px h-8 bg-white/10"></div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 uppercase font-bold">Intensity</p>
                                            <p className="text-sm font-bold text-red-500">{todayWorkout.intensity}</p>
                                        </div>
                                    </div>
                                    <button className="p-3 bg-white/5 rounded-xl hover:bg-[#b0f020] hover:text-black transition-all">
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Nutrition Card */}
                        <motion.div className="bg-[#121612] rounded-[2.5rem] border border-white/5 p-8 flex flex-col">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-bold">Daily Macros</h3>
                                <Apple size={20} className="text-[#b0f020]" />
                            </div>
                            <div className="space-y-8 flex-1">
                                {nutritionData.map((macro, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{macro.label}</p>
                                                <p className="text-lg font-bold">{macro.current}g <span className="text-sm text-gray-600 font-medium">/ {macro.target}g</span></p>
                                            </div>
                                            <p className="text-xs font-black text-[#b0f020]">{Math.round((macro.current/macro.target)*100)}%</p>
                                        </div>
                                        <div className="h-2.5 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(macro.current/macro.target)*100}%` }}
                                                transition={{ duration: 1, delay: i * 0.2 }}
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: macro.color }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-8 w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <TrendingUp size={16} /> Detailed Nutrition
                            </button>
                        </motion.div>

                        {/* Upcoming Classes */}
                        <motion.div className="bg-[#121612] rounded-[2.5rem] border border-white/5 p-8">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-bold">Upcoming Classes</h3>
                                <div className="flex items-center gap-1 text-[#b0f020]">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-xs font-bold">Booked</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {upcomingClasses.map((item) => (
                                    <div key={item.id} className="p-5 rounded-3xl bg-white/5 border border-transparent hover:border-[#b0f020]/20 transition-all group cursor-pointer">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h4 className="font-bold text-sm group-hover:text-[#b0f020] transition-colors">{item.name}</h4>
                                                <p className="text-xs text-gray-500 mt-1">{item.trainer}</p>
                                            </div>
                                            <span className="text-[10px] font-black bg-[#b0f020]/10 text-[#b0f020] px-2 py-1 rounded-md">{item.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <Clock size={14} className="text-[#b0f020]" />
                                            {item.time}
                                        </div>
                                    </div>
                                ))}
                                <button className="w-full mt-2 py-4 rounded-2xl border border-dashed border-white/10 text-xs text-gray-500 hover:border-[#b0f020]/50 hover:text-[#b0f020] transition-all">
                                    + Browse More Classes
                                </button>
                            </div>
                        </motion.div>

                        {/* Trainer Connection */}
                        <motion.div className="lg:col-span-2 bg-gradient-to-br from-[#121612] to-[#0a0d0a] rounded-[2.5rem] border border-white/5 p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b0f020]/5 rounded-full blur-[100px]"></div>
                            <div className="relative">
                                <div className="w-24 h-24 rounded-[2rem] border-2 border-[#b0f020] p-1 rotate-3 group hover:rotate-0 transition-transform duration-500">
                                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop" className="w-full h-full rounded-[1.7rem] object-cover" alt="Trainer" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#b0f020] rounded-full flex items-center justify-center text-black border-4 border-[#121612]">
                                    <MessageSquare size={14} fill="currentColor" />
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-xl font-bold mb-2">Need guidance?</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mb-6">Your trainer <span className="text-white font-bold">Coach Marcus</span> is online and ready to help you optimize your training plan.</p>
                                <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                                    <button className="px-6 py-3 bg-[#b0f020] text-black rounded-xl font-bold hover:scale-105 transition-all text-sm">Send Message</button>
                                    <button className="px-6 py-3 bg-white/5 text-white rounded-xl font-bold hover:bg-white/10 transition-all text-sm border border-white/10">View Profile</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default MemberDashboard;
