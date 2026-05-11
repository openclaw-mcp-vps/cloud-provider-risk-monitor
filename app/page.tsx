export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Cloud Infrastructure
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Monitor Cloud Account Health &amp; Risks
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Detect billing anomalies, IAM policy violations, and suspension risks across AWS, GCP, and Azure — before they become outages. Real-time alerts via email and Slack.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Early Access — $59/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            { icon: "⚡", label: "Billing Anomaly Detection" },
            { icon: "🔒", label: "IAM Policy Monitoring" },
            { icon: "🚨", label: "Suspension Risk Alerts" }
          ].map((f) => (
            <div key={f.label} className="flex items-center justify-center gap-2 bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3">
              <span>{f.icon}</span>
              <span className="text-[#c9d1d9]">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay ahead of cloud risks</p>
          <div className="text-5xl font-extrabold text-[#58a6ff] mb-1">$59</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "AWS, GCP & Azure integration",
              "Real-time billing anomaly alerts",
              "IAM & policy violation detection",
              "Slack & email notifications",
              "Account suspension early warnings",
              "Scheduled health checks"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Monitoring Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which cloud providers are supported?",
              a: "We support AWS, Google Cloud Platform (GCP), and Microsoft Azure. Connect all three from a single dashboard using read-only API credentials."
            },
            {
              q: "How quickly will I be alerted to risks?",
              a: "Alerts are sent in real-time via Slack or email as soon as an anomaly or policy violation is detected. Scheduled health checks run every 15 minutes."
            },
            {
              q: "Is my cloud account data secure?",
              a: "Yes. We use read-only API keys and never store your cloud credentials. All data is encrypted in transit and at rest."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        &copy; {new Date().getFullYear()} Cloud Provider Risk Monitor. All rights reserved.
      </footer>
    </main>
  )
}
