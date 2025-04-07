/**
 * 图标解析工具
 * 用于从 CSV 文件中解析图标数据
 */
import axios from 'axios';

export interface IconItem {
  name: string;       // 图标组件名称 (i-xxxx)
  title: string;      // 图标中文名称
  titleEn: string;    // 图标英文名称
  category: string;   // 图标分类 (中文)
  categoryEn: string; // 图标分类 (英文)
  tags: string[];     // 图标标签
  isLtr: boolean;     // 是否支持LTR
}

/**
 * 解析 CSV 图标数据
 * @returns Promise<IconItem[]> 图标数据列表
 */
export async function parseIconsFromCSV(): Promise<IconItem[]> {
  try {
    // 获取 CSV 文件内容
    const response = await axios.get('/db.csv');
    const csvData = response.data as string;
    
    // 解析 CSV 数据
    const rows = csvData.split('\n');
    // 跳过表头行，直接处理数据行
    
    const icons: IconItem[] = [];
    
    // 从第二行开始解析数据 (跳过表头)
    for (let i = 1; i < rows.length; i++) {
      if (!rows[i].trim()) continue;
      
      const values = rows[i].split(',');
      if (values.length < 7) continue;
      
      const nameEn = values[1]?.trim();
      if (!nameEn) continue;
      
      // 创建图标项
      const iconItem: IconItem = {
        // 转换为IconPark组件名称格式 (i-xxxx)
        name: `i-${nameEn}`,
        title: values[0]?.trim() || '',
        titleEn: nameEn,
        category: values[2]?.trim() || '',
        categoryEn: values[3]?.trim() || '',
        isLtr: values[6]?.trim() === '是',
        tags: (values[7]?.trim() || '').split('，').filter(Boolean),
      };
      
      icons.push(iconItem);
    }
    
    return icons;
  } catch (error) {
    console.error('解析图标数据失败:', error);
    return [];
  }
}

/**
 * 获取所有分类信息
 * @param icons 图标列表
 * @returns 分类信息列表 { value, label }
 */
export function getCategoriesFromIcons(icons: IconItem[]): { value: string; label: string }[] {
  const categoryMap: { [key: string]: string } = {};
  
  icons.forEach(icon => {
    if (icon.category && icon.categoryEn) {
      categoryMap[icon.categoryEn] = icon.category;
    }
  });
  
  return Object.entries(categoryMap).map(([value, label]) => ({ value, label }));
}
