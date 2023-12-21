#create base image first (every project require something ex. linux project require linux-based)
#based is to prepare the package that need to be ready to run the project = runtime
#we need to define which runtime are we using in (ex. in our project we use Node -that requires Node runtime)
FROM node:18

#define the working directory
WORKDIR /usr/src/app

COPY ./package.json ./

#if we want json(node) package and still don't have the file "package.json" yet, we have to command: npm init 
#we can use package from npm install only if we have the package.json to read
RUN npm install

#then copy the files to the container
#from ./(file that we want to copy) to ./(container)
#now the container is /usr/src/app
COPY ./index.js ./

#expose the port
#outsider can access to the container via the defined expose port
EXPOSE 8000

#run process continuously
#'cmd' diffent from 'run' about run is running once but cmd run and holding as long as the process is not ended
CMD [ "node", "index.js" ]

#when we run node index.js, is we're running http server (run continuously until we kill the process)

#build image
#command: docker build -t <image name> -f <destination repository for docker file> <path>
#example: docker build -t node-server -f ./Dockerfile . (./Dockerfile is a coomon repository) (. is a current path)
# if it's in "Dockerfile" (not the other name) repository, it can be shorten by the command: docker build -t node-server (node-server is a name of the image)

#check if it's completed via the command: docker images
#run the docker via command: docker run <image name> // it will show "server running http://localhost:8000"
#it run at port 8000, but it run internally (cuz we haven't map the port yet)
#but it won't show in the browser because we haven't map the port yet

#show the port that have the docker running in with the command: docker ps
#clear the running process (in the port) with the following command: docker rm -f $(docker ps -a -q)

#map the port via the command: -p <external port:internal port> <image name>
#run in the background via command: -d
#it will not show "server runnin http://localhost: 8000" because we have entered the command -d
#it will only show the hashed Id for the running docker
#then recheck with the command: docker ps (it will show the running docker that haven't been killed yet)
#it is different from the old "hello world", that one run and killed, but this one is still running because it is http server

#see the logs from docker via the command: docker logs (in this case it will show "Server running at http://localhost:8000")
#see the final result on the browser on the following address: localhost://8000/hello-world

# docker name came out after we run the image, docker's name and image's (container's) name is not the same

#try to kill docker via the command: docker rm <docker name>
#if it show "Error response from daemon: You cannot remove a running container 190d013ac8e463b92867a0815bea73a05f81dd3956fe613605c39019200ce9ed. Stop the container before attempting removal or force remove"
#then at the -f (force) into the command: docker rm -f <docker name>

#try to change the mapped out port to port 8888 via the following command: docker run -d -p 8888:8000 node-server
#command: docker ps // and we will see the port is changed on PORTS collums "PORTS (0.0.0.0:8888->8000/tcp )"
#in order that we are running many services at the same time, we can map the port out into the various ports