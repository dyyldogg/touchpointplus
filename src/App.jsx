import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Header() {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          TouchPointPlus
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/platform" className="hover:text-purple-600 transition-colors">Platform</Link>
          <Link to="/communications" className="hover:text-purple-600 transition-colors">Communications</Link>
          <Link to="/portal" className="hover:text-purple-600 transition-colors">Client Portal</Link>
          <Link to="/privacy" className="hover:text-purple-600 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-purple-600 transition-colors">Terms</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
            Sign In
          </Link>
          <Link 
            to="/signup" 
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
              TouchPointPlus
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI-powered client communications platform for modern real estate teams.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Product</div>
            <div className="space-y-2 text-sm text-gray-600">
              <Link to="/platform" className="block hover:text-purple-600 transition-colors">Platform</Link>
              <Link to="/communications" className="block hover:text-purple-600 transition-colors">Communications</Link>
              <Link to="/portal" className="block hover:text-purple-600 transition-colors">Client Portal</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Legal</div>
            <div className="space-y-2 text-sm text-gray-600">
              <Link to="/privacy" className="block hover:text-purple-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block hover:text-purple-600 transition-colors">Terms of Service</Link>
              <Link to="/communications" className="block hover:text-purple-600 transition-colors">SMS Compliance</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Contact</div>
            <div className="space-y-2 text-sm text-gray-600">
              <div>1940 Haste St, Berkeley, CA 94704 #B</div>
              <div>hello@touchpoint.plus</div>
              <div>(310) 907-5746</div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} TouchPointPlus, LLC. All rights reserved.</div>
            <div className="flex items-center gap-2 text-xs">
              <span>Powered by</span>
              <span className="font-semibold">Google Cloud</span>
              <span>·</span>
              <span className="font-semibold">Vertex AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-purple-700 mb-6 border border-purple-100">
              <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
              AI-Powered Client Communications
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Intelligent Client Engagement for{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Real Estate Teams</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              TouchPointPlus delivers AI-driven appointment reminders, service updates, and compliance-first communications. 
              Built on Google Cloud with enterprise-grade security and intelligent message optimization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/signup" 
                className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/portal" 
                className="px-8 py-4 text-base font-semibold text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-lg transition-all duration-200"
              >
                View Client Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for Compliance, Powered by AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade client communications with intelligent delivery optimization and full audit trails.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Message Delivery</h3>
            <p className="text-gray-600 leading-relaxed">
              AI-optimized send times and message personalization. Vertex AI analyzes client engagement patterns to maximize response rates while maintaining compliance.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance-First Architecture</h3>
            <p className="text-gray-600 leading-relaxed">
              Built-in opt-in management, audit logs, and TCPA compliance. Every message tracked with timestamps, delivery status, and consent verification.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              BigQuery-powered insights on delivery rates, engagement metrics, and client preferences. Monitor campaign performance with millisecond latency.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on Google Cloud Platform with cutting-edge AI and security capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Vertex AI', desc: 'Message optimization & intent classification' },
              { name: 'BigQuery', desc: 'Real-time analytics & delivery metrics' },
              { name: 'Cloud SQL', desc: 'Secure opt-in records & audit logs' },
              { name: 'Cloud IAM', desc: 'Enterprise access control' },
              { name: 'Cloud KMS', desc: 'End-to-end encryption' },
              { name: 'Firestore', desc: 'Client preferences & session data' },
              { name: 'Cloud Functions', desc: 'Event-driven message triggers' },
              { name: 'Cloud Monitoring', desc: 'SLA tracking & alerting' }
            ].map((tech, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-gray-100">
                <div className="text-base font-semibold text-gray-900 mb-2">{tech.name}</div>
                <div className="text-sm text-gray-600">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transactional Communications Done Right
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              TouchPointPlus specializes in service-oriented client communications. Our platform handles appointment reminders, 
              billing confirmations, and service status updates with full compliance and audit trails.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Appointment Reminders</div>
                  <div className="text-gray-600">AI-optimized scheduling notifications with smart send-time prediction</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Service Updates</div>
                  <div className="text-gray-600">Real-time project status notifications with delivery confirmation</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Billing Confirmations</div>
                  <div className="text-gray-600">Secure invoice notifications with audit trail and compliance logging</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <div className="text-sm font-semibold text-purple-900 mb-4">Sample Messages</div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-900">"Hello Sarah, this is a reminder of your appointment with Agent John on Jan 15 at 2:00 PM."</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-900">"Your service request has been received. Our team will notify you once it is completed."</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-900">"Confirmation: Invoice #12345 has been processed and is now available in your portal."</div>
              </div>
            </div>
            <div className="mt-6 text-xs text-gray-600">
              All messages include opt-out instructions and maintain TCPA compliance.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Client Communications?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join leading real estate teams using AI-powered messaging with full compliance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/signup" 
              className="px-8 py-4 text-base font-semibold text-purple-600 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/communications" 
              className="px-8 py-4 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Learn About Compliance
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function Platform() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI-Powered Communications Platform
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          TouchPointPlus combines enterprise messaging infrastructure with intelligent AI capabilities 
          to deliver compliant, effective client communications at scale.
        </p>
      </div>
      
      <div className="space-y-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Message Optimization</h3>
              <p className="text-gray-600 mb-4">
                Vertex AI analyzes engagement patterns to optimize send times, message content, and delivery methods.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Smart send-time prediction</li>
                <li>• Content personalization</li>
                <li>• Engagement scoring</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Compliance Management</h3>
              <p className="text-gray-600 mb-4">
                Built-in TCPA compliance with opt-in tracking, consent management, and full audit trails.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Automated opt-in/opt-out handling</li>
                <li>• Timestamped consent records</li>
                <li>• STOP/HELP keyword processing</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-Time Analytics</h3>
              <p className="text-gray-600 mb-4">
                BigQuery-powered dashboards provide instant insights into delivery rates and client engagement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Delivery tracking</li>
                <li>• Engagement metrics</li>
                <li>• Campaign performance</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">
                Cloud KMS encryption, IAM access control, and SOC 2-ready infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• End-to-end encryption</li>
                <li>• Role-based access control</li>
                <li>• Comprehensive audit logs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm font-semibold text-purple-600 mb-3">AI & Machine Learning</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Vertex AI for message optimization</li>
                <li>Intent classification</li>
                <li>Sentiment analysis</li>
                <li>Engagement prediction</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-blue-600 mb-3">Data & Analytics</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>BigQuery for analytics</li>
                <li>Cloud SQL for records</li>
                <li>Firestore for real-time data</li>
                <li>Cloud Storage for archives</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-cyan-600 mb-3">Security & Infrastructure</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Cloud IAM access control</li>
                <li>Cloud KMS encryption</li>
                <li>Cloud Monitoring & Logging</li>
                <li>VPC security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Communications() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        How We Communicate
      </h1>
      <p className="text-xl text-gray-600 mb-12 leading-relaxed">
        TouchPointPlus provides compliant, service-oriented communications for real estate teams. 
        Every message is transactional, consent-based, and fully auditable.
      </p>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Types</h2>
          <p className="text-gray-600 mb-6">
            We deliver appointment reminders, billing confirmations, and project status updates to clients 
            who have explicitly opted in via our website or client forms.
          </p>
          <div className="space-y-4">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-sm font-semibold text-gray-900 mb-2">Appointment Reminders</div>
              <div className="text-sm text-gray-700 font-mono bg-white p-4 rounded border border-gray-200">
                "Hello [First Name], this is a reminder of your appointment with [Agent Name] on [Date] at [Time]."
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-sm font-semibold text-gray-900 mb-2">Service Status Updates</div>
              <div className="text-sm text-gray-700 font-mono bg-white p-4 rounded border border-gray-200">
                "Your service request has been received. Our team will notify you once it is completed."
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-sm font-semibold text-gray-900 mb-2">Billing Confirmations</div>
              <div className="text-sm text-gray-700 font-mono bg-white p-4 rounded border border-gray-200">
                "Confirmation: Invoice #[Invoice Number] has been processed."
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-sm font-semibold text-gray-900 mb-2">Account Notifications</div>
              <div className="text-sm text-gray-700 font-mono bg-white p-4 rounded border border-gray-200">
                "Notice: Your account settings were updated on [Date]. Contact support if this wasn't you."
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Opt-In Process</h2>
          <p className="text-gray-700 mb-6">
            Clients explicitly opt in via our web signup form with clear consent language, or by providing 
            their phone number directly to a TouchPointPlus representative. We store opt-in timestamps and 
            maintain comprehensive audit logs for each phone number.
          </p>
          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="text-sm font-semibold text-gray-900 mb-3">Consent Management</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Explicit checkbox consent required</li>
              <li>• Timestamp and IP address logged</li>
              <li>• Opt-out instructions in every message</li>
              <li>• STOP keyword processing (automatic unsubscribe)</li>
              <li>• HELP keyword support</li>
              <li>• Audit trail maintained for compliance</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Standards</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              TouchPointPlus maintains full TCPA compliance for all SMS communications. Our platform includes:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Written consent before any messages are sent</li>
              <li>Clear identification of sender in every message</li>
              <li>Easy opt-out mechanism (reply STOP)</li>
              <li>Comprehensive message and consent logging</li>
              <li>Regular compliance audits and reviews</li>
              <li>Data retention policies aligned with regulatory requirements</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Frequency</h2>
          <p className="text-gray-700">
            Message frequency varies based on service activity. Clients typically receive transactional 
            notifications only when relevant to their account or services. Non-promotional messages only.
          </p>
        </div>
      </div>
    </div>
  )
}

function Portal() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Client Portal
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Secure access to your communication preferences, message history, and account settings.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-8 bg-white rounded-2xl border border-gray-200 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Manage Preferences</h3>
          <p className="text-gray-600">
            Control communication channels, notification times, and message types.
          </p>
        </div>
        <div className="p-8 bg-white rounded-2xl border border-gray-200 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Message History</h3>
          <p className="text-gray-600">
            View complete history of all communications with timestamps and delivery status.
          </p>
        </div>
        <div className="p-8 bg-white rounded-2xl border border-gray-200 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Consent Management</h3>
          <p className="text-gray-600">
            Update consent preferences and view audit logs of all opt-in/opt-out actions.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-200 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Portal Access</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          The client portal provides secure, authenticated access to your account. Sign in to manage 
          preferences, review message history, and update contact information.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/login" 
            className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-xl transition-all"
          >
            Sign In to Portal
          </Link>
          <Link 
            to="/signup" 
            className="px-8 py-3 text-base font-semibold text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:border-purple-300 transition-all"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  )
}

function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Your Account</h1>
          <p className="text-lg text-gray-600">
            Get started with AI-powered client communications
          </p>
        </div>
        
        <form name="signup" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <input type="hidden" name="form-name" value="signup" />
          <input type="hidden" name="bot-field" />
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                <input name="firstName" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                <input name="lastName" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" required />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
              <input type="email" name="email" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" required />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
              <input type="tel" name="phone" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" required />
              <p className="text-xs text-gray-500 mt-2">Used for service notifications and account security</p>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
              <input name="company" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">How can we help?</label>
              <textarea name="message" rows="4" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors resize-none"></textarea>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-start gap-4">
                <input id="sms-consent" type="checkbox" name="smsConsent" className="mt-1 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" required />
                <div className="text-sm text-gray-700">
                  <label htmlFor="sms-consent" className="cursor-pointer font-medium">
                    I consent to receive transactional service messages from TouchPointPlus at the phone number provided above.
                  </label>
                  <p className="mt-2 text-gray-600">
                    This includes appointment reminders, service updates, and billing confirmations. Message frequency varies. 
                    Message and data rates may apply. Reply STOP to opt out at any time. See our{' '}
                    <Link to="/privacy" className="text-purple-600 hover:underline font-medium">Privacy Policy</Link> and{' '}
                    <Link to="/terms" className="text-purple-600 hover:underline font-medium">Terms of Service</Link>.
                  </p>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-600 hover:underline font-medium">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-20">
      <div className="max-w-md mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome Back</h1>
          <p className="text-lg text-gray-600">
            Sign in to access your client portal
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
              <input type="email" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
              <input type="password" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors" />
            </div>

            <button className="w-full py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-purple-600 hover:underline font-medium">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">Last updated: ${new Date().toLocaleDateString()}</p>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          TouchPointPlus, LLC ("TouchPointPlus", "we", "us") provides AI-powered client communication services 
          for real estate professionals. This policy explains how we collect, use, and share information.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Information We Collect</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Contact information you submit (name, email, phone number)</li>
          <li>Communication preferences and consent records with timestamps</li>
          <li>Message delivery metadata (timestamps, carrier delivery information, read receipts)</li>
          <li>Website analytics and form submission data</li>
          <li>Account activity and authentication logs</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How We Use Information</h2>
        <ul className="space-y-2 text-gray-700">
          <li>To provide communications services and respond to inquiries</li>
          <li>To send SMS messages per your explicit consent for appointment reminders, service updates, and billing confirmations</li>
          <li>To maintain opt-in/opt-out records and ensure TCPA compliance</li>
          <li>To ensure reliable delivery, troubleshoot issues, and prevent abuse</li>
          <li>To improve our AI-powered message optimization algorithms</li>
          <li>To maintain security and prevent unauthorized access</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">SMS Communications</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We use SMS communications to deliver transactional messages including appointment reminders, 
          service status updates, and billing confirmations. Key details:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Consent:</strong> We obtain explicit written consent before sending any SMS messages</li>
          <li><strong>Message Types:</strong> Transactional service notifications only (non-promotional)</li>
          <li><strong>Frequency:</strong> Message frequency varies based on service activity</li>
          <li><strong>Opt-Out:</strong> Reply STOP to any message to immediately unsubscribe</li>
          <li><strong>Help:</strong> Reply HELP for assistance or contact hello@touchpoint.plus</li>
          <li><strong>Records:</strong> We store opt-in timestamps, consent records, and complete audit trails</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Sharing</h2>
        <p className="text-gray-700 leading-relaxed">
          We share necessary data with trusted service providers (e.g., SMS platforms, wireless carriers, 
          and Google Cloud Platform) solely to deliver messages and operate our services. We do not sell 
          personal data to third parties.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Retention</h2>
        <p className="text-gray-700 leading-relaxed">
          We retain information for as long as needed to provide services and as required by law. Message logs, 
          consent records, and audit trails are retained for compliance purposes. You may request deletion of 
          your data by contacting us at hello@touchpoint.plus.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Your Rights and Choices</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Opt-Out:</strong> Reply STOP to any SMS message or contact us to opt out</li>
          <li><strong>Access:</strong> Request access to your personal data through the client portal</li>
          <li><strong>Correction:</strong> Update your information in the client portal or contact support</li>
          <li><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We use enterprise-grade security measures including Cloud KMS encryption, IAM access control, 
          and secure data transmission. All data is stored on Google Cloud Platform with SOC 2-compliant infrastructure.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Children's Privacy</h2>
        <p className="text-gray-700 leading-relaxed">
          Our services are intended for individuals 18 years and older. We do not knowingly collect 
          information from children under 18.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">International Users</h2>
        <p className="text-gray-700 leading-relaxed">
          We operate in the United States. If you access our services from other regions, your data 
          may be transferred to and processed in the U.S.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changes to This Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this policy from time to time. Material changes will be reflected here with 
          an updated date. Continued use of our services after changes constitutes acceptance.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact Us</h2>
        <div className="text-gray-700 leading-relaxed">
          <p>TouchPointPlus, LLC</p>
          <p>1940 Haste St, Berkeley, CA 94704 Apartment #B</p>
          <p>Email: hello@touchpoint.plus</p>
          <p>Phone: (310) 907-5746</p>
        </div>
      </div>
    </div>
  )
}

function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">Last updated: ${new Date().toLocaleDateString()}</p>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          By using TouchPointPlus services, you agree to these Terms of Service.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Services</h2>
        <p className="text-gray-700 leading-relaxed">
          TouchPointPlus provides AI-powered client communication services for real estate professionals, 
          including appointment reminders, service status updates, billing confirmations, and account notifications.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">SMS/Mobile Terms</h2>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 my-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Information</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Program Name:</strong> TouchPointPlus Client Communications</li>
            <li><strong>Description:</strong> We send transactional service messages including appointment reminders, 
            service updates, billing confirmations, and account notifications (non-promotional)</li>
            <li><strong>Opt-In:</strong> Subscribe via our web forms, client portal, or by providing explicit consent 
            to a TouchPointPlus representative</li>
            <li><strong>Frequency:</strong> Recurring; message frequency varies based on service activity</li>
            <li><strong>Cost:</strong> Message and data rates may apply as charged by your mobile carrier</li>
            <li><strong>Opt-Out:</strong> Reply STOP to any message to cancel at any time</li>
            <li><strong>Help:</strong> Reply HELP for assistance or contact hello@touchpoint.plus or (310) 907-5746</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">User Responsibilities</h2>
        <ul className="space-y-2 text-gray-700">
          <li>You must be 18 years or older to use our services</li>
          <li>Provide accurate and current contact information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Comply with applicable laws and regulations</li>
          <li>Not use services for unlawful or prohibited purposes</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Consent and Data Usage</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          By opting in to SMS communications:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>You provide explicit written consent to receive SMS messages at the provided phone number</li>
          <li>We store your phone number, consent timestamp, and opt-in method for compliance purposes</li>
          <li>We share necessary data with messaging vendors and wireless carriers to deliver messages</li>
          <li>We maintain audit logs of all messages sent and delivery status</li>
          <li>You may withdraw consent at any time by replying STOP or contacting us</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Carrier Information</h2>
        <p className="text-gray-700 leading-relaxed">
          Wireless carriers are not liable for delayed or undelivered messages. Message delivery depends 
          on carrier network availability and device compatibility.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Prohibited Content</h2>
        <p className="text-gray-700 leading-relaxed">
          We do not send SHAFT content (sex, hate, alcohol to minors, firearms, tobacco) or other prohibited 
          content as defined by CTIA guidelines and carrier policies.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Service Availability</h2>
        <p className="text-gray-700 leading-relaxed">
          We strive for high availability but do not guarantee uninterrupted service. We may perform 
          maintenance or updates that temporarily affect service availability.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Limitation of Liability</h2>
        <p className="text-gray-700 leading-relaxed">
          TouchPointPlus shall not be liable for indirect, incidental, special, consequential, or punitive 
          damages arising from your use of our services.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Termination</h2>
        <p className="text-gray-700 leading-relaxed">
          We may terminate or suspend access to our services immediately, without prior notice, for conduct 
          that violates these Terms or is harmful to other users or our business.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changes to Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to modify these Terms at any time. Material changes will be effective upon 
          posting to this page with an updated date.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Governing Law</h2>
        <p className="text-gray-700 leading-relaxed">
          These Terms are governed by the laws of the State of California, without regard to conflict of law principles.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact</h2>
        <div className="text-gray-700 leading-relaxed">
          <p>TouchPointPlus, LLC</p>
          <p>1940 Haste St, Berkeley, CA 94704 Apartment #B</p>
          <p>Email: hello@touchpoint.plus</p>
          <p>Phone: (310) 907-5746</p>
        </div>

        <p className="text-gray-700 leading-relaxed mt-8">
          For more information about our data practices, see our{' '}
          <Link to="/privacy" className="text-purple-600 hover:underline font-medium">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/communications" element={<Communications />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
