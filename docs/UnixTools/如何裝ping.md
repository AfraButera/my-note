問題發生：<br />
``bash:ping：command not found``
![ping command not found](../../static/img/docker/docker_ping_question.png "docker_ping_notfound")

1.輸入``sudo apt update``先更新apt
```
sudo apt update
```
![apt update](../../static/img/docker/docker_ping_aptupdate.png "docekr_apt_update")


2.輸入``sudo apt install iputils-ping``用apt安裝ping
```
sudo apt install iputils-ping
```
![apt install ping](../../static/img/docker/docker_ping_install.png "docker_ping_install")

3.裝完就可以使用ping了
![ping command use](../../static/img/docker/docker_ping_finish.png "ping command use")