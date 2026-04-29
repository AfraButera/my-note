---
id: CodeShiba-記帳系統
title: CodeShiba - 簡易記帳系統
---

> 涵蓋概念：CSV 讀寫、函式定義、while 迴圈、例外處理（try/except）、f-string 格式化

---

## 功能說明

- 新增帳目紀錄（日期、類別、項目、金額）
- 查看所有紀錄並計算總結餘
- 資料儲存於 `my_expenses.csv`

---

## 完整程式碼

```python
import csv
import os

FILENAME = 'my_expenses.csv'

def initialize_file():
    if not os.path.exists(FILENAME):
        with open(FILENAME, 'w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(['日期', '類別', '項目', '金額'])

def add_record():
    date = input("請輸入日期 (例如 2024-01-01): ")
    category = input("請輸入類別 (食/衣/住/行/收入): ")
    item = input("請輸入項目說明: ")
    try:
        amount = float(input("請輸入金額 (支出負數，收入正數): "))
        with open(FILENAME, 'a', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow([date, category, item, amount])
        print("--- 紀錄成功！ ---")
    except ValueError:
        print("錯誤：金額請輸入數字。")

def show_records():
    total = 0
    print(f"{'日期':<12} {'類別':<8} {'項目':<15} {'金額':<10}")
    print("-" * 50)
    with open(FILENAME, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            print(f"{row['日期']:<12} {row['類別']:<8} {row['項目']:<15} {row['金額']:<10}")
            total += float(row['金額'])
    print(f"目前總結餘: {total} 元")

def main():
    initialize_file()
    while True:
        print("\n=== Python 簡易記帳系統 ===")
        print("1. 新增紀錄")
        print("2. 查看紀錄與餘額")
        print("3. 離開程式")
        choice = input("請選擇功能 (1/2/3): ")
        if choice == '1':
            add_record()
        elif choice == '2':
            show_records()
        elif choice == '3':
            break

if __name__ == "__main__":
    main()
```

---

## 重點筆記

### CSV 操作

```python
import csv

# 寫入（'w' 覆寫 / 'a' 附加）
with open('file.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['欄位1', '欄位2'])

# 讀取（DictReader 可用欄位名稱取值）
with open('file.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row['欄位1'])
```

### 例外處理

```python
try:
    amount = float(input("金額："))
except ValueError:
    print("請輸入數字")
```

### f-string 對齊

```python
print(f"{'欄位':<12}")   # 左對齊，寬度 12
```

### `if __name__ == "__main__"`

只有直接執行此 py 檔時才跑 `main()`，被其他程式 `import` 時不會自動執行。
