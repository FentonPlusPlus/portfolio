function WorksItems({item}) {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img' />
        <h3 className='work__title'>{item.name}</h3>
        <a href={item.href} target="_blank" className='work-button'>
            Repository <i className="bx bx-right-arrow-alt work__button"></i>
        </a>
    </div>
  )
}

export default WorksItems
