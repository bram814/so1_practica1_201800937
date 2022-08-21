# Manual Técnico
---------------------------------------




## Docker
______

##### How To Install Docker on Ubuntu 22.04 LTS
_____

```bash
sudo apt-get update
```

Install Docker


```bash
sudo apt install docker.io

```

Install Dependencies

```bash
sudo snap install docker
```

Version
```bash
sudo docker --version
```

____


##### Install MongoDB - Docker Hub

_______



Install Mongo
```bash
sudo docker pull mongo
```


Create image

```bash
# -d [hace a que el proceso se quede en segundo plano y no muestre nada]
# -p [sirve para declarar el puerto, mongo utiliza por defecto 27017]
sudo docker run -d -p 27017:27017 --name jash -v mongo-data:/data/db mongo
```

Execute mongo

```bash
sudo docker exec -it 3ea0 bash
```

Stop Mongo

```bash
sudo docker stop 3ea0
```


##### Commandos de Docker

Ejecutar una imagen

```bash
sudo docker run -d -p <<puerto a exponer>>:<<puerto del contenedor>> <<nombre imagen>>
```

Ejecutar una imagen visualizando mensajes en consola

```bash
sudo docker run -it -p <<puerto a exponer>>:<<puerto del contenedor>> <<nombre imagen>>
```

Ver las imagenes descargadas

```bash
sudo docker images
```

Ver todos los contenedores

```bash
sudo docker ps -a
```

Ver todos los contenedores activos

```bash
sudo docker ps
```

##### Crear imagen

```bash
sudo docker build -t <<nombre imagen>> .
```

Subir una imagen a DockerHub

```bash
sudo docker build -t <<nombre de usuario>>/<<nombre de la imagen>> .

sudo docker push <<nombre de usuario>>/<<nombre de la imagen>>
```

Bajar una imagen a DockerHub

```bash
sudo docker pull <<nombre de usuario>>/<<nombre de la imagen>>
```

Eliminar todas las imagenes, contenedores y volumenes.

```bash
sudo docker system prune -a
```

Eliminar un contenedir especifico.

```bash
sudo docker rm <<ID container>>
```

Eliminar una imagen especifica.

```bash
sudo docker rmi <<ID image>>
```

_______



## Go
____

##### How to Install Go
______

```bash
sudo apt update
sudo apt upgrade
```

Search for Go:

```bash
sudo apt search golang-go
sudo apt search gccgo-go
```
Install Golang version 1.18.1 linux/amd64 on Ubuntu Linux 22.04 LTS
```bash
sudo apt install golang-go 
sudo snap install goland --classic
```

Version
```bash
go version
# go version go1.18.1 linux/amd64
```

----------------------

##### Fiber

Create App
```bash
$ go mod init [nombre]
--------------------
-     Ejemplo      - 
- go mod init S1P1 -
--------------------
```

Install Dependencies
```bash
$ go get github.com/gofiber/fiber
$ go get -u github.com/gofiber/fiber/v2
$ go get -u github.com/gofiber/template
$ go get go.mongodb.org/mongo-driver/mongo
```

### Ejecutar Proyecto
```bash
$ go build main.go
$ go run main.go
```



___________

## REACT
_______


##### How to install Nodejs on Ubuntu
____


Install Nodejs and npm
```bash
sudo apt install nodejs npm
```

Version Nodejs and npm

```bash
sudo node -v && npm -v
# v18.7.0
# 8.17.0
```



Create React App
```bash
npx create-react-app my-app
cd my-app
npm start
```
