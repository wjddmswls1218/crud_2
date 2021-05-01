import crud2 from "../models/crud2";

const homeController = async (req, res) => {
  try {
    const dataList = await crud2.find({ isDelete: false });

    res.render("screens/home", { list: dataList });
  } catch (error) {
    console.log(error);
    res.render("screens/home", { list: [] });
  }
};

const detailController = async (req, res) => {
  const {
    query: { id },
  } = req; // = req.query.id;

  try {
    const detailData = await crud2.findOne({ _id: id });
    console.log(detailData);

    if (detailData.isDelete) {
      throw Error(" This Data Delete Aleady!");
    } else {
      res.render("screens/detail", { data: detailData });
    }
  } catch (error) {
    console.log(error);
    //homeController(req, res); //res.render("screens/home")은 데이터 조회를 하지 않음
  }

  // 사용자가 선택한 메모의 id값을 가져온 뒤,
  // 데이터베이스에서 해당 아이다와 일치하는 데이터를 조회한다
};

const createController = (req, res) => {
  res.render("screens/create");
};

const postUpdateController = async (req, res) => {
  const {
    body: { id, desc },
  } = req;

  try {
    const updateResult = await crud2.updateOne(
      { _id: id },
      {
        $set: {
          description: desc,
        },
      }
    );
    homeController(req, res);
  } catch (error) {
    console.log(error);
    homeController(req, res);
  }
};

const postDeleteController = async (req, res) => {
  const {
    body: { id },
  } = req;

  console.log(id);
  console.log(id);
  console.log(id);
  console.log(id);

  try {
    const deleteResult = await crud2.updateOne(
      { _id: id },
      {
        $set: {
          isDelete: true,
        },
      }
    );
    homeController(req, res);
  } catch (error) {
    console.log(error);
    homeController(req, res);
  }
};

const postCeateController = async (req, res) => {
  const {
    body: { desc },
  } = req;

  try {
    const createResult = await crud2.create({
      description: desc,
    });

    homeController(req, res);
  } catch (error) {
    console.log(error);
    homeController(req, res);
  }
};

const globalController = {
  homeController,
  detailController,
  createController,
  postUpdateController,
  postDeleteController,
  postCeateController,
};

export default globalController;

//홈 화면에 메모 리스트가 나올 때,
// 총 메모가 몇개 인지 화면 상단에 보여지게 하세요.
