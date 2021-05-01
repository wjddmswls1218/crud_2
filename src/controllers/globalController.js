const homeController = (req, res) => {
  // ㄷㅣ비에서 메모를 가져온다
  res.render("screens/home");
};

const detailController = (req, res) => {
  // 사용자가 선택한 메모의 id값을 가져온 뒤,
  // 데이터베이스에서 해당 아이다와 일치하는 데이터를 조회한다
  res.render("screens/detail");
};

const createController = (req, res) => {
  res.render("screens/create");
};

const globalController = {
  homeController,
  detailController,
  createController,
};

export default globalController;
