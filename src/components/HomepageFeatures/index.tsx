import React from "react";
import { Avatar, Card, Image, Space, Typography } from "antd";
import Link from "@docusaurus/Link";
import Meta from "antd/es/card/Meta";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comment = ({ avatar, username, description, content }) => {
  return (
    <Card style={{ width: 300 }} bodyStyle={{ padding: "20px" }}>
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

const comments = {
  left: [
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/000/00/00/02_avatar_middle.jpg",
      username: "李恒道1",
      description: "油中创始人之一",
      content: "我们脚本猫真是太棒啦！",
    },
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/000/00/00/02_avatar_middle.jpg",
      username: "李恒道2",
      description: "油中创始人之一",
      content: "我们脚本猫真是太棒啦！",
    },
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/000/00/00/02_avatar_middle.jpg",
      username: "李恒道3",
      description: "油中创始人之一",
      content: "我们脚本猫真是太棒啦！",
    },
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/000/00/00/02_avatar_middle.jpg",
      username: "李恒道4",
      description: "油中创始人之一",
      content: "我们脚本猫真是太棒啦！",
    },
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/000/00/00/02_avatar_middle.jpg",
      username: "李恒道5",
      description: "油中创始人之一",
      content: "我们脚本猫真是太棒啦！",
    },
  ],
  right: [
    {
      avatar:
        "https://bbs.tampermonkey.net.cn/uc_server/data/avatar/000/00/00/02_avatar_middle.jpg",
      username: "李恒道",
      description: "油中创始人之一",
      content: "我们脚本猫真是太棒啦！",
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
            <div className="w-full">
              <Slider
                dots={false}
                arrows={false}
                infinite={true}
                slidesToShow={4}
                slidesToScroll={1}
                autoplay={true}
                speed={3000}
                autoplaySpeed={3000}
                cssEase="linear"
              >
                {comments.left.map((item) => (
                  <Comment
                    key={item.username}
                    avatar={item.avatar}
                    username={item.username}
                    description={item.description}
                    content={item.content}
                  />
                ))}
              </Slider>
            </div>
            <div>
              <Slider
                dots={false}
                arrows={false}
                infinite={true}
                slidesToShow={4}
                slidesToScroll={1}
                autoplay={true}
                speed={3000}
                autoplaySpeed={3000}
                cssEase="linear"
                rtl={true}
                initialSlide={3}
              >
                {comments.left.map((item) => (
                  <Comment
                    key={item.username}
                    avatar={item.avatar}
                    username={item.username}
                    description={item.description}
                    content={item.content}
                  />
                ))}
              </Slider>
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
}
