FROM golang:latest

WORKDIR '/backend'

COPY ./ /backend/

RUN go get -u

EXPOSE "3030"

CMD [ "go", "run", "." ]
