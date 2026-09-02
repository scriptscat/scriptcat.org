"use client";

import { useState, type JSX } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { Icon } from "../components/Icon";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import {
  Btn,
  Card,
  Divider,
  Heading,
  InfoAlert,
  Paragraph,
  Radio,
  Textarea,
  ToastProvider,
  UiRoot,
  useMessage,
} from "../components/uninstall/ui";
import { submitFeedback, type FeedbackRequest, type FeedbackReason } from "../service/system";

const STORES = {
  chrome:
    "https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf",
  edge: "https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh",
  firefox: "https://addons.mozilla.org/firefox/addon/scriptcat/",
};

// 卸载原因选项
const uninstallReasons = [
  {
    key: "bug" as FeedbackReason,
    icon: "lucide:bug",
    label: translate({
      id: "uninstall.reason.bugs",
      message: "遇到了错误或bug",
    }),
  },
  {
    key: "unused" as FeedbackReason,
    icon: "lucide:shield-check",
    label: translate({
      id: "uninstall.reason.no_need",
      message: "不再需要脚本猫",
    }),
  },
  {
    key: "feature" as FeedbackReason,
    icon: "lucide:wrench",
    label: translate({
      id: "uninstall.reason.features",
      message: "缺少我需要的功能",
    }),
  },
  {
    key: "better" as FeedbackReason,
    icon: "lucide:zap",
    label: translate({
      id: "uninstall.reason.alternative",
      message: "找到了更好的替代品",
    }),
  },
  {
    key: "other" as FeedbackReason,
    icon: "lucide:message-circle",
    label: translate({
      id: "uninstall.reason.other",
      message: "其他原因",
    }),
  },
];

export default function Uninstall(): JSX.Element {
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

      {/* UiRoot carries the design tokens the form primitives read; the toast
          layer has to live inside it for the same reason. */}
      <UiRoot>
        <ToastProvider>
          <UninstallSurvey />
        </ToastProvider>
      </UiRoot>
    </Layout>
  );
}

function UninstallSurvey() {
  const [selectedReason, setSelectedReason] = useState<FeedbackReason | "">("");
  const [feedback, setFeedback] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const message = useMessage();

  // 检测当前语言环境。用 currentLocale 而不是判断路径前缀，否则 /ru/ 会被当成中文
  const { i18n } = useDocusaurusContext();
  const { withBaseUrl } = useBaseUrlUtils();
  // 上游仓库只有中英两套 issue 模板，所以非中文语言统一走英文模板
  const useEnglishTemplate = i18n.currentLocale !== i18n.defaultLocale;

  // 根据语言和反馈类型获取GitHub链接
  const getGithubUrl = (reason: FeedbackReason) => {
    if (reason === 'bug') {
      return useEnglishTemplate
        ? 'https://github.com/scriptscat/scriptcat/issues/new?template=bug_report_en.yaml'
        : 'https://github.com/scriptscat/scriptcat/issues/new?template=bug_report.yaml';
    } else if (reason === 'feature') {
      return useEnglishTemplate
        ? 'https://github.com/scriptscat/scriptcat/issues/new?template=feature_request_en.md'
        : 'https://github.com/scriptscat/scriptcat/issues/new?template=feature_request.md';
    }
    return 'https://github.com/scriptscat/scriptcat/issues/new';
  };

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
      // 调用实际的反馈API
      const feedbackRequest: FeedbackRequest = {
        reason: selectedReason as FeedbackReason,
        content: feedback || "", // 如果没有填写反馈内容，则为空字符串
      };

      await submitFeedback(feedbackRequest);

      setSubmitted(true);
      message.success(
        translate({
          id: "uninstall.success.submitted",
          message: "感谢您的反馈！",
        })
      );
    } catch (error) {
      console.error("Submit feedback error:", error);
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
  };

  // 成功提交后的感谢页面
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card bodyStyle={{ padding: "3rem 2rem" }}>
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon
                  icon="lucide:smile"
                  className="text-4xl text-green-600 dark:text-green-400"
                />
              </div>

              <Heading level={2} className="mb-4 text-gray-800 dark:text-gray-100">
                <Translate id="uninstall.thanks.title">
                  感谢您的反馈！
                </Translate>
              </Heading>

              <Paragraph className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                <Translate id="uninstall.thanks.message">
                  您的反馈对我们非常宝贵，将帮助我们改进 ScriptCat。
                </Translate>
              </Paragraph>
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Btn
                  variant="primary"
                  size="xl"
                  icon={<Icon icon="lucide:house" />}
                  href={withBaseUrl("/")}
                  block
                  className="shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Translate id="uninstall.thanks.backHome">
                    返回首页
                  </Translate>
                </Btn>

                <Btn
                  size="xl"
                  icon={<Icon icon="lucide:github" />}
                  href="https://github.com/scriptscat/scriptcat/issues"
                  target="_blank"
                  block
                  className="shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Translate id="uninstall.thanks.reportIssue">
                    报告问题
                  </Translate>
                </Btn>
              </div>

              <Divider />

              <div>
                <Paragraph secondary className="mb-4">
                  <Translate id="uninstall.thanks.considerReinstall">
                    如果您改变主意，随时欢迎回来
                  </Translate>
                </Paragraph>

                <div className="flex flex-wrap justify-center gap-2">
                  <Btn
                    size="small"
                    icon={<Icon icon="logos:chrome" />}
                    href={STORES.chrome}
                    target="_blank"
                  >
                    Chrome
                  </Btn>
                  <Btn
                    size="small"
                    icon={<Icon icon="logos:microsoft-edge" />}
                    href={STORES.edge}
                    target="_blank"
                  >
                    Edge
                  </Btn>
                  <Btn
                    size="small"
                    icon={<Icon icon="logos:firefox" />}
                    href={STORES.firefox}
                    target="_blank"
                  >
                    Firefox
                  </Btn>
                </div>
              </div>

              <Btn variant="link" onClick={resetForm}>
                <Translate id="uninstall.thanks.submitAnother">
                  提交其他反馈
                </Translate>
              </Btn>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // 主要的卸载调查表单
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon
              icon="lucide:heart"
              className="text-3xl text-orange-600 dark:text-orange-400"
            />
          </div>

          <Heading level={1} className="mb-4 text-gray-800 dark:text-gray-100">
            <Translate id="uninstall.header.title">
              很遗憾看到您卸载了 ScriptCat
            </Translate>
          </Heading>

          <Paragraph className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            <Translate id="uninstall.header.subtitle">
              如果您愿意，希望能分享一下您的想法，这对我们持续改进会很有帮助
            </Translate>
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* 主要表单卡片 */}
            <Card bodyStyle={{ padding: "2.5rem" }}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                {/* 卸载原因选择 */}
                <fieldset className="mb-6 p-0 m-0 border-0">
                  <legend className="p-0">
                    <Heading level={3} required className="mb-6">
                      <Translate id="uninstall.question.reason">
                        您卸载 ScriptCat 的主要原因是？
                      </Translate>
                    </Heading>
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {uninstallReasons.map((reason) => (
                      <Radio
                        key={reason.key}
                        name="uninstall-reason"
                        value={reason.key}
                        checked={selectedReason === reason.key}
                        onChange={(value) =>
                          setSelectedReason(value as FeedbackReason)
                        }
                        className={`
                          p-4 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-md
                          ${
                            selectedReason === reason.key
                              ? "bg-blue-50 dark:bg-blue-900/30 shadow-md"
                              : ""
                          }
                        `}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-xl">
                            <Icon icon={reason.icon} />
                          </span>
                          <span className="text-gray-700 dark:text-gray-200">
                            {reason.label}
                          </span>
                        </span>
                      </Radio>
                    ))}
                  </div>
                </fieldset>

                {/* Bug反馈引导提示 */}
                {selectedReason === "bug" && (
                  <InfoAlert
                    className="mb-6"
                    title={
                      <Translate id="uninstall.bug.alert.title">
                        遇到了bug?
                      </Translate>
                    }
                  >
                    <Paragraph className="mb-2">
                      <Translate id="uninstall.bug.alert.description">
                        如果您遇到了错误或bug,我们建议您直接在GitHub上提交issue,这样可以获得更及时的反馈和技术支持。
                      </Translate>
                    </Paragraph>
                    <Btn
                      variant="primary"
                      size="small"
                      icon={<Icon icon="lucide:github" />}
                      href={getGithubUrl('bug')}
                      target="_blank"
                    >
                      <Translate id="uninstall.bug.alert.button">
                        前往GitHub报告问题
                      </Translate>
                    </Btn>
                  </InfoAlert>
                )}

                {/* 功能需求引导提示 */}
                {selectedReason === "feature" && (
                  <InfoAlert
                    className="mb-6"
                    title={
                      <Translate id="uninstall.feature.alert.title">
                        缺少某个功能?
                      </Translate>
                    }
                  >
                    <Paragraph className="mb-2">
                      <Translate id="uninstall.feature.alert.description">
                        我们非常重视用户的功能需求!建议您在GitHub上详细描述您需要的功能,这样可以让我们更好地了解您的需求并优先考虑实现。
                      </Translate>
                    </Paragraph>
                    <Btn
                      variant="primary"
                      size="small"
                      icon={<Icon icon="lucide:github" />}
                      href={getGithubUrl('feature')}
                      target="_blank"
                    >
                      <Translate id="uninstall.feature.alert.button">
                        前往GitHub提出功能建议
                      </Translate>
                    </Btn>
                  </InfoAlert>
                )}

                {/* 详细反馈 */}
                <div className="mb-6">
                  <Heading level={3} className="mb-4">
                    <Translate id="uninstall.question.feedback">
                      如果方便的话，能否分享更多细节？
                    </Translate>
                  </Heading>

                  <Textarea
                    rows={4}
                    value={feedback}
                    onChange={setFeedback}
                    placeholder={translate({
                      id: "uninstall.feedback.placeholder",
                      message: "请分享您的具体问题、建议或其他想法...",
                    })}
                    maxLength={1000}
                  />
                </div>

                {/* 提交按钮 */}
                <Btn
                  variant="primary"
                  submit
                  size="xl"
                  loading={submitting}
                  block
                  className="shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Translate id="uninstall.button.submit">
                    提交反馈
                  </Translate>
                </Btn>
              </form>
            </Card>
          </div>

          <div>
            {/* 侧边栏信息 */}
            <div className="flex flex-col gap-6">
              {/* 重新安装提示 */}
              <Card
                title={
                  <span className="flex items-center gap-2">
                    <Icon icon="lucide:heart" className="text-red-500" />
                    <span>
                      <Translate id="uninstall.sidebar.reinstall.title">
                        随时欢迎回来
                      </Translate>
                    </span>
                  </span>
                }
                bodyStyle={{ padding: "1.5rem" }}
              >
                <Paragraph className="text-gray-600 dark:text-gray-300 mb-4">
                  <Translate id="uninstall.reinstall.message">
                    如果您改变主意，可以随时重新安装：
                  </Translate>
                </Paragraph>

                <div className="flex flex-col gap-2">
                  <Btn
                    icon={<Icon icon="logos:chrome" />}
                    href={STORES.chrome}
                    target="_blank"
                    block
                  >
                    <Translate id="uninstall.reinstall.chrome">
                      Chrome 商店
                    </Translate>
                  </Btn>
                  <Btn
                    icon={<Icon icon="logos:microsoft-edge" />}
                    href={STORES.edge}
                    target="_blank"
                    block
                  >
                    <Translate id="uninstall.reinstall.edge">
                      Edge 商店
                    </Translate>
                  </Btn>
                  <Btn
                    icon={<Icon icon="logos:firefox" />}
                    href={STORES.firefox}
                    target="_blank"
                    block
                  >
                    <Translate id="uninstall.reinstall.firefox">
                      Firefox 商店
                    </Translate>
                  </Btn>
                </div>
              </Card>

              {/* 帮助和支持 */}
              <Card
                title={
                  <span className="flex items-center gap-2">
                    <Icon icon="lucide:message-circle" className="text-blue-500" />
                    <span>
                      <Translate id="uninstall.sidebar.help.title">
                        需要帮助？
                      </Translate>
                    </span>
                  </span>
                }
                bodyStyle={{ padding: "1.5rem" }}
              >
                <Paragraph className="text-gray-600 dark:text-gray-300 mb-4">
                  <Translate id="uninstall.sidebar.help.description">
                    遇到问题？我们很乐意帮助您解决
                  </Translate>
                </Paragraph>

                <div className="flex flex-col gap-2">
                  <Btn
                    icon={<Icon icon="lucide:github" />}
                    href="https://github.com/scriptscat/scriptcat/issues"
                    target="_blank"
                    block
                  >
                    <Translate id="uninstall.sidebar.help.github">
                      GitHub 问题
                    </Translate>
                  </Btn>
                  <Btn
                    icon={<Icon icon="lucide:message-circle" />}
                    href={withBaseUrl("/docs")}
                    block
                  >
                    <Translate id="uninstall.sidebar.help.docs">
                      查看文档
                    </Translate>
                  </Btn>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
