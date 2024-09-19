const MobileDropdown = ({ content }) => {
  return (
    <div className='mobile-dropdown'>
      <ul className='block'>
        {Object.entries(content)?.map(([key, value]) => (
          <li className='pt-2 pb-2 w-full ml-6' key={key}>
            <a href={value.url} className='regular'>
              {value.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileDropdown
