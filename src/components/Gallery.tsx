import React, { useState, useEffect } from 'react'
import { supabase, type ArtSubmission } from '../lib/supabase'

export default function Gallery() {
  const [artworks, setArtworks] = useState<ArtSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchArtworks()
  }, [])

  const fetchArtworks = async () => {
    try {
      const { data, error } = await supabase
        .from('art_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setArtworks(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load artworks')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600 mb-4">Error loading gallery: {error}</p>
        <button
          onClick={fetchArtworks}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (artworks.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Artworks Yet</h2>
        <p className="text-gray-600 mb-8">Be the first to share your creativity with the community!</p>
      </div>
    )
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Gallery</h2>
        <p className="text-xl text-gray-600">Discover amazing artwork from our talented community</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-100 flex items-center justify-center">
              <img
                src={artwork.artwork_url}
                alt={artwork.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=400'
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{artwork.title}</h3>
              <p className="text-purple-600 font-medium mb-2">by {artwork.creator_name}</p>
              {artwork.description && (
                <p className="text-gray-600 text-sm line-clamp-3">{artwork.description}</p>
              )}
              <p className="text-xs text-gray-400 mt-4">
                {new Date(artwork.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}