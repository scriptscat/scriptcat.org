import React, { useState } from "react";
import { Avatar, Card, Image, Space, Typography } from "antd";
import Link from "@docusaurus/Link";
import Meta from "antd/es/card/Meta";
import { Swiper, SwiperSlide, useSwiper } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import Translate from '@docusaurus/Translate';

import "swiper/css";

const Comment = ({ avatar, username, description, content }) => {
  const swiper = useSwiper();
  const [isPlaying, setIsPlaying] = useState(true);
  const enterCallback = () => {
    if (!isPlaying) {
      return;
    }
    swiper.setTranslate(swiper.getTranslate());
    swiper.autoplay.stop();
    setIsPlaying(false);
  };
  const leaveCallback = () => {
    if (isPlaying) {
      return;
    }
    swiper.slideTo(swiper.activeIndex, 20000);
    swiper.autoplay.start();
    setIsPlaying(true);
  };
  return (
    <Card
      onMouseEnter={enterCallback}
      onMouseLeave={leaveCallback}
      style={{ maxWidth: 400, height: 160 }}
      bodyStyle={{ padding: "20px" }}
      size="small"
    >
      <Meta
        avatar={
          <Avatar
            size="large"
            src={avatar}
            style={{ border: "1px solid #000" }}
          />
        }
        title={
          <Space direction="vertical" style={{ width: "100%" }} size={0}>
            <div
              style={{
                width: "100%",
                textAlign: "left",
              }}
            >
              {username}
            </div>
            <div
              style={{
                width: "100%",
                fontSize: "10px",
                color: "var(--ifm-color-gray-600)",
                textAlign: "left",
              }}
            >
              {description}
            </div>
          </Space>
        }
      />
      <div
        style={{
          marginTop: "6px",
          width: "100%",
          fontSize: "14px",
          color: "#000",
          textAlign: "left",
        }}
      >
        {content}
      </div>
    </Card>
  );
};

const CommentSlider = ({ rtl = false, initialSlide = 0 }) => {
  return (
    <Swiper
      className="comment"
      initialSlide={initialSlide}
      spaceBetween={50}
      slidesPerView={3}
      allowTouchMove={false}
      speed={1000 * 20}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: rtl,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
    >
      {comments.left.map((item) => (
        <SwiperSlide key={item.username}>
          <Comment
            avatar={item.avatar}
            username={item.username}
            description={item.description}
            content={item.content}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const comments = {
  left: [
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/000/00/00/02_avatar_middle.jpg",
      username: (
        <Translate id="homepage.comments.lihengdao.username">
          李恒道
        </Translate>
      ),
      description: (
        <Translate id="homepage.comments.lihengdao.description">
          油中创始人之一
        </Translate>
      ),
      content: (
        <Translate id="homepage.comments.lihengdao.content">
          我们脚本猫真是太棒啦！
        </Translate>
      ),
    },
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/noavatar.svg",
      username: (
        <Translate id="homepage.comments.student.username">
          为考试发愁
        </Translate>
      ),
      description: (
        <Translate id="homepage.comments.student.description">
          学生
        </Translate>
      ),
      content: (
        <Translate id="homepage.comments.student.content">
          感谢油中如此丰富的学习资源，让我受益匪浅，更好地发展自己的技术能力。脚本猫是一个非常好用的浏览器扩展，为我提供了便捷和高效的功能。
        </Translate>
      ),
    },
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/000/04/10/07_avatar_big.jpg",
      username: (
        <Translate id="homepage.comments.enncy.username">
          言小溪enncy
        </Translate>
      ),
      description: (
        <Translate id="homepage.comments.enncy.description">
          著名脚本作者
        </Translate>
      ),
      content: (
        <Translate id="homepage.comments.enncy.content">
          由衷感谢油中
        </Translate>
      ),
    },
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/000/02/37/09_avatar_big.jpg",
      username: (
        <Translate id="homepage.comments.qianyu.username">
          仟羽
        </Translate>
      ),
      description: (
        <Translate id="homepage.comments.qianyu.description">
          Chrome 用户
        </Translate>
      ),
      content: (
        <Translate id="homepage.comments.qianyu.content">
          一开始，人们都以为这是小众js插件。。。。直到。。。
        </Translate>
      ),
    },
  ],
  right: [
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/noavatar.svg",
      username: "wwwwwllllk",
      description: "前端开发人员",
      content: "使用脚本猫来提高自己的互联网体验，来油中认识志同道合的人。",
    },
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/000/06/81/84_avatar_big.jpg",
      username: "Oraer",
      description: "Chrome 用户",
      content: "初识油猴！学习油猴！超越油猴！",
    },
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/000/07/64/97_avatar_big.jpg",
      username: "bigonion",
      description: "脚本猫开发者",
      content: "Scriptcat is the future.",
    },
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/000/00/00/02_avatar_middle.jpg",
      username: "李恒道",
      description: "油中创始人之一",
      content: "我们脚本猫真是太棒啦！",
    },
  ],
};

export default function HomepageFeatures(): JSX.Element {
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <div className="home flex flex-col">
      <div className="flex gap-3 bg-dark px-20">
        <div className="flex-1 m-auto text-center">
          <h2>简单易用</h2>
          <p>支持所有常见浏览器,安装方便快捷</p>
        </div>
        <div className="flex-1 py-20">
          <Link to="/docs/use/">
            <Image src="/img/home/borwsers.png" preview={false} />
          </Link>
        </div>
      </div>
      <div className="flex gap-3 bg-light px-20">
        <div className="flex-1 m-auto text-center py-10">
          <Image src="/img/home/dark-ui.png" preview={false} />
        </div>
        <div className="flex-1 m-auto text-center">
          <h2>精心设计</h2>
          <p>
            采用了现代化的UI设计,让你的浏览器不再是那么单调,并且支持暗夜模式
          </p>
        </div>
      </div>
      <div className="flex gap-3 bg-dark px-20">
        <div className="flex-1 m-auto text-center">
          <h2>功能强大</h2>
          <p>
            既中看又中用,在兼容油猴脚本的基础上提供了更多强大的API,并且实现了一个后台脚本的框架,让你的浏览器不止浏览器
          </p>
        </div>
        <div className="flex-1 py-10">
          <Link to="/docs/dev/backgroud/">
            <Image src="/img/home/feature.png" preview={false} />
          </Link>
        </div>
      </div>
      <div className="flex gap-3 bg-light px-20">
        <div className="flex-1 py-10">
          <Image src="/img/home/develop.png" preview={false} />
        </div>
        <div className="flex-1 m-auto text-center">
          <h2>开发友好</h2>
          <p>
            提供了完善的开发文档,并且提供了一个优秀在线的编辑器,支持自动提示、ESLint、QuickFix等等,让你使用脚本猫开发脚本更加的方便快捷
          </p>
        </div>
      </div>
      <div className="flex gap-3 bg-dark px-20">
        <div className="flex-1 m-auto text-center">
          <h2>备份/同步</h2>
          <p>
            提供了一个强大的备份/同步功能,支持主流网盘,让你的脚本不再丢失,并且支持多设备同步
          </p>
        </div>
        <div className="flex-1 py-10">
          <Link to="/docs/use/sync/">
            <Image src="/img/home/backup.png" preview={false} />
          </Link>
        </div>
      </div>
      <div className="flex gap-3 bg-light w-full">
        <div className="flex-1 m-auto text-center py-4 w-full">
          <h2>社区评论</h2>
          <Space direction="vertical" className="w-full">
            <div className="w-full"></div>
            <div>
              <CommentSlider></CommentSlider>
            </div>
            <div
              style={{
                margin: "13px 0",
              }}
            >
              <CommentSlider rtl={true} initialSlide={3}></CommentSlider>
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
}
