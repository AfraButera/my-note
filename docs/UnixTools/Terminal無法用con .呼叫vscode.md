問題發生：<br />
Terminal輸入``con .``會跳出<br />
``-bash:code:command not found``
![vscode_con._notfound](../../static/img/docker/docker_vscode_con_erro.png "vscode_con._notfound")

1.確認vscode有安裝且是在應用程式的folder

2.打開vscode，快捷鍵``⌘`` ``⇧`` ``P``，然後輸入shell找到shell相關的命令<br />
``Shell Command:Install 'code' command in PATH`` <br />
``Shell Command:Uninstall 'code' command in PATH`` <br />
先Uninstall，再Install<br />
Uninstall <br />
![vscode uninstall](../../static/img/docker/docker_vscode_con_uninstall.png "vscode_codecommand_uninstall") <br />
Install <br />
![vscode install](../../static/img/docker/docker_vscode_con_install.png "vscode_codecommand_install")
