'use client'

import { useState } from 'react'

interface FormData {
  height: string
  weight: string
  bodyType: string
  clothingCategory: string
  stylePreference: string
}

export default function FitRecommender() {
  const [formData, setFormData] = useState<FormData>({
    height: '',
    weight: '',
    bodyType: '',
    clothingCategory: '',
    stylePreference: '',
  })
  const [recommendation, setRecommendation] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setRecommendation('')

    try {
      const response = await fetch('/api/ai/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          height: parseInt(formData.height),
          weight: parseInt(formData.weight),
          bodyType: formData.bodyType,
          clothingCategory: formData.clothingCategory,
          stylePreference: formData.stylePreference,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get recommendation')
      }

      setRecommendation(data.recommendation)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to connect to AI service. Make sure Ollama is running.'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="card max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Height */}
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
            Height (inches)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
            min="48"
            max="84"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="e.g., 70"
          />
        </div>

        {/* Weight */}
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
            Weight (lbs)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
            min="80"
            max="400"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="e.g., 180"
          />
        </div>

        {/* Body Type */}
        <div>
          <label htmlFor="bodyType" className="block text-sm font-medium text-gray-700 mb-2">
            Body Type
          </label>
          <select
            id="bodyType"
            name="bodyType"
            value={formData.bodyType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Select body type</option>
            <option value="slim">Slim</option>
            <option value="athletic">Athletic</option>
            <option value="average">Average</option>
            <option value="broad">Broad</option>
          </select>
        </div>

        {/* Clothing Category */}
        <div>
          <label
            htmlFor="clothingCategory"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Clothing Category
          </label>
          <select
            id="clothingCategory"
            name="clothingCategory"
            value={formData.clothingCategory}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Select category</option>
            <option value="dress-shirts">Dress Shirts</option>
            <option value="blazers">Blazers & Suits</option>
            <option value="dress-pants">Dress Pants</option>
            <option value="polo-shirts">Polo Shirts</option>
          </select>
        </div>

        {/* Style Preference */}
        <div>
          <label
            htmlFor="stylePreference"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Fit Preference
          </label>
          <select
            id="stylePreference"
            name="stylePreference"
            value={formData.stylePreference}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Select fit</option>
            <option value="slim-fit">Slim Fit</option>
            <option value="classic-fit">Classic Fit</option>
            <option value="relaxed-fit">Relaxed Fit</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Getting Recommendation...' : 'Get AI Recommendation'}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      {/* Recommendation */}
      {recommendation && (
        <div className="mt-6 p-6 bg-accent/5 border border-accent/20 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Your AI Fit Recommendation</h3>
          <p className="text-gray-700 whitespace-pre-line">{recommendation}</p>
          <p className="text-sm text-gray-500 mt-4">
            Note: This is an estimate based on general sizing patterns. For best results, create a
            full avatar profile.
          </p>
        </div>
      )}
    </div>
  )
}