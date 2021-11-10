FROM golang:latest

WORKDIR '/backend'

COPY ./ /backend/

RUN go mod download

EXPOSE "3030"

CMD [ "go", "run", "." ]
