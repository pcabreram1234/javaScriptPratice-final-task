export const groupByProfesion = (profesion, users) => {
  const userByProfesion = [];
  for (const user of users) {
    user[1] === profesion ? userByProfesion.push(user) : null;
  }
  return userByProfesion;
};
