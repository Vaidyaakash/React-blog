import React, { useContext } from 'react'
import { store } from '../API/Details';
import Block2 from '../Blocks/Block2';
import Block3 from '../Blocks/Block3';

const Technology = () => {
  const [response2] = useContext(store)
  return (
    <div id='res'>
      <div className='result'>
        <div className='bollywood'>
          <h1 className='latest_1'>Technology</h1>
          {response2.filter((e) => (e.category === "Technology")).map((c) => {
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
          <h1 className='latest_2'>Top Posts</h1>

          {response2.filter((e) => (e.category === "Technology" && e.id === "25")).map((c) => {
            return (<div className='bolly_right'>
              <img className='bolly_img' src={c.image} alt="" />
              <h2>{c.title}</h2>
              <div className='bolly_cat'>
                <h2>{c.category}</h2>
                <p> {c.date}</p>
              </div>
            </div>
            )
          })}

          {response2.filter((e) => (e.category === "Technology")).map((c) => {
            return (
              <Block3
                ids={c.id}
                description={c.description}
                imgUrl={c.image}
                title={c.title}
                date={c.date}
                category={c.category}
              />)
          })}
          <div className='adv'>Advertisement</div>
        </div>
      </div>
      <div></div>
    </div >
  )
}

export default Technology;
