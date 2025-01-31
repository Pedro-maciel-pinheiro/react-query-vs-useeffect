"use client"
import Loading from '@/components/loading'
import { Card, CardContent } from '@/components/ui/card'
import { getVehicles } from '@/services/api'
import { ParamsPromiseProps, VehicleProps } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { use } from 'react'



export default function ResultPage({ params }: ParamsPromiseProps) {
  const resolvedParams = use(params)

  const { data: vehicles, isLoading, error } = useQuery({
    queryKey: ['vehicles', resolvedParams.makeId, resolvedParams.year],
    queryFn: () => getVehicles(resolvedParams.makeId, resolvedParams.year),
    retry: 2,
    staleTime: 1000 * 60 * 5

  })
  

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-red-500'>
          Failed to fetch {resolvedParams.year}
        </div>
      </div>
    )
  }

  if (!vehicles || vehicles.length === 0) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-gray-500'>
          No vehicles found for {resolvedParams.year}
        </div>
      </div>
    )
  }

  return (
    <section className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-2xl font-bold text-center mb-8'>
          Available Models for
        </h1>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {vehicles?.map((vehicle: VehicleProps) => (
            <li key={vehicle.Model_Name}>
              <Card >
                <CardContent className='p-6'>
                  <h2 className='text-xl font-medium'>{vehicle.Model_Name}</h2>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )


}

