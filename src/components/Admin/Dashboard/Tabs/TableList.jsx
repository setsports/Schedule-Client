const TableList = ({
  data,
  thead,
  handleSubmit,
  handleDelete,
  Column,
  options,
}) => {
  return (
    <div className='dashboard__table-wrapper overflow-x-auto'>
      <table className='dashboard__table-table border border-[#02020226] w-full text-left border-separate border-spacing-0 overflow-hidden rounded-2xl inter whitespace-nowrap'>
        <thead className='bg-[#ebebeb] '>
          <tr className='text-[#667085]'>
            {thead.map((th) => (
              <th
                key={th}
                className='font-medium p-2 pl-5 pr-5 text-[15px] border-b-[1px] border-[#02020226]'
              >
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <Column
              key={key}
              lastItem={parseInt(key) + 1 === data.length}
              data={value}
              handleSubmit={handleSubmit}
              handleDelete={handleDelete}
              options={options}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
