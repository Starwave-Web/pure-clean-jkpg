import Image from 'next/image'

const Brands = () => {
  return (
    <section className='w-full h-[6.75rem] bg-primary-blue'>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Image width={191.17} height={40} src="/assets/images/vileda.png" alt="vileda_log" />
        <Image width={144} height={40} src="/assets/images/karcher.png" alt="karcher_logo" />
        <Image width={104.36} height={40} src="/assets/images/domestos.png" alt="domestos_logo" />
        <Image width={50} height={40} src="/assets/images/ajax.png" alt="ajax_logo" />
        <Image width={45.65} height={40} src="/assets/images/cif.png" alt="cif_logo" />
      </div>
    </section>
  )
}

export default Brands