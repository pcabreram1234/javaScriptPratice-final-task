export const groupByProfesion = (profesion, users) => {
  const userByProfesion = [];

  for (let i = 0; i < users.length; i++) {
    if ((users[i].profesion === profesion)) {
      userByProfesion.push(users[i]);
    }
  }
  return userByProfesion;
};
