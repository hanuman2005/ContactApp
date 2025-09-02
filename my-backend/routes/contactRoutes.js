const express = require("express");
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  toggleFavorite
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateHandler");
const router = express.Router();

router.use(validateToken);

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
router.put("/:id/favorite", toggleFavorite);


module.exports = router;
