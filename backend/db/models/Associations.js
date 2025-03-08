import Coupon from './Coupon.js';
import Feedback from './Feedback.js';
import LinkList from './LinkList.js';
import LoyaltyCard from './LoyaltyCard.js';
import Product from './Product.js';
import QrAnalytic from './QrAnalytic.js';
import QrCode from './QrCode.js';
import QrTag from './QrTag.js';
import QrType from './QrType.js';
import Review from './Review.js';
import Role from './Role.js';
import Roulette from './Roulette.js';
import RouletteConfig from './RouletteConfig.js';
import SocialNetwork from './SocialNetwork.js';
import Subscription from './Subscription.js';
import Template from './Template.js';
import User from './User.js';
import UserSubscription from './UserSubscription.js';
import Wifi from './Wifi.js';

QrCode.hasOne(Coupon, { foreignKey: 'id_qr_code' });
Coupon.belongsTo(QrCode, { foreignKey: 'id_qr_code' });

QrCode.hasOne(Feedback, { foreignKey: 'id_qr_code' });
Feedback.belongsTo(QrCode, { foreignKey: 'id_qr_code' });

QrCode.hasOne(LinkList, { foreignKey: 'id_qr_code' });
LinkList.belongsTo(QrCode, { foreignKey: 'id_qr_code' });

QrCode.hasOne(LoyaltyCard, { foreignKey: 'id_qr_code' });
LoyaltyCard.belongsTo(QrCode, { foreignKey: 'id_qr_code' });

User.hasMany(Product, { foreignKey: 'id_user' });
Product.belongsTo(User, { foreignKey: 'id_user' });

QrCode.hasMany(QrAnalytic, { foreignKey: 'id_qr_code' });
QrAnalytic.belongsTo(QrCode, { foreignKey: 'id_qr_code' });

QrType.hasMany(QrCode, { foreignKey: 'id_qr_type' });
QrCode.belongsTo(QrType, { foreignKey: 'id_qr_type' });

QrTag.hasMany(QrCode, { foreignKey: 'id_qr_tag' });
QrCode.belongsTo(QrTag, { foreignKey: 'id_qr_tag' });

Product.hasOne(QrCode, { foreignKey: 'id_product' });
QrCode.belongsTo(Product, { foreignKey: 'id_product' });

User.hasMany(Review, { foreignKey: 'id_user' });
Review.belongsTo(User, { foreignKey: 'id_user' });

QrCode.hasOne(Roulette, { foreignKey: 'id_qr_code' });
Roulette.belongsTo(QrCode, { foreignKey: 'id_qr_code' });

Roulette.hasOne(RouletteConfig, { foreignKey: 'id_roulette' });
RouletteConfig.belongsTo(Roulette, { foreignKey: 'id_roulette' });

Template.hasMany(QrCode, { foreignKey: 'id_template' });
QrCode.belongsTo(Template, { foreignKey: 'id_template' });

QrCode.hasOne(Wifi, { foreignKey: 'id_qr_code' });
Wifi.belongsTo(QrCode, { foreignKey: 'id_qr_code' });

Role.hasMany(User, { foreignKey: 'id_role' });
User.belongsTo(Role, { foreignKey: 'id_role' });

User.hasMany(Template, { foreignKey: 'id_user' });
Template.belongsTo(User, { foreignKey: 'id_user' });

Subscription.hasMany(UserSubscription, { foreignKey: 'id_subscription' });
UserSubscription.belongsTo(Subscription, { foreignKey: 'id_subscription' });

User.hasMany(UserSubscription, { foreignKey: 'id_user' });
UserSubscription.belongsTo(User, { foreignKey: 'id_user' });

SocialNetwork.hasMany(QrCode, { foreignKey: 'id_social_network' });
QrCode.belongsTo(SocialNetwork, { foreignKey: 'id_social_network' });

User.hasMany(Template, { foreignKey: 'id_user' });
Template.belongsTo(User, { foreignKey: 'id_user' });

export { 
  Coupon, Feedback, LinkList, LoyaltyCard, Product, QrAnalytic, QrCode, QrTag, QrType, Review, 
  Role, Roulette, RouletteConfig, Subscription, SocialNetwork, Template, User, UserSubscription, Wifi  
}