import styled from 'styled-components';
import ColumnHeader from './ColumnHeader';
import ColumnContent from './ColumnContent';

const Column = styled.div`
  background-color: ;
`;

const Content = styled(ColumnContent)`
  background-color: #333;
`;

const TableColumn = ({ data }) => {
  return (
    <Column className='sports-table__column rounded overflow-hidden'>
      <ColumnHeader data={data} />
      <Content data={data} />
    </Column>
  );
};

export default TableColumn;
