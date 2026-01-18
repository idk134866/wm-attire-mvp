export default function Plans() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-container text-center">
        <h1 className="heading-xl mb-6">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Start free and upgrade when you're ready. No hidden fees, cancel anytime.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="card relative">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Free</h2>
              <div className="mb-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Perfect for getting started with AI-powered fit recommendations</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Basic avatar accuracy</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">5 AI recommendations per month</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Save up to 3 outfits</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Access to 50+ brands</span>
              </li>
              <li className="flex items-start text-gray-400">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Ads displayed</span>
              </li>
            </ul>

            <button className="w-full btn-secondary">
              Get Started Free
            </button>
          </div>

          {/* Premium Plan */}
          <div className="card relative border-2 border-accent">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Premium</h2>
              <div className="mb-4">
                <span className="text-4xl font-bold">$4.99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Everything you need for confident businesswear shopping</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong>Higher accuracy</strong> avatar
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong>Unlimited</strong> AI recommendations
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong>Unlimited</strong> outfit saves
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Full mix-and-match capabilities</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Smart Outfit Builder</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Access to 100+ brands</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">
                  <strong>No ads</strong>
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Smart measuring tape discounted to $9.99</span>
              </li>
            </ul>

            <button className="w-full btn-primary">
              Start Premium Trial
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I switch plans anytime?</h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately,
                and we'll prorate any charges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Is there a free trial for Premium?</h3>
              <p className="text-gray-600">
                Yes, we offer a 7-day free trial for Premium. No credit card required to start.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What happens to my saved outfits if I downgrade?</h3>
              <p className="text-gray-600">
                Your saved outfits remain in your account. You'll just be limited to viewing the first 3
                until you upgrade again.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Do you offer student discounts?</h3>
              <p className="text-gray-600">
                All our plans are already priced with students in mind! We're committed to making
                professional attire accessible and affordable.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, debit cards, and digital payment methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container text-center">
        <h2 className="heading-lg mb-6">Ready to Find Your Perfect Fit?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of students shopping smarter with WM Attire.
        </p>
        <button className="btn-primary">Get Started Free</button>
      </section>
    </div>
  )
}