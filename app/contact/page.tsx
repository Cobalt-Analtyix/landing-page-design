import { ArrowLeft, ArrowRight, Mail, Phone } from 'lucide-react'
import Link from 'next'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#091d37] text-white flex items-center justify-center p-5 lg:p-8">
      <div className="w-full max-w-4xl bg-white/5 rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a48e8] rounded-full blur-[120px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff8a3d] rounded-full blur-[120px] opacity-10 pointer-events-none" />

        <div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <a href="/" className="inline-flex items-center text-sm text-white/60 hover:text-white mb-10 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to home
            </a>
            
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Let's talk about your <span className="text-[#1a48e8]">research needs.</span>
            </h1>
            <p className="text-white/70 text-lg mb-10">
              Get in touch with our experts to discover how Cobalt Analytix can help you make faster, smarter decisions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1a48e8]/20 flex items-center justify-center text-[#1a48e8]">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white/60 uppercase tracking-wider">Email Us</h3>
                  <a href="mailto:hello@cobaltanalytix.com" className="text-lg hover:text-[#1a48e8] transition-colors">hello@cobaltanalytix.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#091d37] rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Send a message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1a48e8] transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1a48e8] transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">How can we help?</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#1a48e8] transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full bg-[#1a48e8] hover:bg-[#1a48e8]/90 text-white font-bold rounded-xl px-6 py-4 transition-colors flex items-center justify-center gap-2">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
