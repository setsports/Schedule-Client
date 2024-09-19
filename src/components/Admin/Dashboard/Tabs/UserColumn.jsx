import { useState, useEffect } from 'react';
import { IoMdCheckmark, IoMdClose } from 'react-icons/io';
import { PiCamera, PiPencilSimpleLight, PiTrashLight } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import FormInput from '../Forms/FormInput';
import FormSelectChildren from '../Forms/FormSelectChildren';
import FormSelectMultiple from '../Forms/FormSelectMultiple';

const UserColumn = ({
  data,
  lastItem,
  handleSubmit,
  handleDelete,
  options,
}) => {
  const [editable, setEditable] = useState(false);
  const [pictureEditable, setPictureEditable] = useState(false);
  const [inputValues, setInputValues] = useState({});

  const user = useSelector((store) => store.user.user);

  useEffect(() => {
    setInputValues(data);
  }, [data]);

  const handleInputChange = (key, value) => {
    setInputValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleFormSubmit = (e, key) => {
    e.preventDefault();
    handleSubmit({
      id: data['_id'],
      [key]: inputValues[key],
    });
    setEditable(false);
  };

  const className = `p-3 pl-5 pr-5 text-sm text-[#212636] ${
    !lastItem && 'border-b-[1px]'
  } border-[#02020226]`;

  const tableData = {};
  const picture =
    import.meta.env.VITE_API_BASE_URI + '/uploads/' + data['picture'];

  console.log(data['picture']);

  data['picture'] ? (
    (tableData['picture'] = (
      <td className={className} key={'picture'}>
        <div
          className='picture w-10 h-10 bg-gray-500 rounded-full bg-cover'
          style={{
            backgroundImage: `url('${picture}')`,
          }}
          onMouseOver={() => {
            editable && setPictureEditable(true);
          }}
          onMouseOut={() => {
            editable && setPictureEditable(false);
          }}
        >
          <div
            className={`absolute w-10 h-10 bg-[#000000b3] transition-all cursor-pointer rounded-full ${
              pictureEditable
                ? 'scale-1 opacity-1 visible'
                : 'scale-0 opacity-0 invisible'
            }`}
          >
            <input
              type='file'
              name='picture'
              id={`picture-${data['email'] || data['name']}`}
              onChange={(e) => {
                handleSubmit({
                  id: data['_id'],
                  picture: e.target.files[0],
                });
              }}
              hidden
            />
            <label
              htmlFor={`picture-${data['email'] || data['name']}`}
              className='cursor-pointer w-10 h-10 flex justify-center items-center'
            >
              <PiCamera className='text-xl text-white' />
            </label>
          </div>
        </div>
      </td>
    ))
  ) : (
    <></>
  );

  Object.entries(data).forEach(([key, value]) => {
    if (key !== 'picture' && key !== '_id') {
      tableData[key] = (
        <td key={key} className={className}>
          {editable && key !== 'createdAt' ? (
            <form className='flex' onSubmit={(e) => handleFormSubmit(e, key)}>
              {key === 'role' ? (
                <FormSelectChildren
                  props={{
                    name: key,
                    defaultValue: value,
                    setState: (newValue) => {
                      handleInputChange(key, newValue);
                    },
                  }}
                >
                  <option value='User'>User</option>
                  <option value='Administrator'>Administrator</option>
                </FormSelectChildren>
              ) : key === 'relation' ? (
                <FormSelectMultiple
                  props={{
                    name: key,
                    options: options,
                    defaultValue: value.map((workspace) => ({
                      value: workspace.name?.toLowerCase() || workspace,
                      label: workspace.name ? workspace.name : workspace,
                    })),
                    setState: (newValue) => {
                      handleInputChange(key, newValue);
                    },
                    isMulti: true,
                  }}
                />
              ) : (
                <FormInput
                  props={{
                    name: key,
                    defaultValue: value,
                    setState: (newValue) => {
                      handleInputChange(key, newValue);
                    },
                  }}
                />
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
          ) : key === 'relation' ? (
            value
              .map((workspace) => (workspace.name ? workspace.name : workspace))
              .join(', ')
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

  return <tr>{Object.values(tableData).map((item) => item)}</tr>;
};

export default UserColumn;
