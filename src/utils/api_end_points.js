const apis = {
  signin: `http://localhost:5000/signin`,
  getAllUsers: `http://localhost:5000/user/all`,
  createUser: `http://localhost:5000/user/create`,
  updateUser: `http://localhost:5000/user/update/`,
  removeUser: `http://localhost:5000/user/remove/`,
  createTask: `http://localhost:5000/task/create`,
  getAllTasks: `http://localhost:5000/task/all/`,
  assignTiming: `http://localhost:5000/manager/assigntiming/`,
  userTiming: `http://localhost:5000/user/timing/`,
  dropShift: `http://localhost:5000/user/dropshift/`,
  getDropShifts: `http://localhost:5000/user/getdropshifts/`,
  approveShift: `http://localhost:5000/user/approveshift/`,
  getUserWithSameRole: `http://localhost:5000/user/getuserwithsamerole/`,
  swapShift: `http://localhost:5000/user/swapshift/`,
  getSwapShifts: `http://localhost:5000/user/getswapshifts/`,
  swapDay: `http://localhost:5000/user/swapday/`
};

export default apis;
