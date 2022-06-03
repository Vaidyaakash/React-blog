import React, { useContext } from 'react'
import { store } from '../API/Details';
import Block2 from '../Blocks/Block2';
import Block3 from '../Blocks/Block3';

const Bollywood = () => {

  const [response2] = useContext(store)

  return (
    <div className='response2'>
      <div className='bollywood'>
        <h1 className='latest'>Bollywood</h1>
        {response2.filter((e) => (e.category === "Bollywood")).map((c) => {
          return (
            <Block2
              ids={c.id}
              imgurl={c.image}
              description={c.description}
              category={c.category}
              date={c.date}
              title={c.title} />)
        })}
      </div>
      <div className='bolly_post'>
        <h1 className='latest'>Top Posts</h1>

        {response2.filter((e) => (e.category === "Bollywood" && e.id === "5")).map((c) => {
          return (<div className='bolly_right'>
            <img className='bolly_img' src={c.image} alt="Not found" />
            <h2>{c.title}</h2>
            <div className='bolly_cat'>
              <h2>{c.category}</h2>
              <p> {c.date}</p>
            </div>
          </div>
          )
        })}

        {response2.filter((e) => (e.category === "Bollywood")).map((c) => {
          return (
            <Block3
              ids= {c.id}
              imgUrl={c.image}
              title={c.title}              
              description={c.description}
              date={c.date}
              category={c.category} />)
        })}
        <div className='adv'>Advertisement</div>
      </div>
    </div>
  )
}

export default Bollywood;
