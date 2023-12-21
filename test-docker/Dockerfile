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