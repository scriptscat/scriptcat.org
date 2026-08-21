---
title: Tài liệu CatApi
---

## Tổng quan

Các API đặc thù của tiện ích mở rộng này đều được định nghĩa với tiền tố `CAT_`.

Bạn cũng có thể tìm các ví dụ liên quan trong [thư mục ví dụ](https://github.com/scriptscat/scriptcat/tree/main/example).

## Định nghĩa

### CAT_setProxy

> Đã lỗi thời từ phiên bản ổn định 0.9.1; có thể quay lại trong phiên bản beta.

Đặt proxy. Lưu ý rằng chức năng này sẽ xung đột với các tiện ích mở rộng như Proxy SwitchyOmega. Nhiều script có thể sử dụng proxy mà không xung đột.

Vui lòng đọc trước về [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) và [các hạn chế URL đầy đủ của Chromium trong PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction).

```typescript
declare function CAT_setProxy(rule: CAT_Types.ProxyRule[] | string): void;

declare namespace CAT_Types {
  interface ProxyRule {
    proxyServer: ProxyServer;
    matchUrl: string[];
  }
  type ProxyScheme = "http" | "https" | "quic" | "socks4" | "socks5";
  interface ProxyServer {
    scheme?: ProxyScheme;
    host: string;
    port?: number;
  }
}
```

### CAT_clearProxy

> Đã lỗi thời từ phiên bản ổn định 0.9.1; có thể quay lại trong phiên bản beta.

Xóa proxy.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> Đã lỗi thời từ phiên bản ổn định 0.9.1; có thể quay lại trong phiên bản beta.

Một lần nhấp thực sự. API này mang tính thử nghiệm và có thể thay đổi hoặc bị xóa.

Được triển khai bằng [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent). Đảm bảo rằng phần tử nằm trong vùng hiển thị và tọa độ tương đối so với vị trí cửa sổ.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

Bạn có thể gọi API này để mở trang [UserConfig](./config.md) của script.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Điều khiển hệ thống lưu trữ được cấu hình bởi manager. Thư mục `app/uuid` sẽ được tạo cho API này.

```ts
/**
 * Điều khiển hệ thống lưu trữ được cấu hình bởi manager.
 * @param action Loại thao tác: list, upload, download, delete, config
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    path?: string;
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo;
    onload: (data: Blob) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "delete",
  details: {
    path: string;
    onload?: () => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "upload",
  details: {
    path: string;
    baseDir?: string;
    data: Blob;
    onload?: () => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(action: "config"): void;
```

### CAT_scriptLoaded

Khi sử dụng `early-start`, bạn có thể sử dụng hàm này để xác định xem script đã tải hoàn toàn chưa.

```js
function CAT_ScriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script đã tải hoàn toàn");
});
```
