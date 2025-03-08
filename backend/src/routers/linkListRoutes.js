import express from 'express';
import linkListController from '../controllers/linkListController.js';

const router = express.Router();

export default router
  .get('/', linkListController.getLinkLists)
  .get('/:id', linkListController.getLinkListById)
  .post('/', linkListController.saveLinkList)
  .put('/:id', linkListController.updateLinkList)
  .delete('/:id', linkListController.destroyLinkList)