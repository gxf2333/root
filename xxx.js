// ## 配置 git
git config--global user.name "github的用户名"
git config--global user.email github登录邮箱

1. git init: 把文件夹托管给 git
2. git add.: 保存代码
3. git commit - m 'master': 提交代码
4. git remote add origin https://github.com/1937444194/root.git 拷贝自己的这行代码 创建仓库
5. git push - u origin master: 提交代码到 github


// 正常进公司以后步骤
// 1. 创建公钥 私钥
ssh - keygen - t rsa - C "你的github邮箱"
// 2. 打开公钥
cat ~/.ssh/id_rsa.pub\

// ##　常用命令
git status: 查看哪些文件修改了
git add 文件名 文件保存到本地('保存单个')
git add.所有文件都保存
git commit - m '说明': 提交代码
git push origin(master) 远程分支名: 往远程分支提交代码
git log: 查看日志