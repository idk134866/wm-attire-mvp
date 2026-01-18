import Link from 'next/link'
import FitRecommender from '@/components/FitRecommender'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-xl mb-6">
            Find Your Perfect Fit with AI
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            WM Attire uses AI to help students preview how businesswear fits before buying. 
            Create your avatar, get smart recommendations, and stop wasting money on wrong sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-it-works" className="btn-primary">
              See How It Works
            </Link>
            <Link href="/plans" className="btn-secondary">
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">30%</div>
              <p className="text-gray-600">Average return rate for online clothing</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">$200+</div>
              <p className="text-gray-600">Wasted annually on wrong sizes</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">10min</div>
              <p className="text-gray-600">To create your AI avatar</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="section-container">
        <h2 className="heading-lg text-center mb-16">How WM Attire Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="heading-sm mb-3">Create Your Avatar</h3>
            <p className="text-gray-600">
              Use a phone scan or enter body measurements to generate your AI avatar in minutes.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="heading-sm mb-3">AI Analyzes Fit</h3>
            <p className="text-gray-600">
              Our AI studies brand size charts and customer reviews to understand real-world fit.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="heading-sm mb-3">Get Recommendations</h3>
            <p className="text-gray-600">
              Preview how businesswear fits and get personalized size recommendations across brands.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/how-it-works" className="text-accent hover:underline font-medium">
            Learn more about our process →
          </Link>
        </div>
      </section>

      {/* AI Demo Section */}
      <section className="bg-gray-50 section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-4">Try Our AI Fit Recommender</h2>
          <p className="text-center text-gray-600 mb-12">
            Get instant fit recommendations powered by local AI. Enter your measurements below.
          </p>
          <FitRecommender />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6">Ready to Find Your Perfect Fit?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of students who are shopping smarter with WM Attire.
          </p>
          <Link href="/plans" className="btn-primary">
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  )
}