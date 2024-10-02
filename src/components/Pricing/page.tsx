// import MaxWidthWrapper from '@/components/MaxWidthWrapper'
// import { Button, buttonVariants } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import {
  ArrowRight,
  Check,
  HelpCircle,
  Minus,
} from 'lucide-react'
import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Pricing = () => {
 
  const pricingItems = [
    {
      plan: 'Free',
      tagline: 'For Test How it is Amazing.',
      quota: 10,
      features: [
        {
        text: '5 active auction listings',
        footnote: 'The maximum number of active auction listings you can have at a time.'
        },
        {
        text: '16MB auction listing size',
        footnote: 'The maximum file size for your auction listings and media.'
        },
        {
        text: 'Mobile-friendly auction management',
        footnote: 'Easily create, monitor, and update your auctions on the go.'
        },
        {
        text: 'Intelligent auction recommendations',
        footnote: 'Our system provides personalized suggestions to help your auctions succeed.'
        },
        {
        text: 'Priority auction support',
        negative: true
        }
        
      ],
    },
    {
      plan: 'Pro',
      tagline: 'For larger projects with higher needs.',
      // quota: PLANS.find((p) => p.slug === 'pro')!.quota,
      features: [
        {
        text: '25 active auction listings',
        footnote: 'The maximum number of active auction listings you can have at a time.'
        },
        {
        text: '32MB auction listing size',
        footnote: 'The maximum file size for your auction listings and media.'
        },
        {
        text: 'Mobile-friendly auction management',
        footnote: 'Easily create, monitor, and update your auctions on the go.'
        },
        {
        text: 'Enhanced auction recommendations',
        footnote: 'Our advanced system provides optimized suggestions to boost your auction success.'
        },
        {
        text: 'Priority auction support',
        footnote: 'Our team will prioritize assistance for your auction-related questions and needs.'
        }
        ]
    },
  ]

  return (
    <>
      <MaxWidthWrapper className='mb-8 mt-11 text-center max-w-5xl'>
        <div className='mx-auto mb-10 sm:max-w-lg'>
          <h1 className='text-3xl font-bold sm:text-5xl'>
            Pricing
          </h1>
          <p className='mt-5 text-gray-600 sm:text-lg'>
            Whether you&apos;re just trying out our service
            or need more, we&apos;ve got you covered.
          </p>
        </div>

        <div className='pt-10 grid grid-cols-1 gap-10 lg:grid-cols-2'>
          <TooltipProvider>
            {pricingItems.map(
              ({ plan, tagline, quota, features }) => {

                return (
                  <div
                    key={plan}
                    className={cn(
                      'relative rounded-2xl bg-white shadow-lg',
                      {
                        'border-2 border-blue-600 shadow-blue-200':
                          plan === 'Pro',
                        'border border-gray-500':
                          plan !== 'Pro',
                      }
                    )}>
                    {plan === 'Pro' && (
                      <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white'>
                        Upgrade now
                      </div>
                    )}

                    <div className='p-5'>
                      <h3 className='my-3 text-center font-display text-3xl font-bold'>
                        {plan}
                      </h3>
                      <p className='text-gray-500'>
                        {tagline}
                      </p>
                      <p className='my-5 font-display text-4xl font-semibold'>
                       0 ETB
                      </p>
                      <p className='text-gray-500'>
                        per month
                      </p>
                    </div>

                    <div className='flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50'>
                      <div className='flex items-center space-x-1'>
                        <p>
                          {/* {quota.toLocaleString()} PDFs/mo */}
                          included
                        </p>

                        <Tooltip delayDuration={300}>
                          <TooltipTrigger className='cursor-default ml-1.5'>
                            <HelpCircle className='h-4 w-4 text-zinc-500' />
                          </TooltipTrigger>
                          <TooltipContent className='w-80 p-2'>
                            How many PDFs you can upload per
                            month.
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    <ul className='my-10 space-y-5 px-8'>
                      {features.map(
                        ({ text, footnote,}) => (
                          <li
                            key={text}
                            className='flex space-x-5'>
                            <div className='flex-shrink-0'>
          
                            </div>
                            {footnote ? (
                              <div className='flex items-center space-x-1'>
                                <p
                                  className={cn(
                                    'text-gray-600',
                                    {
                                      'text-gray-400':
                                       'some thing'
                                    }
                                  )}>
                                  {text}
                                </p>
                                <Tooltip
                                  delayDuration={300}>
                                  <TooltipTrigger className='cursor-default ml-1.5'>
                                    <HelpCircle className='h-4 w-4 text-zinc-500' />
                                  </TooltipTrigger>
                                  <TooltipContent className='w-80 p-2'>
                                    {footnote}
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            ) : (
                              <p
                                className={cn(
                                  'text-gray-600',
                                  {
                                    'text-gray-400':
                                      'something',
                                  }
                                )}>
                                {text}
                              </p>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                    <div className='border-t border-gray-200' />
                    {/* <div className='p-5'>
                      {plan === 'Free' ? (
                        <Link
                          href="/"
                        >
                          <ArrowRight className='h-5 w-5 ml-1.5' />
                        </Link>
                      ) : (
                        <Button>Upgarade</Button>
                      ) : (
                        <Link
                          href='/'
                          className={buttonVariants({
                            className: 'w-full',
                          })}>
        
                          <ArrowRight className='h-5 w-5 ml-1.5' />
                        </Link>
                      )}
                    </div> */}
                  </div>
                )
              }
            )}
          </TooltipProvider>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default Pricing