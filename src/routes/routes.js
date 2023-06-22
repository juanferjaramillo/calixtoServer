const { Router } = require("express");
const getProdsOwner = require("../controllers/getProdsOwner");
const getProdsUser = require("../controllers/getProdsUser");
const postProduct = require("../controllers/postProduct");
const getAllOwners = require("../controllers/getAllOwners");
const getAllUsers = require("../controllers/getAllUsers");
const getOneOwner = require("../controllers/getOneOwner");
const getOneUser = require("../controllers/getOneUser");
const updateProducts = require("../controllers/updateProducts");
const getSession = require("../controllers/getSession");
const bulkLoadDb = require("../controllers/bulkLoadDb");
const postState = require("../controllers/postState");
const patchProduct = require("../controllers/patchProduct");
const deleteProduct = require("../controllers/deleteProduct");
const test = require("../controllers/test");
const InitLoad = require("../controllers/initLoad");

const router = Router();

//----------------------USER ROUTES-------------------------
router.post("/session", getSession);

router.get("/owners", getAllOwners);
//returns an array of owners objects
router.get("/users/:ownerId", getAllUsers);
//returns an array of users objects
router.get("/owner/:id", getOneOwner);
//returns an owner object
router.get("/user/:id", getOneUser);
//returns an user object

//---------------------PRODUCT ROUTES---------------------
router.get("/prodsowner/:owner", getProdsOwner);
//returns an array of product objects
router.get("/prodsuser/:userId", getProdsUser);
//returns an array of product objects

router.post("/product", postProduct);

router.post("/bulkcreate", bulkLoadDb);

router.patch("/product/:id", patchProduct);

router.delete("/product/:id", deleteProduct);

//-------------------------PROVISIONAL------------------------

router.patch("/updateProducts", updateProducts);

router.get("/test", test);

router.post("/state/:id", postState);

router.get("/initLoad", InitLoad);

module.exports = router;
