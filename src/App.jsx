import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-gray-900">
          TouchPointPlus
        </Link>
        <nav className="flex items-center gap-6 text-sm text-gray-700">
          <Link to="/services" className="hover:text-brand">Services</Link>
          <Link to="/contact" className="hover:text-brand">Contact</Link>
          <Link to="/privacy" className="hover:text-brand">Privacy</Link>
          <Link to="/terms" className="hover:text-brand">Terms</Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div>
            <div className="font-medium text-gray-900">TouchPointPlus, LLC</div>
            <div>1209 MOUNTAIN ROAD PL NE STE R</div>
            <div>ALBUQUERQUE, NM, 87110, USA</div>
            <div>Phone: (310) 907-5746</div>
            <div>Email: hello@touchpoint.plus</div>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-brand">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand">Terms</Link>
            <Link to="/contact" className="hover:text-brand">Contact</Link>
          </div>
        </div>
        <div className="mt-4">© {new Date().getFullYear()} TouchPointPlus, LLC</div>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Websites, Local SEO, and Google Ads for Realtors
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-700">
            TouchPointPlus helps real estate agents win more listings and leads with conversion-focused websites, accurate Google Business Profiles, and ROI-driven Google Ads.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/contact" className="inline-flex items-center rounded-md bg-brand px-5 py-3 text-white hover:bg-brand-dark">
              Get Started
            </Link>
            <Link to="/services" className="inline-flex items-center rounded-md border px-5 py-3 text-gray-900 hover:bg-gray-50">
              Our Services
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold">Realtor Websites</h3>
          <p className="mt-2 text-gray-700">Fast, modern sites with IDX-ready layouts and lead capture.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold">Local SEO</h3>
          <p className="mt-2 text-gray-700">Fix and optimize your Google Business Profile to rank and convert.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold">Google Ads</h3>
          <p className="mt-2 text-gray-700">High-intent campaigns with real lead attribution and reporting.</p>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">AI-Accelerated Realtor Growth</h2>
            <p className="mt-4 text-gray-700">We blend AI-assisted copy, instant landing pages, and analytics to turn traffic into booked appointments. From offer angles to ad creative, our workflows cut iteration time from weeks to hours.</p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
              <li>AI copy + headlines tailored to your market</li>
              <li>Lead routing with SMS onboarding, no promos</li>
              <li>Dashboards that show calls, forms, and ROI</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" alt="Modern workspace" loading="lazy" className="rounded-lg object-cover h-48 w-full" />
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop" alt="Analytics dashboard" className="rounded-lg object-cover h-48 w-full" />
            <img src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop" alt="Real estate exterior" loading="lazy" className="rounded-lg object-cover h-48 w-full col-span-2" />
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="border rounded-xl p-8 md:p-12 bg-white">
          <h2 className="text-3xl font-bold text-gray-900">The Offer: Booked Appointments or We Work Free</h2>
          <p className="mt-4 text-gray-700">Launch your market-dominating website, fix your Google Business Profile, and run intent-focused Google Ads. If we don’t deliver qualified appointments in 30 days, we work for free until we do. No long-term contracts.</p>
          <div className="mt-6 grid md:grid-cols-4 gap-4">
            <div className="p-4 border rounded-md"><div className="font-semibold">Value Stack</div><div className="text-gray-700">Site build, AI copy, tracking, GBP, ads.</div></div>
            <div className="p-4 border rounded-md"><div className="font-semibold">Guarantee</div><div className="text-gray-700">Appointments in 30 days or we work free.</div></div>
            <div className="p-4 border rounded-md"><div className="font-semibold">Risk Reversal</div><div className="text-gray-700">Cancel anytime. No hidden fees.</div></div>
            <div className="p-4 border rounded-md"><div className="font-semibold">Timeline</div><div className="text-gray-700">Go live in 5–7 days.</div></div>
          </div>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center rounded-md bg-brand px-6 py-3 text-white hover:bg-brand-dark">Claim Your Market Plan</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Services</h2>
      <ul className="mt-6 space-y-4 text-gray-700 list-disc list-inside">
        <li>Custom realtor websites with lead capture</li>
        <li>Google Business Profile setup and optimization</li>
        <li>Google Ads strategy, setup, and management</li>
      </ul>
    </div>
  )
}

function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-2 text-gray-700">We typically reply within one business day.</p>
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="mt-8 space-y-6 border rounded-lg p-6">
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input name="firstName" className="mt-1 w-full border rounded-md px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input name="lastName" className="mt-1 w-full border rounded-md px-3 py-2" required />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company</label>
          <input name="company" className="mt-1 w-full border rounded-md px-3 py-2" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" className="mt-1 w-full border rounded-md px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" name="phone" className="mt-1 w-full border rounded-md px-3 py-2" required />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">How can we help?</label>
          <textarea name="message" rows="4" className="mt-1 w-full border rounded-md px-3 py-2" />
        </div>

        <div className="flex items-start gap-2">
          <input id="sms-consent" type="checkbox" name="smsConsent" className="mt-1" required />
          <div className="text-sm text-gray-700">
            By entering your phone number and submitting this form, you agree to receive transactional SMS from TouchPointPlus for onboarding and account-related updates at the number provided. Msg & data rates may apply. Message frequency varies. Reply STOP to cancel, HELP for help. See our <Link to="/terms" className="underline">Terms</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>.
          </div>
        </div>

        <button type="submit" className="inline-flex items-center rounded-md bg-brand px-5 py-3 text-white hover:bg-brand-dark">
          Submit
        </button>
      </form>
    </div>
  )
}

function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose">
      <h1>Privacy Policy</h1>
      <p>TouchPointPlus, LLC ("TouchPointPlus", "we", "us") provides marketing services for real estate professionals. This policy explains how we collect, use, and share information.</p>
      <h2>Information We Collect</h2>
      <ul>
        <li>Contact info you submit (name, email, phone).</li>
        <li>Message metadata and delivery status when we send SMS (timestamps, carrier delivery info).</li>
        <li>Website analytics and form submission data.</li>
      </ul>
      <h2>How We Use Information</h2>
      <ul>
        <li>To provide services, respond to inquiries, and manage your account.</li>
        <li>To send SMS per your consent for onboarding and account-related updates (no promotions).</li>
        <li>To ensure reliable delivery, troubleshoot, and prevent abuse.</li>
      </ul>
      <h2>Sharing</h2>
      <p>We share necessary data with trusted service providers (e.g., SMS platforms and wireless carriers) solely to deliver messages and operate our services. We do not sell personal data.</p>
      <h2>Retention</h2>
      <p>We retain information for as long as needed to provide services and as required by law. Message logs may be retained for troubleshooting and compliance.</p>
      <h2>Your Choices</h2>
      <p>Opt-out of SMS at any time by replying STOP. For help, reply HELP or contact hello@touchpoint.plus or (310) 907-5746.</p>
      <h2>Children</h2>
      <p>Our services are intended for individuals 18 and older.</p>
      <h2>Security</h2>
      <p>We use reasonable technical and organizational safeguards to protect information.</p>
      <h2>International</h2>
      <p>We operate in the United States. If you access our services from other regions, data may be processed in the U.S.</p>
      <h2>Changes</h2>
      <p>We may update this policy. Material changes will be reflected here with an updated date.</p>
      <h2>Contact</h2>
      <p>TouchPointPlus, LLC, 1209 MOUNTAIN ROAD PL NE STE R, ALBUQUERQUE, NM, 87110, USA. Email: hello@touchpoint.plus. Phone: (310) 907-5746.</p>
    </div>
  )
}

function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose">
      <h1>Terms of Use</h1>
      <p>By using TouchPointPlus services, you agree to these Terms.</p>
      <h2>Services</h2>
      <p>We provide website development, local SEO, and digital advertising for real estate professionals.</p>
      <h2>SMS/Mobile Terms</h2>
      <ul>
        <li>Program name: TouchPointPlus Onboarding SMS</li>
        <li>Description: We send transactional onboarding and account-related updates (no promotions).</li>
        <li>Opt-in: Subscribe via our web forms or service agreements.</li>
        <li>Frequency: Recurring; message frequency varies.</li>
        <li>Cost: Msg & data rates may apply.</li>
        <li>Opt-out: Reply STOP to cancel at any time.</li>
        <li>Help: Reply HELP for help or contact hello@touchpoint.plus or (310) 907-5746.</li>
        <li>Carriers: Wireless carriers are not liable for delayed or undelivered messages.</li>
        <li>Eligibility: You must be 18 years or older to receive messages.</li>
        <li>Data: We use your phone number to send SMS per these terms and our Privacy Policy. We share necessary data with messaging vendors and carriers; we do not sell personal data.</li>
        <li>Forbidden content: We do not send SHAFT content (sex, hate, alcohol to minors, firearms, tobacco) or other prohibited content.</li>
      </ul>
      <p>See our <Link to="/privacy">Privacy Policy</Link> for more details.</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
