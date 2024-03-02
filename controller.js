const users = [
    { id: 1, name: "Sumedha" },
    { id: 2, name: "Sankalpa" },
  ];
  
  
  //======= get-all-users ==========
  const getUsers =(cb) => {
      cb(users)
  };
  
  
  //======= get-user-by-id ==========
  const getUserById = (id,cb)=> {
      const user = users.find(user => user.id == id)
      cb(user)
  };
  
  
  //====exports-controllers========
  exports.getUsers = getUsers;
  exports.getUserById = getUserById;
  