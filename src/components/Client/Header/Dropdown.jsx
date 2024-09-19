import styled from 'styled-components';

const DropdownMenu = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const Li = styled.li`
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Dropdown = ({ content, id }) => {
  return (
    <div
      id={`dropdown__wrapper-${id}`}
      className='dropdown__wrapper w-40 h-10 absolute z-50'
    >
      <DropdownMenu className='w-60 nav__dropdown absolute bg-black text-white left-0 top-6'>
        <ul className='block'>
          {Object.entries(content)?.map(([key, value]) => (
            <a href={value.url} className='regular' key={key}>
              <Li className='pt-2 pb-2 w-full pl-6 pr-20'>{value.name}</Li>
            </a>
          ))}
        </ul>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
