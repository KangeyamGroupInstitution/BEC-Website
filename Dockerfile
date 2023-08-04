# Use the official Node.js image as the base image
FROM node:18

RUN mkdir -p /home/app

COPY . /home/app


# Start the Node.js application
CMD ["node", "app.js"]
