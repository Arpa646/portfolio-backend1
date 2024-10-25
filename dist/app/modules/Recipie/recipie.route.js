"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipieRoutes = void 0;
const express_1 = __importDefault(require("express"));
const recipie_controller_1 = require("./recipie.controller");
const router = express_1.default.Router();
router.post("/", recipie_controller_1.RecipieController.createRecipie);
router.get("/", recipie_controller_1.RecipieController.getAllRacipie);
// router.get("/", facilityController.getAllFacility);
router.put("/:id", recipie_controller_1.RecipieController.updateRecipieStates);
router.post("/comment", recipie_controller_1.RecipieController.addComment);
router.delete("/deletecomment/:id", recipie_controller_1.RecipieController.deleteComment);
router.post("/rating", recipie_controller_1.RecipieController.postRating);
router.put("/update/:id", recipie_controller_1.RecipieController.updateRecipeController);
router.post("/like", recipie_controller_1.RecipieController.likeRecipe);
router.post("/dislike", recipie_controller_1.RecipieController.dislikeRecipe);
router.delete("/:id", recipie_controller_1.RecipieController.deleteRecipe);
router.get("/:id", recipie_controller_1.RecipieController.getSingleRecipe);
router.get("/userrecipe/:email", recipie_controller_1.RecipieController.getSingleRecipeByEmail);
exports.RecipieRoutes = router;