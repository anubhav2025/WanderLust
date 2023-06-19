const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController');

// App routes
router.get('/', recipeController.homePage); //homePage is controller name
router.get('/blogs/:id', recipeController.exploreBlog); 
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);

module.exports = router;