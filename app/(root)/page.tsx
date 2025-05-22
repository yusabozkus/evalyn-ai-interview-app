import InterViewCard from '@/components/InterViewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Readt with AI-Powered Practice & Feedback</h2>
          <p className='text-lg'>
            Practice on real interview questions & get instant feedback
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">
              Start an interview
            </Link>
          </Button>
        </div>

        <Image src={'/robot.png'} alt='robo-dude' width={400} height={400} className='max-sm:hidden' />
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterViewCard key={interview.id} {...interview} />
          ))}
          {/* <p>You haven't taken any interviews yet</p> */}
        </div>

        <section className='flex flex-col gap-6 mt-8'>
          <h2>Take an Interview</h2>

          <div className='interviews-section'>
            {dummyInterviews.map((interview) => (
              <InterViewCard key={interview.id} {...interview} />
            ))}
            {/* <p>There are no interviews available</p> */}
          </div>
        </section>
      </section>
    </>
  )
}

export default page