function WorksItems({item}) {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img' />
        <h3 className='work__title'>{item.title}</h3>
        <p className='work__description'>{item.description}</p>
        <a href={item.href} target="_blank" className='work-button'>
            Repository <i className="bx bx-right-arrow-alt work__button"></i>
        </a>
    </div>
  )
}

export default WorksItems
