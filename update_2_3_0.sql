
-- 修改聚水潭配置描述
UPDATE `eb_system_config` set `info` = '聚水潭账号', `desc` = '聚水潭管理平台登录账号' WHERE `menu_name` = 'jst_login_account';
UPDATE `eb_system_config` set `info` = '聚水潭密码', `desc` = '聚水潭管理平台登录密码' WHERE `menu_name` = 'jst_login_password';

-- 链接地址
UPDATE `eb_page_link` set `url` = '/pages/goods/lottery/grids/record', `example` = '/pages/goods/lottery/grids/record' where `url` = '/pages/activity/lottery/grids/record';
UPDATE `eb_page_link` set `url` = '/pages/goods/lottery/grids/index?type=1', `example` = '/pages/goods/lottery/grids/index?type=1' where `url` = '/pages/activity/lottery/grids/index?type=1';
UPDATE `eb_page_link` set `url` = '/pages/goods/lottery/grids/index?type=3', `example` = '/pages/goods/lottery/grids/index?type=3' where `url` = '/pages/activity/lottery/grids/index?type=3';
UPDATE `eb_page_link` set `url` = '/pages/goods/lottery/grids/index?type=4', `example` = '/pages/goods/lottery/grids/index?type=4' where `url` = '/pages/activity/lottery/grids/index?type=4';
UPDATE `eb_page_link` set `url` = '/pages/goods/lottery/grids/index?type=5', `example` = '/pages/goods/lottery/grids/index?type=5' where `url` = '/pages/activity/lottery/grids/index?type=5';

UPDATE `eb_page_link` set `url` = '/pages/extension/customer_list/chat', `example` = '/pages/extension/customer_list/chat' where `url` = '/pages/customer_list/chat';
UPDATE `eb_page_link` set `url` = '/pages/extension/news_list/index', `example` = '/pages/extension/news_list/index' where `url` = '/pages/news_list/index';
UPDATE `eb_page_link` set `url` = '/pages/goods/goods_list/index', `example` = '/pages/goods/goods_list/index' where `url` = '/pages/goods_list/index';
UPDATE `eb_page_link` set `url` = '/pages/goods/order_list/index', `example` = '/pages/goods//order_list/index' where `url` = '/pages/users/order_list/index';

INSERT INTO `eb_page_link` (`id`, `cate_id`, `type`, `name`, `url`, `param`, `example`, `status`, `sort`, `add_time`) VALUES
(NULL, 6, 8, '短视频', '/pages/short_video/nvueSwiper/index', ' ', '/pages/short_video/nvueSwiper/index', 1, 0, 1626837579),
(NULL, 6, 8, '新人专享区', '/pages/store/newcomers/index', ' ', '/pages/store/newcomers/index', 1, 0, 1626837579),
(NULL, 5, 3, '会员权益', '/pages/annex/vip_grade/index', ' ', '/pages/annex/vip_grade/index', 1, 0, 1626837579);



-- 商品分类加字段
ALTER TABLE `eb_store_category` ADD `type` TINYINT(2) NOT NULL DEFAULT '0' COMMENT '商品所属：0：平台1:门店2:供应商' AFTER `pid`;
ALTER TABLE `eb_store_category` ADD `relation_id` INT(10) NOT NULL DEFAULT '0' COMMENT '关联门店、供应商ID'  AFTER `type`;

-- 商品增加字段
ALTER TABLE `eb_store_product` ADD `pid` INT(10) NOT NULL DEFAULT '0' COMMENT '关联平台商品ID' AFTER `id`;
ALTER TABLE `eb_store_product` ADD `type` TINYINT(2) NOT NULL DEFAULT '0' COMMENT '商品所属：0：平台1:门店2:供应商' AFTER `pid`;
ALTER TABLE `eb_store_product` CHANGE `supplier_id` `relation_id` INT(10) NOT NULL DEFAULT '0' COMMENT '关联门店、供应商ID';
ALTER TABLE `eb_store_product` ADD `is_verify` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '是否审核：-2强制下架0-1未通过未审核1:通过' AFTER `is_postage`;
ALTER TABLE `eb_store_product` ADD `refusal` varchar(255) NOT NULL DEFAULT '' COMMENT '审核拒绝原因';

-- 平台商品默认审核通过
UPDATE `eb_store_product` set `is_verify` = 1 where `type` = 0;

-- 秒杀商品供应商ID
ALTER TABLE `eb_store_seckill` ADD `type` TINYINT(2) NOT NULL DEFAULT '0' COMMENT '商品所属：0：平台1:门店2:供应商' AFTER `id`;
ALTER TABLE `eb_store_seckill` CHANGE `supplier_id` `relation_id` INT(10) NOT NULL DEFAULT '0' COMMENT '关联门店、供应商ID';
-- 拼团商品供应商ID
ALTER TABLE `eb_store_combination` ADD `type` TINYINT(2) NOT NULL DEFAULT '0' COMMENT '商品所属：0：平台1:门店2:供应商' AFTER `id`;
ALTER TABLE `eb_store_combination` CHANGE `supplier_id` `relation_id` INT(10) NOT NULL DEFAULT '0' COMMENT '关联门店、供应商ID';
-- 砍价商品供应商ID
ALTER TABLE `eb_store_bargain` ADD `type` TINYINT(2) NOT NULL DEFAULT '0' COMMENT '商品所属：0：平台1:门店2:供应商' AFTER `id`;
ALTER TABLE `eb_store_bargain` CHANGE `supplier_id` `relation_id` INT(10) NOT NULL DEFAULT '0' COMMENT '关联门店、供应商ID';
-- 积分商品供应商ID
ALTER TABLE `eb_store_integral` ADD `type` TINYINT(2) NOT NULL DEFAULT '0' COMMENT '商品所属：0：平台1:门店2:供应商' AFTER `id`;
ALTER TABLE `eb_store_integral` CHANGE `supplier_id` `relation_id` INT(10) NOT NULL DEFAULT '0' COMMENT '关联门店、供应商ID';

-- 订单表
ALTER TABLE `eb_store_order` ADD `first_order_price` DECIMAL(8,2) NOT NULL DEFAULT '0.00' COMMENT '首单优惠金额' AFTER `promotions_price`;

-- 订单商品表增加供应商ID
ALTER TABLE `eb_store_order_cart_info` ADD `type` TINYINT(2) NOT NULL DEFAULT '0' COMMENT '商品所属：0：平台1:门店2:供应商' AFTER `cart_id`;
ALTER TABLE `eb_store_order_cart_info` CHANGE `supplier_id` `relation_id` INT(10) NOT NULL DEFAULT '0' COMMENT '关联门店、供应商ID' AFTER `type`;

-- 供应商
ALTER TABLE `eb_system_supplier` ADD `business` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '支持配送的物品品类';
ALTER TABLE `eb_system_supplier` ADD `city_shop_id` varchar(255) NOT NULL DEFAULT '' COMMENT '同城配送门店编码,可自定义,但必须唯一;若不填写,则系统自动生成';

-- 修改表名
RENAME TABLE `eb_store_product_relation` TO `eb_user_relation`;
-- 增加主键索引
ALTER TABLE `eb_user_relation` ADD `id` INT(10) NOT NULL AUTO_INCREMENT FIRST, ADD PRIMARY KEY (`id`);
ALTER TABLE `eb_user_relation` DROP INDEX `uid`;

-- 充值表
ALTER TABLE eb_user_recharge ADD `trade_no` varchar(100) NOT NULL DEFAULT '' COMMENT '微信订单号' AFTER order_id;

-- 用户表增加信息
ALTER TABLE `eb_user` ADD `extend_info` LONGTEXT NULL DEFAULT NULL COMMENT '用户补充信息' AFTER `delete_time`,
    ADD `level_status` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '用户等级是否激活' AFTER `extend_info`;
ADD `level_extend_info` LONGTEXT NULL DEFAULT NULL COMMENT '激活会员卡补充信息' AFTER `level_status`,
    ADD `is_first_order` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否购买首单优惠：0：未购买1已购买',
    ADD `is_newcomer` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否购买新人专享：0：未购买1已购买';

-- 历史数据默认激活
UPDATE `eb_user` set `level_status` = 1, `is_newcomer` = 1, `is_first_order` = 1;

-- 素材
ALTER TABLE `eb_system_attachment_category` ADD `file_type` TINYINT(1) NOT NULL DEFAULT '1' COMMENT '文件类型：1:图片2：视频' AFTER `type`;
ALTER TABLE `eb_system_attachment` ADD `file_type` TINYINT(1) NOT NULL DEFAULT '1' COMMENT '文件类型：1:图片2：视频' AFTER `type`;

INSERT INTO `eb_system_config_tab` (`id`, `is_store`, `pid`, `title`, `eng_title`, `status`, `info`, `icon`, `type`, `sort`) VALUES
(86, '0', '0', '用户注册', 'user_register', '1', '0', '', '0', '0'),
(87, '0', '0', '会员卡激活', 'user_level_activate', '1', '0', '', '0', '0'),
(89, '0', '65', '同城配送', 'city_delivery', '1', '0', '', '0', '0');

-- 用户基础信息
INSERT INTO `eb_system_config` (`id`, `is_store`, `menu_name`, `type`, `input_type`, `config_tab_id`, `parameter`, `upload_type`, `required`, `width`, `high`, `value`, `info`, `desc`, `sort`, `status`) VALUES
(null, '0', 'user_extend_info', 'text', 'input', '86', '', '', '', 100, 0, '', '用户信息', '用户注册补充基础信息', 0, 1);

-- 用户注册配置
INSERT INTO `eb_system_config` (`id`, `is_store`, `menu_name`, `type`, `input_type`, `config_tab_id`, `parameter`, `upload_type`, `required`, `width`, `high`, `value`, `info`, `desc`, `sort`, `status`) VALUES
(NULL, '0', 'newcomer_status', 'radio', '', '86', '1=>开启\r\n0=>关闭', '', '', '0', '0', '1', '注册有礼启用', '注册有礼启用是否启用', '0', '1'),
(NULL, '0', 'newcomer_limit_status', 'radio', '', '86', '0=>不限时\r\n1=>限时', '', '', '0', '0', '1', '是否限时', '新人礼专享商品、首单是否限时', '0', '1'),
(NULL, '0', 'newcomer_limit_time', 'text', 'input', '86', '', '', '', 100, 0, '', '限时时间（天）', '新人礼专享商品、首单限时时间（天）', 0, 1),
(NULL, '0', 'register_integral_status', 'radio', '', '86', '1=>开启\r\n0=>关闭', '', '', '0', '0', '0', '赠送积分开启', '用户注册赠送积分', '0', '1'),
(null, '0', 'register_give_integral', 'text', 'input', '86', '', '', '', 100, 0, '', '赠送积分数量', '用户注册赠送积分数量', 0, 1),
(NULL, '0', 'register_money_status', 'radio', '', '86', '1=>开启\r\n0=>关闭', '', '', '0', '0', '0', '赠送余额开启', '用户注册赠送余额', '0', '1'),
(null, '0', 'register_give_money', 'text', 'input', '86', '', '', '', 100, 0, '', '赠送余额数量', '用户注册赠送余额数量', 0, 1),
(NULL, '0', 'register_coupon_status', 'radio', '', '86', '1=>开启\r\n0=>关闭', '', '', '0', '0', '0', '赠送优惠券开启', '用户注册赠送优惠券', '0', '1'),
(NULL, '0', 'register_give_coupon', 'text', 'input', '86', '', '', '', '100', '0', '0', '赠送优惠券', '用户注册赠送优惠券', '0', '1'),
(NULL, '0', 'first_order_status', 'radio', '', '86', '1=>开启\r\n0=>关闭', '', '', '0', '0', '0', '首单优惠开启', '用户注册首单优惠', '0', '1'),
(NULL, '0', 'first_order_discount', 'text', 'input', '86', '', '', '', '100', '0', '0', '首单优惠折扣', '用户注册首单优惠折扣（折）', '0', '1'),
(NULL, '0', 'first_order_discount_limit', 'text', 'input', '86', '', '', '', '100', '0', '0', '首单优惠折扣上限', '用户注册首单优惠折扣上限（元）', '0', '1'),
(NULL, '0', 'register_price_status', 'text', 'input', '86', '', '', '', '100', '0', '0', '新人专享价开启', '新人专享价是否开启', '0', '1');

-- 等级会员
INSERT INTO `eb_system_config` (`id`, `is_store`, `menu_name`, `type`, `input_type`, `config_tab_id`, `parameter`, `upload_type`, `required`, `width`, `high`, `value`, `info`, `desc`, `sort`, `status`) VALUES
(NULL, '0', 'level_activate_status', 'radio', '', '87', '1=>开启\r\n0=>关闭', '', '', '0', '0', '0', '会员卡激活', '会员卡是否需要激活', '0', '1'),
(null, '0', 'level_extend_info', 'text', 'input', '87', '', '', '', 100, 0, '', '会员卡信息', '会员卡激活补充基础信息', 0, 1),
(NULL, '0', 'level_integral_status', 'radio', '', '87', '1=>开启\r\n0=>关闭', '', '', '0', '0', '0', '赠送积分开启', '用户等级会员卡激活赠送积分', '0', '1'),
(null, '0', 'level_give_integral', 'text', 'input', '87', '', '', '', 100, 0, '', '赠送积分数量', '用户等级会员卡激活赠送积分数量', 0, 1),
(NULL, '0', 'level_money_status', 'radio', '', '87', '1=>开启\r\n0=>关闭', '', '', '0', '0', '0', '赠送余额开启', '用户等级会员卡激活赠送余额', '0', '1'),
(null, '0', 'level_give_money', 'text', 'input', '87', '', '', '', 100, 0, '', '赠送余额数量', '用户等级会员卡激活赠送余额数量', 0, 1),
(NULL, '0', 'level_coupon_status', 'radio', '', '87', '1=>开启\r\n0=>关闭', '', '', '0', '0', '0', '赠送优惠券开启', '用户等级会员卡激活赠送优惠券', '0', '1'),
(NULL, '0', 'level_give_coupon', 'text', 'input', '87', '', '', '', '100', '0', '0', '赠送优惠券', '用户等级会员卡激活赠送优惠券', '0', '1');


-- 同城配送配置
INSERT INTO `eb_system_config` (`id`, `is_store`, `menu_name`, `type`, `input_type`, `config_tab_id`, `parameter`, `upload_type`, `required`, `width`, `high`, `value`, `info`, `desc`, `sort`, `status`) VALUES
(NULL, '0', 'city_delivery_status', 'radio', '', '89', '1=>开启\r\n0=>关闭', '', '', '0', '0', '1', '同城配送', '同城配送是否开启', '0', '1'),
(NULL, '0', 'self_delivery_status', 'radio', '', '89', '1=>开启\r\n0=>关闭', '', '', '0', '0', '1', '自主配送', '自主配送是否开启', '0', '1'),
(NULL, '0', 'dada_delivery_status', 'radio', '', '89', '1=>开启\r\n0=>关闭', '', '', '0', '0', '0', '达达配送', '达达配送是否开启', '0', '1'),
(null, 0, 'dada_app_key', 'text', 'input', 89, '', 1, '', 100, 0, '', '达达AppKey', '达达AppKey', 0, 1),
(null, 0, 'dada_app_sercret', 'text', 'input', 89, '', 1, '', 100, 0, '', '达达AppSercret', '达达sercret', 0, 1),
(null, 0, 'dada_source_id', 'text', 'input', 89, '', 1, '', 100, 0, '', '达达商户ID', '达达商户ID', 0, 1),
(NULL, '0', 'uu_delivery_status', 'radio', '', '89', '1=>开启\r\n0=>关闭', '', '', '0', '0', '0', 'UU配送', 'UU配送是否开启', '0', '1'),
(null, 0, 'uupt_appkey', 'text', 'input', 89, '', 1, '', 100, 0, '', 'UU AppKey', 'UU AppKey', 0, 1),
(null, 0, 'uupt_app_id', 'text', 'input', 89, '', 1, '', 100, 0, '', 'UU APPID', 'UU APPID', 0, 1),
(null, 0, 'uupt_open_id', 'text', 'input', 89, '', 1, '', 100, 0, '', 'UU OpenId', 'UU OpenId', 0, 1);

-- 增加小程序支付配置
INSERT INTO `eb_system_config` (`id`, `is_store`, `menu_name`, `type`, `input_type`, `config_tab_id`, `parameter`, `upload_type`, `required`, `width`, `high`, `value`, `info`, `desc`, `sort`, `status`) VALUES
(NULL, '0', 'pay_routine_open', 'radio', '', '4', '1=>开启\r\n0=>关闭', '', '', '0', '0', '0', '小程序支付管理', '小程序开发后台有支付管理的请打开此开关', '0', '1'),
(null, 0, 'pay_routine_mchid', 'text', 'input', 4, '', 1, '', 100, 0, '', '小程序mchid', '小程序支付商户号mchid', 0, 1),
(null, 0, 'create_wechat_user', 'radio', 'input', 2, '1=>开启\r\n0=>关闭', 1, '', 0, 0, '1', '关注公众号是否生成用户', '关注公众号、公众号事件是否生成用户', 0, 1),
(null, 0, 'integral_ratio_status', 'radio', 'input', 11, '1=>开启\r\n0=>关闭', 1, '', 0, 0, '1', '积分抵用开关', '下单积分是否抵用订单金额', 0, 1);


-- 短视频、门店开关
INSERT INTO `eb_system_config` (`id`, `is_store`, `menu_name`, `type`, `input_type`, `config_tab_id`, `parameter`, `upload_type`, `required`, `width`, `high`, `value`, `info`, `desc`, `sort`, `status`) VALUES
(null, 0, 'video_func_status', 'radio', 'input', 26, '1=>开启\r\n0=>关闭', 1, '', 0, 0, '1', '短视频启用', '移动端短视频功能是否启用', 0, 1);


CREATE TABLE IF NOT EXISTS `eb_video` (
    `id` INT(10) NOT NULL AUTO_INCREMENT ,
    `type` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '类型：0:平台1:门店2:用户' ,
    `relation_id` INT(10) NOT NULL DEFAULT '0' COMMENT '关联平台管理门店ID、用户UID' ,
    `image` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '封面图' ,
    `desc` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '简介' ,
    `video_url` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '视频地址' ,
    `product_id` LONGTEXT NULL DEFAULT NULL COMMENT '关联商品ids',
    `like_num` INT(10) NOT NULL DEFAULT '0' COMMENT '点赞数量' ,
    `collect_num` INT(10) NOT NULL DEFAULT '0' COMMENT '收藏数量' ,
    `play_num` INT(10) NOT NULL DEFAULT '0' COMMENT '浏览播放数量' ,
    `comment_num` INT(10) NOT NULL DEFAULT '0' COMMENT '评论数量' ,
    `share_num` INT(10) NOT NULL DEFAULT '0' COMMENT '分享数量' ,
    `is_show` TINYINT(1) NOT NULL DEFAULT '1' COMMENT '是否显示' ,
    `is_recommend` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '是否推荐' ,
    `is_verify` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '是否审核：-2强制下架-1未通过0未审核1:通过',
    `sort` SMALLINT(5) NOT NULL DEFAULT '0' COMMENT '排序' ,
    `is_del` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '是否删除' ,
    `add_time` INT(10) NOT NULL DEFAULT '0' COMMENT '添加时间' ,
    PRIMARY KEY (`id`),
    KEY `type` (`type`)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT='短视频表';

CREATE TABLE IF NOT EXISTS `eb_video_comment` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `type` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '类型：0:平台1:门店2:用户' ,
    `relation_id` INT(10) NOT NULL DEFAULT '0' COMMENT '发布视频门店ID、用户UID' ,
    `pid` int(11) NOT NULL DEFAULT '0' COMMENT '上级回复id',
    `video_id` int(11) NOT NULL DEFAULT '0' COMMENT '视频id',
    `uid` int(11) NOT NULL DEFAULT '0',
    `nickname` varchar(64) NOT NULL DEFAULT '' COMMENT '用户名称',
    `avatar` varchar(255) NOT NULL DEFAULT '' COMMENT '用户头像',
    `like_num` int(11) NOT NULL DEFAULT '0' COMMENT '点赞数量',
    `content` varchar(1000) NOT NULL DEFAULT '' COMMENT '评论内容',
    `ip` varchar(32) NOT NULL DEFAULT '' COMMENT '评论ip',
    `city` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '城市',
    `is_reply` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '是否回复' ,
    `is_del` TINYINT(1) NOT NULL DEFAULT '0' COMMENT '是否删除' ,
    `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '更新时间',
    `add_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
    PRIMARY KEY (`id`),
    KEY `pid` (`pid`),
    KEY `video_id` (`video_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='短视频评价回复表';

CREATE TABLE IF NOT EXISTS `eb_store_newcomer` (
    `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
    `type` TINYINT(2) NOT NULL DEFAULT '0' COMMENT '商品所属：0：平台1:门店2:供应商',
    `product_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '商品id',
    `product_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '商品类型0:普通商品，1：卡密，2：优惠券，3：虚拟商品',
    `relation_id` INT(10) NOT NULL DEFAULT '0' COMMENT '关联门店、供应商ID',
    `price` decimal(12,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '商品价格',
    `ot_price` decimal(12,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '市场价',
    `sales` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '销量',
    `is_del` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
    `update_time` int(10) NOT NULL DEFAULT '0' COMMENT '更新时间',
    `add_time` int(10) NOT NULL DEFAULT '0' COMMENT '添加时间',
    PRIMARY KEY (`id`) USING BTREE,
    key `product_id` (`product_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='新人专享商品';

CREATE TABLE IF NOT EXISTS `eb_store_delivery_order` (
     `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
     `type` TINYINT(2) NOT NULL DEFAULT '0' COMMENT '商品所属：0：平台1:门店2:供应商',
     `relation_id` INT(10) NOT NULL DEFAULT '0' COMMENT '关联门店、供应商ID',
     `oid` int(10) unsigned NOT NULL COMMENT '订单ID',
     `uid` int(11) unsigned NOT NULL DEFAULT '0',
     `station_type` int(11) unsigned NOT NULL COMMENT '平台类型',
     `order_id` varchar(32) NOT NULL DEFAULT '' COMMENT '订单ID',
     `delivery_no` varchar(255) NOT NULL DEFAULT '' COMMENT '配送方订单号',
     `city_code` varchar(20) NOT NULL DEFAULT '' COMMENT '所属城市',
     `cargo_price` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT '配送订单价格',
     `finish_code` varchar(255) NOT NULL DEFAULT '' COMMENT '收货码',
     `user_name` varchar(20) NOT NULL DEFAULT '' COMMENT '用户名',
     `receiver_phone` varchar(11) NOT NULL DEFAULT '' COMMENT '收货人电话',
     `from_address` varchar(255) NOT NULL DEFAULT '' COMMENT '起始位置',
     `to_address` varchar(255) NOT NULL DEFAULT '' COMMENT '结束位置',
     `from_lat` varchar(255) NOT NULL DEFAULT '',
     `from_lng` varchar(255) NOT NULL DEFAULT '',
     `to_lat` varchar(255) NOT NULL DEFAULT '',
     `to_lng` varchar(255) NOT NULL DEFAULT '',
     `distance` float NOT NULL DEFAULT '0' COMMENT '配送距离',
     `fee` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT '配送费',
     `deduct_fee` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT '取消订单违约金',
     `mer_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '商户ID',
     `mark` varchar(255) NOT NULL DEFAULT '' COMMENT '订单备注',
     `status` int(11) NOT NULL DEFAULT '0' COMMENT '状态 取消=-1, 待取货＝2,配送中＝3,已完成＝4,物品返回中=9,物品返回完成=10,骑士到店=100',
     `reason` varchar(255) NOT NULL COMMENT '取消原因',
     `add_time` int(10) NOT NULL DEFAULT '0' COMMENT '添加时间',
     PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='发货配送订单';


-- 快递公司表 添加字段
ALTER TABLE `eb_express`
    ADD COLUMN `check_man` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否填写电子面单承载快递员名' AFTER `net`,
    ADD COLUMN `partner_name` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否填写电子面单客户账户名称' AFTER `check_man`,
    ADD COLUMN `is_code` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否填写电子面单承载编号' AFTER `partner_name`,
    ADD COLUMN `courier_name` varchar(100) NOT NULL DEFAULT '' COMMENT '承载快递员名' AFTER `net_name`,
    ADD COLUMN `customer_name` varchar(100) NOT NULL DEFAULT '' COMMENT '客户账户名称' AFTER `courier_name`,
    ADD COLUMN `code_name` varchar(100) NOT NULL DEFAULT '' COMMENT '电子面单承载编号' AFTER `customer_name`;

-- 新增配置
INSERT INTO `eb_system_config` (`id`, `is_store`, `menu_name`, `type`, `input_type`, `config_tab_id`, `parameter`, `upload_type`, `required`, `width`, `high`, `value`, `info`, `desc`, `sort`, `status`) VALUES
(NULL, '0', 'pay_wechat_type', 'radio', '', '4', '0=>v2\r\n1=>v3', '1', '', '0', '0', '\"\"', '支付接口类型', '支付接口类型v2对应微信支付旧版v2支付。v3对应微信支付v3支付接口。支付证书可以通用一个。支付秘钥和v2旧版支付有区别。付款码支付请配置v2', '0', '1'),
(NULL, '0', 'pay_weixin_serial_no', 'text', 'input', '4', '', '1', '', '100', '0', '\"\"', '证书序列号', '「商户API证书」的「证书序列号」，可以在证书管理里面查看', '0', '1'),
(NULL, '0', 'v3_pay_weixin_key', 'text', 'input', '4', '', '1', '', '100', '0', '\"\"', 'v3支付KEY', '微信支付v3版本的支付密钥', '0', '1');

-- 企微媒体字段长度
ALTER TABLE `eb_work_media` CHANGE `media_id` `media_id` VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '媒体文件上传后获取的唯一标识';

-- 打开充值成功提醒发送和充值退款提醒发送短信通知
UPDATE eb_system_notification SET `is_sms` = 1,`sms_id` = 811355 WHERE `mark` = 'recharge_success';
UPDATE eb_system_notification SET `is_sms` = 1,`sms_id` = 811356 WHERE `mark` = 'recharge_order_refund_status';
UPDATE eb_system_notification SET `is_wechat` = 1 WHERE `mark` = 'price_revision';
UPDATE eb_system_notification SET `is_wechat` = 0 WHERE `mark` = 'kefu_send_extract_application';
UPDATE eb_system_notification SET `is_wechat` = 0 WHERE `mark` = 'send_admin_confirm_take_over';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM415939287' WHERE `mark` = 'order_postage_success';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM418528119' WHERE `mark` = 'order_takever';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM207284059' WHERE `mark` IN ('order_refund','recharge_order_refund_status','send_order_refund_no_status');
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM416122303' WHERE `mark` = 'order_deliver_success';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM409367318' WHERE `mark` IN ('order_user_groups_success','can_pink_success');
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM418350969' WHERE `mark` IN ('send_order_pink_fial','send_order_pink_clone');
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM418062102' WHERE `mark` = 'order_pay_success';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM418554923' WHERE `mark` = 'bargain_success';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM410867947' WHERE `mark` = 'open_pink_success';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM400590844' WHERE `mark` = 'order_brokerage';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM409880752' WHERE `mark` = 'bind_spread_uid';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM401202515' WHERE `mark` = 'price_revision';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM414089457' WHERE `mark` = 'recharge_success';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM405876306' WHERE `mark` = 'user_extract';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM403167119' WHERE `mark` = 'user_balance_change';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM408199008' WHERE `mark` = 'order_pay_false';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM201661503' WHERE `mark` = 'integral_accout';
UPDATE eb_system_notification SET `wechat_id` = 'OPENTM415269411' WHERE `mark` IN ('send_order_apply_refund','admin_pay_success_code');

UPDATE eb_template_message SET `tempkey` = 'OPENTM415939287',`notification_id` = '21', `name` = '订单发货通知',`content` = '{{first.DATA}}\r\n订单编号：{{keyword1.DATA}}\r\n发货日期：{{keyword2.DATA}}\r\n商品详细：{{keyword3.DATA}}\r\n物流公司：{{keyword4.DATA}}\r\n物流单号：{{keyword5.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM200565259';
UPDATE eb_template_message SET `tempkey` = 'OPENTM418528119',`notification_id` = '3', `name` = '订单收货通知',`content` = '{{first.DATA}}\r\n订单编号：{{keyword1.DATA}}\r\n商品名称：{{keyword2.DATA}}\r\n金额：{{keyword3.DATA}}\r\n时间：{{keyword4.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM413386489';
UPDATE eb_template_message SET `tempkey` = 'OPENTM207284059',`notification_id` = '5,16,17', `name` = '退款通知',`content` = '{{first.DATA}}\r\n退款金额：{{keyword1.DATA}}\r\n退款时间：{{keyword2.DATA}}\r\n订单编号：{{keyword3.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM410119152';
UPDATE eb_template_message SET `tempkey` = 'OPENTM416122303',`notification_id` = '20', `name` = '订单配送通知',`content` = '{{first.DATA}}\r\n订单编号：{{keyword1.DATA}}\r\n订单金额：{{keyword2.DATA}}\r\n配送员：{{keyword3.DATA}}\r\n联系电话：{{keyword4.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM207707249';
UPDATE eb_template_message SET `tempkey` = 'OPENTM409367318',`notification_id` = '11,23', `name` = '拼团成功通知',`content` = '{{first.DATA}}\r\n订单号：{{keyword1.DATA}}\r\n商品信息：{{keyword2.DATA}}\r\n拼团价格：{{keyword3.DATA}}\r\n组团信息：{{keyword4.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM407456411';
UPDATE eb_template_message SET `tempkey` = 'OPENTM418350969',`notification_id` = '12,22', `name` = '拼团失败通知',`content` = '{{first.DATA}}\r\n订单号：{{keyword1.DATA}}\r\n商品信息：{{keyword2.DATA}}\r\n失败类型：{{keyword3.DATA}}\r\n失败原因：{{keyword4.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM401113750';
UPDATE eb_template_message SET `tempkey` = 'OPENTM418062102',`notification_id` = '2', `name` = '订单支付成功通知',`content` = '{{first.DATA}}\r\n订单号：{{keyword1.DATA}}\r\n商品名称：{{keyword2.DATA}}\r\n支付金额：{{keyword3.DATA}}\r\n下单人：{{keyword4.DATA}}\r\n订单支付时间：{{keyword5.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM207791277';
UPDATE eb_template_message SET `tempkey` = 'OPENTM418554923',`notification_id` = '10', `name` = '砍价成功通知',`content` = '{{first.DATA}}\r\n商品名称：{{keyword1.DATA}}\r\n底价：{{keyword2.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM410292733';
UPDATE eb_template_message SET `tempkey` = 'OPENTM410867947',`notification_id` = '13', `name` = '开团成功提醒',`content` = '{{first.DATA}}\r\n商品信息：{{keyword1.DATA}}\r\n团长：{{keyword2.DATA}}\r\n拼团人数：{{keyword3.DATA}}\r\n截止时间：{{keyword4.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM414349441';
UPDATE eb_template_message SET `tempkey` = 'OPENTM400590844',`notification_id` = '9', `name` = '佣金提醒',`content` = '{{first.DATA}}\r\n佣金金额：{{keyword1.DATA}}\r\n时间：{{keyword2.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM409909643';
UPDATE eb_template_message SET `tempkey` = 'OPENTM409880752',`notification_id` = '1', `name` = '绑定成功通知',`content` = '{{first.DATA}}\r\n姓名：{{keyword1.DATA}}\r\n绑定时间：{{keyword2.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM410239001';
UPDATE eb_template_message SET `tempkey` = 'OPENTM401202515',`notification_id` = '4', `name` = '订单修改价格通知',`content` = '{{first.DATA}}\r\n订单号：{{keyword1.DATA}}\r\n商品名称：{{keyword2.DATA}}\r\n下单时间：{{keyword3.DATA}}\r\n订单总价：{{keyword4.DATA}}\r\n订单状态：{{keyword5.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM410137124';
UPDATE eb_template_message SET `tempkey` = 'OPENTM414089457',`notification_id` = '7', `name` = '充值成功通知',`content` = '{{first.DATA}}\r\n充值时间：{{keyword1.DATA}}\r\n充值金额：{{keyword2.DATA}}\r\n充值状态：{{keyword3.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM411706852';
UPDATE eb_template_message SET `tempkey` = 'OPENTM405876306',`notification_id` = '14', `name` = '提现审核通知',`content` = '{{first.DATA}}\r\n提现金额：{{keyword1.DATA}}\r\n申请时间：{{keyword2.DATA}}\r\n审核状态：{{keyword3.DATA}}\r\n原因说明：{{keyword4.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM418265600';
UPDATE eb_template_message SET `tempkey` = 'OPENTM403167119',`notification_id` = '15', `name` = '提现失败通知',`content` = '{{first.DATA}}\r\n提现金额：{{keyword1.DATA}}\r\n提现时间：{{keyword2.DATA}}\r\n原因说明：{{keyword3.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM408529050';
UPDATE eb_template_message SET `tempkey` = 'OPENTM408199008',`notification_id` = '26', `name` = '订单待支付提醒',`content` = '{{first.DATA}}\r\n订单金额：{{keyword1.DATA}}\r\n订单详情：{{keyword2.DATA}}\r\n订单编号：{{keyword3.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM413741318';
UPDATE eb_template_message SET `tempkey` = 'OPENTM201661503',`notification_id` = '8', `name` = '消费成功通知',`content` = '{{first.DATA}}\r\n商品名称：{{keyword1.DATA}}\r\n消费金额：{{keyword2.DATA}}\r\n抵扣积分：{{keyword3.DATA}}\r\n获得积分：{{keyword4.DATA}}\r\n消费时间：{{keyword5.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM418252271';
UPDATE eb_template_message SET `tempkey` = 'OPENTM415269411',`notification_id` = '18,19', `name` = '订单进度提醒',`content` = '{{first.DATA}}\r\n订单编号：{{keyword1.DATA}}\r\n订单内容：{{keyword2.DATA}}\r\n订单状态：{{keyword3.DATA}}\r\n时间：{{keyword4.DATA}}\r\n{{remark.DATA}}' WHERE `tempkey` = 'OPENTM408237350';


-- 对外接口账号表
ALTER TABLE eb_out_account
  ADD COLUMN `rules` text NULL DEFAULT NULL COMMENT '权限' AFTER `status`,
  ADD COLUMN `push_open` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否推送',
  ADD COLUMN `push_account` varchar(255) NOT NULL COMMENT '推送账号',
  ADD COLUMN `push_password` varchar(255) NOT NULL COMMENT '推送密码',
  ADD COLUMN `push_token_url` varchar(255) NOT NULL COMMENT '获取推送token接口',
  ADD COLUMN `user_update_push` varchar(255) NOT NULL COMMENT '用户推送接口',
  ADD COLUMN `order_create_push` varchar(255) NOT NULL DEFAULT '' COMMENT '订单创建推送接口',
  ADD COLUMN `order_pay_push` varchar(255) NOT NULL DEFAULT '' COMMENT '订单支付推送接口',
  ADD COLUMN `refund_create_push` varchar(255) NOT NULL DEFAULT '' COMMENT '售后订单创建推送接口',
  ADD COLUMN `refund_cancel_push` varchar(255) NOT NULL DEFAULT '' COMMENT '售后订单取消推送接口';

--
-- 表的结构 `eb_out_interface`
--

CREATE TABLE IF NOT EXISTS `eb_out_interface` (
    `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
    `pid` int(11) NOT NULL DEFAULT '0' COMMENT '父级pid',
    `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0菜单，1接口',
    `name` varchar(255) NOT NULL DEFAULT '' COMMENT '接口名称',
    `describe` text NULL DEFAULT NULL COMMENT '功能描述',
    `method` varchar(255) NOT NULL DEFAULT '' COMMENT '接口类型',
    `url` varchar(255) NOT NULL DEFAULT '' COMMENT '接口地址',
    `request_params` LONGTEXT NULL DEFAULT NULL COMMENT '请求参数',
    `return_params` LONGTEXT NULL DEFAULT NULL COMMENT '返回参数',
    `request_example` LONGTEXT NULL DEFAULT NULL COMMENT '请求示例',
    `return_example` LONGTEXT NULL DEFAULT NULL COMMENT '返回示例',
    `error_code` LONGTEXT NULL DEFAULT NULL COMMENT '错误返回',
    `is_del` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='对外接口';
