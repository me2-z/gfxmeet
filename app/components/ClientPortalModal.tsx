'use client';

import { useState } from 'react';
import { PORTAL_PROJECTS, PORTAL_INVOICES, PORTAL_MESSAGES, PORTAL_NOTIFICATIONS, PortalProject } from '../portal-data';
import { X, ArrowUpRight, FolderKanban, MessageSquare, FileText, Bell, CheckCircle2, Clock, Download, Send, Check, ShieldCheck, Sparkles, User, LogOut } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientPortalModal({ isOpen, onClose }: ClientPortalModalProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'messages' | 'invoices' | 'notifications'>('overview');
  const [selectedProject, setSelectedProject] = useState<PortalProject | null>(null);
  
  // Chat state
  const [messages, setMessages] = useState(PORTAL_MESSAGES);
  const [newMessage, setNewMessage] = useState('');

  // Approval state
  const [approvedStatus, setApprovedStatus] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    const msg = {
      id: `msg-${Date.now()}`,
      sender: 'Krono Gaming (Client)',
      avatar: 'KG',
      text: newMessage,
      timestamp: 'Just now',
      isDesigner: false
    };
    setMessages([...messages, msg]);
    setNewMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-6xl bg-[#0D0D0D] border border-white/[0.08] text-[#F7F7F7] radius-dialog shadow-large my-4 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Portal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/[0.08] bg-[#050505]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#4B6FFF] text-white font-bold flex items-center justify-center text-sm radius-button">
              GP
            </div>
            <div>
              <span className="font-semibold tracking-widest uppercase text-xs text-[#F7F7F7] block">GFXMEET V3 CLIENT PORTAL</span>
              <span className="text-[10px] text-[#28C76F] font-mono">● Secure Encrypted Workspace</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {isLoggedIn && (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center gap-1.5 text-xs font-mono text-[#9A9A9A] hover:text-[#F7F7F7] bg-[#111111] border border-white/[0.08] px-3 py-1.5 radius-button"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
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

        {/* Portal Content Area */}
        <div className="flex-1 overflow-y-auto">
          {!isLoggedIn ? (
            /* Login Screen */
            <div className="max-w-md mx-auto py-20 px-6 text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] border border-white/[0.08] radius-card text-xs font-mono text-[#9A9A9A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#28C76F]" />
                <span>Linear & Notion Grade Security</span>
              </div>

              <div>
                <h3 className="text-3xl font-light text-[#F7F7F7] tracking-tight mb-2">
                  Client Workspace Access
                </h3>
                <p className="text-sm text-[#9A9A9A] font-light">
                  Sign in to view live project progress, review artwork, leave feedback pin comments, and manage invoices.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 text-left font-mono text-xs">
                <div>
                  <label className="block uppercase tracking-widest text-[#9A9A9A] mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email || 'creator@kronogaming.com'}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="creator@domain.com"
                    className="w-full bg-[#111111] border border-white/[0.08] px-4 py-3 text-sm text-[#F7F7F7] radius-input focus:outline-none focus:border-[#4B6FFF]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-widest text-[#9A9A9A] mb-2">Password / Magic Link</label>
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
                  className="w-full py-4 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button hover:bg-[#3b5ae6] transition-colors cursor-pointer shadow-medium mt-2"
                >
                  Sign In to Portal
                </button>
              </form>

              <div className="text-xs font-mono text-[#6B6B6B]">
                Demo Mode: Click sign in with preset credentials to explore active studio projects.
              </div>
            </div>
          ) : (
            /* Logged In Dashboard Workspace */
            <div className="flex flex-col md:flex-row min-h-[550px]">
              
              {/* Sidebar Navigation */}
              <div className="w-full md:w-64 bg-[#050505] border-r border-white/[0.08] p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <div className="p-3 bg-[#111111] border border-white/[0.08] radius-card">
                    <div className="text-[10px] font-mono text-[#6B6B6B] uppercase mb-1">CLIENT ORGANIZATION</div>
                    <div className="text-sm font-medium text-[#F7F7F7]">Krono Gaming</div>
                    <div className="text-xs text-[#28C76F] font-mono">4.2M Subscribers</div>
                  </div>

                  <nav className="space-y-1 font-mono text-xs">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`w-full text-left px-4 py-3 radius-button flex items-center gap-3 transition-colors ${
                        activeTab === 'overview' ? 'bg-[#4B6FFF] text-white font-medium' : 'text-[#9A9A9A] hover:text-[#F7F7F7] hover:bg-[#111111]'
                      }`}
                    >
                      <FolderKanban className="w-4 h-4" />
                      <span>Overview</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('projects')}
                      className={`w-full text-left px-4 py-3 radius-button flex items-center gap-3 transition-colors ${
                        activeTab === 'projects' ? 'bg-[#4B6FFF] text-white font-medium' : 'text-[#9A9A9A] hover:text-[#F7F7F7] hover:bg-[#111111]'
                      }`}
                    >
                      <FolderKanban className="w-4 h-4" />
                      <span>Projects ({PORTAL_PROJECTS.length})</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('messages')}
                      className={`w-full text-left px-4 py-3 radius-button flex items-center gap-3 transition-colors ${
                        activeTab === 'messages' ? 'bg-[#4B6FFF] text-white font-medium' : 'text-[#9A9A9A] hover:text-[#F7F7F7] hover:bg-[#111111]'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Messages</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('invoices')}
                      className={`w-full text-left px-4 py-3 radius-button flex items-center gap-3 transition-colors ${
                        activeTab === 'invoices' ? 'bg-[#4B6FFF] text-white font-medium' : 'text-[#9A9A9A] hover:text-[#F7F7F7] hover:bg-[#111111]'
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                      <span>Invoices</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('notifications')}
                      className={`w-full text-left px-4 py-3 radius-button flex items-center gap-3 transition-colors ${
                        activeTab === 'notifications' ? 'bg-[#4B6FFF] text-white font-medium' : 'text-[#9A9A9A] hover:text-[#F7F7F7] hover:bg-[#111111]'
                      }`}
                    >
                      <Bell className="w-4 h-4" />
                      <span>Notifications</span>
                    </button>
                  </nav>
                </div>

                <div className="p-4 bg-[#111111] border border-white/[0.08] radius-card font-mono text-[11px] text-[#9A9A9A] space-y-1">
                  <div>Assigned Architect:</div>
                  <div className="text-[#F7F7F7] font-medium">Meet Patel (Lead Director)</div>
                </div>
              </div>

              {/* Main Workspace Panel */}
              <div className="flex-1 p-6 sm:p-10 overflow-y-auto space-y-8">
                
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-light text-[#F7F7F7] tracking-tight mb-1">
                        Welcome back, Krono 👋
                      </h3>
                      <p className="text-xs text-[#9A9A9A] font-mono">
                        Here is the live status of your active creative packages and deliverables.
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                      <div className="p-5 bg-[#111111] border border-white/[0.08] radius-card">
                        <span className="text-[#6B6B6B] block mb-1">ACTIVE PROJECTS</span>
                        <span className="text-2xl text-[#F7F7F7] font-medium">2 In Production</span>
                      </div>
                      <div className="p-5 bg-[#111111] border border-white/[0.08] radius-card">
                        <span className="text-[#6B6B6B] block mb-1">PENDING APPROVALS</span>
                        <span className="text-2xl text-[#FFB547] font-medium">1 Artwork Ready</span>
                      </div>
                      <div className="p-5 bg-[#111111] border border-white/[0.08] radius-card">
                        <span className="text-[#6B6B6B] block mb-1">UNPAID INVOICES</span>
                        <span className="text-2xl text-[#28C76F] font-medium">$1,200.00</span>
                      </div>
                    </div>

                    {/* Active Projects List */}
                    <div className="space-y-4">
                      <div className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B]">
                        Active Production Workspaces
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {PORTAL_PROJECTS.map((proj) => (
                          <div key={proj.id} className="p-6 bg-[#111111] border border-white/[0.08] radius-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                              <img src={proj.coverImage} alt={proj.title} className="w-16 h-12 object-cover radius-image border border-white/[0.08]" />
                              <div>
                                <span className="text-[10px] font-mono text-[#4B6FFF] uppercase tracking-widest block mb-1">{proj.category}</span>
                                <h4 className="text-base font-medium text-[#F7F7F7]">{proj.title}</h4>
                                <span className="text-xs text-[#9A9A9A] font-mono">Deadline: {proj.deadline} • Assigned: {proj.assignedDesigner}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                              <div className="text-right font-mono text-xs">
                                <span className="text-[#28C76F] block mb-1 font-bold">{proj.status}</span>
                                <span className="text-[#6B6B6B]">{proj.progress}% Complete</span>
                              </div>
                              <button
                                onClick={() => setSelectedProject(proj)}
                                className="px-4 py-2.5 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button hover:bg-[#3b5ae6] transition-colors cursor-pointer"
                              >
                                Workspace
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-[#F7F7F7] tracking-tight">All Studio Projects</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {PORTAL_PROJECTS.map((proj) => (
                        <div key={proj.id} className="p-6 bg-[#111111] border border-white/[0.08] radius-card flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-[#4B6FFF] uppercase tracking-widest">{proj.category}</span>
                            <h4 className="text-lg font-medium text-[#F7F7F7]">{proj.title}</h4>
                            <span className="text-xs text-[#9A9A9A] font-mono">Status: {proj.status} • Updated {proj.lastUpdated}</span>
                          </div>
                          <button
                            onClick={() => setSelectedProject(proj)}
                            className="px-4 py-2 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button"
                          >
                            Open Workspace
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'messages' && (
                  <div className="flex flex-col h-[500px] bg-[#111111] border border-white/[0.08] radius-card overflow-hidden">
                    <div className="p-4 bg-[#171717] border-b border-white/[0.08] font-mono text-xs flex items-center justify-between">
                      <span>Direct Channel with Meet Patel (Lead Director)</span>
                      <span className="text-[#28C76F]">● Active</span>
                    </div>

                    <div className="flex-1 p-6 overflow-y-auto space-y-4 font-mono text-xs">
                      {messages.map((msg) => (
                        <div key={msg.id} className={`flex flex-col ${msg.isDesigner ? 'items-start' : 'items-end'}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[#9A9A9A]">{msg.sender}</span>
                            <span className="text-[#6B6B6B] text-[10px]">{msg.timestamp}</span>
                          </div>
                          <div className={`p-4 radius-card max-w-md ${msg.isDesigner ? 'bg-[#171717] text-[#F7F7F7] border border-white/[0.08]' : 'bg-[#4B6FFF] text-white'}`}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSendMessage} className="p-4 bg-[#171717] border-t border-white/[0.08] flex items-center gap-3">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message or feedback note to Meet..."
                        className="flex-1 bg-[#050505] border border-white/[0.08] px-4 py-2.5 text-xs text-[#F7F7F7] radius-input focus:outline-none focus:border-[#4B6FFF]"
                      />
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-[#4B6FFF] text-white text-xs font-medium tracking-widest uppercase radius-button flex items-center gap-2"
                      >
                        <span>Send</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>
                )}

                {activeTab === 'invoices' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-[#F7F7F7] tracking-tight">Invoices & Billing</h3>
                    <div className="space-y-4 font-mono text-xs">
                      {PORTAL_INVOICES.map((inv) => (
                        <div key={inv.id} className="p-6 bg-[#111111] border border-white/[0.08] radius-card flex items-center justify-between">
                          <div>
                            <span className="text-[#4B6FFF] font-bold block mb-1">{inv.number}</span>
                            <h4 className="text-sm font-medium text-[#F7F7F7] mb-1">{inv.service}</h4>
                            <span className="text-[#9A9A9A]">Issued: {inv.issueDate} • Due: {inv.dueDate}</span>
                          </div>
                          <div className="text-right space-y-2">
                            <span className="text-lg text-[#F7F7F7] font-bold block">{inv.amount}</span>
                            {inv.status === 'Paid' ? (
                              <span className="px-3 py-1 bg-[#28C76F]/20 text-[#28C76F] radius-button">Paid</span>
                            ) : (
                              <button
                                onClick={() => alert('Redirecting to secure Stripe checkout...')}
                                className="px-4 py-2 bg-[#28C76F] text-black font-bold uppercase radius-button tracking-wider hover:bg-[#22a75d] transition-colors cursor-pointer"
                              >
                                Pay Now
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-[#F7F7F7] tracking-tight">Notification Center</h3>
                    <div className="space-y-3 font-mono text-xs">
                      {PORTAL_NOTIFICATIONS.map((notif) => (
                        <div key={notif.id} className="p-4 bg-[#111111] border border-white/[0.08] radius-card flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-[#F7F7F7] mb-1">{notif.title}</h4>
                            <p className="text-[#9A9A9A] font-light">{notif.description}</p>
                          </div>
                          <span className="text-[#6B6B6B]">{notif.timestamp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          )}
        </div>

      </div>

      {/* Project Workspace Modal / Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-65 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#111111] border border-white/[0.08] text-[#F7F7F7] radius-dialog p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-xs font-mono text-[#4B6FFF]">WORKSPACE • {selectedProject.category}</span>
              <button onClick={() => setSelectedProject(null)} className="p-2 text-[#9A9A9A] hover:text-[#F7F7F7]">✕</button>
            </div>

            <h3 className="text-2xl font-light">{selectedProject.title}</h3>

            {/* Artwork Preview & Approval Box */}
            <div className="relative aspect-video w-full overflow-hidden border border-white/[0.08] radius-image bg-[#050505]">
              <img src={selectedProject.coverImage} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 text-[#28C76F] font-mono text-xs radius-card">
                Ready for Client Review
              </div>
            </div>

            {/* Approval Action Bar */}
            <div className="p-5 bg-[#0D0D0D] border border-white/[0.08] radius-card flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-[#9A9A9A] mb-1">Review Milestone Deliverable</div>
                <div className="text-sm text-[#F7F7F7] font-medium">Approve this design or request revisions below.</div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setApprovedStatus({ ...approvedStatus, [selectedProject.id]: true });
                    alert('Design approved successfully! Meet Patel has been notified.');
                  }}
                  className="px-6 py-3 bg-[#28C76F] text-black font-bold uppercase text-xs font-mono radius-button hover:bg-[#22a75d] transition-colors cursor-pointer"
                >
                  {approvedStatus[selectedProject.id] ? '✓ Approved' : 'Approve Design'}
                </button>
                <button
                  onClick={() => alert('Revision request logged. Meet Patel will review feedback.')}
                  className="px-6 py-3 bg-[#171717] border border-white/[0.08] text-[#F7F7F7] font-mono text-xs radius-button hover:bg-[#222]"
                >
                  Request Revision
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
