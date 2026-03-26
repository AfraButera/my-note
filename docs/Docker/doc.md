# Docker 基本指令 


```
docker pull hello-world
```
![docker pull](../../static/img/docker/docker_pull.png "docker pull")

**Docker run 如果沒有東西就會自己pull，再run**
```
docker container run hello-world or docker run hello-world
```

![docke run](../../static/img/docker/docker_run.png "docker run")


**Docker help**
```
docker docker
``` 
![docker help](../../static/img/docker/docker_help.png "docker help")

**查看Docker版本**
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


開啟或停用Docker cotanier
```
docker start/stop cotainerID or containerName
```
![docker start stop](../../static/img/docker/docker_start_stop.png "docker start stop")



```
docker rm containerID or containerName
```


```
docker images
```
![docker images](../../static/img/docker/docker_images.png "docker images")