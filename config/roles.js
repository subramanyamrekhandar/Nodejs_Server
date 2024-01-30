// roles and roleRights are used to define the roles and the rights of each role.
// for Vilearnx we have the following roles: admin, user
// admin can do everything
// users are three types: student, developer
// admin can create, update, delete all users and requests.

const rolesAssumed = ['user', 'admin'];
const allRights = {
  //  student: ['getUser', 'updateUser', 'createUser', 'createRequest', 'updateRequest'],
  // // operator: ['getUser', 'getUsers', 'getRequests', 'getRequest', 'updateRequest'],
  // admin: ['getUser', 'getUsers', 'updateUser', 'createUser', 'deleteUser'],
};

const allRoles = {
  // donar: [...allRights.donar],
  // operator: [...allRights.operator],
  // admin: [...allRights.admin],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
