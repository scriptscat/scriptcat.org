"use client";

import React, { useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import {
  Button,
  Card,
  Radio,
  Input,
  message,
  Space,
  Typography,
  Form,
  Row,
  Col,
  Alert,
  Divider,
  ConfigProvider,
  theme as antdTheme,
} from "antd";
import {
  HeartOutlined,
  MessageOutlined,
  BugOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  ToolOutlined,
  SmileOutlined,
  HomeOutlined,
  GithubOutlined,
  ChromeOutlined,
  FireOutlined,
} from "@ant-design/icons";
import Translate, { translate } from "@docusaurus/Translate";
import { useTheme } from "../components/useTheme";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

// 卸载原因选项
const uninstallReasons = [
  {
    key: "bugs",
    icon: <BugOutlined />,
    label: translate({
      id: "uninstall.reason.bugs",
      message: "遇到了错误或bug",
    }),
  },
  {
    key: "no_need",
    icon: <SafetyOutlined />,
    label: translate({
      id: "uninstall.reason.no_need",
      message: "不再需要脚本猫",
    }),
  },
  {
    key: "features",
    icon: <ToolOutlined />,
    label: translate({
      id: "uninstall.reason.features",
      message: "缺少我需要的功能",
    }),
  },
  {
    key: "alternative",
    icon: <ThunderboltOutlined />,
    label: translate({
      id: "uninstall.reason.alternative",
      message: "找到了更好的替代品",
    }),
  },
  {
    key: "other",
    icon: <MessageOutlined />,
    label: translate({
      id: "uninstall.reason.other",
      message: "其他原因",
    }),
  },
];

export default function Uninstall(): JSX.Element {
  const [form] = Form.useForm();
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleSubmit = async () => {
    if (!selectedReason) {
      message.warning(
        translate({
          id: "uninstall.warning.selectReason",
          message: "请选择卸载原因",
        })
      );
      return;
    }

    setSubmitting(true);

    try {
      // 模拟API调用
      console.log("Uninstall feedback:", {
        reason: selectedReason,
        feedback,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      });

      // 模拟提交延迟
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitted(true);
      message.success(
        translate({
          id: "uninstall.success.submitted",
          message: "感谢您的反馈！",
        })
      );
    } catch (error) {
      message.error(
        translate({
          id: "uninstall.error.submit",
          message: "提交失败，请稍后重试",
        })
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSelectedReason("");
    setFeedback("");
    setSubmitted(false);
    form.resetFields();
  };

  // 成功提交后的感谢页面
  if (submitted) {
    return (
      <Layout
        title={translate({
          id: "uninstall.title",
          message: "ScriptCat 卸载调查",
        })}
        description={translate({
          id: "uninstall.description",
          message: "感谢您使用 ScriptCat，请告诉我们您卸载的原因",
        })}
      >
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>

        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <Card
              styles={{
                body: { padding: "3rem 2rem" },
              }}
            >
              <div className="mb-8">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SmileOutlined className="text-4xl text-green-600 dark:text-green-400" />
                </div>

                <Title
                  level={2}
                  className="mb-4 text-gray-800 dark:text-gray-100"
                >
                  <Translate id="uninstall.thanks.title">
                    感谢您的反馈！
                  </Translate>
                </Title>

                <Paragraph className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  <Translate id="uninstall.thanks.message">
                    您的反馈对我们非常宝贵，将帮助我们改进 ScriptCat。
                  </Translate>
                </Paragraph>
              </div>

              <Space direction="vertical" size="large" className="w-full">
                <Row gutter={[16, 16]} justify="center">
                  <Col xs={24} sm={12}>
                    <Button
                      type="primary"
                      size="large"
                      icon={<HomeOutlined />}
                      href="/"
                      block
                      className="h-12 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <Translate id="uninstall.thanks.backHome">
                        返回首页
                      </Translate>
                    </Button>
                  </Col>

                  <Col xs={24} sm={12}>
                    <Button
                      size="large"
                      icon={<GithubOutlined />}
                      href="https://github.com/scriptscat/scriptcat/issues"
                      target="_blank"
                      block
                      className="h-12 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <Translate id="uninstall.thanks.reportIssue">
                        报告问题
                      </Translate>
                    </Button>
                  </Col>
                </Row>

                <Divider />

                <div>
                  <Text type="secondary" className="mb-4 block">
                    <Translate id="uninstall.thanks.considerReinstall">
                      如果您改变主意，随时欢迎回来
                    </Translate>
                  </Text>

                  <div className="flex justify-center">
                    <Space wrap>
                      <Button
                        size="small"
                        icon={<ChromeOutlined />}
                        href="https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                        target="_blank"
                        className="rounded-md"
                      >
                        Chrome
                      </Button>
                      <Button
                        size="small"
                        href="https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh"
                        target="_blank"
                        className="rounded-md"
                      >
                        Edge
                      </Button>
                      <Button
                        size="small"
                        icon={<FireOutlined />}
                        href="https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/"
                        target="_blank"
                        className="rounded-md"
                      >
                        Firefox
                      </Button>
                    </Space>
                  </div>
                </div>

                <Button
                  type="link"
                  onClick={resetForm}
                  className="text-blue-600 dark:text-blue-400"
                >
                  <Translate id="uninstall.thanks.submitAnother">
                    提交其他反馈
                  </Translate>
                </Button>
              </Space>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }

  // 主要的卸载调查表单
  return (
    <ConfigProvider
      theme={{
        algorithm:
          theme === "dark"
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
      }}
    >
      <Layout
        title={translate({
          id: "uninstall.title",
          message: "ScriptCat 卸载调查",
        })}
        description={translate({
          id: "uninstall.description",
          message: "感谢您使用 ScriptCat，请告诉我们您卸载的原因",
        })}
      >
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>

        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* 页面标题 */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartOutlined className="text-3xl text-orange-600 dark:text-orange-400" />
              </div>

              <Title
                level={1}
                className="mb-4 text-gray-800 dark:text-gray-100"
              >
                <Translate id="uninstall.header.title">
                  很遗憾看到您卸载了 ScriptCat
                </Translate>
              </Title>

              <Paragraph className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                <Translate id="uninstall.header.subtitle">
                  如果您愿意，希望能分享一下您的想法，这对我们持续改进会很有帮助
                </Translate>
              </Paragraph>
            </div>

            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                {/* 主要表单卡片 */}
                <Card
                  styles={{
                    body: { padding: "2.5rem" },
                  }}
                >
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    size="large"
                  >
                    {/* 卸载原因选择 */}
                    <Form.Item
                      label={
                        <Title level={3} className="mb-6">
                          <Translate id="uninstall.question.reason">
                            您卸载 ScriptCat 的主要原因是？
                          </Translate>
                        </Title>
                      }
                      name="reason"
                      rules={[
                        {
                          required: true,
                          message: translate({
                            id: "uninstall.warning.selectReason",
                            message: "请选择卸载原因",
                          }),
                        },
                      ]}
                    >
                      <Radio.Group
                        value={selectedReason}
                        onChange={(e) => setSelectedReason(e.target.value)}
                        className="w-full"
                      >
                        <Row gutter={[12, 12]}>
                          {uninstallReasons.map((reason) => (
                            <Col xs={24} sm={12} key={reason.key}>
                              <div
                                className={`
                                  p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md
                                  ${
                                    selectedReason === reason.key
                                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-md"
                                      : "border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500"
                                  }
                                `}
                              >
                                <Radio value={reason.key} className="w-full">
                                  <div className="flex items-center space-x-3">
                                    <span className="text-xl">
                                      {reason.icon}
                                    </span>
                                    <span className="text-gray-700 dark:text-gray-200">
                                      {reason.label}
                                    </span>
                                  </div>
                                </Radio>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Radio.Group>
                    </Form.Item>

                    {/* 详细反馈 */}
                    <Form.Item
                      label={
                        <Title level={3} className="mb-4">
                          <Translate id="uninstall.question.feedback">
                            如果方便的话，能否分享更多细节？
                          </Translate>
                        </Title>
                      }
                      name="feedback"
                    >
                      <TextArea
                        rows={4}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder={translate({
                          id: "uninstall.feedback.placeholder",
                          message: "请分享您的具体问题、建议或其他想法...",
                        })}
                        maxLength={500}
                        showCount
                        className="resize-none rounded-lg"
                      />
                    </Form.Item>

                    {/* 提交按钮 */}
                    <Form.Item className="mb-0">
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        loading={submitting}
                        block
                        className="h-12 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <Translate id="uninstall.button.submit">
                          提交反馈
                        </Translate>
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>

              <Col xs={24} lg={8}>
                {/* 侧边栏信息 */}
                <Space direction="vertical" size="large" className="w-full">
                  {/* 重新安装提示 */}
                  <Card
                    title={
                      <div className="flex items-center space-x-2">
                        <HeartOutlined className="text-red-500" />
                        <span>
                          <Translate id="uninstall.sidebar.reinstall.title">
                            随时欢迎回来
                          </Translate>
                        </span>
                      </div>
                    }
                    styles={{
                      body: { padding: "1.5rem" },
                    }}
                  >
                    <Paragraph className="text-gray-600 dark:text-gray-300 mb-4">
                      <Translate id="uninstall.reinstall.message">
                        如果您改变主意，可以随时重新安装：
                      </Translate>
                    </Paragraph>

                    <Space direction="vertical" className="w-full" size="small">
                      <Button
                        icon={<ChromeOutlined />}
                        href="https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                        target="_blank"
                        block
                        className="rounded-lg"
                      >
                        Chrome 商店
                      </Button>
                      <Button
                        href="https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh"
                        target="_blank"
                        block
                        className="rounded-lg"
                      >
                        Edge 商店
                      </Button>
                      <Button
                        icon={<FireOutlined />}
                        href="https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/"
                        target="_blank"
                        block
                        className="rounded-lg"
                      >
                        Firefox 商店
                      </Button>
                    </Space>
                  </Card>

                  {/* 帮助和支持 */}
                  <Card
                    title={
                      <div className="flex items-center space-x-2">
                        <MessageOutlined className="text-blue-500" />
                        <span>
                          <Translate id="uninstall.sidebar.help.title">
                            需要帮助？
                          </Translate>
                        </span>
                      </div>
                    }
                    styles={{
                      body: { padding: "1.5rem" },
                    }}
                  >
                    <Paragraph className="text-gray-600 dark:text-gray-300 mb-4">
                      <Translate id="uninstall.sidebar.help.description">
                        遇到问题？我们很乐意帮助您解决
                      </Translate>
                    </Paragraph>

                    <Space direction="vertical" className="w-full" size="small">
                      <Button
                        icon={<GithubOutlined />}
                        href="https://github.com/scriptscat/scriptcat/issues"
                        target="_blank"
                        block
                        className="rounded-lg"
                      >
                        <Translate id="uninstall.sidebar.help.github">
                          GitHub 问题
                        </Translate>
                      </Button>
                      <Button
                        icon={<MessageOutlined />}
                        href="/docs"
                        block
                        className="rounded-lg"
                      >
                        <Translate id="uninstall.sidebar.help.docs">
                          查看文档
                        </Translate>
                      </Button>
                    </Space>
                  </Card>
                </Space>
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    </ConfigProvider>
  );
}
