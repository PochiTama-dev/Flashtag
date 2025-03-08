import fs from 'fs';

export const deleteAvatar = (path) => {
  if (`src\\${path}` !== 'src\\uploads\\default-avatar.jpeg') {
    fs.existsSync(`src\\${path}`) && fs.unlinkSync(`src\\${path}`);
  }
}

export const deleteFile = (path) => {
  fs.existsSync(`src\\${path}`) && fs.unlinkSync(`src\\${path}`);
}