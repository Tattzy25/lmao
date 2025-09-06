import { notFound } from 'next/navigation'

export default async function CarDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id: carId } = await params

  // For now, just return a simple page
  // This can be expanded with actual car detail fetching logic
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Car Details</h1>
      <p className="text-gray-600">Car ID: {carId}</p>
      <div className="mt-8">
        <p>Car detail page coming soon...</p>
      </div>
    </div>
  )
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  return {
    title: `Car ${id} - Scoovio`,
    description: `Details for car ${id}`,
  }
}