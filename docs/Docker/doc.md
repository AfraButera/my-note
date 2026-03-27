# Docker 基本指令 

**去倉庫(公私有倉庫)拉images，以下以hello-world(image)做範例**
*tag沒指定就會帶latest(預設)，tag就是版本號*
```
docker pull <imageName>:<tag>
```
![docker pull](../../static/img/docker/docker_pull.png "docker pull")


**Docker run 如果沒有東西就會自己pull，再run**
*Flow:從本地找有無image，沒有的話就去Docker Hub(倉庫)找，pull下來再run*
```
docker container run hello-world or docker run hello-world
```
![docke run](../../static/img/docker/docker_run.png "docker run")


**命名自己的Container**
```
docker run --name <containerName> <image>:<tag>
```
![docker name container](../../static/img/docker/docker_name_container.png "docker name container")


**Docker help:想知道更多指令有啥怎麼用，直接輸入docker**
```
docker
``` 
![docker help](../../static/img/docker/docker_help.png "docker help")


**查看現在的Docker版本**
```
docker -v or docker --version
```
![docker version](../../static/img/docker/docker_version.png "docker version")


**查看Docker狀態，ps=process status**
```
docker ps
```
````
docker ps --all
````
`````
docker ps -a
``````
![docker ps](../../static/img/docker/docker_ps.png "docker ps")


**開啟或停用或重啟Docker cotanier**
```
docker start/stop/restart cotainerID or containerName
```
![docker start stop](../../static/img/docker/docker_start_stop.png "docker start stop")


**刪除container**
```
docker rm containerID or containerName
```
![docker rm container](../../static/img/docker/docker_rm.png "docker delete container")


**查看目前系統有的images**
```
docker images
```
![docker images](../../static/img/docker/docker_images.png "docker images")