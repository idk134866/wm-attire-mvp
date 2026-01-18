export default function HowItWorks() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-container text-center">
        <h1 className="heading-xl mb-6">How WM Attire Works</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our AI-powered platform uses advanced technology to help you find perfectly fitting
          businesswear. Here's how we make it happen.
        </p>
      </section>

      {/* Step 1: Create Avatar */}
      <section className="bg-gray-50 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-semibold mb-4">
              Step 1
            </div>
            <h2 className="heading-lg mb-6">Create Your AI Avatar</h2>
            <p className="text-gray-600 mb-4">
              Start by creating your personalized AI avatar using one of two methods:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>
                  <strong>Phone Scan:</strong> Use your smartphone camera to capture a quick 360-degree
                  scan of your body. Takes less than 2 minutes.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>
                  <strong>Manual Entry:</strong> Enter your body measurements manually (height, weight,
                  chest, waist, shoulders, etc.).
                </span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              Our AI processes your data to create a detailed virtual representation of your body shape
              and proportions.
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <span className="text-gray-500 font-medium">Avatar Creation Visualization</span>
          </div>
        </div>
      </section>

      {/* Step 2: AI Fit Analysis */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <span className="text-gray-500 font-medium">AI Analysis Dashboard</span>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-semibold mb-4">
              Step 2
            </div>
            <h2 className="heading-lg mb-6">AI Analyzes Real-World Fit</h2>
            <p className="text-gray-600 mb-4">
              Our AI doesn't just look at size charts. It analyzes multiple data sources:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>
                  <strong>Brand Size Charts:</strong> We study sizing across 100+ businesswear brands
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>
                  <strong>Customer Reviews:</strong> Real feedback about how items actually fit
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>
                  <strong>Return Data:</strong> Patterns showing which sizes work for different body types
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>
                  <strong>Fabric Properties:</strong> How materials stretch, drape, and conform to your body
                </span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              This comprehensive analysis ensures you get accurate fit predictions, not just generic
              size suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* Step 3: Get Recommendations */}
      <section className="bg-gray-50 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-semibold mb-4">
              Step 3
            </div>
            <h2 className="heading-lg mb-6">Preview & Get Recommendations</h2>
            <p className="text-gray-600 mb-4">
              Once your avatar is ready and the AI has analyzed the fit data:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>
                  <strong>Virtual Try-On:</strong> See how different businesswear items look on your avatar
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>
                  <strong>Size Recommendations:</strong> Get specific size suggestions for each brand
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>
                  <strong>Fit Confidence Score:</strong> Know how likely each item is to fit well
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>
                  <strong>Alternative Options:</strong> Discover similar items that might fit better
                </span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              Shop with confidence knowing exactly what size to order and how it will fit.
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <span className="text-gray-500 font-medium">Recommendation Interface</span>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="heading-lg mb-6">Powered by Advanced AI</h2>
          <p className="text-gray-600 mb-8">
            WM Attire uses machine learning models trained on millions of data points to understand
            how clothing fits different body types. Our technology considers factors like:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">Body Geometry</h3>
              <p className="text-gray-600 text-sm">
                Shoulder width, torso length, arm length, and other proportions
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">Brand Variations</h3>
              <p className="text-gray-600 text-sm">
                Different sizing standards across brands and manufacturers
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">Fit Preferences</h3>
              <p className="text-gray-600 text-sm">
                Your personal style (slim, classic, or relaxed fit)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white section-container text-center">
        <h2 className="heading-lg mb-6">Ready to Try It?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Create your AI avatar today and start getting personalized fit recommendations.
        </p>
        <a href="/plans" className="btn-secondary">
          Get Started Free
        </a>
      </section>
    </div>
  )
}