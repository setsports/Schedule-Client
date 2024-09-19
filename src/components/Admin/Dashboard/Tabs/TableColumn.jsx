import { useState } from 'react';
import { IoMdCheckmark, IoMdClose } from 'react-icons/io';
import { PiCamera, PiPencilSimpleLight, PiTrashLight } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import FormInput from '../Forms/FormInput';
import FormSelectChildren from '../Forms/FormSelectChildren';

const TableColumn = ({ data, lastItem, handleSubmit, handleDelete }) => {
  const [editable, setEditable] = useState(false);
  const [pictureEditable, setPictureEditable] = useState(false);

  const user = useSelector((store) => store.user.user);

  const tableData = {};
  const className = `p-3 pl-5 pr-5 text-sm text-[#212636] ${
    !lastItem && 'border-b-[1px]'
  } border-[#02020226]`;

  Object.entries(data).map(([key, value], index) => {
    if (key !== '_id') {
      tableData[key] = (
        <td key={key} className={className}>
          {editable && key !== 'createdAt' ? (
            <form
              action=''
              className='flex'
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit({
                  id: data['_id'],
                  [key]: e.target[0].value,
                });
                setEditable(!editable);
              }}
            >
              {key !== 'role' ? (
                <FormInput
                  props={{
                    name: key,
                    defaultValue: value,
                    setState: (value) => {
                      data[key] = value;
                    },
                  }}
                />
              ) : (
                <FormSelectChildren
                  props={{
                    name: key,
                    defaultValue: value,
                    setState: (value) => {
                      tableData[key] = value;
                    },
                  }}
                >
                  <option value='User'>User</option>
                  <option value='Administrator'>Administrator</option>
                </FormSelectChildren>
              )}

              <button
                type='submit'
                className='p-2 mr-2 text-[#212636] bg-[#f1f1f1] hover:bg-[#e0e0e0] rounded-md text-2xl'
              >
                <IoMdCheckmark />
              </button>
            </form>
          ) : key === 'createdAt' ? (
            new Date(value).toLocaleString()
          ) : (
            value
          )}
        </td>
      );
    }
  });

  tableData['actions'] = (
    <td key='actions' className={className}>
      <div className='flex items-center justify-end gap-2'>
        <button
          onClick={() => {
            setEditable(!editable);
          }}
          className='p-2 text-[#212636] bg-[#f1f1f1] hover:bg-[#e0e0e0] rounded-md text-2xl'
        >
          {editable ? <IoMdClose /> : <PiPencilSimpleLight />}
        </button>
        {data['email'] !== user.email && (
          <button
            onClick={() => {
              Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this data!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
              }).then((result) => {
                if (result.isConfirmed) {
                  handleDelete(data['_id']);
                }
              });
            }}
            className='p-2 text-[#212636] bg-[#f1f1f1] hover:bg-[#e0e0e0] rounded-md text-2xl'
          >
            <PiTrashLight />
          </button>
        )}
      </div>
    </td>
  );

  return (
    <tr>
      {Object.values(tableData).map((item) => item)}
      {/* <td
        className={`p-3 pl-5 pr-5 text-sm text-[#212636] ${
          !lastItem && 'border-b-[1px]'
        } border-[#02020226]`}
      >
        <div className='picture w-10 h-10 bg-red-500 rounded-full'></div>
      </td>
      <td>{data.firstName}</td> */}
    </tr>
  );
};

export default TableColumn;
