---
id: 2026-05-14_L4_Dictionary
title: L4｜Dictionary（2026-05-14）
sidebar_position: 4
---

> 學習日期：2026-05-14
> 單元：階段二 L4 — Dictionary
> 狀態：⬜ 進行中（習題一 ⬜、習題二 ⬜、習題三 ⬜）

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

### 習題一｜簡易電話簿（⬜ 進行中）

**題目：** 寫一個 while 選單電話簿，支援新增、查詢、列出所有、離開。

---

### 習題二｜字母計數（⬜ 進行中）

**題目：** 輸入一段文字，統計每個英文字母出現幾次（不區分大小寫，忽略非字母字元）。

---

### 習題三｜Dict Comprehension 成績標記（⬜ 進行中）

**題目：** `scores = {'Ziv': 90, 'Bobo': 75, 'Manto': 88, 'Moon': 62}`，用 dict comprehension 產生新 dict，70 分以上 `'pass'`，以下 `'fail'`。
