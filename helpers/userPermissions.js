const User = require("../models/User");

const isUserTeacher = async (user) => {
  const findUser = await User.findByPk(user.id || user);

  if(findUser.userRank == "developer") return true;
  if (!findUser) return null;

  return findUser.userRank == "teacher";
};

const isUserManager = async (user) => {
  const findUser = await User.findByPk(user.id || user);

  if(findUser.userRank == "developer") return true;
  if(!findUser) return null;

  return findUser.userRank == "manager";
}

const isUserDeveloper = async (user) => {
  const findUser = await User.findByPk(user.id || user);

  if(findUser.userRank == "developer") return true;
  if(!findUser) return null;

  return findUser.userRank == "developer";
}

const isUserOwner = async (user) => {
  const findUser = await User.findByPk(user.id || user);

  if(findUser.userRank == "developer") return true;
  if(!findUser) return null;

  return findUser.userRank == "owner";
}

module.exports = {
  isUserTeacher,
  isUserManager,
  isUserDeveloper,
  isUserOwner
};
