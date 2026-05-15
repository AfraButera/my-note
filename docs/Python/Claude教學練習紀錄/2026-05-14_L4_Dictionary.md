---
id: 2026-05-14_L4_Dictionary
title: L4｜Dictionary（2026-05-14）
sidebar_position: 4
---

> 學習日期：2026-05-14
> 單元：階段二 L4 — Dictionary
> 狀態：⬜ 進行中（習題一 ✅、習題二 ⬜、習題三 ⬜）

---

## 學習重點

### 建立與基本操作

```python
person = {'name': 'Ziv', 'age': 28, 'city': '台灣'}

# 取值
person['name']               # 'Ziv'（key 不存在會報 KeyError）
person.get('email', 'N/A')   # 'N/A'（key 不存在時回傳預設值，不報錯）

# 新增 / 修改
person['email'] = 'ziv@example.com'   # key 不存在 → 新增；存在 → 覆蓋

# 刪除
del person['city']            # 直接刪
person.pop('email')           # 刪除並回傳那個值
```

---

### 遍歷 dict

```python
person = {'name': 'Ziv', 'age': 28}

for key in person:                    # 只拿 key
    print(key)

for key, value in person.items():     # 同時拿 key 和 value（最常用）
    print(f'{key}：{value}')

person.keys()    # dict_keys(['name', 'age'])
person.values()  # dict_values(['Ziv', 28])
```

---

### Dict Comprehension

```python
squares = {x: x**2 for x in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

even_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}
# {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}
```

格式：`{key: value for 變數 in 範圍 if 條件}`，條件可省略。

---

### 巢狀 dict（Nested dict）

```python
students = {
    'Ziv':  {'score': 90, 'grade': 'A'},
    'Bobo': {'score': 75, 'grade': 'B'},
}

students['Ziv']['score']    # 90（先拿外層 key，再拿內層 key）
students['Bobo']['grade']   # 'B'
```

---

## 習題

### 習題一｜簡易電話簿（✅ 通過）

**題目：** 寫一個 while 選單電話簿，支援新增、查詢、列出所有、離開。

**最終作答：**

```python
options = ['離開', '新增聯絡人（輸入名字與電話）', '查詢聯絡人', '列出所有聯絡人']
contact = {}
while True:
    for index, option in enumerate(options, start=0):
        print(f"{index}:{option}")
    users = int(input('請輸入選項：'))
    if users == 0:
        print('再見')
        break
    elif users == 1:
        Name = input('請輸入名字：')
        Phone = input('請輸入電話：')
        contact[Name] = Phone
        print(f"已新增{Name}")
    elif users == 2:
        Name = input('請輸入查詢欲名字：')
        if Name in contact:
            print('聯絡人:', Name, '電話:', contact[Name])
        else:
            print(f"找不到此人")
    elif users == 3:
        for key, value in contact.items():
            print(f"聯絡人:{key} 電話:{value}")
```

:::note 觀念整理

**Dict 存取核心概念：**

- `contact[Name] = Phone` → 用「變數」當 key，每個人的名字都是獨立的 key
- `contact['Name'] = Phone` → 用「固定字串」當 key，每次都覆蓋同一格，只剩最後一筆
- `if Name in contact` → 檢查 key 是否存在，比直接存取安全（不存在不會報錯）
- `contact[Name]` → 用 key 取出對應的 value，等同 list 的 `arr[index]`

**為什麼不能用 `Phone` 變數查詢：**
`Phone` 只有在「選 1 新增」時才被建立。如果第一個動作就選 2 查詢，`Phone` 根本不存在會報錯；就算存在，它也只記得最後一次新增的電話，查詢不同的人就會拿到錯誤的電話。應該用 `contact[Name]` 直接從 dict 取對應的值。

**`contact.items()` 一定要加括號：**
`.items` 是方法，不加 `()` 只是「指向這個方法」，不是「執行它」。要取得 key-value 對必須加 `()`。

:::

:::caution 本次訂正

**`print(options)` vs `print(option)` — 差一個 `s`：**

```python
# 錯誤：印整個 list，跑 4 次就出現 4 次 [1,2,3,4]
for index, option in enumerate(options, start=1):
    print(options)

# 正確：每次印一個元素
for index, option in enumerate(options, start=1):
    print(option)
```

`options` 是整個 list，`option` 是迴圈每次取出的單一值。差一個 `s` 行為完全不同。

:::

---

### 習題二｜字母計數（⬜ 進行中）

**題目：** 輸入一段文字，統計每個英文字母出現幾次（不區分大小寫，忽略非字母字元）。

---

### 習題三｜Dict Comprehension 成績標記（⬜ 進行中）

**題目：** `scores = {'Ziv': 90, 'Bobo': 75, 'Manto': 88, 'Moon': 62}`，用 dict comprehension 產生新 dict，70 分以上 `'pass'`，以下 `'fail'`。
