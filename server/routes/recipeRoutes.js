const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController');

// App routes
router.get('/', recipeController.homePage); //homePage is controller name
router.get('/categories', recipeController.exploreCategories);
router.get('/blogs/:id', recipeController.exploreBlog); 

module.exports = router;