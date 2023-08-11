export const USERS_COLUMNS = () => [ //handleDelete, handleEdit
  {
    key: 'id',
    title: 'Id',
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'email',
    title: 'Email',
  },
  {
    // key: 'user.id'
    key: 'actions',
    title: 'Actions',
    render: (data) => (
      <div onClick={(e) => e.stopPropagation()}>

        <button >delete</button>
        {/* <button onClick={() => handleDelete(data.id)}>delete</button> */}
        {/* <button onClick={() => handleEdit(data.id)}>edit</button> */}
      </div>
    ),
  },
];
