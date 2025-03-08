import { LinkList } from '../../db/models/Associations.js';

export default {
  getLinkLists: async () => {
    try {
      return await LinkList.findAll();
    } catch (error) {
      console.log(error); 
    }
  },

  getLinkListById: async (id) => {
    try {
      return await LinkList.findByPk(id);
    } catch (error) {
      console.log(error);
    } 
  },

  saveLinkList: async (linkList) => {
    try {
      return await LinkList.bulkCreate(linkList.body);
    } catch (error) {
      console.log(error);
    }
  },

  updateLinkList: async (linkList) => {
    try {
      const [updated] = await LinkList.update({
        id_qr_code: linkList.body.id_qr_code, 
        link: linkList.body.link
      }, {
        where: { id: linkList.params.id }
      });
      if (updated) {
        return await LinkList.findByPk(linkList.params.id);
      }
    } catch (error) {
      console.log(error);
    }
  },

  destroyLinkList: async (id) => { 
    try {
      return await LinkList.destroy({ where: { id: id } });
    } catch (error) {
      console.log(error);
    }  
  }
}