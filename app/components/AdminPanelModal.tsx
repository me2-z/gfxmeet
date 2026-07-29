'use client';

import { useState } from 'react';
import { ADMIN_PROJECTS, ADMIN_MEDIA, ADMIN_ANALYTICS, AdminProject } from '../admin-data';
import { X, LayoutDashboard, FolderKanban, Image as ImageIcon, FileText, BarChart3, Users, Settings, Search, Command, CheckCircle2, Clock, Plus, ShieldCheck, LogOut, Sliders } from 'lucide-react';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanelModal({ isOpen, onClose }: AdminPanelModalProps) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'media' | 'analytics' | 'settings'>('home');
  const [searchQuery, setSearchQuery] = useState('');

  // Kanban state
  const [projects, setProjects] = useState<AdminProject[]>(ADMIN_PROJECTS);
  const [autosaveStatus, setAutosaveStatus] = useState('Saved ✓');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdminLoggedIn(true);
  };

  const handleStatusChange = (id: string, newStatus: AdminProject['status']) => {
    setAutosaveStatus('Saving...');
    setTimeout(() => {
      setProjects(projects.map(p => p.id === id ? { ...p, status: newStatus } : p));
      setAutosaveStatus('Saved ✓');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-7xl bg-[#0D0D0D] border border-white/[0.08] text-[#F7F7F7] radius-dialog shadow-large my-2 overflow-hidden flex flex-col max-h-[94vh]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#050505]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#F7F7F7] text-[#050505] font-bold flex items-center justify-center text-sm radius-button font-mono">
              OS
            </div>
            <div>
              <span className="font-semibold tracking-widest uppercase text-xs text-[#F7F7F7] block">GFXMEET V3 STUDIO OS</span>
              <span className="text-[10px] text-[#4B6FFF] font-mono">● Linear + Notion Grade CMS</span>
            </div>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs">
            {isAdminLoggedIn && (
              <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 bg-[#111111] border border-white/[0.08] radius-card">
                <span className="text-[#28C76F]">{autosaveStatus}</span>
              </div>
            )}

            {isAdminLoggedIn && (
              <button
                onClick={() => setIsAdminLoggedIn(false)}
                className="flex items-center gap-1.5 text-[#9A9A9A] hover:text-[#F7F7F7] bg-[#111111] border border-white/[0.08] px-3 py-1.5 radius-button"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Lock OS</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 text-[#9A9A9A] hover:text-[#F7F7F7] transition-colors bg-[#111111] border border-white/[0.08] radius-button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {!isAdminLoggedIn ? (
            /* Admin Login Screen */
            <div className="max-w-md mx-auto py-20 px-6 text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-white/[0.08] radius-card text-xs font-mono text-[#9A9A9A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4B6FFF]" />
                <span>Super Admin Passkey & 2FA Protected</span>
              </div>

              <div>
                <h3 className="text-3xl font-light text-[#F7F7F7] tracking-tight mb-2">
                  Studio Operating System
                </h3>
                <p className="text-sm text-[#9A9A9A] font-light">
                  Restricted internal CMS for Meet Patel and GFXMEET senior creative architects.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 text-left font-mono text-xs">
                <div>
                  <label className="block uppercase tracking-widest text-[#9A9A9A] mb-2">Admin Email</label>
                  <input
                    type="email"
                    required
                    value={email || 'meet@gfxmeet.com'}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="meet@gfxmeet.com"
                    className="w-full bg-[#111111] border border-white/[0.08] px-4 py-3 text-sm text-[#F7F7F7] radius-input focus:outline-none focus:border-[#4B6FFF]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-widest text-[#9A9A9A] mb-2">Master Passkey / 2FA</label>
                  <input
                    type="password"
                    required
                    value={password || '••••••••••••'}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-[#111111] border border-white/[0.08] px-4 py-3 text-sm text-[#F7F7F7] radius-input focus:outline-none focus:border-[#4B6FFF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#F7F7F7] text-black text-xs font-medium tracking-widest uppercase radius-button hover:bg-white transition-colors cursor-pointer shadow-medium mt-2"
                >
                  Authenticate Studio OS
                </button>
              </form>

              <div className="text-xs font-mono text-[#6B6B6B]">
                Demo Mode: Click authenticate with preset credentials to test the Admin CMS.
              </div>
            </div>
          ) : (
            /* Logged In Admin OS Dashboard */
            <div className="flex flex-col md:flex-row min-h-[600px]">
              
              {/* Left Sidebar */}
              <div className="w-full md:w-64 bg-[#050505] border-r border-white/[0.08] p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <div className="p-3 bg-[#111111] border border-white/[0.08] radius-card flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#6B6B6B] uppercase block">ACTIVE USER</span>
                      <span className="text-sm font-medium text-[#F7F7F7]">Meet Patel</span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#4B6FFF] text-white text-[10px] font-mono radius-button">Owner</span>
                  </div>

                  <nav className="space-y-1 font-mono text-xs">
                    <button
                      onClick={() => setActiveTab('home')}
                      className={`w-full text-left px-4 py-3 radius-button flex items-center gap-3 transition-colors ${
                        activeTab === 'home' ? 'bg-[#F7F7F7] text-black font-medium' : 'text-[#9A9A9A] hover:text-[#F7F7F7] hover:bg-[#111111]'
                      }`}
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      <span>Dashboard</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('projects')}
                      className={`w-full text-left px-4 py-3 radius-button flex items-center gap-3 transition-colors ${
                        activeTab === 'projects' ? 'bg-[#F7F7F7] text-black font-medium' : 'text-[#9A9A9A] hover:text-[#F7F7F7] hover:bg-[#111111]'
                      }`}
                    >
                      <FolderKanban className="w-4 h-4" />
                      <span>Projects Kanban</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('media')}
                      className={`w-full text-left px-4 py-3 radius-button flex items-center gap-3 transition-colors ${
                        activeTab === 'media' ? 'bg-[#F7F7F7] text-black font-medium' : 'text-[#9A9A9A] hover:text-[#F7F7F7] hover:bg-[#111111]'
                      }`}
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span>Media Library</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('analytics')}
                      className={`w-full text-left px-4 py-3 radius-button flex items-center gap-3 transition-colors ${
                        activeTab === 'analytics' ? 'bg-[#F7F7F7] text-black font-medium' : 'text-[#9A9A9A] hover:text-[#F7F7F7] hover:bg-[#111111]'
                      }`}
                    >
                      <BarChart3 className="w-4 h-4" />
                      <span>Analytics & SEO</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className={`w-full text-left px-4 py-3 radius-button flex items-center gap-3 transition-colors ${
                        activeTab === 'settings' ? 'bg-[#F7F7F7] text-black font-medium' : 'text-[#9A9A9A] hover:text-[#F7F7F7] hover:bg-[#111111]'
                      }`}
                    >
                      <Settings className="w-4 h-4" />
                      <span>Studio Settings</span>
                    </button>
                  </nav>
                </div>

                <div className="p-4 bg-[#111111] border border-white/[0.08] radius-card font-mono text-[11px] text-[#6B6B6B] flex items-center gap-2">
                  <Command className="w-3.5 h-3.5 text-[#4B6FFF]" />
                  <span>Press Ctrl+K for Command OS</span>
                </div>
              </div>

              {/* Main Admin Panel Workspace */}
              <div className="flex-1 p-6 sm:p-10 overflow-y-auto space-y-8">
                
                {activeTab === 'home' && (
                  <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-light text-[#F7F7F7] tracking-tight mb-1">
                          Studio Command Center
                        </h3>
                        <p className="text-xs text-[#9A9A9A] font-mono">
                          What needs your attention today, Meet.
                        </p>
                      </div>

                      <button
                        onClick={() => alert('Opening new project modal...')}
                        className="px-5 py-2.5 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button flex items-center gap-2 shadow-small cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>New Master Project</span>
                      </button>
                    </div>

                    {/* Analytics Summary Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-mono text-xs">
                      <div className="p-5 bg-[#111111] border border-white/[0.08] radius-card">
                        <span className="text-[#6B6B6B] block mb-1">TOTAL VISITORS</span>
                        <span className="text-2xl text-[#F7F7F7] font-medium">{ADMIN_ANALYTICS.visitors}</span>
                      </div>
                      <div className="p-5 bg-[#111111] border border-white/[0.08] radius-card">
                        <span className="text-[#6B6B6B] block mb-1">PORTFOLIO VIEWS</span>
                        <span className="text-2xl text-[#F7F7F7] font-medium">{ADMIN_ANALYTICS.portfolioViews}</span>
                      </div>
                      <div className="p-5 bg-[#111111] border border-white/[0.08] radius-card">
                        <span className="text-[#6B6B6B] block mb-1">THUMBNAIL CLICKS</span>
                        <span className="text-2xl text-[#28C76F] font-medium">{ADMIN_ANALYTICS.thumbnailClicks}</span>
                      </div>
                      <div className="p-5 bg-[#111111] border border-white/[0.08] radius-card">
                        <span className="text-[#6B6B6B] block mb-1">CONVERSION RATE</span>
                        <span className="text-2xl text-[#4B6FFF] font-medium">{ADMIN_ANALYTICS.conversions}</span>
                      </div>
                    </div>

                    {/* Recent Projects Table */}
                    <div className="space-y-4">
                      <div className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B]">
                        Active Production Pipeline
                      </div>

                      <div className="bg-[#111111] border border-white/[0.08] radius-card overflow-hidden">
                        <table className="w-full text-left font-mono text-xs">
                          <thead className="bg-[#171717] border-b border-white/[0.08] text-[#9A9A9A]">
                            <tr>
                              <th className="p-4">Project Title</th>
                              <th className="p-4">Client</th>
                              <th className="p-4">Status</th>
                              <th className="p-4">Priority</th>
                              <th className="p-4">Due Date</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/[0.08]">
                            {projects.map((proj) => (
                              <tr key={proj.id} className="hover:bg-[#171717]/50">
                                <td className="p-4 font-medium text-[#F7F7F7]">{proj.title}</td>
                                <td className="p-4 text-[#9A9A9A]">{proj.client}</td>
                                <td className="p-4">
                                  <span className="px-2.5 py-1 bg-[#171717] text-[#28C76F] border border-white/[0.08] radius-button">
                                    {proj.status}
                                  </span>
                                </td>
                                <td className="p-4 text-[#FFB547]">{proj.priority}</td>
                                <td className="p-4 text-[#9A9A9A]">{proj.dueDate}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-light text-[#F7F7F7] tracking-tight">Kanban & Production Pipeline</h3>
                      <span className="text-xs font-mono text-[#6B6B6B]">Drag & Drop Auto-Saves</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                      {['Research', 'Design', 'Review'].map((colStatus) => (
                        <div key={colStatus} className="bg-[#111111] border border-white/[0.08] radius-card p-4 space-y-4">
                          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                            <span className="text-[#F7F7F7] font-bold uppercase tracking-widest">{colStatus}</span>
                            <span className="px-2 py-0.5 bg-[#171717] text-[#9A9A9A] radius-button">
                              {projects.filter(p => p.status === colStatus).length}
                            </span>
                          </div>

                          <div className="space-y-3">
                            {projects.filter(p => p.status === colStatus).map((proj) => (
                              <div key={proj.id} className="p-4 bg-[#171717] border border-white/[0.08] radius-card space-y-2">
                                <div className="text-sm font-medium text-[#F7F7F7]">{proj.title}</div>
                                <div className="text-[#9A9A9A] text-[11px]">Client: {proj.client}</div>
                                <div className="flex items-center justify-between pt-2">
                                  <span className="text-[#FFB547]">{proj.priority}</span>
                                  <select
                                    value={proj.status}
                                    onChange={(e) => handleStatusChange(proj.id, e.target.value as any)}
                                    className="bg-[#050505] text-[11px] text-[#F7F7F7] border border-white/[0.08] px-2 py-1 radius-button focus:outline-none"
                                  >
                                    <option value="Research">Research</option>
                                    <option value="Design">Design</option>
                                    <option value="Review">Review</option>
                                    <option value="Completed">Completed</option>
                                  </select>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'media' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-light text-[#F7F7F7] tracking-tight">Media & Asset Library</h3>
                      <button onClick={() => alert('File upload dialog opened.')} className="px-4 py-2 bg-[#4B6FFF] text-white font-mono text-xs radius-button">Upload Asset</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
                      {ADMIN_MEDIA.map((med) => (
                        <div key={med.id} className="bg-[#111111] border border-white/[0.08] radius-card overflow-hidden space-y-3">
                          <img src={med.url} alt={med.name} className="w-full h-36 object-cover" />
                          <div className="p-4 space-y-1">
                            <div className="font-medium text-[#F7F7F7] truncate">{med.name}</div>
                            <div className="text-[#9A9A9A] text-[11px]">{med.size} • {med.dimensions}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-6 font-mono text-xs">
                    <h3 className="text-2xl font-light text-[#F7F7F7] tracking-tight">Analytics & SEO Performance</h3>
                    <div className="p-6 bg-[#111111] border border-white/[0.08] radius-card space-y-4">
                      <div className="text-[#4B6FFF]">Real-Time Edge Traffic & Conversion Telemetry</div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-[#171717] radius-button">
                          <span className="text-[#6B6B6B] block mb-1">SEARCH ENGINE OPTIMIZATION</span>
                          <span className="text-[#28C76F] text-base font-bold">100 / 100 Lighthouse Score</span>
                        </div>
                        <div className="p-4 bg-[#171717] radius-button">
                          <span className="text-[#6B6B6B] block mb-1">GLOBAL CACHE</span>
                          <span className="text-[#F7F7F7] text-base font-bold">Vercel Edge Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="space-y-6 font-mono text-xs">
                    <h3 className="text-2xl font-light text-[#F7F7F7] tracking-tight">Studio Settings</h3>
                    <div className="p-6 bg-[#111111] border border-white/[0.08] radius-card space-y-4">
                      <div>
                        <label className="block text-[#9A9A9A] mb-2">Studio Name</label>
                        <input type="text" value="GFXMEET V3 Studio" readOnly className="w-full bg-[#171717] border border-white/[0.08] px-4 py-2.5 text-[#F7F7F7] radius-input" />
                      </div>
                      <div>
                        <label className="block text-[#9A9A9A] mb-2">Lead Creative Director</label>
                        <input type="text" value="Meet Patel" readOnly className="w-full bg-[#171717] border border-white/[0.08] px-4 py-2.5 text-[#F7F7F7] radius-input" />
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
