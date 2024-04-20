// 左侧导航栏入口
import frontSidebar from "./modules/frontSidebar"
import backendSidebar from "./modules/backendSidebar"

export const sidebarConfig = {
  ...frontSidebar,
  ...backendSidebar
}
