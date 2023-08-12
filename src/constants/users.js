export const USERS_COLUMNS = (heandleDeleteUSer) => [ //handleDelete, handleEdit
  {
    key: '_id',
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
        {/* {console.log(data)}  */}
        <button onClick={()=> heandleDeleteUSer(data._id)} >delete</button>
    
      </div>
    ),
  },
];
