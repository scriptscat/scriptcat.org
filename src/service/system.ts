const API_URL = "https://scriptcat.org/api/v2";
// const API_URL = "http://localhost:8080/api/v2";

// 反馈原因类型
export type FeedbackReason = "bug" | "unused" | "feature" | "better" | "other";

// 反馈请求接口
export interface FeedbackRequest {
  reason: FeedbackReason; // 反馈原因：遇到了错误或bug | 不再需要脚本猫 | 缺少我需要的功能 | 找到了更好的替代品 | 其他原因
  content: string; // 反馈内容，最大1000字符
}

// 提交用户反馈
export async function submitFeedback(feedback: FeedbackRequest): Promise<void> {
  const response = await fetch(`${API_URL}/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedback),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to submit feedback: ${response.status} ${response.statusText}`
    );
  }

  // 解析json
  const data = await response.json();
  if (data.code !== 0) {
    throw new Error(data.msg);
  }
  return;
}
