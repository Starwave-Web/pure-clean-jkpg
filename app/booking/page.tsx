import CalendlyEmbed from '@/components/ui/calendly-embed'


const Booking = () => {
  return (
    <section className='w-full'>
        <div className='container px-4 mx-auto'>
            {process.env.NEXT_PUBLIC_CALENDLY_EVENT_LINK && (
                <CalendlyEmbed
                  url={process.env.NEXT_PUBLIC_CALENDLY_EVENT_LINK}
                />
              )}
        </div>
    </section>
  )
}

export default Booking