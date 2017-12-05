# TravelTracker

## 安裝步驟：
`git clone https://github.com/WBCOHBO/TravelTracker_app.git`
<br>
`npm install -g yarn`
<br>
`yarn install`
<br>
`yarn start`
<br>
`yarn run android`

## git 指令：
開發在develop開發。
<br>
`git checkout develop`
<br>
`git pull`
### 新增新功能時：
`git checkout -b feature/name`
<br>
`git fetch origin`
<br>
`git merge origin/develop`
<br>
### 從新分支push上來：
`git add .`
<br>
`git commit -m "新增主旨"`
<br>
`git push origin 新分支名稱`
### 合併到develop或master：
先checkout到develop或master，
<br>
`git merge 要合併的分支`
<br>
### 在別的分支更新develop code：
<br>`git pull origin develop`<br>

### 功能對應位置：
登入畫面：src -> components -> Login
<br>
搜尋車友：src -> components -> searchFriend
<br>
主頁：src -> components -> Menu
<br>
主頁、設定Bar：src -> index(第23、134、135行)
<br>
註冊頁：src -> components -> Register
