import Image from 'next/image'
import styles from "./Properties.module.css"
import { FaArrowDown } from "react-icons/fa6";


export async function Properties() {
  const res = await fetch('https://sunchase.backend.aait-d.com/api/home')
  const repo = await res.json()

  const data = repo.data.properties;
  // repo.data.properties
  // repo.data.properties.projects[0].id
  // repo.data.properties.projects[0].name
  // repo.data.properties.projects[0].image





  return (
    <div className="container text-center">
      <h2 className="text-2xl font-black mb-10">Properties</h2>
      {/*   className="" */}
      <div className={`${styles.mySwiper} flex items-center justify-between `}  >
        {data.map((card) => {
          return (
            <div className={`flex items-center flex-wrap ${styles.card}  `}
              key={card.id} >
              <Image className={`${styles.Image}`} src={card.image} width={370} height={270} alt={card.name} />
              <div className='flex items-center justify-between flex-row w-full px-2.5 py-6'>
                <span className='text-primary text-xl font-normal'>{card.name}</span>
                <span><FaArrowDown className='text-primary w-5 h-4 cursor-pointer' /></span>
              </div>

              <div>
                {card.projects.map((project) => (
                  <div key={project.id}>
                    <Image className={`${styles.Image}`} src={project.logo} width={370} height={270} alt={project.slug} />
                    <div className='flex items-center justify-between flex-row w-full px-2.5 py-6'>
                      <span className='text-primary text-xl font-normal'>{project.name}</span>
                      <span><FaArrowDown className='text-primary w-5 h-4 cursor-pointer' /></span>
                    </div>

                  </div>
                )
                )}
              </div>
            </div>
          )
        })}
      </div >
    </div >
  )
}